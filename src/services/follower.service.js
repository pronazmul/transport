import FollowerModel from '../models/Follower.model.js'

// Initialize Module
const FollowerService = {}

FollowerService.find = async (creatorId) => {
  try {
    const result = await FollowerModel.find({ creator: creatorId })
      .populate({
        path: 'creator',
        select: 'name email city country avatar followers following',
      })
      .populate({
        path: 'user',
        select: 'name email city country avatar followers following',
      })
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

export default FollowerService
