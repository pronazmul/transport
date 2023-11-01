// utils/dbConnect.js

import { MongoClient } from 'mongodb'

const uri =
  'mongodb+srv://vercel-admin-user:CaDeTlEhCaR@cluster0.xn7xrvf.mongodb.net/?retryWrites=true&w=majority' // Replace with your MongoDB connection string.
const options = {}

let client
let clientPromise

if (!url) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (process.env.NODE_ENV === 'development') {
  if (!client) {
    client = new MongoClient(uri, options)
    client.connect()
  }
  clientPromise = client
} else {
  if (!clientPromise) {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
}

export default clientPromise
