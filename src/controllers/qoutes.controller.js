// External Modules:
import createError from 'http-errors'

// Internal Modules:
import QuotesService from '../services/qoutes.service.js'

// Initialize Module
const QuotesController = {}

QuotesController.superVisaSingleCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.superVisaSingleCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

export default QuotesController
