// External Modules:
import { Router } from 'express'

// Middlewares
import FavouriteController from './../controllers/favourite.controller.js'
import ValidateMiddleware from '../middlewares/validate.middleware.js'
import FavouriteSchema from './../schemas/favourite.schema.js'

const router = Router()
const { validateRequest } = ValidateMiddleware

/**
 * @description All Favoutites by User
 * @Route [GET]- /api/favourites
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get(
  '/',
  validateRequest(FavouriteSchema.find),
  FavouriteController.allFavourites
)

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
