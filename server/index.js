import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongodb from 'mongodb';
import cookieParser from 'cookie-parser';
import session from 'express-session';
const { MongoClient, ObjectId } = mongodb;
//import dotenv from 'dotenv';

//MONGODB
//const CONNECTION_URL = 'url string';  (see in .env)
//const CONNECTION_URL = process.env.CONNECTION_URL;
const CONNECTION_URL =
  'mongodb+srv://anna123:anna1234@capstone1.bl893.mongodb.net/capstone?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

MongoClient.connect(CONNECTION_URL, function (err, client) {
  const app = express();
  //dotenv.config();
  const db = client.db('capstone');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({ exposeHeaders: ['set-cookie'] }));
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

  app.use(
    session({
      secret: 'secret',
      saveUninitialized: true,
      cookie: {
        httpOnly: false,
        secure: false,
        sameSite: false,
      },
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.session && req.session.user) {
      next();
    } else {
      res.sendStatus(403).send('You are not logged in');
    }
  }
  const postsCollection = db.collection('posts');
  app.get('/posts', async function (req, res) {
    const posts = await postsCollection.find().toArray();
    res.json(posts);
  });

  app.post('/posts', isLoggedIn, async function (req, res) {
    console.log(req.body);
    const post = req.body;
    post.createdAt = new Date();
    await postsCollection.insertOne(post);
    res.json(post);
  });

  app.patch('/posts/:id', isLoggedIn, async function (req, res) {
    const id = new ObjectId(req.params.id);
    const { user_fname, category, question, comments } = req.body;
    const update = { user_fname, category, question, comments };
    await postsCollection.findOneAndUpdate({ _id: id }, { $set: update });
    res.json(req.body);
  });

  app.delete('/posts/:id', isLoggedIn, async function (req, res) {
    const id = new ObjectId(req.params.id);
    await postsCollection.findOneAndDelete({ _id: id });
    res.send(200);
  });

  const usersCollection = db.collection('users');
  app.post('/user/signup', async function (req, res) {
    const { firstName, lastName, email, password } = req.body;
    const user = { firstName, lastName, email, password };
    await usersCollection.insertOne(user);
    req.session.user = user;
    req.session.save();
    res.json(user);
  });

  app.post('/user/signin', async function (req, res) {
    const { email, password } = req.body;
    const user = await usersCollection.findOne({ email });
    if (user.password === password) {
      req.session.user = user;
      req.session.save();
      res.json(user);
    } else {
      res.sendStatus(403);
    }
  });

  app.get('/user', async function(req, res) {
    res.json(req.session.user);
  });

  app.post('/logout', async function(req, res) {
    req.session.user = null;
    req.session.save();
    res.send(200);
  })
});
