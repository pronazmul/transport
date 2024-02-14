// External Modules:
import { Router } from 'express'

// Middlewares
import BookmarkController from '../controllers/bookmark.controller.js'
import ValidateMiddleware from './../middlewares/validate.middleware.js'
import BookmarkSchema from './../schemas/bookmark.schema.js'

const router = Router()
const { validateRequest } = ValidateMiddleware

/**
 * @description All Bookmarks by Users
 * @Route [GET]- /api/bookmarks/:userId
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get(
  '/',
  validateRequest(BookmarkSchema.find),
  BookmarkController.allBookmarks
)

/**
 * @description Add to bookmark
 * @Route [POST]- /api/bookmarks/:placeId
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/:placeId', BookmarkController.addToBookmark)

/**
 * @description Delete From Bookmark
 * @Route [DELETE]- /api/bookmarks/:placeId
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.delete('/:placeId', BookmarkController.removeFromBookmark)

/**
 * @description All Recommanded Bookmark Places by Followers
 * @Route [GET]- /api/bookmarks/recommanded/:userId
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get(
  '/recommanded',
  validateRequest(BookmarkSchema.recommanded),
  BookmarkController.recommanded
)

// Exports
export default router
