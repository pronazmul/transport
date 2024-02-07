import ProjectionConst from '../consts/projection.const.js'
import GlobalUtils from '../utils/global.utils.js'
import MongooseUtils from '../utils/mongoose.utils.js'
import CategoryModel from './../models/Category.model.js'
import CategoryConst from './../consts/category.const.js'

// Initialize Module
const CategoryService = {}

CategoryService.find = async (reqQuery) => {
  try {
    const { page, limit, skip, sortBy, sortOrder } =
      GlobalUtils.calculatePagination(reqQuery)

    const query = MongooseUtils.searchCondition(
      reqQuery,
      CategoryConst.searchOptions,
      CategoryConst.filterOptions
    )
    const sort = { [sortBy]: sortOrder }

    const result = await CategoryModel.find(query, ProjectionConst.category)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await CategoryModel.countDocuments(query)

    return { data: result, meta: { page, limit, total } }
  } catch (error) {
    throw error
  }
}

CategoryService.create = async (payload) => {
  try {
    let newData = new CategoryModel(payload)
    let result = await newData.save()
    return result
  } catch (error) {
    throw error
  }
}

CategoryService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await CategoryModel.findOneAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

CategoryService.updateOneById = async (id, payload) => {
  try {
    let query = { _id: id }
    let options = { new: true }
    let result = await CategoryModel.findOneAndUpdate(query, payload, options)
    return result
  } catch (error) {
    throw error
  }
}

export default CategoryService
