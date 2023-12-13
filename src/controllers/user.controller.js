// External Modules:
import createError from 'http-errors'

// Internal Modules:
import FilesUtils from './../utils/files.utils.js'
import GlobalUtils from './../utils/global.utils.js'
import UserService from '../services/user.service.js'
import config from '../config/index.js'
import { hash } from 'bcrypt'

// Initialize Module
const UserController = {}

UserController.getSingleUser = async (req, res, next) => {
  try {
    let data = await UserService.findOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(
      data,
      'Single User Fetch success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

UserController.allUsers = async (req, res, next) => {
  try {
    let result = await UserService.find(req.query)
    let response = GlobalUtils.fromatResponse(result, 'All User Fetch success')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

UserController.updateUser = async (req, res, next) => {
  try {
    let id = req.params.id
    let data = { ...req.body }

    // Make Hash Password
    if (data?.password) {
      let hashPass = await hash(data?.password, 10)
      data = { ...data, password: hashPass }
    }
    let result = await UserService.updateOneById(id, data)

    let response = GlobalUtils.fromatResponse(result, 'User Update Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

UserController.deleteUser = async (req, res, next) => {
  try {
    let id = req.params.id
    let result = UserService.deleteOneById(id)
    let response = GlobalUtils.fromatResponse(result, 'User Delete Success')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

UserController.avatarUpload = async (req, res, next) => {
  try {
    let id = req.params.id
    let filename = req.files?.length ? req.files[0].filename : null

    if (!filename) {
      return next(createError(422, 'No Avatar Found!'))
    }

    // If Current User Has Avatar Remove That First
    const currentUser = await UserService.findOneById(id)
    if (currentUser?.avatar) {
      FilesUtils.removeOne(
        config.user_directory,
        currentUser.avatar.split('/').pop()
      )
    }
    const result = await UserService.updateOneById(id, { avatar: filename })
    let response = GlobalUtils.fromatResponse(result, 'Avatar Upload Success!')

    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default UserController
