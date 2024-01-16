import { Router } from 'express'
import AuthRoutes from './auth.route.js'
import UserRoutes from './user.route.js'
import FollowerRoutes from './follower.route.js'
import PlaceRoutes from './place.route.js'
import BookmarkRoute from './bookmark.route.js'
import FavouriteRoute from './favourite.route.js'
import NoteRoute from './note.route.js'
import ShareRoute from './share.route.js'
import ActivityRoute from './activity.route.js'

// Middleware
import AuthMiddleware from '../middlewares/auth.middlewares.js'

const router = Router()

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Application Routes
router.use('/api/v1/auth', AuthRoutes)
router.use('/api/v1/users', AuthMiddleware.authenticate, UserRoutes)
router.use('/api/v1/followers', AuthMiddleware.authenticate, FollowerRoutes)
router.use('/api/v1/places', AuthMiddleware.authenticate, PlaceRoutes)
router.use('/api/v1/bookmarks', AuthMiddleware.authenticate, BookmarkRoute)
router.use('/api/v1/favourites', AuthMiddleware.authenticate, FavouriteRoute)
router.use('/api/v1/notes', AuthMiddleware.authenticate, NoteRoute)
router.use('/api/v1/shares', AuthMiddleware.authenticate, ShareRoute)
router.use('/api/v1/activities', AuthMiddleware.authenticate, ActivityRoute)

// Module Exports
export default router
