// Required Packeges
import { Schema, model, Number, Types } from 'mongoose'

const FeedScheduleSchema = Schema(
  {
    feed: { type: Types.ObjectId, ref: 'Feed', required: true },
    postTime: { type: Date },
    postStatus: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
)

// Make Model
const FeedScheduleModel = model('FeedSchedule', FeedScheduleSchema)

// Export Model
export default FeedScheduleModel
