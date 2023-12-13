// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import AppoinmentService from './../services/appoinments.service.js'

// Initialize Module
const AppoinmentController = {}

AppoinmentController.create = async (req, res, next) => {
  try {
    let result = await AppoinmentService.create(req.body)
    let response = GlobalUtils.fromatResponse(
      result,
      'Appoinment Create Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

AppoinmentController.find = async (req, res, next) => {
  try {
    let result = await AppoinmentService.find(req?.params?.userId)
    let response = GlobalUtils.fromatResponse(
      result,
      'All Appoinments By UserID'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default AppoinmentController
