// External Modules:
import { Router } from 'express'

// Middlewares
import VehicaleController from '../controllers/vehicale.controller.js'

const router = Router()

/**
 * @description Create New Date
 * @Route [GET]- /api/vehicales
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/', VehicaleController.create)
/**
 * @description Retrive Single Data By ID
 * @Route [GET]- /api/vehicales/:id
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.get('/:id', VehicaleController.findOneById)

/**
 * @description Retrive All Data
 * @Route [GET]- /api/vehicales
 * @Access protected - []
 * @returns {Array} - All Filtered Data Array
 */
router.get('/', VehicaleController.find)

/**
 * @description Update Single Data By ID
 * @Route [PUT]- /api/vehicales/:id
 * @Access protected - []
 * @returns {Object} - deleted Object
 */
router.put('/:id', VehicaleController.updateOneById)

/**
 * @description Delete Single Data By ID
 * @Route [Delete]- /api/vehicales/:id
 * @Access protected - []
 * @returns {Object} - deleted Object
 */
router.delete('/:id', VehicaleController.deleteOneById)

// Exports
export default router
