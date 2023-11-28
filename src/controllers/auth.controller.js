import createError from 'http-errors'
import AuthUtils from './../utils/auth.utils.js'
import GlobalUtils from './../utils/global.utils.js'
import UserService from '../services/user.service.js'
import createHttpError from 'http-errors'
import { compare } from 'bcrypt'

// Module Export
const AuthController = {}

AuthController.register = async (req, res, next) => {
  try {
    let data = { ...req.body }

    if (req?.files?.length) {
      data = { ...data, avatar: req.files[0].filename }
    }

    // Create User
    let user = await UserService.create(data)
    let response = GlobalUtils.fromatResponse(user, 'User Created  Success!')

    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

AuthController.login = async (req, res, next) => {
  try {
    let { email, password } = req.body
    let user = await UserService.findOneByUserName(email)
    // Check Password

    let match = await compare(password, user?.password)
    if (!user || !match) throw createHttpError(401, 'Authentication Failed!')
    delete user?.password

    let token = AuthUtils.jwtSign(user)
    let response = GlobalUtils.fromatResponse(
      {
        ...user,
        token: token,
      },
      'User Login Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

AuthController.profle = async (req, res, next) => {
  try {
    let response = GlobalUtils.fromatResponse(
      {
        ...req.user,
      },
      'User Profile Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

export default AuthController
