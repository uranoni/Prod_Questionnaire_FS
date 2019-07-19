const express = require('express');
const _ = require('lodash');
const { List } = require('../model/List');
const { User } = require('../model/User');
const { ObjectID } = require('mongodb')

const listRouter = express.Router();

listRouter.post('/create', async (req, res) => {
    var body = _.pick(req.body, ['list_name', 'description', 'author'])

    try {
        var user = await User.findOne({ _id: body.author })
    } catch (error) {
        console.log(error)
        res.status(404)
    }
    var list = new List(body);
    if (user) {
        try {
            const result = await list.save();
            user.questionList.push(result._id)
            await user.save();
            res.send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }
    res.status(404).send("can't find user")
});



module.exports = listRouter;