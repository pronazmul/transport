// External Modules:
import createError from 'http-errors'
import UserModel from './../models/User.model.js'
import SessionModel from './../models/Session.model.js'
import AuthUtils from '../utils/auth.utils.js'
import config from '../config/index.js'

const { jwtDecode } = AuthUtils

// Initialize Module
const AuthMiddleware = {}

AuthMiddleware.authenticate = async (req, res, next) => {
  try {
    const accessToken = req.cookies['accessToken']
    const refreshToken = req.cookies['refreshToken']

    if (accessToken) {
      const {
        decoded: { user, session },
      } = jwtDecode(accessToken)
      req.user = user
      req.session = session
      return next()
    }

    if (!accessToken && refreshToken) {
      const {
        decoded: { session },
      } = jwtDecode(refreshToken)

      let query = { _id: session?._id, valid: true }
      let updatedData = { updatedAt: Date.now() }
      let options = { new: true }

      const validSession = await SessionModel.findOneAndUpdate(
        query,
        updatedData,
        options
      )

      if (!validSession) {
        res.cookie('accessToken', '', {
          maxAge: 0,
          httpOnly: true,
        })
        res.cookie('refreshToken', '', {
          maxAge: 0,
          httpOnly: true,
        })
        return next(createError(401, 'Authentication Failed'))
      }

      const user = await UserModel.findById(session?.user, {
        password: 0,
      }).lean()

      let access = AuthUtils.jwtSign({
        user: user,
        session: validSession,
      })

      let refresh = AuthUtils.jwtSign(
        { session: validSession },
        config.refresh_token
      )

      // console.log({ validSession, user, access, refresh })

      res.cookie('accessToken', access, {
        maxAge: process.env.ACCESS_TOKEN,
        httpOnly: true,
      })
      res.cookie('refreshToken', refresh, {
        maxAge: process.env.REFRESH_TOKEN,
        httpOnly: true,
      })
      req.session = validSession
      req.user = user
      return next()
    }
    if (!accessToken && !refreshToken) {
      return next(createError(401, 'Authentication Failed'))
    }
  } catch (error) {
    return next('Internal Server Error!')
  }
}

export default AuthMiddleware
