const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const validator = require("validator");
const isEmail = require("validator/lib/isEmail");
const dayjs = require("dayjs");
const _ = require("lodash");
// const uuidv4 = require('uuid/v4');
const List = require("../model/List");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true,
    validate: {
      validator: (value) => {
        validator.isEmail(value);
      },
      message: "${value}是不合法信箱"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true
  },
  age: { type: String },
  hobby: [{ type: String }],
  tokens: [
    {
      token: {
        type: String
      }
    }
  ],
  questionList: [
    {
      type: Schema.Types.ObjectId,
      ref: "List"
    }
  ],
  answerPath: [
    {
      type: Schema.Types.ObjectId,
      ref: "Path"
    }
  ],
  createAt: {
    type: Date
  }
});

// const User = mongoose.model("User", UserSchema);
// module.exports = { User };
module.exports = mongoose.model("User", UserSchema);
