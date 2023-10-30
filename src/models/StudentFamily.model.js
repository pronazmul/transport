// Required Packeges
import { Schema, model } from 'mongoose'

const StudentFamily = Schema({
  coveragePolicy: String,
  age1: Number,
  age2: Number,
  days1: Number,
  noOfDependents: Number,
  companyName: String,
  cost: Number,
  logo: String,
})

// Make User Modelresult
const StudentFamilyModel = model('StudentFamily', StudentFamily)

// Export User Model
export default StudentFamilyModel
