// Required Packeges
import { Schema, model } from 'mongoose'

const AccountSchema = Schema(
  {
    name: { type: String, required: true, unique: true },
    type: { type: String, enum: ['personal', 'company'] },
  },
  { timestamps: true, versionKey: false }
)

// Make User Modelresult
const AccoountModel = model('Account', AccountSchema)

// Export User Model
export default AccoountModel
