// External Modules:
import createError from 'http-errors'
import axios from 'axios'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FavouriteService from './../services/favourite.service.js'
import BookmarkService from './../services/bookmark.service.js'
import FourSquareUtils from '../utils/fourSquare.utils.js'

// Initialize Module
const FavouriteController = {}

FavouriteController.allFavourites = async (req, res, next) => {
  try {
    let bookmarkIds = await BookmarkService.bookmarkedPlacesIdsByUser(
      req?.user?._id
    )
    let favouriteIds = await FavouriteService.favouritePlacesIdsByUser(
      req?.user?._id
    )

    let userId = req.params.userId
    let result = await FavouriteService.find(userId)

    // Genereate Place & Photos
    let resultWithPlace = []

    for (let item of result) {
      let place = await FourSquareUtils.singlePlaceById(item?.place)

      let formatted = {
        isBookmarked: Boolean(bookmarkIds.find((b) => item?.place === b)),
        isFavourite: Boolean(favouriteIds.find((b) => item?.place === b)),
        ...place,
      }

      resultWithPlace.push({ ...item, place: formatted })
    }

    let response = GlobalUtils.fromatResponse(
      resultWithPlace,
      'All Favourites Fetch Success'
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
    let data = await FavouriteService.deleteOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(data, 'Favourite Remove Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default FavouriteController
