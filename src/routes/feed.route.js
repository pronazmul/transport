// External Modules:
import { Router } from 'express'

// Middlewares
import FeedController from './../controllers/feed.controller.js'
import ValidateMiddleware from '../middlewares/validate.middleware.js'
import FeedSchema from './../schemas/feed.schema.js'

const router = Router()
const { validateRequest } = ValidateMiddleware

/**
 * @description All Feeds
 * @Route [GET]- /api/feeds/
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get('/', validateRequest(FeedSchema.find), FeedController.allFeed)

/**
 * @description Create Feed
 * @Route [POST]- /api/feeds
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/', validateRequest(FeedSchema.create), FeedController.createFeed)

/**
 * @description Update Feed By ID
 * @Route [PUT]- /api/feeds/:id
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.put(
  '/:id',
  validateRequest(FeedSchema.update),
  FeedController.updateFeed
)

/**
 * @description Delete Feed By ID
 * @Route [DELETE]- /api/feeds/:id
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.delete('/:id', FeedController.deleteFeed)

// Exports
export default router
