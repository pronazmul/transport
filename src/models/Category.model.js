// Required Packeges
import { Schema, model } from 'mongoose'

const CategorySchema = Schema(
  {
    name: { type: String, required: true },
    code: { type: Number, unique: true, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
)

// Make Model
const CategoryModel = model('Category', CategorySchema)

// Export Model
export default CategoryModel
