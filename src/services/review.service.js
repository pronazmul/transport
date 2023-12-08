import ReviewModel from '../models/Reviews.model.js'

// Initialize Module
const ReviewService = {}

ReviewService.create = async (payload) => {
  try {
    let result = await ReviewModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}

ReviewService.find = async (vehicleId) => {
  try {
    const result = await ReviewModel.findAll({
      where: { vehicleId: vehicleId },
    })
    return result
  } catch (error) {
    throw error
  }
}

export default ReviewService
