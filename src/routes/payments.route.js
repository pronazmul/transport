// External Modules:
import { Router } from 'express'

// Middlewares
import PaymentController from '../controllers/payment.controller.js'

const router = Router()

/**
 * @description Make Payments
 * @Route [GET]- /api/payments
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/', PaymentController.create)

// Exports
export default router
