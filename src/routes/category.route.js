// External Modules:
import { Router } from 'express'

// Middlewares
import CategoryController from './../controllers/category.controller.js'
import ValidateMiddleware from './../middlewares/validate.middleware.js'
import CategorySchema from './../schemas/category.schema.js'

const router = Router()
const { validateRequest } = ValidateMiddleware

/**
 * @description All Categories
 * @Route [GET]- /api/categories/:id
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get(
  '/',
  validateRequest(CategorySchema.find),
  CategoryController.allCategories
)

/**
 * @description Create Category
 * @Route [POST]- /api/categories
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post(
  '/',
  validateRequest(CategorySchema.create),
  CategoryController.createCategory
)

/**
 * @description Update Category By ID
 * @Route [PUT]- /api/categories/:id
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.put(
  '/:id',
  validateRequest(CategorySchema.update),
  CategoryController.updateCategory
)

/**
 * @description Delete Category By ID
 * @Route [DELETE]- /api/categories/:id
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.delete('/:id', CategoryController.deleteCategory)

// Exports
export default router
