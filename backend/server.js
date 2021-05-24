const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const port = 8080;

const MongoClient = require('mongodb').MongoClient;
const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require('react-dom');
// const { Db } = require('mongodb');
const uri = `mongodb+srv://sliderDB:${process.env.mongo_password}@slider.opswz.mongodb.net/slider?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true, connectTimeoutMS: 30000, keepAlive: 1 });

client.connect()

const getLeaderboard3 = async () => {
  try {
    await client.connect();
    const leaderboard3 = client.db("slider").collection("leaderboard3");
    const query = leaderboard3.find({}).sort({ score: 1 }).limit(3);
    const result = await query.toArray();
    return result;
  } catch (err) {
    console.error(err);
  } finally {
  }
}

const getLeaderboard4 = async () => {
  try {
    await client.connect();
    const leaderboard4 = client.db("slider").collection("leaderboard4");
    const query = leaderboard4.find({}).sort({ score: 1 }).limit(3);
    const result = await query.toArray();
    console.log(result)
    return result;
  } catch (err) {
    console.error(err);
  } finally {
  }
}

const setLeaderboard3 = async (username, score) => {
  try {
    await client.connect();
    const leaderboard3 = client.db("slider").collection("leaderboard3");
    await leaderboard3.insertOne( { username: username, score: score } );
    console.log(`Insterted ${username}'s score of ${score} successfully!`);
  } catch (err) {
    console.error(err);
  } finally {
  }
}

const setLeaderboard4 = async (username, score) => {
  try {
    await client.connect();
    const leaderboard4 = client.db("slider").collection("leaderboard4");
    await leaderboard4.insertOne( { username: username, score: score } );
    console.log(`Insterted ${username}'s score of ${score} successfully!`);
  } catch (err) {
    console.error(err);
  } finally {
  }
}

app.get('/leaderboard3', async (req, res) => {
    const result = await getLeaderboard3();
    res.send(result);
})

app.post('/leaderboard3', (req, res) => {
  const { username, score } = req.body;
  setLeaderboard3(username, score);
  res.status(201).json({ success: true });
})

app.get('/leaderboard4', async (req, res) => {
  const result = await getLeaderboard4();
  res.send(result);
})

app.post('/leaderboard4', (req, res) => {
  const { username, score } = req.body;
  setLeaderboard4(username, score);
  res.status(201).json({ success: true });
})

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})