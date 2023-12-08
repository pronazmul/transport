// Required Packeges
import { Schema, model, Types } from 'mongoose'

const BookmarkSchema = Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Make Model
const BookmarkModel = model('Bookmark', BookmarkSchema)

// Export Model
export default BookmarkModel
