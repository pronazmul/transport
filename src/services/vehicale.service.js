import VehicaleModel from '../models/Vehicle.model.js'

// Initialize Module
const VehicaleService = {}

VehicaleService.create = async (payload) => {
  try {
    let result = await VehicaleModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}

VehicaleService.findOneById = async (id) => {
  try {
    let result = await VehicaleModel.findOne({ where: { id: id } })
    return result
  } catch (error) {
    throw error
  }
}

VehicaleService.find = async (reqQuery) => {
  try {
    const result = await VehicaleModel.findAll()
    return result
  } catch (error) {
    throw error
  }
}

VehicaleService.updateOneById = async (id, payload) => {
  try {
    await VehicaleModel.update(payload, { where: { id: id } })
    const result = await VehicaleModel.findOne({
      where: { id: id },
    })
    return result
  } catch (error) {
    throw error
  }
}

VehicaleService.deleteOneById = async (id) => {
  try {
    let result = await VehicaleModel.destroy({
      where: { id },
    })
    return result
  } catch (error) {
    throw error
  }
}

export default VehicaleService
