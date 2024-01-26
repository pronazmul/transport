// Required Packeges
import { Schema, model, Types } from 'mongoose'

const ShareSchema = Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Make Model
const ShareModel = model('Share', ShareSchema)

// Export Model
export default ShareModel
