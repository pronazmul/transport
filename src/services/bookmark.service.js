import BookmarkConst from '../consts/bookmark.const.js'
import ProjectionConst from '../consts/projection.const.js'
import GlobalUtils from '../utils/global.utils.js'
import MongooseUtils from '../utils/mongoose.utils.js'
import BookmarkModel from './../models/Bookmark.model.js'

// Initialize Module
const BookmarkService = {}

BookmarkService.find = async (reqQuery) => {
  try {
    const { page, limit, skip, sortBy, sortOrder } =
      GlobalUtils.calculatePagination(reqQuery)

    const query = MongooseUtils.searchCondition(
      reqQuery,
      BookmarkConst.searchOptions,
      BookmarkConst.filterOptions
    )
    const sort = { [sortBy]: sortOrder }
    const result = await BookmarkModel.find(query, ProjectionConst.bookmark)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await BookmarkModel.countDocuments(query)

    return { data: result, meta: { page, limit, total } }
  } catch (error) {
    throw error
  }
}

BookmarkService.create = async (place, user) => {
  try {
    let exists = await BookmarkModel.findOne({ place: place, user: user })
    if (exists) throw new Error('Place Already Added To Bookmark!')

    let newData = new BookmarkModel({ place: place, user: user })
    let result = await newData.save()
    return result
  } catch (error) {
    throw error
  }
}

BookmarkService.deleteOneById = async (place) => {
  try {
    let query = { place: place }
    let result = await BookmarkModel.findOneAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

BookmarkService.followedByActivity = async (usersList) => {
  try {
    let result = await BookmarkModel.find(
      { user: { $in: usersList } },
      '-_id user place'
    )
      .populate({
        path: 'user',
        select: 'name bio avatar',
      })
      .limit(5)
      .lean()

    if (result) {
      result = result.map((r) => ({
        message: `${r?.user?.name} bookmark a place`,
        ...r,
      }))
    }
    return result
  } catch (error) {
    throw error
  }
}

BookmarkService.bookmarkedPlacesIdsByUser = async (id) => {
  try {
    let query = { user: id }
    let result = await BookmarkModel.find(query, '-_id place').lean()
    if (result) result = result.map((r) => r.place)
    return result
  } catch (error) {
    throw error
  }
}

BookmarkService.favouriteCountByPlaceID = async (id) => {
  try {
    let query = { place: id }
    let result = await BookmarkModel.countDocuments(query)
    return result
  } catch (error) {
    throw error
  }
}

export default BookmarkService
