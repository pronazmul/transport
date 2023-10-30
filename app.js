import express from 'express'
import config from './src/config/index.js'
import routes from './src/routes/index.js'
import GlobalMiddlewares from './src/middlewares/global.middlewares.js'
import DbConnection from './src/config/db.js'

// Initialization:
const app = express()

// Databse Connection:
DbConnection.connectMongo()

// Global Middlwares
app.use(GlobalMiddlewares.middlewares)

// Routes:
app.use(routes)

//Not Found & Error Handler
app.use([GlobalMiddlewares.notFound, GlobalMiddlewares.error])

// Server:
app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}`)
)
