// Required Packeges
import { Schema, model, Types } from 'mongoose'

const NoteSchema = Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    note: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
)

// Make Model
const NoteModel = model('Note', NoteSchema)

// Export Model
export default NoteModel
