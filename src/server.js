"use strict";
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", homeHandler);

function homeHandler(req, res) {
  res.status(200).send("hi");
}

function start(port) {
  app.listen(port, () => {
    console.log(`the server listen to port ${port}`);
  });
}

module.exports = {
  start: start,
  app: app,
};
