const fs = require("fs");
const path = require("path");
const { Client } = require("pg");
const config = require("../config/db.json");

const currentFileName = path.basename(__filename);
const dbConfig = config[process.env.NODE_ENV || "development"];
const client = new Client(dbConfig);
client.connect();
process.on("beforeExit", () => {  client.end();});

const db = {
  client,
};

fs.readdirSync(__dirname)
.filter((fileName)=> fileName!==currentFileName && /\.js$/.test(fileName))
.forEach((fileName) => {
  const absPath = path.resolve(__dirname, fileName);
  const Model = require(absPath); // const Thing = require("./Thing");
  Model.client = client; //Thing.client = client;
  db[Model.name] = Model;   //Thing,
});

module.exports = db;
