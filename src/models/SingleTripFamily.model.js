// Required Packeges
import { Schema, model } from 'mongoose'

const SingleTripFamily = Schema({
  travelingto: String,
  tripType: String,
  policyType: String,
  age1: Number,
  age2: Number,
  days: Number,
  noofDependents: Number,
  companyName: String,
  cost: Number,
  logo: String,
})

// Make User Modelresult
const SingleTripFamilyModel = model('SingleTripFamily', SingleTripFamily)

// Export User Model
export default SingleTripFamilyModel
