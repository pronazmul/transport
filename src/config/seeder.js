import DbConnection from './db.js'
import GlobalUtils from './../utils/global.utils.js'

// Configuration
DbConnection.connectMongo()

//Models
import UserModel from '../models/User.model.js'
import FollowerModel from '../models/Follower.model.js'
import BookmarkModel from '../models/Bookmark.model.js'
import FavouriteModel from '../models/Favourite.model.js'
import ShareModel from '../models/Share.model.js'

// Demo Data
import DummyData from './data.js'

const importData = async () => {
  try {
    //Destroy All
    await UserModel.deleteMany()
    await FollowerModel.deleteMany()
    await BookmarkModel.deleteMany()
    await FavouriteModel.deleteMany()
    await ShareModel.deleteMany()

    // Write Users
    let users = []
    DummyData.users.forEach((u) =>
      users.push(
        new UserModel({
          ...u,
        })
      )
    )

    // Write Followers
    let followers = []
    users.forEach((u) => {
      let SomeUsersExceptOwn = GlobalUtils.randomMultipleFromArray(
        users.filter((fu) => fu._id !== u._id)
      ).map((p) => p._id)

      // Insert Followers Conllections
      SomeUsersExceptOwn.forEach((i) => {
        followers.push(
          new FollowerModel({
            creator: u._id,
            user: i,
          })
        )
      })
    })

    // Write bookmarks
    let bookmarks = []
    users.forEach((u) => {
      let randomPlaces = GlobalUtils.randomMultipleFromArray(DummyData.places)

      // Insert bookmarks Conllections
      randomPlaces.forEach((i) => {
        bookmarks.push(
          new BookmarkModel({
            user: u._id,
            place: i,
          })
        )
      })
    })

    // Write favourites
    let favourites = []
    users.forEach((u) => {
      let randomPlaces = GlobalUtils.randomMultipleFromArray(DummyData.places)

      // Insert favourites Conllections
      randomPlaces.forEach((i) => {
        favourites.push(
          new FavouriteModel({
            user: u._id,
            place: i,
          })
        )
      })
    })

    await UserModel.create(users)
    await FollowerModel.create(followers)
    await BookmarkModel.create(bookmarks)
    await FavouriteModel.create(favourites)

    // --------------

    console.log('Data Inserted')
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`)
    process.exit(1)
  }
}

// Destroy Data Seeder:
const destroyData = async () => {
  try {
    //Destroy All
    await UserModel.deleteMany()
    await FollowerModel.deleteMany()
    await BookmarkModel.deleteMany()
    await FavouriteModel.deleteMany()
    await ShareModel.deleteMany()

    console.log('Data Destroyed Successfully')
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`)
    process.exit(1)
  }
}

// Manage Seeder Command:
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
