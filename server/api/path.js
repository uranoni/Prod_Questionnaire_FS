const express = require("express");
const _ = require("lodash");

const { List } = require("../model/List");
const User = require("../model/User");
const { PathModel } = require("../model/PathModel");
const auth = require("../auth/auth");
const pathRouter = express.Router();

pathRouter.post("/create", auth, async (req, res) => {
  var body = _.pick(req.body, ["list_info", "choose_item"]);
  console.log(body);
  body.user_info = req.user._id;
  try {
    var list = await List.findOne({ _id: req.body.list_info });
    console.log(list);
    if (!list) {
      throw new Error("oops");
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
  try {
    console.log(body);
    var path = new PathModel(body);
    const result = await path.save();
    return res.send(result);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});
pathRouter.get("fetchpath", auth, async (req, res) => {
  try {
    const result = PathModel.findOne({ _id })
  } catch (error) {}
});
module.exports = pathRouter;
