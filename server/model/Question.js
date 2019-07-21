const mongoose = require("mongoose");

const { Option } = require("./Option");

var Schema = mongoose.Schema;
const QuestionSchema = new mongoose.Schema({
  Qname: {
    type: String
  },
  description: {
    type: String
  },
  is_root: {
    type: Boolean
  },
  ans_option: [
    {
      type: Schema.Types.ObjectId,
      ref: "Option"
    }
  ]
});

const Question = mongoose.model("Question", QuestionSchema);
module.exports = {
  Question
};
