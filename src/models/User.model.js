import { Schema, model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { hash } from 'bcrypt'
import config from '../config/index.js'
import UserConst from '../consts/user.const.js'
import FollowerModel from './Follower.model.js'
import FilesUtils from '../utils/files.utils.js'

const UserSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String },
    type: {
      type: String,
      enum: UserConst.userType,
      default: UserConst.defaultType,
    },
    bio: String,
    location: {
      name: String,
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
        default: [0, 0],
      },
    },
    avatar: { type: String },
    backgroundImage: { type: String },
    followerCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    bookmarkCount: { type: Number, default: 0 },
    favoriteCount: { type: Number, default: 0 },
    noteCount: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },
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
UserSchema.post(/^find|^findOne|^findById/, async function (docs, next) {
  let auth = config.auth

  // Check the response is object
  if (typeof docs === 'object' && !Array.isArray(docs)) {
    if (docs?.avatar) {
      docs.avatar = `${config.server_url}/${config.user_directory}/${docs.avatar}`
    }
    if (docs?.backgroundImage) {
      docs.backgroundImage = `${config.server_url}/${config.user_directory}/${docs.backgroundImage}`
    }

    if (auth?._id) {
      docs.followed = Boolean(
        await FollowerModel.checkFollowed(docs?._id, auth?._id)
      )
    }
  }

  // Check IF the response is object
  if (Array.isArray(docs)) {
    let transformedDocs = []

    for (let item of docs) {
      if (item?.avatar) {
        item.avatar = `${config.server_url}/${config.user_directory}/${item.avatar}`
      }
      if (item?.backgroundImage) {
        item.backgroundImage = `${config.server_url}/${config.user_directory}/${item.backgroundImage}`
      }
      if (auth?._id) {
        item.followed = Boolean(
          await FollowerModel.checkFollowed(item?._id, auth?._id)
        )
      }
      transformedDocs.push(item)
    }
    docs = transformedDocs
  }
  next()
})

// Post-middleware function
UserSchema.post(
  /^deleteOne|^deleteOneById|^findOneAndDelete/,
  async function (docs, next) {
    if (typeof docs === 'object' && !Array.isArray(docs)) {
      // Remove Background Image And Avatar
      if (docs?.avatar)
        FilesUtils.removeOne(config.user_directory, docs?.avatar)

      if (docs?.backgroundImage)
        FilesUtils.removeOne(config.user_directory, docs?.backgroundImage)
    }

    // Check IF the response is object
    // if (Array.isArray(docs)) {
    //   let transformedDocs = []

    //   for (let item of docs) {
    //     transformedDocs.push(item)
    //   }
    //   docs = transformedDocs
    // }
    next()
  }
)

// Static Functions
UserSchema.statics.incrementCount = function (id, fieldName) {
  return this.findOneAndUpdate({ _id: id }, { $inc: { [fieldName]: 1 } })
}

UserSchema.statics.decrementCount = function (id, fieldName) {
  return this.findOneAndUpdate({ _id: id }, { $inc: { [fieldName]: -1 } })
}

// Make User Model
const UserModel = model('User', UserSchema)

// Export User Model
export default UserModel
