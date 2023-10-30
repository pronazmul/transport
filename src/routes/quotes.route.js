// External Modules:
import { Router } from 'express'

// Middlewares
import QuotesController from '../controllers/qoutes.controller.js'

const router = Router()

/**
 * @description Retrive All Users
 * @Route [GET]- /api/users
 * @Access protected - [admin]
 * @returns {Array} - All User Array.
 */
router.get('/superVisa/single', QuotesController.superVisaSingleCoverage)

// Exports
export default router
