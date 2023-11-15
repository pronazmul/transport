import UserModel from './../models/User.model.js'

// Initialize Module
const UserService = {}

UserService.create = async (payload) => {
  try {
    let NewData = new UserModel(payload)

    let data = await NewData.save()
    let query = { _id: NewData._id }
    data = await UserModel.findOne(query).lean()

    delete data?.password
    return data
  } catch (error) {
    throw error
  }
}

UserService.findOneByUserName = async (email) => {
  try {
    let query = { email }
    let user = await UserModel.findOne(query).lean()
    return user
  } catch (error) {
    throw createHttpError(401, 'Authentication Failed!')
  }
}

UserService.findOneById = async (id) => {
  try {
    let query = { _id: id }
    let user = await UserModel.findById(query, { password: 0 })
    return user
  } catch (error) {
    throw error
  }
}

UserService.find = async (reqQuery) => {
  try {
    let query = {}
    const users = await UserModel.find(query, { password: 0 })
    return users
  } catch (error) {
    throw error
  }
}

UserService.updateOneById = async (id, payload) => {
  try {
    let query = { _id: id }
    let options = { new: true, select: { password: 0 } }
    console.log({ id, payload })
    const result = await UserModel.findOneAndUpdate(query, payload, options)
    return result
  } catch (error) {
    throw error
  }
}

UserService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await UserModel.findOneAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

export default UserService
