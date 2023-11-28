/* eslint-disable no-unused-vars */
const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')
const tweetRoutes = require('./routes/tweet-routes')
const HttpError = require('./models/http-error')
const morgan = require('morgan')

const app = express()

cors
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)

const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(bodyParser.json())

app.use(
  '/uploads/images',
  express.static(path.join(__dirname, 'uploads/images'))
)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs/access.log'),
  { flags: 'a' }
)

// Use Morgan middleware to log HTTP requests to the file
app.use(morgan('combined', { stream: accessLogStream }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Credentials', true)

  next()
})

app.use('/api/tweet', tweetRoutes)
app.use('/api/places', placesRoutes)
app.use('/api/users', usersRoutes)

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404)
  throw error
})

app.use((error, req, res, next) => {
  console.log(error)
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err)
    })
  }
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'An unknown error occurred!' })
})

const mongo_DB_URI = 'mongodb://0.0.0.0:27017/twit001'
// const mongo_DB_URI =
//   "mongodb+srv://blaze32:NmPomviOCjMy8oOt@cluster0.s0kzobs.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongo_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

//messages
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

server.listen(8001, () => {
  console.log('listening on *:8001')
})

//video player

app.get('/video', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/video.html'))
})

app.get('/video/:filename', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/videos/' + req.params.filename))
})

app.listen(8000, () => {
  console.log('listening on *:8000')
})

// app.use(express.json({ extended: false }));

//viewer count
let viewerCount = 0

io.on('connection', (socket) => {
  console.log('a user connected')
  viewerCount++
  io.emit('viewer count', viewerCount)

  socket.on('disconnect', () => {
    console.log('user disconnected')
    viewerCount--
    io.emit('viewer count', viewerCount)
  })
})
