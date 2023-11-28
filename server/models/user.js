/* eslint-disable no-undef */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: false },
    username: { type: String, required: false },
    password: { type: String, required: true, minlength: 6 },
    image: { type: String, required: false },
    interests: [{ type: String }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    places: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Place' }],
    // location: {
    //   country: {
    //     type: String,
    //     required: true,
    //   },
    //   city: {
    //     type: String,
    //   },
    //   state: {
    //     type: String,
    //   },
    //   coordinates: {
    //     type: {
    //       type: String,
    //       enum: ["Point"], // For geospatial data (longitude and latitude)
    //       default: "Point",
    //     },
    //     coordinates: [Number], // [longitude, latitude]
    //   },
    // },
    languagePreferences: [String],
    bookmarks: [{ type: mongoose.Types.ObjectId, required: false }],
    verificationDetails: {
      website: { type: String, required: false },
      document: { type: String, required: false },
      officialEmail: { type: String, required: false },
      newsArticles: [{ type: String, required: false }],
      googleTrendsProfile: { type: String, required: false },
      wikipediaLink: { type: String, required: false },
      instagramLink: { type: String, required: false },
    },
    verified: [{ type: Boolean, required: true }],
    lastLogin: { type: Date, required: true },
    customerId: { type: String, required: false },
    planId: { type: mongoose.Types.ObjectId, required: false, ref: 'Plan' },
    subscriptionId: {
      type: mongoose.Types.ObjectId,
      required: false,
      ref: 'Subscription',
    },
    messages: [
      {
        message_id: { type: mongoose.Types.ObjectId, required: true },
        read: { type: Boolean, required: true },
      },
    ],
    paymentMethods: [{ type: mongoose.Types.ObjectId, required: false }],
    mutedUsers: [
      { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    ],
    blockedUsers: [
      { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    ],
    reportedUsers: [
      { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    ],
    accessRight: { type: Number, required: true },
  },
  { strict: false }
)

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
