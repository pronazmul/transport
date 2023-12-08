import RoleModel from '../models/Role.model.js'
import UserModel from './../models/User.model.js'

// Initialize Module
const UserService = {}

UserService.findOneById = async (id) => {
  try {
    let user = await UserModel.findOne({
      where: { id: id },
      include: { model: RoleModel },
    })
    delete user?.dataValues?.password
    return user?.dataValues
  } catch (error) {
    throw error
  }
}

UserService.find = async (reqQuery) => {
  try {
    const users = await UserModel.findAll({
      attributes: { exclude: ['password'] },
      include: { model: RoleModel },
    })
    return users
  } catch (error) {
    throw error
  }
}

UserService.updateOneById = async (id, payload) => {
  try {
    await UserModel.update(payload, { where: { id: id } })
    const result = await UserModel.findOne({
      where: { id: id },
      attributes: { exclude: ['password'] },
    })
    return result
  } catch (error) {
    throw error
  }
}

UserService.deleteOneById = async (id) => {
  try {
    let result = await UserModel.destroy({
      where: { id },
    })
    return result
  } catch (error) {
    throw error
  }
}

export default UserService
