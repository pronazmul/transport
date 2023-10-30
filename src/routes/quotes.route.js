// External Modules:
import { Router } from 'express'

// Middlewares
import QuotesController from '../controllers/qoutes.controller.js'

const router = Router()

//Super Visa Coverages
router.get('/superVisa/single', QuotesController.superVisaSingleCoverage)
router.get('/superVisa/couple', QuotesController.superVisaCoupleCoverage)

// International Student Coverages
router.get('/student/single', QuotesController.studentSingleCoverage)
router.get('/student/couple', QuotesController.studentCoupleCoverage)
router.get('/student/family', QuotesController.studentFamilyCoverage)

//Single Trip coverave
router.get('/singleTrip/single', QuotesController.singleTripSingleCoverage)
router.get('/singleTrip/couple', QuotesController.singleTripCoupleCoverage)
router.get('/singleTrip/family', QuotesController.singleTripFamilyCoverage)

//Multi Trip Coverage
router.get('/multiTrip/single', QuotesController.multiTripSingleCoverage)

// Exports
export default router
