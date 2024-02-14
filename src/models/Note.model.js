// Required Packeges
import { Schema, model, Types } from 'mongoose'
import BookmarkModel from './Bookmark.model.js'
import UserModel from './User.model.js'
import config from '../config/index.js'

const NoteSchema = Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    note: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
)

// Pre-middleware function
NoteSchema.pre(/^create|^save/, async function (next) {
  let newBookmark = new BookmarkModel({ user: this?.user, place: this?.place })
  await newBookmark.save()

  // Increment Notes count
  await UserModel.incrementCount(this?.user, 'noteCount')
  next()
})

// Post-middleware function
NoteSchema.post(/^find|^findOne|^findById/, async function (docs, next) {
  let auth = config.auth

  // Check the response is object
  // if (typeof docs === 'object' && !Array.isArray(docs)) {
  // }

  // Check IF the response is Array
  if (Array.isArray(docs)) {
    let transformedDocs = []

    for (let item of docs) {
      if (item?.user?._id?.toString() === auth?._id) {
        transformedDocs.unshift(item)
      } else {
        transformedDocs.push(item)
      }
    }
    docs = transformedDocs
  }
  next()
})

// Post-middleware function
NoteSchema.post(
  /^deleteOne|^deleteOneById|^findOneAndDelete|^findByIdAndDelete/,
  async function (docs, next) {
    // Check If Docs Is Object
    if (typeof docs === 'object' && !Array.isArray(docs)) {
      // Decrement Follower & Following
      await UserModel.decrementCount(docs?.user, 'noteCount')
    }
    next()
  }
)

// Static Functions
NoteSchema.statics.findAuthUserNote = function (place, user) {
  return this.findOne({ place, user })
}

NoteSchema.statics.countNote = function (place) {
  return this.countDocuments({ place })
}

// Make Model
const NoteModel = model('Note', NoteSchema)

// Export Model
export default NoteModel
