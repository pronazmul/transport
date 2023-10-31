// utils/dbConnect.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Replace with your MongoDB connection string.
const options = {

};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!client) {
    client = new MongoClient(uri, options);
    client.connect();
  }
  clientPromise = client;
} else {
  if (!clientPromise) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export default clientPromise;
