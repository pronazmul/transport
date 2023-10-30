// Required Packeges
import { Schema, model } from 'mongoose'

const MultiTripSingle = Schema({
  tripType: String,
  policyType: String,
  age1: Number,
  tripDuration: Number,
  companyName: String,
  cost: Number,
  logo: String,
})

// Make User Modelresult
const MultiTripSingleModel = model('MultiTripSingle', MultiTripSingle)

// Export User Model
export default MultiTripSingleModel
