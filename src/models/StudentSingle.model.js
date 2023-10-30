// Required Packeges
import { Schema, model } from 'mongoose'

const StudentSingle = Schema({
  coveragePolicy: String,
  age1: Number,
  days1: Number,
  companyName: String,
  cost: Number,
  logo: String,
})

// Make User Modelresult
const StudentSingleModel = model('StudentSingle', StudentSingle)

// Export User Model
export default StudentSingleModel
