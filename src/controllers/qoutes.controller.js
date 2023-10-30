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

QuotesController.superVisaCoupleCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.superVisaCoupleCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

QuotesController.studentSingleCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.studentSingleCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

QuotesController.studentCoupleCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.studentCoupleCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

QuotesController.studentFamilyCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.studentFamilyCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

QuotesController.singleTripSingleCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.singleTripSingleCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

QuotesController.singleTripCoupleCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.singleTripCoupleCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

QuotesController.singleTripFamilyCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.singleTripFamilyCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

QuotesController.multiTripSingleCoverage = async (req, res, next) => {
  try {
    let result = await QuotesService.multiTripSingleCoverage(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, error))
  }
}

export default QuotesController
