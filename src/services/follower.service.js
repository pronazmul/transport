import FollowerConst from '../consts/follower.const.js'
import ProjectionConst from '../consts/projection.const.js'
import FollowerModel from '../models/Follower.model.js'
import GlobalUtils from '../utils/global.utils.js'
import MongooseUtils from '../utils/mongoose.utils.js'

// Initialize Module
const FollowerService = {}

FollowerService.find = async (reqQuery) => {
  try {
    const { page, limit, skip, sortBy, sortOrder } =
      GlobalUtils.calculatePagination(reqQuery)

    const query = MongooseUtils.searchCondition(
      reqQuery,
      FollowerConst.searchOptions,
      FollowerConst.filterOptions
    )
    const sort = { [sortBy]: sortOrder }
    const result = await FollowerModel.find(query, ProjectionConst.follower)
      .populate({
        path: 'user',
        select: ProjectionConst.userFollower,
      })
      .populate({
        path: 'creator',
        select: ProjectionConst.userFollower,
      })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await FollowerModel.countDocuments(query)

    return { data: result, meta: { page, limit, total } }
  } catch (error) {
    throw error
  }
}

FollowerService.create = async (creator, user) => {
  try {
    let exists = await FollowerModel.findOne({
      creator: creator,
      user: user,
    })
    if (exists) throw new Error('User Already Followed!')

    let newRole = new FollowerModel({ creator: creator, user: user })
    let result = await newRole.save()
    return result
  } catch (error) {
    throw error
  }
}

FollowerService.deleteOneById = async (creator, user) => {
  try {
    let query = { creator: creator, user: user }
    let result = await FollowerModel.findOneAndDelete(query)
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
