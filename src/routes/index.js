import { Router } from 'express'
import QuotesRoutes from './quotes.route.js'

const router = Router()

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Application Routes
router.use('/api/v1/qoutes', QuotesRoutes)

// Module Exports
export default router
