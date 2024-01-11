import { Router } from 'express'
import AuthRoutes from './auth.route.js'
import UserRoutes from './user.route.js'
import FeedbackRoutes from './feedback.route.js'
import RoleRoutes from './role.route.js'

// Middleware
import AuthMiddleware from '../middlewares/auth.middlewares.js'
import config from '../config/index.js'

const router = Router()

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Feedback Demo
router.use('/demo', (_req, res) =>
  res.sendFile(`${config.assets_path}/feedback.html`)
)

// Application Routes
router.use('/api/v1/auth', AuthRoutes)
router.use('/api/v1/roles', AuthMiddleware.authenticate, RoleRoutes)
router.use('/api/v1/users', UserRoutes)
router.use('/api/v1/feedbacks', FeedbackRoutes)

// Module Exports
export default router
