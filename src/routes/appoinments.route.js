// External Modules:
import { Router } from 'express'

// Middlewares
import AppoinmentController from './../controllers/appoinment.controller.js'

const router = Router()

/**
 * @description Create New Appoinment
 * @Route [GET]- /api/appoinments
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/', AppoinmentController.create)

/**
 * @description Retrive All Appoinments
 * @Route [GET]- /api/appoinments
 * @Access protected - []
 * @returns {Array} - All Filtered Data Array
 */
router.get('/:userId', AppoinmentController.find)

// Exports
export default router
