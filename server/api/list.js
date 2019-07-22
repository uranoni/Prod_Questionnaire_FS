const express = require("express");
const _ = require("lodash");

const { List } = require("../model/List");
const User = require("../model/User");

const auth = require("../auth/auth");
const listRouter = express.Router();

listRouter.post("/create", auth, async (req, res) => {
  var body = _.pick(req.body, ["list_name", "description"]);
  console.log(req.body);
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
  const list = await List.findOne({ _id: _id })
    // .populate('author')
    .populate({ path: "question", select: "Qname" })
    .populate({ path: "option", select: "option_name next" });
  console.log(list);
  res.send(list);
});

listRouter.get("/ownerlist", auth, async (req, res) => {
  try {
    const list = await List.find({ author: req.user._id });
    if (list.length == 0) {
      res.send("尚未新增問卷");
    } else {
      res.send(list);
    }
  } catch (error) {
    res.send(error);
  }
});

listRouter.get("/openlist", async (req, res) => {
  const list = await List.find().populate({ path: "author", select: "name" });
  console.log(list);
  res.send(list);
});

listRouter.get("/rootque/:id", async (req, res) => {
  var _id = req.params.id;
  const list = await List.findOne({ _id }).populate({
    path: "question",
    match: { is_root: { $gte: true } },
    populate: {
      path: "ans_option"
    }
  });
  console.log(list);
  res.send(list);
});

module.exports = listRouter;
