// External Modules:
import createError from 'http-errors'

// Internal Modules:
import BookmarkService from '../services/bookmark.service.js'
import FavouriteService from '../services/favourite.service.js'
import BookmarkModel from '../models/Bookmark.model.js'
import FavouriteModel from '../models/Favourite.model.js'
import GlobalUtils from '../utils/global.utils.js'
import FourSquareUtils from '../utils/fourSquare.utils.js'

// Initialize Module
const PlaceController = {}

PlaceController.allPlaces = async (req, res, next) => {
  try {
    let places = await FourSquareUtils.searchPlaces(req.query)

    let response = GlobalUtils.fromatResponse(
      places,
      'All Places Fetch Success'
    )
    res.status(200).json(response)
  } catch (error) {
    console.log({ error })
    next(createError(500, error))
  }
}

PlaceController.singlePlace = async (req, res, next) => {
  try {
    let bookmarkIds = await BookmarkService.bookmarkedPlacesIdsByUser(
      req?.user?._id
    )
    let favouriteIds = await FavouriteService.favouritePlacesIdsByUser(
      req?.user?._id
    )
    let place = await FourSquareUtils.singlePlaceById(req.params.id)

    let formatted = {
      isBookmarked: Boolean(bookmarkIds.find((b) => place?.fsq_id === b)),
      isFavourite: Boolean(favouriteIds.find((b) => place?.fsq_id === b)),
      bookmarkCount: await BookmarkModel.countDocuments({
        place: place?.fsq_id,
      }),
      favouriteCount: await FavouriteModel.countDocuments({
        place: place?.fsq_id,
      }),
      ...place,
    }

    let response = GlobalUtils.fromatResponse(
      formatted,
      'Single Place Fetech Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

PlaceController.placePhotos = async (req, res, next) => {
  try {
    let data = await FourSquareUtils.loadPhotosByPlaceId(req.params.id)

    let response = GlobalUtils.fromatResponse(
      data,
      'Places Photos Fetch Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default PlaceController
