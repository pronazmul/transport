import FavouriteConst from '../consts/favourite.const.js'
import ProjectionConst from '../consts/projection.const.js'
import GlobalUtils from '../utils/global.utils.js'
import MongooseUtils from '../utils/mongoose.utils.js'
import FavouriteModel from './../models/Favourite.model.js'

// Initialize Module
const FavouriteService = {}

FavouriteService.find = async (reqQuery) => {
  try {
    const { page, limit, skip, sortBy, sortOrder } =
      GlobalUtils.calculatePagination(reqQuery)

    const query = MongooseUtils.searchCondition(
      reqQuery,
      FavouriteConst.searchOptions,
      FavouriteConst.filterOptions
    )
    const sort = { [sortBy]: sortOrder }

    const result = await FavouriteModel.find(query, ProjectionConst.favourite)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await FavouriteModel.countDocuments(query)

    return { data: result, meta: { page, limit, total } }
  } catch (error) {
    throw error
  }
}

FavouriteService.create = async (place, user) => {
  try {
    let exists = await FavouriteModel.findOne({ place: place, user: user })
    if (exists) throw new Error('Place Already Added To Favourite!')

    let newData = new FavouriteModel({ place: place, user: user })
    let result = await newData.save()
    return result
  } catch (error) {
    throw error
  }
}

FavouriteService.deleteOneById = async (place, user) => {
  try {
    let query = { place: place, user: user }
    let result = await FavouriteModel.findOneAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

FavouriteService.followedByActivity = async (usersList) => {
  try {
    let result = await FavouriteModel.find(
      { user: { $in: usersList } },
      '-_id user place'
    )
      .populate({
        path: 'user',
        select: 'name bio avatar',
      })
      .limit(5)
      .lean()

    if (result) {
      result = result.map((r) => ({
        message: `${r?.user?.name} favourites a place`,
        ...r,
      }))
    }
    return result
  } catch (error) {
    throw error
  }
}

FavouriteService.favouritePlacesIdsByUser = async (id) => {
  try {
    let query = { user: id }
    let result = await FavouriteModel.find(query, '-_id place').lean()
    if (result) result = result.map((r) => r.place)
    return result
  } catch (error) {
    throw error
  }
}

FavouriteService.favouriteCountByPlaceID = async (id) => {
  try {
    let query = { place: id }
    let result = await FavouriteModel.countDocuments(query)
    return result
  } catch (error) {
    throw error
  }
}
export default FavouriteService
