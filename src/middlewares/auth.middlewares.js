// External Modules:
import createError from 'http-errors'
import AuthUtils from '../utils/auth.utils.js'

const { jwtDecode } = AuthUtils

// Initialize Module
const AuthMiddleware = {}

AuthMiddleware.authenticate = async (req, res, next) => {
  try {
    let token = req.header('Authorization')
    if (!token) {
      return next(createError(401, 'Authentication Failed'))
    }

    const { decoded } = jwtDecode(token)

    if (!decoded?._id) {
      return next(createError(401, 'Authentication Failed'))
    }

    req.user = decoded
    next()
  } catch (err) {
    return next(createError(401, 'Authentication Failed'))
  }
}

export default AuthMiddleware
