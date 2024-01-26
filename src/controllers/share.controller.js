// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FavouriteService from '../services/favourite.service.js'
import FourSquareUtils from '../utils/fourSquare.utils.js'

// Initialize Module
const ShareController = {}

ShareController.singleSharedById = async (req, res, next) => {
  try {
    let userId = req.params.userId
    let result = await FavouriteService.find(userId)

    // Genereate Place & Photos
    let resultWithPlace = []

    for (let item of result) {
      let place = await FourSquareUtils.singlePlaceById(item?.place)
      resultWithPlace.push({ ...item, place: place })
    }

    let response = GlobalUtils.fromatResponse(
      resultWithPlace,
      'All Bookmark Fetch Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

ShareController.sharePlace = async (req, res, next) => {
  try {
    let placeId = req.params.placeId
    let userId = req.user._id

    let data = await FavouriteService.create(placeId, userId)
    let response = GlobalUtils.fromatResponse(data, 'Add To Bookmark Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default ShareController
