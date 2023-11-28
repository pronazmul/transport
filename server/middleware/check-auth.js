/* eslint-disable no-undef */
const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')

const secretKey =
  '74ca896d874c7ddc3dadb1d6c8c9fefc88c487690c69cfc516c9c7869591245b'

const HttpError = require('../models/http-error')

const signin = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }
  try {
    const token = req.header('x-auth-token').split(' ')[1]

    if (!token) {
      throw new Error('Authentication failed!')
    }
    const decodedToken = jwt.verify(token, secretKey)
    if (decodedToken.exp <= Date.now() / 1000) {
      // Token has expired; log the user out
      // Clear sessionStorage and return an error
      sessionStorage.removeItem('authToken')
      sessionStorage.removeItem('userData')
      return res
        .status(401)
        .json({ message: 'Token expired. Please log in again.' })
    }
    req.user = decodedToken.user
    next()
  } catch (err) {
    const error = new HttpError('Authentication failed!', 403)
    return next(error)
  }
}

const requireSignin = expressjwt({
  secret: secretKey,
  algorithms: ['HS256'],
  credentialsRequired: false,
  userProperty: 'auth',
})

exports.signin = signin
exports.requireSignin = requireSignin
