import GlobalUtils from '../utils/global.utils.js'
import MongooseUtils from '../utils/mongoose.utils.js'
import ProjectionConst from '../consts/projection.const.js'
import FeedbackModel from './../models/Feedback.model.js'
import FeedbackConst from '../consts/feedback.const.js'

// Initialize Module
const FeedbackService = {}

FeedbackService.create = async (payload) => {
  try {
    let newData = new FeedbackModel(payload)
    let data = await newData.save()
    return data
  } catch (error) {
    throw error
  }
}

FeedbackService.findOneById = async (id) => {
  try {
    let query = { _id: id }
    let user = await FeedbackModel.findById(query, ProjectionConst.feedback)
    return user
  } catch (error) {
    throw error
  }
}

FeedbackService.find = async (reqQuery) => {
  const { page, limit, skip, sortBy, sortOrder } =
    GlobalUtils.calculatePagination(reqQuery)

  const query = MongooseUtils.searchCondition(
    reqQuery,
    FeedbackConst.searchOptions,
    FeedbackConst.filterOptions
  )
  const sort = { [sortBy]: sortOrder }
  try {
    const users = await FeedbackModel.find(query, ProjectionConst.feedback)
      .sort(sort)
      .skip(skip)
      .limit(limit)
    const total = await FeedbackModel.countDocuments(query)
    return { data: users, meta: { page, limit, total } }
  } catch (error) {
    throw error
  }
}

FeedbackService.updateOneById = async (id, payload) => {
  try {
    let query = { _id: id }
    let options = { new: true, select: ProjectionConst.feedback }
    const result = await FeedbackModel.findOneAndUpdate(query, payload, options)
    return result
  } catch (error) {
    throw error
  }
}

FeedbackService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await FeedbackModel.findOneAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

export default FeedbackService
