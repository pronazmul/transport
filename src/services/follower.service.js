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
        select: 'name bio email city country avatar',
      })
      .lean()

    // Add (bookmark, follower, favourite) count on output
    for (let u of result) {
      u.creator.bookmarkCount = await BookmarkModel.countDocuments({
        user: u.creator._id,
      })
      u.creator.followerCount = await FollowerModel.countDocuments({
        creator: u.creator._id,
      })
      u.creator.favouriteCount = await FavouriteModel.countDocuments({
        user: u.creator._id,
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

FollowerService.followedByActivity = async (usersList) => {
  try {
    let result = await FollowerModel.find(
      { user: { $in: usersList } },
      '-_id user creator'
    )
      .populate({
        path: 'user',
        select: 'name bio avatar',
      })
      .populate({
        path: 'creator',
        select: 'name bio avatar',
      })
      .limit(5)
      .lean()

    if (result) {
      result = result.map((r) => ({
        message: `${r?.user?.name} followed by ${r?.creator?.name}`,
        ...r,
      }))
    }
    return result
  } catch (error) {
    throw error
  }
}

export default FollowerService
