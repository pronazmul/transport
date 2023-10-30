// Required Packeges
import { Schema, model } from 'mongoose'

const SingleTripCouple = Schema({
  travelingto: String,
  tripType: String,
  policyType: String,
  age1: Number,
  age2: Number,
  days: Number,
  companyName: String,
  cost: Number,
  logo: String,
})

// Make User Modelresult
const SingleTripCoupleModel = model('SingleTripCouple', SingleTripCouple)

// Export User Model
export default SingleTripCoupleModel
