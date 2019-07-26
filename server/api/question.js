const express = require("express");
const _ = require("lodash");
const { List } = require("../model/List");
const { User } = require("../model/User");
const { Question } = require("../model/Question");
const { ObjectID } = require("mongodb");
const auth = require("../auth/auth");
const questionRouter = express.Router();

questionRouter.post("/create", auth, async (req, res) => {
  var body = _.pick(req.body, ["Qname", "description", "is_root"]);
  console.log(req.body._id);
  try {
    var list = await List.findOne({ _id: req.body._id });
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
  console.log(body);
  var question = new Question(body);
  if (list) {
    try {
      const result = await question.save();
      list.question.push(result._id);
      await list.save();
      console.log(list);
      return res.send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  res.status(404).send("can't find list");
});

questionRouter.get("/detail/:id", async (req, res) => {
  var _id = req.params.id;
  try {
    var question = await Question.findOne({ _id }).populate("ans_option");
    console.log(question);
    return res.send(question);
  } catch (error) {
    return res.status(404).send(error);
  }
});
module.exports = questionRouter;
