// External Modules:
import { Router } from 'express'

// Middlewares
import RoleController from '../controllers/role.controller.js'

const router = Router()

/**
 * @description Create New Role
 * @Route [GET]- /api/roles
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/', RoleController.create)
/**
 * @description Retrive Single Data By ID
 * @Route [GET]- /api/roles/:id
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.get('/:id', RoleController.findOneById)

/**
 * @description Retrive All Data
 * @Route [GET]- /api/roles
 * @Access protected - []
 * @returns {Array} - All Filtered Data Array
 */
router.get('/', RoleController.find)

/**
 * @description Update Single Data By ID
 * @Route [PUT]- /api/roles/:id
 * @Access protected - []
 * @returns {Object} - deleted Object
 */
router.put('/:id', RoleController.updateOneById)

/**
 * @description Delete Single Data By ID
 * @Route [Delete]- /api/roles/:id
 * @Access protected - []
 * @returns {Object} - deleted Object
 */
router.delete('/:id', RoleController.deleteOneById)

// Exports
export default router
