import mongoose from 'mongoose'
import config from './../config/index.js'
import LoggerUtils from '../utils/logger.utils.js'
import { Sequelize, DataTypes } from 'sequelize'

const { errorLoger, infoLogger } = LoggerUtils

// Initialize Module
const DbConnection = {}

// connect MySqL
export const sequelize = new Sequelize('rental_car', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

DbConnection.connectMySQL = async () => {
  try {
    await sequelize.authenticate()
    infoLogger.info(`MongoDB Successfully Connected with rental_car`)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    process.exit(1)
  }
}

// Connect MongoDB
mongoose.set('strictQuery', true)
DbConnection.connectMongo = async () => {
  try {
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    await mongoose.connect(config.database_url, OPTIONS)
    infoLogger.info(
      `MongoDB Successfully Connected with ${mongoose.connection.name}`
    )
  } catch (error) {
    errorLoger.error(`Error ${error.message}`)
    process.exit(1)
  }
}

export default DbConnection
