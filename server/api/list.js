const express = require("express");
const _ = require("lodash");

const { List } = require("../model/List");
const User = require("../model/User");

const auth = require("../auth/auth");
const listRouter = express.Router();

listRouter.post("/create", auth, async (req, res) => {
  var body = _.pick(req.body, ["list_name", "description"]);
  body.author = req.user._id;
  try {
    var user = await User.findOne({ _id: req.user._id });
  } catch (error) {
    console.log(error);
    res.status(404);
  }
  var list = new List(body);
  if (user) {
    try {
      const result = await list.save();
      user.questionList.push(result._id);
      await user.save();
      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  res.status(404).send("can't find user");
});

listRouter.get("/allItem/:id", async (req, res) => {
  var _id = req.params.id;
  console.log(_id);
  const list = await List.find({ _id: _id })
    // .populate('author')
    .populate({ path: "question", select: "Qname" })
    .populate({ path: "option", select: "option_name next" });
  console.log(list);
  res.send(list);
});

module.exports = listRouter;