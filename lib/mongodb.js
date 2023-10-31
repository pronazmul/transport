// utils/dbConnect.js

import { MongoClient } from 'mongodb'

const uri =
  'mongodb+srv://vercel-admin-user:CaDeTlEhCaR@cluster0.xn7xrvf.mongodb.net/test?retryWrites=true&w=majority' // Replace with your MongoDB connection string.
const options = {}

let client
let clientPromise

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}
console.log('Just Connected')

export default clientPromise
