const express = require('express');
const _ = require('lodash');
const { List } = require('../model/List');
const { User } = require('../model/User');
const { Question } = require('../model/Question');
const { ObjectID } = require('mongodb')
const auth = require("../auth/auth");
const questionRouter = express.Router();

questionRouter.post('/create', auth, async (req, res) => {
    var body = _.pick(req.body, ['Qname', 'description', 'is_root'])
    console.log(req.body._id)
    try {
        var list = await List.findOne({ _id: req.body._id })
    } catch (error) {
        console.log(error)
        res.status(404)
    }
    var question = new Question(body);
    if (list) {
        try {
            const result = await question.save();
            list.question.push(result._id)
            await list.save();
            res.send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }
    res.status(404).send("can't find list")
});



module.exports = questionRouter;