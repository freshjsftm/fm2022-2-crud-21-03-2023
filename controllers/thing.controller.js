const { Thing } = require("../models");

module.exports.createThing = async (req, res, next) => {
  try {
    const { body } = req;
    const [newThing] = await Thing.create(body);
    if (newThing) {
      return res.status(201).send({ data: newThing });
    }
    return res.status(400).send(""); //bad practice
  } catch (error) {
    next(error);
  }
};

module.exports.getAllThings = async (req, res, next) => {
  try {
    const allThings = await Thing.findAll();
    if (allThings.length) {
      return res.status(200).send({ data: allThings });
    }
    return res.status(404).send();
  } catch (error) {
    next(error);
  }
};

module.exports.getThingById = async (req, res, next) => {
  try {
    const {params:{id}} = req;
    const [thing] = await Thing.findByPk(id);
    if(thing){
      return res.status(200).send({data: thing});
    }
    return res.status(404).send();
  } catch (error) {
    next(error);
  }
};

module.exports.updateThingById = async (req, res, next) => {
  try {
    const {params:{id}, body} = req;
    const  [updatingThing] = await Thing.updateByPk(id, body);
    if(updatingThing){
      return res.status(202).send({data:updatingThing})
    }
    return res.status(400).send();
  } catch (error) {
    next(error);
  }
};

module.exports.deleteThingById = async (req, res, next) => {
  try {
    const {params:{id}} = req;
    const [delThing] = await Thing.deleteByPk(id);
    if(delThing){
      return res.status(200).send({data: delThing});
    }
    return res.status(400).send();
  } catch (error) {
    next(error);
  }
};
