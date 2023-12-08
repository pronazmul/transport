// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import RoleService from '../services/role.service.js'

// Initialize Module
const RoleController = {}

RoleController.create = async (req, res, next) => {
  try {
    let result = await RoleService.create(req.body)
    let response = GlobalUtils.fromatResponse(result, 'role Create Success')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

RoleController.findOneById = async (req, res, next) => {
  try {
    let data = await RoleService.findOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(
      data,
      'Single Role Fetch Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

RoleController.find = async (req, res, next) => {
  try {
    let result = await RoleService.find(req.query)
    let response = GlobalUtils.fromatResponse(result, 'All Roles Fetch Success')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

RoleController.deleteOneById = async (req, res, next) => {
  try {
    let data = await RoleService.deleteOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(
      data,
      'Single Role Delete Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

RoleController.updateOneById = async (req, res, next) => {
  try {
    let data = await RoleService.updateOneById(req.params.id, req.body)
    let response = GlobalUtils.fromatResponse(data, 'Role Update Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default RoleController
