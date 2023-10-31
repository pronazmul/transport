import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Replace with your MongoDB connection string.
const options = {};

let mongoClient;

if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

export async function connectToData(){
    try {
        if (mongoClient){
            return {mongoClient};
        }
        mongoClient = await (new MongoClient (uri, options)).connect();
        console.log("Just Connected");
        return { mongoClient};
    }catch(e){
        console.error(e)
    }
}