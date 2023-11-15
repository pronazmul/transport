// Required Packeges
import { Schema, model, Types } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { hash } from 'bcrypt'
import config from '../config/index.js'

const UserSchema = Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String },
    city: String,
    country: String,
    avatar: { type: String },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

// Integrate MOngoose Unique Validoator Plugin
UserSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Pre-Middleware Function
UserSchema.pre('save', async function (next) {
  this.password = await hash(this.password, 10)
})

// Post-middleware function
UserSchema.post(/^find|^findOne|^findById/, function (docs, next) {
  // Check the response is object
  if (typeof docs === 'object' && !Array.isArray(docs) && docs?.avatar) {
    docs.avatar = `${config.server_url}/${config.user_directory}/${docs.avatar}`
  }

  // Check IF the response is object
  if (Array.isArray(docs)) {
    let transformedDocs = docs.map((item) => {
      if (item?.avatar) {
        item.avatar = `${config.server_url}/${config.user_directory}/${item.avatar}`
      }
      delete item.password
      return item
    })
    docs = transformedDocs
  }
  next()
})

// Static Functions
UserSchema.statics.incrementFollower = function (id) {
  return this.findOneAndUpdate({ _id: id }, { $inc: { followers: 1 } })
}

UserSchema.statics.decrementFollower = function (id) {
  return this.findOneAndUpdate({ _id: id }, { $inc: { followers: -1 } })
}

UserSchema.statics.incrementFollowing = function (id) {
  return this.findOneAndUpdate({ _id: id }, { $inc: { following: 1 } })
}

UserSchema.statics.decrementFollowing = function (id) {
  return this.findOneAndUpdate({ _id: id }, { $inc: { following: -1 } })
}

// Make User Model
const UserModel = model('User', UserSchema)

// Export User Model
export default UserModel
