// Required Packeges
import { Schema, model } from 'mongoose'

const SuperVisaSingle = Schema({
  coveragePolicy: String,
  age: Number,
  coverage: Number,
  days: Number,
  preExistingMedicalConditions: String,
  companyName: String,
  cost: Number,
  deductible: Number,
  logo: String,
})

// Make User Modelresult
const SuperVisaSingleModel = model('SuperVisaSingle', SuperVisaSingle)

// Export User Model
export default SuperVisaSingleModel
