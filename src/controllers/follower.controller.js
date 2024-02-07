// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FollowerService from '../services/follower.service.js'

// Initialize Module
const FollowerController = {}

FollowerController.find = async (req, res, next) => {
  try {
    let type

    // Check Search Type as Follower (If Search Type is follower)
    if (req?.query?.type === 'follower') {
      req.query['creator'] = req.query?.user
      type = req.query.type
      delete req.query.type
      delete req.query.user
    }

    // Check Search Type as Following
    if (req?.query?.type === 'following') {
      req.query['user'] = req.query?.user
      type = req.query.type
      delete req.query.type
    }

    let result = await FollowerService.find(req.query)
    let response = GlobalUtils.fromatResponse(
      result?.data,
      `All ${type}s Fetch Success`,
      result?.meta
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
    let creator = req.params.creatorId
    let user = req.user._id
    let data = await FollowerService.deleteOneById(creator, user)
    let response = GlobalUtils.fromatResponse(data, 'Followers Delete Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default FollowerController
