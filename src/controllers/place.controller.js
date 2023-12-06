// External Modules:
import createError from 'http-errors'
import axios from 'axios'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'

// Initialize Module
const PlaceController = {}

PlaceController.allPlaces = async (req, res, next) => {
  try {
    let url = 'https://api.foursquare.com/v3/places/search'

    if (Object.entries(req.query)) {
      let queryParams = Object.entries(req.query)
        .map((i) => i.join('='))
        .join('&')
      url = `${url}?${queryParams}`
    }

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        Authorization: 'fsq3QRDH6+eS3mEOmdIVepT5DNWmmvfPQSbkXTpk6nx2PLc=',
      },
    }

    let result = await axios.request(config)

    // Format Cateogry Icon Response - https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_88.png
    let formatted = result?.data?.results.map((item) => ({
      ...item,
      categories: item.categories.map((i) => ({
        ...i,
        icon: `${i.icon.prefix}88${i.icon.suffix}`,
      })),
    }))

    let response = GlobalUtils.fromatResponse(
      formatted,
      'All Places Fetch Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

PlaceController.singlePlace = async (req, res, next) => {
  try {
    let placeUrl = `https://api.foursquare.com/v3/places/${req.params.id}`
    let photoUrl = `https://api.foursquare.com/v3/places/${req.params.id}/photos`

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

    let response = GlobalUtils.fromatResponse(
      formatted,
      'Single Place Fetech Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

PlaceController.placePhotos = async (req, res, next) => {
  try {
    let photoUrl = `https://api.foursquare.com/v3/places/${req.params.id}/photos`

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: photoUrl,
      headers: {
        Authorization: 'fsq3QRDH6+eS3mEOmdIVepT5DNWmmvfPQSbkXTpk6nx2PLc=',
      },
    }
    let photos = await axios.request({ ...config })
    let data = photos.data.map(
      (item) => `${item.prefix}${item.height}x${item.width}${item.suffix}`
    )
    let response = GlobalUtils.fromatResponse(
      data,
      'Places Photos Fetch Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default PlaceController