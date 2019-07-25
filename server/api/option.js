const express = require("express");
const _ = require("lodash");
const { List } = require("../model/List");
const { User } = require("../model/User");
const { Question } = require("../model/Question");
const { Option } = require("../model/Option");

const optionRouter = express.Router();

optionRouter.post("/create", async (req, res) => {
  var body = _.pick(req.body, [
    "option_name",
    "description",
    "original_que",
    "next_que",
    "media_type",
    "media_path",
    "is_end",
    "redirect_url"
  ]);
  const keywords = req.body.keywords;
  body.keywords = keywords;
  console.log(body);
  try {
    var list = await List.findOne({ _id: req.body.list_id });
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
  var option = new Option(body);
  if (list) {
    try {
      const result = await option.save();
      list.option.push(result._id);
      await list.save();
      const question = await Question.findOne({ _id: req.body.original_que });
      question.ans_option.push(result._id);
      await question.save();
      return res.send(result);
    } catch (error) {
      return res.send("存放列表錯誤");
    }
  }
  res.status(404).send("can't find list");
});

module.exports = optionRouter;
