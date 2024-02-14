// Initialize Module
const ProjectionConst = {}

ProjectionConst.userAuth =
  '_id name email password type bio location avatar backgroundImage followerCount followingCount bookmarkCount favoriteCount noteCount shareCount active'
ProjectionConst.user =
  '_id name email type bio location avatar backgroundImage followerCount followingCount bookmarkCount favoriteCount noteCount shareCount active'
ProjectionConst.userFollower =
  '_id name email bio avatar backgroundImage followerCount followingCount bookmarkCount favoriteCount noteCount shareCount active'

ProjectionConst.favourite = '_id user place active createdAt updatedAt'
ProjectionConst.bookmark = '_id user place active createdAt updatedAt'
ProjectionConst.category = '_id name code active createdAt updatedAt'

ProjectionConst.feed =
  '_id creator user location title description place link active createdAt updatedAt'

ProjectionConst.follower = '_id creator user active createdAt updatedAt'
ProjectionConst.note = '_id user place note createdAt updatedAt'
ProjectionConst.share = '_id user place note createdAt updatedAt'
export default ProjectionConst
