import BookmarkModel from './../models/Bookmark.model.js'

// Initialize Module
const BookmarkService = {}

BookmarkService.find = async (userId) => {
  try {
    const result = await BookmarkModel.find({ user: userId })
      .populate({
        path: 'user',
        select: 'name bio email city country avatar followers following',
      })
      .lean()
    return result
  } catch (error) {
    throw error
  }
}

BookmarkService.create = async (placeId, userId) => {
  try {
    let exists = await BookmarkModel.findOne({ place: placeId, user: userId })
    if (exists) throw new Error('Product Already Added To Bookmark!')

    let newData = new BookmarkModel({ place: placeId, user: userId })
    let result = await newData.save()
    return result
  } catch (error) {
    throw error
  }
}

BookmarkService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await BookmarkModel.findByIdAndDelete(query)
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
