const express = require('express');
const _ = require('lodash');
const { List } = require('../model/List');
const { User } = require('../model/User');
const { Question } = require('../model/Question');
const { ObjectID } = require('mongodb')

const questionRouter = express.Router();

questionRouter.post('/create', async (req, res) => {
    var body = _.pick(req.body, ['Qname', 'description', 'is_root'])

    try {
        var list = await List.findOne({ list_name: req.body.list_name })
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