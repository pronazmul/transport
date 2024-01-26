// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FollowerService from '../services/follower.service.js'

// Initialize Module
const FollowerController = {}

FollowerController.find = async (req, res, next) => {
  try {
    let creatorId = req.params.creatorId
    let result = await FollowerService.find(
      creatorId,
      req?.query?.type,
      req?.user
    )
    let response = GlobalUtils.fromatResponse(
      result,
      'All Followings Fetch Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FollowerController.follow = async (req, res, next) => {
  try {
    let creatorId = req.params.creatorId
    let userId = req.user._id

    // User Can't Follow himself
    if (creatorId === userId)
      return next(createError(422, "User Can't follow himself!"))

    let data = await FollowerService.create(creatorId, userId)
    let response = GlobalUtils.fromatResponse(data, 'User Followed Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

FollowerController.unfollow = async (req, res, next) => {
  try {
    let data = await FollowerService.deleteOneById(req.params.id, req.user._id)
    let response = GlobalUtils.fromatResponse(data, 'Followers Delete Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default FollowerController
