import { MongoClient } from 'mongodb';

const URL = 'mongodb://127.0.0.1:27017/react-meetups';

async function handler(request, response) {
  if (request.method === 'POST') {
    const data = request.body;

    const client = await MongoClient.connect(URL);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    
    console.log('handler - result: ', result);

    client.close();

    response.status(201).json({ message: 'New meetup successfully inserted!'});
  }
}

export default handler;
