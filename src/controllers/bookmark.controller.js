// External Modules:
import createError from 'http-errors'
// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import BookmarkService from './../services/bookmark.service.js'
import FollowerService from '../services/follower.service.js'
import FavouriteService from './../services/favourite.service.js'
import BookmarkModel from '../models/Bookmark.model.js'
import FavouriteModel from '../models/Favourite.model.js'
import FourSquareUtils from '../utils/fourSquare.utils.js'
import NoteService from '../services/note.service.js'

// Initialize Module
const BookmarkController = {}

BookmarkController.recommanded = async (req, res, next) => {
  try {
    let bookmarkIds = await BookmarkService.bookmarkedPlacesIdsByUser(
      req?.user?._id
    )
    let favouriteIds = await FavouriteService.favouritePlacesIdsByUser(
      req?.user?._id
    )

    let followedBy = await FollowerService.followedByIds(req.params.userId)

    let bookmarks = []

    for (let f of followedBy) {
      if (bookmarks?.length <= 10) {
        let result = await BookmarkService.find(f?.creator)
        bookmarks = [...bookmarks, ...result]
      }
    }

    let resultWithPlace = []

    for (let item of bookmarks) {
      let bookmarkCount = await BookmarkModel.countDocuments({
        place: item?.place,
      })

      let favouriteCount = await FavouriteModel.countDocuments({
        place: item?.place,
      })

      let place = await FourSquareUtils.singlePlaceById(item?.place)

      let note = await NoteService.findOneByUserAndPlace(
        item?.place,
        item?.user?._id
      )

      let formatted = {
        bookmarkCount,
        favouriteCount,
        isBookmarked: Boolean(bookmarkIds.find((b) => item?.place === b)),
        isFavourite: Boolean(favouriteIds.find((b) => item?.place === b)),
        note,
        ...place,
      }

      resultWithPlace.push({ ...item, place: formatted })
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

BookmarkController.allBookmarks = async (req, res, next) => {
  try {
    let userId = req.params.userId

    let bookmarkIds = await BookmarkService.bookmarkedPlacesIdsByUser(userId)
    let favouriteIds = await FavouriteService.favouritePlacesIdsByUser(userId)

    let result = await BookmarkService.find(userId)

    // Genereate Place & Photos
    let resultWithPlace = []

    for (let item of result) {
      let place = await FourSquareUtils.singlePlaceById(item?.place)

      let bookmarkCount = await BookmarkModel.countDocuments({
        place: item?.place,
      })

      let favouriteCount = await FavouriteModel.countDocuments({
        place: item?.place,
      })

      let note = await NoteService.findOneByUserAndPlace(item?.place, userId)

      let formatted = {
        bookmarkCount,
        favouriteCount,
        isBookmarked: Boolean(bookmarkIds.find((b) => item?.place === b)),
        isFavourite: Boolean(favouriteIds.find((b) => item?.place === b)),
        note,
        ...place,
      }
      resultWithPlace.push({ ...item, place: formatted })
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
    let data = await BookmarkService.deleteOneById(
      req.params.placeId,
      req.user._id
    )

    // Delete User Notes
    await NoteService.deleteByUserAndPlace(req.user._id, req.params.placeId)

    let response = GlobalUtils.fromatResponse(data, 'Bookmark Delete Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default BookmarkController
