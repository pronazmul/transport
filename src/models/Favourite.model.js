// Required Packeges
import { Schema, model, Types } from 'mongoose'

const FavouriteSchema = Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Make Model
const FavouriteModel = model('Favourite', FavouriteSchema)

// Export Model
export default FavouriteModel
