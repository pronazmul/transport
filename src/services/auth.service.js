import { compare } from 'bcrypt'
import UserModel from '../models/User.model.js'
import createError from 'http-errors'
import RoleModel from '../models/Role.model.js'

// Initialize Module
const AuthService = {}

AuthService.login = async (payload) => {
  try {
    const { email, password } = payload
    let query = { email }

    let user = await UserModel.findOne({
      where: query,
      include: { model: RoleModel },
    })
    let match = await compare(password, user?.dataValues?.password)

    if (!user || !match) throw createHttpError(401, 'Authentication Failed!')
    // REMOVE USER PASS
    delete user?.dataValues?.password
    return user?.dataValues
  } catch (error) {
    console.log({ error })
    throw createHttpError(401, 'Authentication Failed!')
  }
}

AuthService.register = async (payload) => {
  try {
    let emailExists = await UserModel.findOne({
      where: { email: payload?.email },
    })
    if (emailExists) throw new Error('Email Already Exists!')

    let user = await UserModel.create(payload)
    // REMOVE USER PASS
    delete user?.dataValues?.password
    return user
  } catch (error) {
    throw error
  }
}

export default AuthService
