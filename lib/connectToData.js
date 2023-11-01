import { MongoClient } from 'mongodb'

const uri =
  'mongodb+srv://vercel-admin-user:CaDeTlEhCaR@cluster0.xn7xrvf.mongodb.net/?retryWrites=true&w=majority' // Replace with your MongoDB connection string.
const options = {}

let mongoClient

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

export async function connectToData() {
  try {
    if (mongoClient) {
      return { mongoClient }
    }
    mongoClient = await new MongoClient(uri, options).connect()
    console.log('Just Connected')
    return { mongoClient }
  } catch (e) {
    console.error(e)
  }
}
