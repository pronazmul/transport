import FollowerModel from '../models/Follower.model.js'

// Initialize Module
const FollowerService = {}

FollowerService.find = async (creatorId) => {
  try {
    const result = await FollowerModel.find({ creator: creatorId })
      .populate({
        path: 'user',
        select: 'name email city country avatar followers following',
      })
      .lean()
    return result
  } catch (error) {
    throw error
  }
}

FollowerService.create = async (creatorId, userId) => {
  try {
    let newRole = new FollowerModel({ creator: creatorId, user: userId })
    let result = await newRole.save()
    return result
  } catch (error) {
    throw error
  }
}

FollowerService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await FollowerModel.findByIdAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

FollowerService.followedByIds = async (id) => {
  try {
    let query = { user: id }
    let result = await FollowerModel.find(query, '-_id creator').lean()
    return result
  } catch (error) {
    throw error
  }
}

export default FollowerService
