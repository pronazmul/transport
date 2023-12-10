// External Modules:
import createError from 'http-errors'
import axios from 'axios'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FavouriteService from '../services/favourite.service.js'

// Initialize Module
const ShareController = {}

ShareController.singleSharedById = async (req, res, next) => {
  try {
    let userId = req.params.userId
    let result = await FavouriteService.find(userId)

    // Genereate Place & Photos
    let resultWithPlace = []

    for (let item of result) {
      let placeUrl = `https://api.foursquare.com/v3/places/${item.place}`
      let photoUrl = `https://api.foursquare.com/v3/places/${item.place}/photos`
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: placeUrl,
        headers: {
          Authorization: 'fsq3QRDH6+eS3mEOmdIVepT5DNWmmvfPQSbkXTpk6nx2PLc=',
        },
      }

      let place = await axios.request(config)
      let photos = await axios.request({ ...config, url: photoUrl })

      let formatted = {
        ...place.data,
        categories: place.data.categories.map((i) => ({
          ...i,
          icon: `${i.icon.prefix}88${i.icon.suffix}`,
        })),
        photos: photos.data.map(
          (item) => `${item.prefix}${item.height}x${item.width}${item.suffix}`
        ),
      }

      resultWithPlace.push({ ...item, place: formatted })
    }

    let response = GlobalUtils.fromatResponse(
      resultWithPlace,
      'All Bookmark Fetch Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

ShareController.sharePlace = async (req, res, next) => {
  try {
    let placeId = req.params.placeId
    let userId = req.user._id

    let data = await FavouriteService.create(placeId, userId)
    let response = GlobalUtils.fromatResponse(data, 'Add To Bookmark Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default ShareController