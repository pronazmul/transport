// Required Packeges
import { Schema, model, Types } from 'mongoose'
import config from '../config/index.js'
import GlobalConst from '../consts/global.const.js'

const FollowerSchema = Schema(
  {
    creator: { type: Types.ObjectId, ref: 'User', required: true },
    user: { type: Types.ObjectId, ref: 'User', required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Make Model
const FollowerModel = model('Follower', FollowerSchema)

// Export Model
export default FollowerModel
