// Required Packeges
import { Schema, model } from 'mongoose'
import config from '../config/index.js'

const FeedbackSchema = Schema(
  {
    email: { type: String },
    requestType: { type: String },
    comment: { type: String },
    browserDetails: { type: Object },
    deviceDetails: { type: Object },
    closed: { type: Boolean, default: false },
    files: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
)

// Post-MiddlewareFunctions
FeedbackSchema.post(/^find|^findOne|^findById|^save/, function (docs, next) {
  // Check the Response is object
  if (typeof docs === 'object' && !Array.isArray(docs) && docs?.files) {
    docs.files = docs.files.map(
      (f) => `${config.server_url}/${config.feedback_directory}/${f}`
    )
  }
  //Check the response is Array
  if (Array.isArray(docs)) {
    let transformedDocs = docs.map((item) => {
      if (item?.files) {
        item.files = item.files.map(
          (f) => `${config.server_url}/${config.feedback_directory}/${f}`
        )
      }
      return item
    })
    docs = transformedDocs
  }
  next()
})

// Make User Modelresult
const FeedbackModel = model('Feedback', FeedbackSchema)

// Export User Model
export default FeedbackModel
