// External Modules:
import { Router } from 'express'

// Middlewares
import ActivityController from '../controllers/activity.controller.js'

const router = Router()

/**
 * @description FollowedBy Activity By UserID
 * @Route [GET]- /api/activities/:id
 * @Access protected - []
 * @returns {Object} - FollowedBy Activity
 */
router.get('/:userId', ActivityController.followedByActivity)

// Exports
export default router
