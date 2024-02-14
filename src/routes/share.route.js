// External Modules:
import { Router } from 'express'

// Middlewares
import ShareController from '../controllers/share.controller.js'

const router = Router()

/**
 * @description Single Shared By ID
 * @Route [GET]- /api/shares/:id
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get('/:userId', ShareController.singleSharedById)

/**
 * @description Share Place
 * @Route [POST]- /api/shares/:placeId
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/:placeId', ShareController.sharePlace)

// Exports
export default router
