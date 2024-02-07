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
import CategoryModel from './../models/Category.model.js'
import FeedModel from './../models/Feed.model.js'
import NoteModel from './../models/Note.model.js'
import FeedScheduleModel from './../models/FeedSchedule.model.js'

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
    await CategoryModel.deleteMany()
    await NoteModel.deleteMany()
    await FeedModel.deleteMany()
    await FeedScheduleModel.deleteMany()
    await FollowerModel.deleteMany()

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

    // Write Notes & Bookmarks Togather
    let notes = []
    let bookmarks = []
    users.forEach((u) => {
      let randomPlaces = GlobalUtils.randomSingleFromArray(DummyData.places)

      // Insert Notes Collection Conllections
      notes.push(
        new NoteModel({
          user: u._id,
          place: randomPlaces,
          note: GlobalUtils.randomSingleFromArray(DummyData.notes)?.note,
        })
      )

      // Insert Notes Collection Conllections
      bookmarks.push(
        new BookmarkModel({
          user: u._id,
          place: randomPlaces,
        })
      )
    })

    //Write Categories
    let categories = DummyData.categories

    // Write Feeds
    let feeds = []
    users.forEach((u) => {
      if (['media', 'list'].includes(u.type)) {
        let randomFeeds = GlobalUtils.randomMultipleFromArray(DummyData.feeds)
        let user = users.find((us) => us.type === 'user')

        // Insert favourites Conllections
        randomFeeds.forEach((f) => {
          feeds.push(
            new FeedModel({
              creator: u._id,
              user: user._id,
              ...f,
            })
          )
        })
      }
    })

    await UserModel.create(users)
    await FollowerModel.create(followers)
    await FavouriteModel.create(favourites)
    await NoteModel.create(notes)
    await CategoryModel.create(categories)
    await BookmarkModel.create(bookmarks)
    await FeedModel.create(feeds)

    console.log('Data Inserted')
    process.exit()
  } catch (error) {
    console.log(`Message: ${error?.message}`)
    console.log(`Stack: ${error?.stack}`)
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
    await CategoryModel.deleteMany()
    await NoteModel.deleteMany()
    await FeedModel.deleteMany()
    await FeedScheduleModel.deleteMany()
    await FollowerModel.deleteMany()

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
