// External Modules:
import { Router } from 'express'

// Middlewares
import ValidateMiddleware from '../middlewares/validate.middleware.js'
import FileMiddleware from '../middlewares/file.middlewares.js'
import config from '../config/index.js'
import FeedbackController from '../controllers/feedback.controller.js'

const router = Router()
const { validateRequest } = ValidateMiddleware

/**
 * @description Create Feedback
 * @Route [POST]- /api/v1/feedbacks
 * @Access public
 * @returns {Object} - Created Feedback Response
 */
router.post(
  '/',
  // FileMiddleware.localUpload(['image', 'video'], config.feedback_directory),
  FileMiddleware.s3Upload(['image', 'video'], config.feedback_directory),
  FeedbackController.createFeedback
)

/**
 * @description Delete Feedback
 * @Route [DELETE]- /api/v1/feedbacks/:id
 * @Access protected - [admin]
 * @returns {Object} - Deleted Status.
 */
router.delete('/:id', FeedbackController.deleteFeedback)

/**
 * @description Retrive Single Feedback
 * @Route [GET]- /api/v1/feedbacks/:id
 * @Access protected - [admin]
 * @returns {Object} - Single Feedback Object
 */
router.get('/:id', FeedbackController.getSingleFeedback)

/**
 * @description Retrive All Feedbacks
 * @Route [GET]- /api/v1/feedbacks
 * @Access protected - [admin]
 * @returns {Array} - All Feedbacks Array.
 */
router.get(
  '/',
  // validateRequest(UserSchema.fetchAllUser),
  FeedbackController.allFeedbacks
)

// Exports
export default router
