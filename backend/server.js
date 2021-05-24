const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 8080;

const MongoClient = require('mongodb').MongoClient;
const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require('react-dom');
// const { Db } = require('mongodb');
const uri = `mongodb+srv://sliderDB:${process.env.mongo_password}@slider.opswz.mongodb.net/slider?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true, connectTimeoutMS: 30000, keepAlive: 1 });

// const main = async () => {
//   try { 
//     await client.connect();
//     await listDatabases();
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error)

// const listDatabases = async () => {
//   const databasesList = await client.db().admin().listDatabases();
//   console.log(`Databases:`);
//   databasesList.databases.forEach(db => {
//     console.log(`- ${db.name}`)
//   })
// }

// client.connect(err => {
//   const leaderboard3 = client.db("slider").collection("leaderboard3");
//   leaderboard3.insertOne( { username: "jaymanw", score: 21.2 });
//   client.close();
// });



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
    await client.close();
  }
}

const getLeaderboard4 = async () => {
  try {
    await client.connect();
    const leaderboard4 = client.db("slider").collection("leaderboard4");
    // await leaderboard3.insertOne( { username: "frank", score: 130.8 } );
    const query = leaderboard4.find({}).sort({ score: 1 }).limit(3);
    const result = await query.toArray();
    console.log(result)
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

// getLeaderboard4();

app.get('/leaderboard3', async (req, res) => {
    const result = await getLeaderboard3();
    res.send(result);
})

app.get('/leaderboard4', async (req, res) => {
  const result = await getLeaderboard4();
  res.send(result);
})

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})