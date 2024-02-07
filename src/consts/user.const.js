// Initialize Module
const UserConst = {}

UserConst.uploads = [
  { name: 'avatar', maxCount: 1 },
  { name: 'backgroundImage', maxCount: 1 },
]

UserConst.userType = ['admin', 'user', 'app', 'media', 'list']

UserConst.registerAllowedType = ['user', 'app', 'media', 'list']
UserConst.defaultType = 'app'

UserConst.searchOptions = ['name', 'email']
UserConst.sortOptions = [
  'followerCount',
  'followingCount',
  'bookmarkCount',
  'favoriteCount',
  'noteCount',
  'shareCount',
  'createdAt',
  'updatedAt',
]
UserConst.filterOptions = ['type', 'active']

export default UserConst
