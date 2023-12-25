import axios from 'axios'
// -----------
import { Router } from 'express'
import AuthRoutes from './auth.route.js'
import UserRoutes from './user.route.js'
import FollowerRoutes from './follower.route.js'
import PlaceRoutes from './place.route.js'
import BookmarkRoute from './bookmark.route.js'
import FavouriteRoute from './favourite.route.js'
import ShareRoute from './share.route.js'
import ActivityRoute from './activity.route.js'

// Middleware
import AuthMiddleware from '../middlewares/auth.middlewares.js'

const router = Router()

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))
router.use('/test', (_req, res) => {
  // Places API
  const placesUrl = 'https://api.foursquare.com/v3/places/search'
  const placesConfig = {
    method: 'get',
    maxBodyLength: Infinity,
    url: placesUrl,
    headers: {
      Authorization: 'fsq3QRDH6+eS3mEOmdIVepT5DNWmmvfPQSbkXTpk6nx2PLc=',
    },
  }

  // Venues API
  const venuesUrl = 'https://api.foursquare.com/v3/venues/search'
  const venuesConfig = {
    method: 'get',
    url: `${venuesUrl}?v=20230101`,
    headers: {
      Authorization: 'fsq3QRDH6+eS3mEOmdIVepT5DNWmmvfPQSbkXTpk6nx2PLc=',
      accept: 'application/json',
    },
  }

//   axios
//     .request(placesConfig)
//     .then(function (response) {
//       res.status(200).json(response.data)
//     })
//     .catch(function (error) {
//       res.status(500).json(error)
//     })

  axios
    .request(venuesConfig)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(500).json(error)
    })
})

// Application Routes
router.use('/api/v1/auth', AuthRoutes)
router.use('/api/v1/users', AuthMiddleware.authenticate, UserRoutes)
router.use('/api/v1/followers', AuthMiddleware.authenticate, FollowerRoutes)
router.use('/api/v1/places', AuthMiddleware.authenticate, PlaceRoutes)
router.use('/api/v1/bookmarks', AuthMiddleware.authenticate, BookmarkRoute)
router.use('/api/v1/favourites', AuthMiddleware.authenticate, FavouriteRoute)
router.use('/api/v1/shares', AuthMiddleware.authenticate, ShareRoute)
router.use('/api/v1/activities', AuthMiddleware.authenticate, ActivityRoute)

// Module Exports
export default router
