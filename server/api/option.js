const express = require('express');
const _ = require('lodash');
const { List } = require('../model/List');
const { User } = require('../model/User');
const { Question } = require('../model/Question');
const { Option } = require('../model/Option');
const { ObjectID } = require('mongodb')

const optionRouter = express.Router();

optionRouter.post('/create', async (req, res) => {
    var body = _.pick(req.body, ['option_name', 'description'])
    var next = []
    next.push(req.body.question_id)
    try {
        var list = await List.findOne({ list_name: req.body.list_name })
    } catch (error) {
        console.log(error)
        res.status(404)
    }
    var option = new Option({
        option_name: body.option_name,
        description: body.description,
        next: next
    });
    if (list) {
        try {
            const result = await option.save();
            list.option.push(result._id)
            await list.save();
            res.send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }
    res.status(404).send("can't find list")
});



module.exports = optionRouter;