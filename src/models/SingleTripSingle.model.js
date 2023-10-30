// Required Packeges
import { Schema, model } from 'mongoose'

const SingleTripSingle = Schema({
  travelingto: String,
  tripType: String,
  policyType: String,
  age1: Number,
  days: Number,
  companyName: String,
  cost: Number,
  logo: String,
})

// Make User Modelresult
const SingleTripSingleModel = model('SingleTripSingle', SingleTripSingle)

// Export User Model
export default SingleTripSingleModel
