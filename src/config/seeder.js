import DbConnection from './db.js'

// Configuration
DbConnection.connectMongo()

//Models
import SessionModel from '../models/Session.model.js'
import UserModel from '../models/User.model.js'
import RoleModel from '../models/Role.model.js'

const importData = async () => {
  try {
    //Destroy All
    await UserModel.deleteMany()
    await SessionModel.deleteMany()
    await RoleModel.deleteMany()

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
    await SessionModel.deleteMany()
    await RoleModel.deleteMany()

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
