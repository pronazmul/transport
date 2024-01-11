const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
const { WebClient } = require('@slack/web-api')

const PORT = process.env.PORT || 1500
// const MONGO_URI = process.env.MONGO_URI;
// const SLACK_TOKEN = process.env.SLACK_TOKEN;
const MONGO_URI = 'mongodb://0.0.0.0:27017/lucid-mark-v1'
// const MONGO_URI =
//   'mongodb+srv://admin:diqO2d6MboAIjypG@cluster0.k2nsvj2.mongodb.net/?retryWrites=true&w=majority'
const SLACK_TOKEN = 'xoxb-4240758040242-5118685035478-so96Kbk0ZLIgR3v2YYHzWgjL'

const app = express()

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const slackClient = new WebClient(SLACK_TOKEN)

app.get('/demo', (req, res) => {
  // Specify the path to the HTML file
  const htmlFilePath = path.join(__dirname, 'feedbackDemo.html')

  // Send the file as a response
  res.sendFile(htmlFilePath)
})

app.use('/images', express.static(path.join(__dirname, 'images')))

// Serve the bundled JavaScript file
app.get('/bundle.js', (req, res) => {
  const filePath = path.resolve(__dirname, '../client/dist/bundle.js')
  res.sendFile(filePath)
})

// Define a Feedback Schema with additional fields
const feedbackSchema = new mongoose.Schema({
  email: String,
  requestType: String,
  comment: String,
  browserDetails: Object,
  deviceDetails: Object,
  closed: Boolean,
  files: [String], // Store files as Base64
})
const Feedback = mongoose.model('Feedback', feedbackSchema)

// Configure Multer
const upload = multer({ dest: 'uploads/' })

async function uploadFileToSlack(filePath) {
  const response = await slackClient.files.upload({
    channels: 'C06AQHL4MQD',
    file: fs.createReadStream(filePath),
  })

  return response.file.id // Return the ID of the uploaded file
}

async function postMessageWithFiles(comment, fileIds) {
  const attachments = fileIds.map((id) => ({
    blocks: [
      {
        type: 'file',
        source: 'remote',
        file_id: id,
      },
    ],
  }))

  await slackClient.chat.postMessage({
    channel: 'C06AQHL4MQD',
    text: comment,
    attachments: attachments,
  })
}

async function sendFeedbackToSlack(comment, filePaths) {
  const fileIds = await Promise.all(
    filePaths.map((filePath) => uploadFileToSlack(filePath))
  )
  await postMessageWithFiles(comment, fileIds)
}

app.post('/feedback', upload.any(), async (req, res) => {
  try {
    const filesBase64 = await Promise.all(
      req.files.map(async (file) => {
        const fileBuffer = fs.readFileSync(file.path)
        return fileBuffer.toString('base64')
      })
    )

    // Store the feedback in Mongo
    const newFeedback = new Feedback({
      email: req.body.email,
      requestType: req.body.requestType,
      comment: req.body.comment,
      browserDetails: JSON.parse(req.body.browserDetails),
      deviceDetails: JSON.parse(req.body.deviceDetails),
      files: filesBase64,
    })

    await newFeedback.save()

    // Send to Slack
    const filePaths = req.files.map((file) => file.path) // Paths of the uploaded files
    const comment = req.body.comment // Assuming the comment is part of the request body
    await sendFeedbackToSlack(comment, filePaths)

    res.send('Feedback saved successfully')
  } catch (error) {
    res.status(500).send('Error processing feedback')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// Post the message with attachment
const result = await web.chat.postMessage({
  channel,
  text: title,
  attachments: [
    {
      fallback: 'File Attachment',
      title: title,
      text: body,
      fields: [
        {
          title: 'File',
          value: uploadedFile.Location,
        },
      ],
    },
  ],
})

// Post a message to Slack with a link to the file
const result = await web.chat.postMessage({
  channel,
  text: `${title}\n${body}\n${uploadedFile.Location}`,
})



const result = await web.chat.postMessage({
  channel,
  text: `${title}\n${body}`,
  attachments: [
    {
      fallback: 'Image Attachment',
      image_url: uploadedFile.Location,
      title,
      text: body,
    },
  ],
});


Slack's inline media preview support primarily covers common video formats like MP4, AVI, MKV, MOV, and WMV. Unfortunately, the WebM format is not listed among the officially supported video formats for inline previews on Slack.