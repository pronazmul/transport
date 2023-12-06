// External Modules:
import { Router } from 'express'

// Middlewares
import FollowerController from '../controllers/follower.controller.js'

const router = Router()

/**
 * @description All Followers
 * @Route [GET]- /api/followers/followings/:userId
 * @Access protected - []
 * @returns {Array} - All Followers Data
 */
router.get('/:creatorId', FollowerController.find)

// /**
//  * @description All Followers
//  * @Route [GET]- /api/followers/:creatorId
//  * @Access protected - []
//  * @returns {Array} - All Followers Data
//  */
// router.get('/:creatorId', FollowerController.find)

/**
 * @description Follow User
 * @Route [POST]- /api/followers/:userId
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/follow/:creatorId', FollowerController.follow)

/**
 * @description Unfollow User
 * @Route [DELETE]- /api/followers/:id
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.delete('/unfollow/:id', FollowerController.unfollow)

// Exports
export default router
