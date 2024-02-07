import NoteModel from '../models/Note.model.js'

// Initialize Module
const NoteService = {}

NoteService.find = async (placeId, followings) => {
  try {
    const result = await NoteModel.find({
      place: placeId,
      user: { $in: followings },
    })
      .populate({
        path: 'user',
        select: '_id',
      })
      .lean()

    return result
  } catch (error) {
    throw error
  }
}

NoteService.findOneByUserAndPlace = async (placeId, userId) => {
  try {
    const result = await NoteModel.findOne({
      place: placeId,
      user: userId,
    }).lean()

    return result
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

NoteService.deleteByUserAndPlace = async (user, place) => {
  try {
    let query = { user, place }
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

export default NoteService
