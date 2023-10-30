import SuperVisaSingleModel from './../models/SuperVisaSingle.model.js'
import SuperVisaCoupleModel from './../models/SuperVisaCouple.model.js'
import StudentCoupleModel from './../models/StudentCouple.model.js'
import StudentSingleModel from './../models/StudentSingle.model.js'
import StudentFamilyModel from './../models/StudentFamily.model.js'
import SingleTripSingleModel from '../models/SingleTripSingle.model.js'
import SingleTripCoupleModel from '../models/SingleTripCouple.model.js'
import SingleTripFamilyModel from '../models/SingleTripFamily.model.js'
import MultiTripSingleModel from '../models/MultiTripSingle.model.js'

// Initialize Module
const QuotesService = {}

QuotesService.superVisaSingleCoverage = async (reqQuery) => {
  let query = {}

  if (reqQuery?.coverage) {
    query = { ...query, ['coverage']: Number(reqQuery?.coverage) }
  }

  if (reqQuery?.age) {
    query = { ...query, ['age']: Number(reqQuery?.age) }
  }

  if (reqQuery?.preExistingMedicalCondition) {
    query = {
      ...query,
      ['preExistingMedicalCondition']: reqQuery?.preExistingMedicalCondition,
    }
  }

  try {
    const data = await SuperVisaSingleModel.find(query)
    return data
  } catch (error) {
    throw error
  }
}

export default QuotesService
