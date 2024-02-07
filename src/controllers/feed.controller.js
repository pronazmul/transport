// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FeedService from './../services/feed.service.js'

// Initialize Module
const FeedController = {}

FeedController.allFeed = async (req, res, next) => {
  try {
    let result = await FeedService.find(req?.query)

    let response = GlobalUtils.fromatResponse(
      result?.data,
      'All Feeds Fetch success',
      result?.meta
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FeedController.createFeed = async (req, res, next) => {
  try {
    let user = req?.user?._id
    let payload = { user: user, ...req.body }
    let result = await FeedService.create(payload)
    let response = GlobalUtils.fromatResponse(result, 'Feed Create Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FeedController.updateFeed = async (req, res, next) => {
  try {
    let id = req.params.id
    let payload = { ...req.body }
    let result = await FeedService.updateOneById(id, payload)
    let response = GlobalUtils.fromatResponse(result, 'Feed Update Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FeedController.deleteFeed = async (req, res, next) => {
  try {
    let id = req.params.id
    let result = await FeedService.deleteOneById(id)
    let response = GlobalUtils.fromatResponse(result, 'Feed Delete Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default FeedController
