// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FollowerService from '../services/follower.service.js'
import NoteService from '../services/note.service.js'
import config from '../config/index.js'

// Initialize Module
const NoteController = {}

NoteController.allNotes = async (req, res, next) => {
  try {
    let authUser = config?.auth?._id

    // Load all notes of auth user and auth user followed users
    let user = [authUser]
    let followings = await FollowerService.followedByIds(authUser)
    if (followings) {
      followings?.forEach((f) => {
        user.push(f.creator)
      })
    }

    let result = await NoteService.find({ ...req.query, user })

    let response = GlobalUtils.fromatResponse(
      result?.data,
      'All Notes Fetch Success',
      result?.meta
    )
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
    let noteId = req.params.noteId
    let userID = req?.user?._id

    let result = await NoteService.deleteOneById(noteId, userID)
    let response = GlobalUtils.fromatResponse(result, 'Note Delete Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default NoteController
