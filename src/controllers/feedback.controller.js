// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FeedbackService from '../services/feedback.service.js'
import SlackUtils from '../utils/slack.utils.js'

// Initialize Module
const FeedbackController = {}

FeedbackController.getSingleFeedback = async (req, res, next) => {
  try {
    let data = await FeedbackService.findOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(
      data,
      'Single Feedback Fetch success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FeedbackController.allFeedbacks = async (req, res, next) => {
  try {
    let result = await FeedbackService.find(req.query)
    let response = GlobalUtils.fromatResponse(
      result?.data,
      'All Feedbacks Fetch success',
      result?.meta
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FeedbackController.createFeedback = async (req, res, next) => {
  try {
    let data = req.body

    if (req?.files?.length) {
      data.files = req.files.map((f) => f.filename)
    }

    if (data?.browserDetails) {
      data.browserDetails = JSON.parse(data?.browserDetails)
    }
    if (data?.deviceDetails) {
      data.deviceDetails = JSON.parse(data?.deviceDetails)
    }

    await SlackUtils.postMessage(
      req?.body?.requestType,
      req?.body?.comment,
      req.files
    )

    console.log({ body: req.body, files: req.files })

    res.status(200).json({ body: req.body, files: req.files })

    // const result = await FeedbackService.create(data)
    // let response = GlobalUtils.fromatResponse(
    //   result,
    //   'Feedback Create Success!'
    // )
    // res.status(200).json(response)
  } catch (error) {
    console.log({ error })
    next(createError(500, error))
  }
}

FeedbackController.deleteFeedback = async (req, res, next) => {
  try {
    let id = req.params.id
    let result = FeedbackService.deleteOneById(id)
    let response = GlobalUtils.fromatResponse(result, 'Feedback Delete Success')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default FeedbackController
