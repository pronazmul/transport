// External Modules:
import { Router } from 'express'

// Middlewares
import BookmarkController from '../controllers/bookmark.controller.js'

const router = Router()

/**
 * @description All Bookmarks by Users
 * @Route [GET]- /api/bookmarks/:userId
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get('/:userId', BookmarkController.allBookmarks)

/**
 * @description Add to bookmark
 * @Route [POST]- /api/bookmarks/:placeId
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/:placeId', BookmarkController.addToBookmark)

/**
 * @description Delete From Bookmark
 * @Route [DELETE]- /api/bookmarks/:id
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.delete('/:id', BookmarkController.removeFromBookmark)

// Exports
export default router
