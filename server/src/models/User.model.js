// Required Packeges
import { Schema, model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { hash } from 'bcrypt'

const UserSchema = Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    avatar: { type: String },
    password: { type: String },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

// Integrate MOngoose Unique Validoator Plugin
UserSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Pre-Middleware Function
UserSchema.pre('save', async function (next) {
  this.password = await hash(this.password, 10)
})

// Make User Modelresult
const UserModel = model('User', UserSchema)

// Export User Model
export default UserModel
