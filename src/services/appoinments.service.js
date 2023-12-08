import AppoinmentModel from '../models/Appoinment.model.js'

// Initialize Module
const AppoinmentService = {}

AppoinmentService.create = async (payload) => {
  try {
    let result = await AppoinmentModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}

AppoinmentService.find = async (userId) => {
  try {
    const result = await AppoinmentModel.findAll({ where: { userId: userId } })
    return result
  } catch (error) {
    throw error
  }
}

export default AppoinmentService
