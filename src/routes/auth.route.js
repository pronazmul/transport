// External Modules:
import { Router } from 'express'
import UserSchema from '../schemas/user.schema.js'
import AuthController from './../controllers/auth.controller.js'
import AuthMiddleware from './../middlewares/auth.middlewares.js'
import ValidateMiddleware from './../middlewares/validate.middleware.js'
import FileMiddleware from '../middlewares/file.middlewares.js'
import config from '../config/index.js'
import UserConst from '../consts/user.const.js'

const router = Router()
const { validateRequest } = ValidateMiddleware

/**
 * @description Register A New User
 * @Route [POST]- /api/auth/register
 * @Access Public
 * @returns {Object} - Created User.
 */
router.post(
  '/register',
  FileMiddleware.localUploadMultipleFields(
    ['image'],
    config.user_directory,
    UserConst.uploads
  ),
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

/**
 * @description Get Loggedin User Profile
 * @Route [POST]- /api/auth/profile
 * @Access Public
 * @returns {Object} - Logged in User.
 */
router.get('/profile', AuthMiddleware.authenticate, AuthController.profle)

// Exports
export default router
