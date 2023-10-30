// Required Packeges
import { Schema, model } from 'mongoose'

const SuperVisaCouple = Schema({
  coveragePolicy: String,
  age1: Number,
  age2: Number,
  coverage1: Number,
  coverage2: Number,
  days1: Number,
  days2: Number,
  preExistingMedicalConditions1: String,
  preExistingMedicalConditions2: String,
  companyName: String,
  cost: Number,
  deductible: Number,
  logo: String,
})

// Make User Modelresult
const SuperVisaCoupleModel = model('SuperVisaCouple', SuperVisaCouple)

// Export User Model
export default SuperVisaCoupleModel
