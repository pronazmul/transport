import FavouriteModel from '../models/Favourite.model.js'

// Initialize Module
const ShareService = {}

ShareService.find = async (userId) => {
  try {
    const result = await FavouriteModel.find({ user: userId })
      .populate({
        path: 'user',
        select: 'name email bio city country avatar followers following',
      })
      .lean()
    return result
  } catch (error) {
    throw error
  }
}

ShareService.create = async (placeId, userId) => {
  try {
    let newData = new FavouriteModel({ place: placeId, user: userId })
    let result = await newData.save()
    return result
  } catch (error) {
    throw error
  }
}

ShareService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await FavouriteModel.findByIdAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

export default ShareService
