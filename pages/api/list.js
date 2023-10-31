import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    try{
        const  mongoClient  = await clientPromise;
        const db = mongoClient.db("test");
        const collection = db.collection('test');
        const results = await collection
            .find({})
            .toArray();

        res.status(200).json(results)

    } catch(e){
        console.error(e)
        res.status(500).json(e);
    }
  }