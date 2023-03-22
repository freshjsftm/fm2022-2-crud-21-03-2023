const express = require("express");
const ThingController = require("./controllers/thing.controller");
const app = express();

app.use(express.json());

//routing
app.post("/things", ThingController.createThing);
app.get("/things", ThingController.getAllThings);

//
app.route('/things/:id')
   .get(ThingController.getThingById)
   .put(ThingController.updateThingById)
   .delete(ThingController.deleteThingById)


app.use((error)=>{ console.log(error)})   

module.exports = app;
