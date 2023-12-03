import FavouriteModel from './../models/Favourite.model.js'

// Initialize Module
const FavouriteService = {}

FavouriteService.find = async (userId) => {
  try {
    const result = await FavouriteModel.find({ user: userId })
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

FavouriteService.create = async (placeId, userId) => {
  try {
    let newData = new FavouriteModel({ place: placeId, user: userId })
    let result = await newData.save()
    return result
  } catch (error) {
    throw error
  }
}

FavouriteService.deleteOneById = async (id) => {
  try {
    let query = { _id: id }
    let result = await FavouriteModel.findByIdAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

export default FavouriteService
