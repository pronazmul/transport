import RoleModel from '../models/Role.model.js'
// Initialize Module
const RoleService = {}

RoleService.create = async (payload) => {
  try {
    let result = await RoleModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}

RoleService.findOneById = async (id) => {
  try {
    let result = await RoleModel.findOne({ where: { id: id } })
    return result
  } catch (error) {
    throw error
  }
}

RoleService.find = async (reqQuery) => {
  try {
    const result = await RoleModel.findAll()
    return result
  } catch (error) {
    throw error
  }
}

RoleService.updateOneById = async (id, payload) => {
  try {
    await RoleModel.update(payload, { where: { id: id } })
    const result = await RoleModel.findOne({
      where: { id: id },
    })
    return result
  } catch (error) {
    throw error
  }
}

RoleService.deleteOneById = async (id) => {
  try {
    let result = await RoleModel.destroy({
      where: { id },
    })
    return result
  } catch (error) {
    throw error
  }
}

export default RoleService
