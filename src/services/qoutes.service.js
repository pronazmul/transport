import SuperVisaSingleModel from './../models/SuperVisaSingle.model.js'
import SuperVisaCoupleModel from './../models/SuperVisaCouple.model.js'
import StudentSingleModel from './../models/StudentSingle.model.js'
import StudentCoupleModel from './../models/StudentCouple.model.js'
import StudentFamilyModel from './../models/StudentFamily.model.js'
import SingleTripSingleModel from '../models/SingleTripSingle.model.js'
import SingleTripCoupleModel from '../models/SingleTripCouple.model.js'
import SingleTripFamilyModel from '../models/SingleTripFamily.model.js'
import MultiTripSingleModel from '../models/MultiTripSingle.model.js'

// Initialize Module
const QuotesService = {}

QuotesService.superVisaSingleCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age) {
      query = { ...query, ['age']: Number(reqQuery?.age) }
    }

    if (reqQuery?.coverage) {
      query = { ...query, ['coverage']: Number(reqQuery?.coverage) }
    }

    if (reqQuery?.preExistingMedicalConditions) {
      query = {
        ...query,
        ['preExistingMedicalConditions']:
          reqQuery?.preExistingMedicalConditions,
      }
    }

    const data = await SuperVisaSingleModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

QuotesService.superVisaCoupleCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age1) {
      query = { ...query, ['age1']: Number(reqQuery?.age1) }
    }
    if (reqQuery?.age2) {
      query = { ...query, ['age2']: Number(reqQuery?.age2) }
    }
    if (reqQuery?.coverage1) {
      query = { ...query, ['coverage1']: Number(reqQuery?.coverage1) }
    }
    if (reqQuery?.coverage2) {
      query = { ...query, ['coverage2']: Number(reqQuery?.coverage2) }
    }
    if (reqQuery?.preExistingMedicalConditions1) {
      query = {
        ...query,
        ['preExistingMedicalConditions1']:
          reqQuery?.preExistingMedicalConditions1,
      }
    }
    if (reqQuery?.preExistingMedicalConditions2) {
      query = {
        ...query,
        ['preExistingMedicalConditions2']:
          reqQuery?.preExistingMedicalConditions2,
      }
    }

    const data = await SuperVisaCoupleModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

QuotesService.studentSingleCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age1) {
      query = { ...query, ['age1']: Number(reqQuery?.age1) }
    }

    if (reqQuery?.days1) {
      query = { ...query, ['days1']: Number(reqQuery?.days1) }
    }

    const data = await StudentSingleModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

QuotesService.studentCoupleCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age1) {
      query = { ...query, ['age1']: Number(reqQuery?.age1) }
    }
    if (reqQuery?.age2) {
      query = { ...query, ['age2']: Number(reqQuery?.age2) }
    }
    if (reqQuery?.days1) {
      query = { ...query, ['days1']: Number(reqQuery?.days1) }
    }

    const data = await StudentCoupleModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

QuotesService.studentFamilyCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age1) {
      query = { ...query, ['age1']: Number(reqQuery?.age1) }
    }
    if (reqQuery?.age2) {
      query = { ...query, ['age2']: Number(reqQuery?.age2) }
    }
    if (reqQuery?.days1) {
      query = { ...query, ['days1']: Number(reqQuery?.days1) }
    }
    if (reqQuery?.noOfDependents) {
      query = { ...query, ['noOfDependents']: Number(reqQuery?.noOfDependents) }
    }

    const data = await StudentFamilyModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

QuotesService.singleTripSingleCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age1) {
      query = { ...query, ['age1']: Number(reqQuery?.age1) }
    }
    if (reqQuery?.days) {
      query = { ...query, ['days']: Number(reqQuery?.days) }
    }

    if (reqQuery?.travelingto) {
      query = { ...query, ['travelingto']: reqQuery?.travelingto }
    }

    const data = await SingleTripSingleModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

QuotesService.singleTripCoupleCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age1) {
      query = { ...query, ['age1']: Number(reqQuery?.age1) }
    }

    if (reqQuery?.age2) {
      query = { ...query, ['age2']: Number(reqQuery?.age2) }
    }

    if (reqQuery?.days) {
      query = { ...query, ['days']: Number(reqQuery?.days) }
    }

    if (reqQuery?.travelingto) {
      query = { ...query, ['travelingto']: reqQuery?.travelingto }
    }

    const data = await SingleTripCoupleModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

QuotesService.singleTripFamilyCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age1) {
      query = { ...query, ['age1']: Number(reqQuery?.age1) }
    }

    if (reqQuery?.age2) {
      query = { ...query, ['age2']: Number(reqQuery?.age2) }
    }

    if (reqQuery?.days) {
      query = { ...query, ['days']: Number(reqQuery?.days) }
    }

    if (reqQuery?.noofDependents) {
      query = { ...query, ['noofDependents']: Number(reqQuery?.noofDependents) }
    }

    if (reqQuery?.travelingto) {
      query = { ...query, ['travelingto']: reqQuery?.travelingto }
    }

    const data = await SingleTripFamilyModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

QuotesService.multiTripSingleCoverage = async (reqQuery) => {
  try {
    let query = {}

    if (reqQuery?.age1) {
      query = { ...query, ['age1']: Number(reqQuery?.age1) }
    }

    if (reqQuery?.tripDuration) {
      query = { ...query, ['tripDuration']: Number(reqQuery?.tripDuration) }
    }

    const data = await MultiTripSingleModel.find(query).limit(15)
    return data
  } catch (error) {
    throw error
  }
}

export default QuotesService
