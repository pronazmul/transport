import NoteConst from '../consts/note.const.js'
import ProjectionConst from '../consts/projection.const.js'
import NoteModel from '../models/Note.model.js'
import GlobalUtils from '../utils/global.utils.js'
import MongooseUtils from '../utils/mongoose.utils.js'

// Initialize Module
const NoteService = {}

NoteService.find = async (reqQuery) => {
  try {
    const { page, limit, skip, sortBy, sortOrder } =
      GlobalUtils.calculatePagination(reqQuery)

    const query = MongooseUtils.searchCondition(
      reqQuery,
      NoteConst.searchOptions,
      NoteConst.filterOptions
    )
    const sort = { [sortBy]: sortOrder }

    const result = await NoteModel.find(query, ProjectionConst.note)
      .populate({
        path: 'user',
        select: ProjectionConst.user,
      })
      // .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await NoteModel.countDocuments(query)

    return { data: result, meta: { page, limit, total } }
  } catch (error) {
    throw error
  }
}

NoteService.create = async (payload) => {
  try {
    let exists = await NoteModel.findOne({
      place: payload?.place,
      user: payload?.user,
    })
    if (exists) throw new Error('Note Already Added!')

    let newData = new NoteModel(payload)
    let result = await newData.save()
    return result
  } catch (error) {
    throw error
  }
}

NoteService.deleteOneById = async (id, userId) => {
  try {
    let query = { _id: id, user: userId }
    let result = await NoteModel.findOneAndDelete(query)
    return result
  } catch (error) {
    throw error
  }
}

NoteService.updateOneById = async (id, userId, payload) => {
  try {
    let query = { _id: id, user: userId }
    let options = { new: true }
    let result = await NoteModel.findOneAndUpdate(query, payload, options)
    return result
  } catch (error) {
    throw error
  }
}

NoteService.findOneByPlaceAndUser = async (place, user) => {
  try {
    const result = await NoteModel.find({
      place: place,
      user: user,
    }).lean()
    return result
  } catch (error) {
    throw error
  }
}

export default NoteService
