import AppoinmentModel from '../models/Appoinment.model.js'
import PaymentModel from '../models/Payment.model.js'

// Initialize Module
const PaymentService = {}

PaymentService.create = async (payload) => {
  try {
    //Update Appoinment Paid Status
    await AppoinmentModel.update(
      { paid: true },
      { where: { id: payload?.appoinmentId } }
    )

    // Make Payment
    let result = await PaymentModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}

export default PaymentService
