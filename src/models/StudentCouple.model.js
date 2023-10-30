// Required Packeges
import { Schema, model } from 'mongoose'

const StudentCouple = Schema({
  coveragePolicy: String,
  age1: Number,
  age2: Number,
  days1: Number,
  companyName: String,
  cost: Number,
  logo: String,
})

// Make User Modelresult
const StudentCoupleModel = model('StudentCouple', StudentCouple)

// Export User Model
export default StudentCoupleModel
