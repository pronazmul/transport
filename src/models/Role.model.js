// Required Packeges
import { Schema, model, Types } from 'mongoose'

const RoleSchema = Schema(
  {
    permission: { type: String, enum: ['admin', 'member', 'guest'] },
    user: { type: Types.ObjectId, ref: 'User' },
    account: { type: Types.ObjectId, ref: 'Account' },
  },
  { timestamps: true, versionKey: false }
)

// Make User Modelresult
const RoleModel = model('Role', RoleSchema)

// Export User Model
export default RoleModel
