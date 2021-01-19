import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongodb from 'mongodb';
const { MongoClient } = mongodb;
//import dotenv from 'dotenv';

//MONGODB
//const CONNECTION_URL = 'url string';  (see in .env)
//const CONNECTION_URL = process.env.CONNECTION_URL;
const CONNECTION_URL = 'mongodb+srv://anna123:anna1234@capstone1.bl893.mongodb.net/capstone?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

MongoClient.connect(CONNECTION_URL, function (err, client) {
  const app = express();
  //dotenv.config();
  const db = client.db('capstone');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

  const postsCollection = db.collection('posts');
  app.get('/posts', async function (req, res) {
    const posts = await postsCollection.find().toArray();
    res.json(posts);
  });

  app.post('/posts', async function (req, res) {
    console.log(req.body);
    const post = req.body;
    post.createdAt = new Date();
    await postsCollection.insertOne(post);
    res.json(post);
  });
});
