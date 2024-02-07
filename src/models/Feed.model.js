// Required Packeges
import { Schema, model, Types } from 'mongoose'

const FeedSchema = Schema(
  {
    creator: { type: Types.ObjectId, ref: 'User', required: true },
    user: { type: Types.ObjectId, ref: 'User', required: true },
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
    title: { type: String },
    description: { type: String },
    place: { type: String },
    link: { type: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Pre-middleware function
FeedSchema.pre(/^create|^save/, async function (next) {
  // Increment feed Count Functionality
  next()
})

// Make Model
const FeedModel = model('Feed', FeedSchema)

// Export Model
export default FeedModel
