// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import CategoryService from './../services/category.service.js'

// Initialize Module
const CategoryController = {}

CategoryController.allCategories = async (req, res, next) => {
  try {
    let result = await CategoryService.find(req?.query)
    let response = GlobalUtils.fromatResponse(
      result?.data,
      'All Categories Fetch success',
      result?.meta
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

CategoryController.createCategory = async (req, res, next) => {
  try {
    let payload = { ...req.body }
    let result = await CategoryService.create(payload)
    let response = GlobalUtils.fromatResponse(
      result,
      'Category Create Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

CategoryController.updateCategory = async (req, res, next) => {
  try {
    // Check Anythings to update
    if (!Object.entries(req.body).length)
      return next(createError(400, 'Nothing to Update'))

    let payload = { ...req.body }
    let result = await CategoryService.updateOneById(req.params?.id, payload)
    let response = GlobalUtils.fromatResponse(
      result,
      'Category Update Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

CategoryController.deleteCategory = async (req, res, next) => {
  try {
    let result = await CategoryService.deleteOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(
      result,
      'Category Delete Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default CategoryController
