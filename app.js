const express = require("express");
const path = require('path');
const app = express();
const { MongoClient } = require("mongodb");
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/graffiti', async (req, res) => {
    res.send("Graffiti app in progress")
})

// app.get("/", (req, res) => {
//   main().catch(console.error);
//   res.send("🌺💐🌹🌷🌻 yahaha! you found me! 🌺💐🌹🌷🌻");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// async function main() {
//   const uri =
//     "mongodb+srv://sarah:hello@fullstack.7asisw7.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// // main().catch(console.error);

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => {
//     console.log(`-database${db.name}`);
//   });
// }
