// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import FollowerService from '../services/follower.service.js'
import FavouriteService from '../services/favourite.service.js'
import BookmarkService from '../services/bookmark.service.js'

// Initialize Module
const ActivityController = {}

ActivityController.followedByActivity = async (req, res, next) => {
  try {
    let userId = req.params.userId
    let followedBy = await FollowerService.followedByIds(userId)

    if (followedBy) {
      followedBy = followedBy.map((f) => f.creator)
    }

    let followedByActivity = await FollowerService.followedByActivity(
      followedBy
    )

    let favouriteActivity = await FavouriteService.followedByActivity(
      followedBy
    )

    let bookmarkActivity = await BookmarkService.followedByActivity(followedBy)

    let result = {}

    if (followedByActivity?.length)
      result['followedByActivity'] = followedByActivity
    if (favouriteActivity?.length)
      result['favouriteActivity'] = favouriteActivity
    if (bookmarkActivity?.length) result['bookmarkActivity'] = bookmarkActivity

    let response = GlobalUtils.fromatResponse(
      result,
      'FollowedBy Activity Fetch Success'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default ActivityController
