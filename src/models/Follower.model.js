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

// Post-middleware function
// FollowerSchema.post(/^find|^findOne|^findById/, function (docs, next) {
//   // Check IF the response is An Array
//   if (Array.isArray(docs)) {
//     let transformedDocs = docs.map((item) => {
//       delete item.user.password
//       delete item.creator.password
//       return item
//     })
//     docs = transformedDocs
//   }
//   next()
// })

// Make Model
const FollowerModel = model('Follower', FollowerSchema)

// Export Model
export default FollowerModel
