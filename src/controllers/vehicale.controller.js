// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import VehicaleService from '../services/vehicale.service.js'

// Initialize Module
const VehicaleController = {}

VehicaleController.create = async (req, res, next) => {
  try {
    let result = await VehicaleService.create(req.body)
    let response = GlobalUtils.fromatResponse(result, 'Vehicale Create Success')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

VehicaleController.findOneById = async (req, res, next) => {
  try {
    let data = await VehicaleService.findOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(
      data,
      'Single Vehicale Fetch Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

VehicaleController.find = async (req, res, next) => {
  try {
    let result = await VehicaleService.find(req.query)
    let response = GlobalUtils.fromatResponse(
      result,
      'All Vehicales Fetch Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

VehicaleController.deleteOneById = async (req, res, next) => {
  try {
    let data = await VehicaleService.deleteOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(data, 'Vehicale Delete Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

VehicaleController.updateOneById = async (req, res, next) => {
  try {
    let data = await VehicaleService.updateOneById(req.params.id, req.body)
    let response = GlobalUtils.fromatResponse(data, 'Vehicale Update Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default VehicaleController
