// External Modules:
import { Router } from 'express'

// Middlewares
import ReviewController from '../controllers/review.controller.js'

const router = Router()

/**
 * @description Create New Review
 * @Route [GET]- /api/reviews
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/', ReviewController.create)

/**
 * @description Retrive All Data
 * @Route [GET]- /api/reviews
 * @Access protected - []
 * @returns {Array} - All Filtered Data Array
 */
router.get('/:vehicleId', ReviewController.find)

// Exports
export default router
