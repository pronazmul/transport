// External Modules:
import { Router } from 'express'

// Middlewares
import FollowerController from '../controllers/place.controller.js'

const router = Router()

/**
 * @description All Places
 * @Route [GET]- /api/places
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get('/', FollowerController.allPlaces)

/**
 * @description Single Place Data
 * @Route [POST]- /api/places/:id
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.get('/:id', FollowerController.singlePlace)

/**
 * @description All Photos from place
 * @Route [DELETE]- /api/places/photos/:id
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.get('/photos/:id', FollowerController.placePhotos)

// Exports
export default router
