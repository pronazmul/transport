// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import PaymentService from './../services/payment.service.js'

// Initialize Module
const PaymentController = {}

PaymentController.create = async (req, res, next) => {
  try {
    let result = await PaymentService.create(req.body)
    let response = GlobalUtils.fromatResponse(
      result,
      'Appoinment Create Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default PaymentController
