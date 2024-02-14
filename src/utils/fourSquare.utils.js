import createHttpError from 'http-errors'
import config from './../config/index.js'
import axios from 'axios'
import GlobalUtils from './global.utils.js'
import FourSquareConst from '../consts/fourSquare.const.js'
import FavouriteModel from '../models/Favourite.model.js'
import BookmarkModel from '../models/Bookmark.model.js'
import NoteModel from '../models/Note.model.js'

// Initiazlize Object
const FourSquareUtils = {}

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

FourSquareUtils.categoriesIdGenerator = (categoryString) => {
  return categoryString
    .split(',')
    .map((c) => FourSquareConst.categories[c.trim()])
    .join(',')
}

// Format Cateogry Icon Response - https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_88.png
FourSquareUtils.categoriesIconMaker = (categories) => {
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
    return []
    // console.log({ error })
    // throw createHttpError(500, 'Failed to Load Photos!')
  }
}

FourSquareUtils.searchPlaces = async (query) => {
  try {
    let url = 'https://api.foursquare.com/v3/places/search'

    query.fields = FourSquareConst.allPlacesFields

    // format Url using Queries
    if (Object.entries(query)) {
      url = GlobalUtils.createQueryParams(url, query)
    }

    let result = await axios.request(FourSquareUtils.reqConfig(url))

    let formatted = []

    for (let item of result?.data?.results) {
      let newItem = {
        isBookmarked: Boolean(
          await BookmarkModel.checkBookmarked(item?.fsq_id, config?.auth?._id)
        ),
        isFavourite: Boolean(
          await FavouriteModel.checkFavourite(item?.fsq_id, config?.auth?._id)
        ),
        bookmarkCount: (await BookmarkModel.countBookmark(item?.fsq_id)) || 0,
        favouriteCount:
          (await FavouriteModel.countFavourite(item?.fsq_id)) || 0,
        noteCount: (await NoteModel.countNote(item?.fsq_id)) || 0,
        note: await NoteModel.findAuthUserNote(item?.fsq_id, config?.auth?._id),
        categories: FourSquareUtils.categoriesIconMaker(item.categories),
        ...item,
        photos: FourSquareUtils.photosMaker(item?.photos),
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
    let url = `https://api.foursquare.com/v3/places/${id}?fields=${FourSquareConst.allPlacesFields}`
    let result = await axios.request(FourSquareUtils.reqConfig(url))

    let formatted = {
      isBookmarked: Boolean(
        await FavouriteModel.checkFavourite(
          result?.data?.fsq_id,
          config?.auth?._id
        )
      ),
      isFavourite: Boolean(
        await BookmarkModel.checkBookmarked(
          result?.data?.fsq_id,
          config?.auth?._id
        )
      ),
      bookmarkCount:
        (await BookmarkModel.countBookmark(result?.data?.fsq_id)) || 0,
      favouriteCount:
        (await FavouriteModel.countFavourite(result?.data?.fsq_id)) || 0,
      noteCount: (await NoteModel.countNote(result?.data?.fsq_id)) || 0,
      note: await NoteModel.findAuthUserNote(
        result?.data?.fsq_id,
        config?.auth?._id
      ),
      categories: FourSquareUtils.categoriesIconMaker(result?.data?.categories),
      ...result?.data,
      photos: await FourSquareUtils.photosMaker(result?.data?.photos),
    }

    return formatted
  } catch (error) {
    console.log({ error })
    throw createHttpError(500, 'Failed to Load Photos!')
  }
}

export default FourSquareUtils
