import { Router } from 'express'
import AuthRoutes from './auth.route.js'
import UserRoutes from './user.route.js'
import RoleRoutes from './role.route.js'
import VehicaleRoutes from './vehicale.route.js'
import AppoinmentRoutes from './appoinments.route.js'
import PaymentRoutes from './payments.route.js'
import ReviewRoutes from './reviews.route.js'

// Middleware
import AuthMiddleware from '../middlewares/auth.middlewares.js'

const router = Router()

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Application Routes
router.use('/api/v1/auth', AuthRoutes)
router.use('/api/v1/users', AuthMiddleware.authenticate, UserRoutes)
router.use('/api/v1/roles', AuthMiddleware.authenticate, RoleRoutes)
router.use('/api/v1/vehicales', AuthMiddleware.authenticate, VehicaleRoutes)

router.use('/api/v1/appoinments', AuthMiddleware.authenticate, AppoinmentRoutes)
router.use('/api/v1/payments', AuthMiddleware.authenticate, PaymentRoutes)
router.use('/api/v1/reviews', AuthMiddleware.authenticate, ReviewRoutes)

// Module Exports
export default router
