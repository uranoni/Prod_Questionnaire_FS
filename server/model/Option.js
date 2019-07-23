const mongoose = require("mongoose");
const Question = require("./Question");
var Schema = mongoose.Schema;
const OptionSchema = new mongoose.Schema({
  option_name: String,
  description: String,
  original_que: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  next_que: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  keywords: [
    {
      type: String,
      trim: true
    }
  ],
  media_type: { type: String, enum: ["video", "article", "picture"] },
  media_path: String,
  redirect_url: String,
  is_end: Boolean
});

const Option = mongoose.model("Option", OptionSchema);
module.exports = {
  Option
};
