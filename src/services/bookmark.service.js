import BookmarkModel from './../models/Bookmark.model.js'

// Initialize Module
const BookmarkService = {}

BookmarkService.find = async (userId) => {
  try {
    const result = await BookmarkModel.find({ user: userId })
      .populate({
        path: 'user',
        select: 'name email city country avatar followers following',
      })
      .lean()
    return result
  } catch (error) {
    throw error
  }
}

BookmarkService.create = async (placeId, userId) => {
  try {
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
        select: 'name avatar',
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

export default BookmarkService
