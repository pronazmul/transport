import AppoinmentModel from '../models/Appoinment.model.js'
import ReviewModel from '../models/Reviews.model.js'

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
    let result = await AppoinmentModel.findAll({ where: { userId: userId } })
    let data = []
    for (let appoinment of result) {
      let reviewed = Boolean(
        await ReviewModel.findOne({
          where: { appoinmentId: appoinment?.dataValues?.id },
        })
      )
      data.push({ ...appoinment?.dataValues, reviewed })
    }

    return data
  } catch (error) {
    throw error
  }
}

export default AppoinmentService
