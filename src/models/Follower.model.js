// Required Packeges
import { Schema, model, Types } from 'mongoose'
import UserModel from './User.model.js'

const FollowerSchema = Schema(
  {
    creator: { type: Types.ObjectId, ref: 'User', required: true },
    user: { type: Types.ObjectId, ref: 'User', required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Pre-middleware function
FollowerSchema.pre(/^create|^save/, async function (next) {
  // Increment Follower & Following
  await UserModel.incrementCount(this?.creator, 'followerCount')
  await UserModel.incrementCount(this?.user, 'followingCount')
  next()
})

// Post-middleware function
FollowerSchema.post(
  /^deleteOne|^deleteOneById|^findOneAndDelete/,
  async function (docs, next) {
    // Check If Docs Is Object
    if (typeof docs === 'object' && !Array.isArray(docs)) {
      // Decrement Follower & Following
      await UserModel.decrementCount(docs?.creator, 'followerCount')
      await UserModel.decrementCount(docs?.user, 'followingCount')
    }
    next()
  }
)

// Static Functions
FollowerSchema.statics.checkFollowed = function (creator, user) {
  return this.findOne({ creator, user })
}

// Make Model
const FollowerModel = model('Follower', FollowerSchema)

// Export Model
export default FollowerModel
