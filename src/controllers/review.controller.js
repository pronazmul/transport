// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import ReviewService from './../services/review.service.js'

// Initialize Module
const ReviewController = {}

ReviewController.create = async (req, res, next) => {
  try {
    let result = await ReviewService.create({
      ...req.body,
      userId: req?.user?.id,
    })
    let response = GlobalUtils.fromatResponse(
      result,
      'Appoinment Create Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

ReviewController.find = async (req, res, next) => {
  try {
    let result = await ReviewService.find(req?.params?.vehicleId)
    let response = GlobalUtils.fromatResponse(
      result,
      'All Appoinments By UserID'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default ReviewController
