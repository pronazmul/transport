// External Modules:
import { Router } from 'express'

// Middlewares
import NoteController from '../controllers/note.controller.js'

const router = Router()

/**
 * @description All Notes by placeId
 * @Route [GET]- /api/notes/:placeId
 * @Access protected - []
 * @returns {Array} - All Data
 */
router.get('/:placeId', NoteController.allNotes)

/**
 * @description Add Note By placeId
 * @Route [POST]- /api/notes/:placeId
 * @Access protected - []
 * @returns {Object} - Single Object
 */
router.post('/:placeId', NoteController.createNote)

/**
 * @description Update Note By noteId
 * @Route [PUT]- /api/notes/:noteId
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.put('/:noteId', NoteController.updateNote)

/**
 * @description Delete Note By noteId
 * @Route [DELETE]- /api/notes/:noteId
 * @Access protected - []
 * @returns {Array} - Single Object
 */
router.delete('/:noteId', NoteController.deleteNote)

// Exports
export default router
