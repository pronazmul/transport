// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FollowerService from '../services/follower.service.js'
import NoteService from '../services/note.service.js'

// Initialize Module
const NoteController = {}

NoteController.allNotes = async (req, res, next) => {
  try {
    let userID = req?.user?._id
    let placeId = req.params.placeId
    let followings = await FollowerService.followedByIds(userID)

    if (followings) {
      followings = followings.map((f) => f.creator)
    }

    let result = await NoteService.find(placeId, followings)
    let response = GlobalUtils.fromatResponse(result, 'All Notes Fetch Success')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

NoteController.createNote = async (req, res, next) => {
  try {
    if (!req?.body?.note) return next(createError(400, 'Note is Required!'))

    let userID = req?.user?._id
    let placeId = req.params.placeId
    let payload = { user: userID, place: placeId, note: req?.body?.note }

    let result = await NoteService.create(payload)
    let response = GlobalUtils.fromatResponse(result, 'Note Create Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

NoteController.updateNote = async (req, res, next) => {
  try {
    if (!req?.body?.note) return next(createError(400, 'Note is Required!'))

    let userID = req?.user?._id
    let noteId = req.params.noteId
    let payload = { note: req?.body?.note }

    let result = await NoteService.updateOneById(noteId, userID, payload)
    let response = GlobalUtils.fromatResponse(result, 'Note Update Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

NoteController.deleteNote = async (req, res, next) => {
  try {
    let userID = req?.user?._id
    let noteId = req.params.noteId

    let result = await NoteService.deleteOneById(noteId, userID)
    let response = GlobalUtils.fromatResponse(result, 'Note Delete Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default NoteController
