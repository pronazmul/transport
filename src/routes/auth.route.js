// External Modules:
import { Router } from 'express'

import UserSchema from '../schemas/user.schema.js'
import AuthController from './../controllers/auth.controller.js'
import AuthMiddleware from './../middlewares/auth.middlewares.js'
import ValidateMiddleware from './../middlewares/validate.middleware.js'

const router = Router()
const { authenticate } = AuthMiddleware
const { validateRequest } = ValidateMiddleware

/**
 * @description Register A New User
 * @Route [POST]- /api/auth/register
 * @Access Public
 * @returns {Object} - Created User.
 */
router.post(
  '/register',
  validateRequest(UserSchema.create),
  AuthController.register
)

/**
 * @description User Login
 * @Route [POST]- /api/auth/login
 * @Access Public
 * @returns {Object} - Logged in User.
 */
router.post('/login', validateRequest(UserSchema.login), AuthController.login)

// Exports
export default router
