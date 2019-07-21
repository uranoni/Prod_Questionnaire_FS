const mongoose = require("mongoose");
var Schema = mongoose.Schema;
// const User = require('./User');
// const Option = require('./Option');
// const Question = require('./Question')

const listSchema = new mongoose.Schema({
  list_name: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  question: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question"
    }
  ],
  option: [{ type: Schema.Types.ObjectId, ref: "Option" }]
});

const List = mongoose.model("List", listSchema);
module.exports = {
  List
};
