const express = require("express");

const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/graffiti", async (req, res) => {
  res.send("Graffiti app in progress");
});

app.listen(port);
