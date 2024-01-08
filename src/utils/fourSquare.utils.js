import createHttpError from 'http-errors'
import config from './../config/index.js'
import axios from 'axios'
import GlobalUtils from './global.utils.js'

// Initiazlize Object
const FourSquareUtils = {}

/**
 * Create Query String from req.Query Object
 * @param {string} - Rquest URL
 * @param {object} [query={ radius: 5000, categories: 13000, limit:20}] - Key Value Pair Like Object
 * @returns {string} - http://abcd.com?radius=5000&categories=13000&limit=20
 */
FourSquareUtils.reqConfig = (url = '') => {
  return {
    method: 'get',
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: config.four_square_api_secret,
    },
  }
}

// Format Cateogry Icon Response - https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_88.png
FourSquareUtils.categoriesMaker = (categories) => {
  return categories.map((i) => ({
    ...i,
    icon: `${i.icon.prefix}88${i.icon.suffix}`,
  }))
}

FourSquareUtils.photosMaker = (photos) => {
  return photos.map(
    (item) => `${item.prefix}${item.height}x${item.width}${item.suffix}`
  )
}

FourSquareUtils.loadPhotosByPlaceId = async (placeId) => {
  try {
    let photoUrl = `https://api.foursquare.com/v3/places/${placeId}/photos`
    let photos = await axios.request(FourSquareUtils.reqConfig(photoUrl))
    return FourSquareUtils.photosMaker(photos.data)
  } catch (error) {
    console.log({ error })
    throw createHttpError(500, 'Failed to Load Photos!')
  }
}

FourSquareUtils.searchPlaces = async (query) => {
  try {
    let url = 'https://api.foursquare.com/v3/places/search'

    if (Object.entries(query)) {
      url = GlobalUtils.createQueryParams(url, query)
    }
    let result = await axios.request(FourSquareUtils.reqConfig(url))

    let formatted = []

    for (let item of result?.data?.results) {
      let newItem = {
        categories: FourSquareUtils.categoriesMaker(item.categories),
        ...item,
        photos: await FourSquareUtils.loadPhotosByPlaceId(item?.fsq_id),
      }
      formatted.push(newItem)
    }
    return formatted
  } catch (error) {
    console.log({ error })
    throw createHttpError(500, 'Failed to Load Photos!')
  }
}

FourSquareUtils.singlePlaceById = async (id) => {
  try {
    let url = `https://api.foursquare.com/v3/places/${id}`
    let result = await axios.request(FourSquareUtils.reqConfig(url))

    let formatted = {
      categories: FourSquareUtils.categoriesMaker(result?.data?.categories),
      ...result?.data,
      photos: await FourSquareUtils.loadPhotosByPlaceId(result?.data?.fsq_id),
    }

    return formatted
  } catch (error) {
    console.log({ error })
    throw createHttpError(500, 'Failed to Load Photos!')
  }
}
export default FourSquareUtils
