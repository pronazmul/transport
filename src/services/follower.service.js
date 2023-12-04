import BookmarkModel from '../models/Bookmark.model.js'
import FollowerModel from '../models/Follower.model.js'
import FavouriteModel from './../models/Favourite.model.js'

// Initialize Module
const FollowerService = {}

FollowerService.find = async (creatorId) => {
  try {
    let result = await FollowerModel.find({ creator: creatorId })
      .populate({
        path: 'user',
        select: 'name email city country avatar followers following',
      })
      .lean()

    // Add (bookmark, follower, favourite) count on output
    for (let u of result) {
      u.bookmarkCount = await BookmarkModel.countDocuments({
        user: u.user,
      })
      u.followerCount = await FollowerModel.countDocuments({
        creator: u.user,
      })
      u.favouriteCount = await FavouriteModel.countDocuments({
        user: u.user,
      })
    }

    return result
  } catch (error) {
    throw error
  }
}

FollowerService.create = async (creatorId, userId) => {
  try {
    let newRole = new FollowerModel({ creator: creatorId, user: userId })
    let result = await newRole.save()
    return result
  } catch (error) {
    throw error
  }
}

FollowerService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await FollowerModel.findByIdAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

FollowerService.followedByIds = async (id) => {
  try {
    let query = { user: id }
    let result = await FollowerModel.find(query, '-_id creator').lean()
    return result
  } catch (error) {
    throw error
  }
}

export default FollowerService
