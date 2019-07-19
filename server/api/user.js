const express = require('express');
const _ = require('lodash');
const { User } = require('../model/User');

const { ObjectID } = require('mongodb')

const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'name', 'age'])
    body.createAt = new Date();
    var user = new User(body);
    try {
        const result = await user.save();
        res.send(result)
    } catch (error) {
        Promise.reject("fail")
        res.status(400).send('fail to create')
    }
});

userRouter.get('/ownerList/:id', async (req, res) => {
    var _id = req.params.id;
    console.log(_id)
    const list = await User.find({ _id: _id }).populate('questionList')
    console.log(list)
    res.send(list)
});

module.exports = userRouter;