import createError from 'http-errors'
import AuthUtils from './../utils/auth.utils.js'
import config from '../config/index.js'
import GlobalUtils from './../utils/global.utils.js'
import AuthService from '../services/auth.service.js'
import { hash } from 'bcrypt'

// Module Export
const AuthController = {}

AuthController.register = async (req, res, next) => {
  try {
    let data = { ...req.body }
    // Make Hash Password
    if (data?.password) {
      let hashPass = await hash(data?.password, 10)
      data = { ...data, password: hashPass }
    }

    // Create User
    let user = await AuthService.register(data)
    let response = GlobalUtils.fromatResponse(user, 'User Created  Success!')

    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

AuthController.login = async (req, res, next) => {
  try {
    let { email, password } = req.body
    let user = await AuthService.login({ email, password })
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

AuthController.logout = async (req, res, next) => {
  try {
    res.cookie('accessToken', '', {
      maxAge: 0,
      httpOnly: true,
    })
    res.cookie('refreshToken', '', {
      maxAge: 0,
      httpOnly: true,
    })

    let response = GlobalUtils.fromatResponse(null, 'Logout Success!')

    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default AuthController
