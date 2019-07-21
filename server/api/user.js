const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const auth = require("../auth/auth");
const User = require("../model/User");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  var body = _.pick(req.body, ["email", "password", "name", "age"]);
  body.createAt = new Date();
  const hasUser = await User.findOne({ email: body.email });
  if (!hasUser) {
    body.password = bcrypt.hashSync(body.password, saltRounds);
    var user = new User(body);
    try {
      const result = await user.save();
      res.send(result);
    } catch (error) {
      Promise.reject("fail");
      res.status(400).send("fail to create");
    }
  }

  try {
    const verify = await bcrypt.compare(body.password, hasUser.password);

    if (verify == true) {
      var token = jwt
        .sign({ _id: hasUser._id.toString(), name: hasUser.name }, "test")
        .toString();
      //   console.log(token);
      hasUser.tokens.push({ token });
      console.log(hasUser);
      const result = await hasUser.save();
      res.send(result);
    }
  } catch (error) {
    res.status(403).send(error);
  }
  res.status(403).send("帳號或密碼錯誤");
});

userRouter.get("/ownerList", auth, async (req, res) => {
  const { _id } = req.user;

  const { questionList } = await User.find({ _id }).populate("questionList");

  res.send(questionList);
});

userRouter.get("/me", auth, async (req, res) => {
  console.log(req.user);
  const data = { ...req.user._doc };
  delete data.tokens;
  delete data.password;

  // console.log(data);
  res.send(data);
});
module.exports = userRouter;
