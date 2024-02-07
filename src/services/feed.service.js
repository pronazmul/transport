import FeedConst from '../consts/feed.const.js'
import ProjectionConst from '../consts/projection.const.js'
import GlobalUtils from '../utils/global.utils.js'
import MongooseUtils from '../utils/mongoose.utils.js'
import FeedModel from './../models/Feed.model.js'

// Initialize Module
const FeedService = {}

FeedService.find = async (reqQuery) => {
  try {
    const { page, limit, skip, sortBy, sortOrder } =
      GlobalUtils.calculatePagination(reqQuery)

    const query = MongooseUtils.searchCondition(
      reqQuery,
      FeedConst.searchOptions,
      FeedConst.filterOptions
    )
    const sort = { [sortBy]: sortOrder }

    const result = await FeedModel.find(query, ProjectionConst.feed)
      .populate({
        path: 'creator',
        select: ProjectionConst.userFollower,
      })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await FeedModel.countDocuments(query)

    return { data: result, meta: { page, limit, total } }
  } catch (error) {
    throw error
  }
}

FeedService.create = async (payload) => {
  try {
    let newData = new FeedModel(payload)
    let result = await newData.save()
    return result
  } catch (error) {
    throw error
  }
}

FeedService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await FeedModel.findOneAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

FeedService.updateOneById = async (id, payload) => {
  try {
    let query = { _id: id }
    let options = { new: true }
    let result = await FeedModel.findOneAndUpdate(query, payload, options)
    return result
  } catch (error) {
    throw error
  }
}

export default FeedService
