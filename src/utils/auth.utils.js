import jwt from 'jsonwebtoken'
import config from '../config/index.js'

// Initialize Module
const AuthUtils = {}

AuthUtils.jwtSign = (userObject, expires = '1d') => {
  return jwt.sign(userObject, config.jwt_secret, {
    expiresIn: expires,
  })
}

AuthUtils.jwtDecode = (token) => {
  try {
    const decoded = jwt.verify(token, config.jwt_secret)
    return { valid: true, expired: false, decoded }
  } catch (error) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    }
  }
}

export default AuthUtils
