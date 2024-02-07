// Required Packeges
import { Schema, model, Types } from 'mongoose'
import UserModel from './User.model.js'
import config from '../config/index.js'

const BookmarkSchema = Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Pre-middleware function
BookmarkSchema.pre(/^create|^save/, async function (next) {
  // Increment Bookmark Count
  await UserModel.incrementCount(this?.user, 'bookmarkCount')
  next()
})

// Post-middleware function
BookmarkSchema.post(/^find|^findOne|^findById/, async function (docs, next) {
  let auth = config.auth

  // // Check the response is object
  // if (typeof docs === 'object' && !Array.isArray(docs)) {
  // }

  // // Check IF the response is object
  // if (Array.isArray(docs)) {
  //   let transformedDocs = []

  //   for (let item of docs) {
  //     // If Current User Auth Found Add Bookmarked & Favourite Status
  //     if (auth?._id) {
  //     }
  //     transformedDocs.push(item)
  //   }
  //   docs = transformedDocs
  // }
  next()
})

// Post-middleware function
BookmarkSchema.post(
  /^deleteOne|^deleteOneById|^findOneAndDelete|^findByIdAndDelete/,
  async function (docs, next) {
    // Check If Docs Is Object
    if (typeof docs === 'object' && !Array.isArray(docs)) {
      // Decrement Follower & Following
      await UserModel.decrementCount(docs?.user, 'bookmarkCount')
    }
    next()
  }
)

// Static Functions
BookmarkSchema.statics.checkBookmarked = function (place, user) {
  return this.findOne({ place, user })
}
BookmarkSchema.statics.countBookmark = function (place) {
  return this.countDocuments({ place })
}

// Make Model

const BookmarkModel = model('Bookmark', BookmarkSchema)

// Export Model
export default BookmarkModel
