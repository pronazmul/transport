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
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft()
    }
    const { decoded } = jwtDecode(token)
    req.user = decoded
    next()
  } catch (err) {
    return next(createError(401, 'Authentication Failed'))
  }
}

export default AuthMiddleware
