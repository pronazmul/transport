import UserConst from '../consts/user.const.js'
import GlobalUtils from '../utils/global.utils.js'
import MongooseUtils from '../utils/mongoose.utils.js'
import UserModel from './../models/User.model.js'
import BookmarkModel from './../models/Bookmark.model.js'
import FollowerModel from './../models/Follower.model.js'
import FavouriteModel from './../models/Favourite.model.js'

// Initialize Module
const UserService = {}

UserService.create = async (payload) => {
  try {
    let NewData = new UserModel(payload)

    let data = await NewData.save()
    let query = { _id: NewData._id }
    data = await UserModel.findOne(query).lean()

    delete data?.password
    return data
  } catch (error) {
    throw error
  }
}

UserService.findOneByUserName = async (email) => {
  try {
    let query = { email }
    let user = await UserModel.findOne(query).lean()
    return user
  } catch (error) {
    throw createHttpError(401, 'Authentication Failed!')
  }
}

UserService.findOneById = async (id, auth) => {
  try {
    let query = { _id: id }
    let user = await UserModel.findById(query, {
      password: 0,
      followers: 0,
      following: 0,
    }).lean()

    if (user) {
      user.bookmarkCount = await BookmarkModel.countDocuments({
        user: user._id,
      })
      user.followerCount = await FollowerModel.countDocuments({
        creator: user._id,
      })
      user.followingsCount = await FollowerModel.countDocuments({
        user: user._id,
      })
      user.favouriteCount = await FavouriteModel.countDocuments({
        user: user._id,
      })
      user.followed = Boolean(
        await FollowerModel.countDocuments({
          creator: auth?._id,
          user: user._id,
        })
      )
    }

    return user
  } catch (error) {
    throw error
  }
}

UserService.find = async (reqQuery, user) => {
  try {
    const { page, limit, skip, sortBy, sortOrder } =
      GlobalUtils.calculatePagination(reqQuery)

    const query = MongooseUtils.searchCondition(
      reqQuery,
      UserConst.searchOptions,
      UserConst.filterOptions
    )
    const sort = { [sortBy]: sortOrder }
    const result = await UserModel.find(query, {
      password: 0,
      following: 0,
      followers: 0,
    })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await UserModel.countDocuments(query)

    // Add (bookmark, follower, favourite) count on output
    for (let u of result) {
      u.bookmarkCount = await BookmarkModel.countDocuments({
        user: u._id,
      })
      u.followerCount = await FollowerModel.countDocuments({
        creator: u._id,
      })
      u.favouriteCount = await FavouriteModel.countDocuments({
        user: u._id,
      })
      u.followed = Boolean(
        await FollowerModel.countDocuments({
          creator: user?._id,
          user: u._id,
        })
      )
    }

    return { data: result, meta: { page, limit, total } }
  } catch (error) {
    throw error
  }
}

UserService.updateOneById = async (id, payload) => {
  try {
    let query = { _id: id }
    let options = { new: true, select: { password: 0 } }
    console.log({ id, payload })
    const result = await UserModel.findOneAndUpdate(query, payload, options)
    return result
  } catch (error) {
    throw error
  }
}

UserService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await UserModel.findOneAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

export default UserService
