// External Modules:
import { Router } from 'express'

// Middlewares
import UserSchema from '../schemas/user.schema.js'
import ValidateMiddleware from '../middlewares/validate.middleware.js'
import UserController from './../controllers/user.controller.js'
import FileMiddleware from '../middlewares/file.middlewares.js'
import config from '../config/index.js'
import UserConst from '../consts/user.const.js'

const router = Router()
const { validateRequest } = ValidateMiddleware

/**
 * @description Delete User By UserID ***
 * @Route [DELETE]- /api/users/:userID
 * @Access protected - [admin]
 * @returns {Object} - Deleted Status.
 */
router.delete('/:id', UserController.deleteUser)

/**
 * @description Retrive Single User Info By UserID
 * @Route [GET]- /api/users/:userID
 * @Access protected - [admin]
 * @returns {Object} - Single User Object
 */
router.get('/:id', UserController.getSingleUser)

/**
 * @description Update user By UserID
 * @Route [PUT]- /api/users/:userID
 * @Access protected - [user, admin]
 * @returns {Object} - Updated User.
 */
router.put(
  '/:id',
  FileMiddleware.localUploadMultipleFields(
    ['image'],
    config.user_directory,
    UserConst.userImagesFields
  ),
  validateRequest(UserSchema.update),
  UserController.updateUser
)

/**
 * @description Retrive All Users
 * @Route [GET]- /api/users
 * @Access protected - [admin]
 * @returns {Array} - All User Array.
 */
router.get('/', validateRequest(UserSchema.find), UserController.allUsers)

// Exports
export default router
