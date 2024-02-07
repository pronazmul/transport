// External Modules:
import createError from 'http-errors'
// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import BookmarkService from './../services/bookmark.service.js'
import FollowerService from '../services/follower.service.js'
import FourSquareUtils from '../utils/fourSquare.utils.js'

// Initialize Module
const BookmarkController = {}

BookmarkController.allBookmarks = async (req, res, next) => {
  try {
    let result = await BookmarkService.find(req?.query)

    // Add Place Details To Response
    let resultWithPlace = []
    for (let item of result?.data) {
      let place = await FourSquareUtils.singlePlaceById(item?.place)
      resultWithPlace.push({ ...item, place })
    }

    let response = GlobalUtils.fromatResponse(
      resultWithPlace,
      'All Bookmarks Fetch success',
      result?.meta
    )

    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

BookmarkController.addToBookmark = async (req, res, next) => {
  try {
    let placeId = req.params.placeId
    let userId = req.user._id

    let data = await BookmarkService.create(placeId, userId)
    let response = GlobalUtils.fromatResponse(data, 'Add To Bookmark Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

BookmarkController.removeFromBookmark = async (req, res, next) => {
  try {
    let data = await BookmarkService.deleteOneById(req.params.placeId)
    let response = GlobalUtils.fromatResponse(data, 'Bookmark Delete Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

BookmarkController.recommanded = async (req, res, next) => {
  try {
    let authUser = req?.query?.user

    // Load all notes of auth user and auth user followed users
    let user = [authUser]
    let followings = await FollowerService.followedByIds(authUser)
    if (followings) {
      followings?.forEach((f) => {
        user.push(f.creator)
      })
    }

    let result = await BookmarkService.find({ ...req.query, user })

    // Add Place Details To Response
    let resultWithPlace = []
    for (let item of result?.data) {
      let place = await FourSquareUtils.singlePlaceById(item?.place)
      resultWithPlace.push({ ...item, place })
    }

    let response = GlobalUtils.fromatResponse(
      resultWithPlace,
      'All Recommanded Bookmarks Fetch success',
      result?.meta
    )

    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default BookmarkController
