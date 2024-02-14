// Required Packeges
import { Schema, model, Types } from 'mongoose'
import UserModel from './User.model.js'
import NotificationConst from '../consts/Notification.const.js'

const NotificationSchema = Schema(
  {
    creator: { type: Types.ObjectId, ref: 'User', required: true },
    user: { type: Types.ObjectId, ref: 'User', required: true },
    follow: { type: Types.ObjectId, ref: 'Follower' },
    bookmark: { type: Types.ObjectId, ref: 'Bookmark' },
    favorite: { type: Types.ObjectId, ref: 'Favourite' },
    note: { type: Types.ObjectId, ref: 'Note' },
    feed: { type: Types.ObjectId, ref: 'Feed' },
    content: { type: String, required: true },
    type: {
      type: String,
      enum: NotificationConst.type,
      required: true,
    },
    readStatus: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
)

// Pre-middleware function
NotificationSchema.pre(/^create|^save/, async function (next) {
  // Increment Follower & Following
  await UserModel.incrementCount(this?.user, 'notificationCount')
  next()
})

// Post-middleware function
// NotificationSchema.post(
//   /^deleteOne|^deleteOneById|^findOneAndDelete/,
//   async function (docs, next) {
//     // Check If Docs Is Object
//     if (typeof docs === 'object' && !Array.isArray(docs)) {
//       // Decrement Follower & Following
//       await UserModel.decrementCount(docs?.creator, 'followerCount')
//       await UserModel.decrementCount(docs?.user, 'followingCount')
//     }
//     next()
//   }
// )

// Make Model
const NotificationModel = model('Notification', NotificationSchema)

// Export Model
export default NotificationModel
