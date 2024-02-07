// Required Packeges
import { Schema, model, Types } from 'mongoose'
import UserModel from './User.model.js'

const FavouriteSchema = Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Static Functions
FavouriteSchema.statics.checkFavourite = function (place, user) {
  return this.findOne({ place, user })
}
FavouriteSchema.statics.countFavourite = function (place) {
  return this.countDocuments({ place })
}

// Pre-middleware function
FavouriteSchema.pre(/^create|^save/, async function (next) {
  // Increment Favourite Count
  await UserModel.incrementCount(this?.user, 'favoriteCount')
  next()
})

// Post-middleware function
FavouriteSchema.post(
  /^deleteOne|^deleteOneById|^findOneAndDelete|^findByIdAndDelete/,
  async function (docs, next) {
    // Check If Docs Is Object
    if (typeof docs === 'object' && !Array.isArray(docs)) {
      // Decrement Follower & Following
      await UserModel.decrementCount(docs?.user, 'favoriteCount')
    }
    next()
  }
)

// Make Model
const FavouriteModel = model('Favourite', FavouriteSchema)

// Export Model
export default FavouriteModel
