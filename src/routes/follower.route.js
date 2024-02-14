// External Modules:
import { Router } from 'express'

// Middlewares
import FollowerController from '../controllers/follower.controller.js'
import ValidateMiddleware from '../middlewares/validate.middleware.js'
import FollowerSchema from '../schemas/follower.schema.js'

const router = Router()
const { validateRequest } = ValidateMiddleware

/**
 * @description All Followers
 * @Route [GET]- /api/followers/followings/:userId
 * @Access protected - []
 * @returns {Array} - All Followers Data
 */
router.get('/', validateRequest(FollowerSchema.find), FollowerController.find)

/**
 * @description Follow User
 * @Route [POST]- /api/followers/:creatorId
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/follow/:creatorId', FollowerController.follow)

/**
 * @description Unfollow User
 * @Route [DELETE]- /api/followers/:creatorId
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.delete('/unfollow/:creatorId', FollowerController.unfollow)

// Exports
export default router
