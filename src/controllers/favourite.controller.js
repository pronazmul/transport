// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FavouriteService from './../services/favourite.service.js'
import FourSquareUtils from '../utils/fourSquare.utils.js'

// Initialize Module
const FavouriteController = {}

FavouriteController.allFavourites = async (req, res, next) => {
  try {
    let result = await FavouriteService.find(req?.query)

    // Add Place Details To Response
    let resultWithPlace = []
    for (let item of result?.data) {
      let place = await FourSquareUtils.singlePlaceById(item?.place)
      resultWithPlace.push({ ...item, place })
    }

    let response = GlobalUtils.fromatResponse(
      resultWithPlace,
      'All Favourites Fetch Success',
      result?.meta
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FavouriteController.addToFavourite = async (req, res, next) => {
  try {
    let placeId = req.params.placeId
    let userId = req.user._id

    let data = await FavouriteService.create(placeId, userId)
    let response = GlobalUtils.fromatResponse(data, 'Add To Favourite Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FavouriteController.removeFromFavourite = async (req, res, next) => {
  try {
    let data = await FavouriteService.deleteOneById(
      req.params.placeId,
      req.user._id
    )
    let response = GlobalUtils.fromatResponse(data, 'Favourite Remove Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default FavouriteController
