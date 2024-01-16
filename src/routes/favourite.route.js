// External Modules:
import { Router } from 'express'

// Middlewares
import FavouriteController from './../controllers/favourite.controller.js'

const router = Router()

/**
 * @description All Favoutites by User
 * @Route [GET]- /api/favourites/:userId
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get('/:userId', FavouriteController.allFavourites)

/**
 * @description Add to Favourite
 * @Route [POST]- /api/favourites/:placeId
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/:placeId', FavouriteController.addToFavourite)

/**
 * @description Delete From Favourite
 * @Route [DELETE]- /api/favourites/:placeId
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.delete('/:placeId', FavouriteController.removeFromFavourite)

// Exports
export default router
