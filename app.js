const express = require("express");
const ThingController = require("./controllers/thing.controller");
const app = express();

app.use(express.json());

//routing
app.post("/things", ThingController.createThing);

module.exports = app;
