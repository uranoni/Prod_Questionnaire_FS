const mongoose = require('mongoose');
const User = require('./User');
const List = require('./List');
const Question = require('./Question');
const Option = require('./Option');
var Schema = mongoose.Schema;

const PathSchema = new mongoose.Schema({
    list_info: { type: Schema.Types.ObjectId, ref: 'List' },
    user_info: { type: Schema.Types.ObjectId, ref: 'User' },
    choose_url: { type: String },
    choose_item: [
        {
            item_type: {
                type: String, enum: ["question", "option"]
            },
            item_id: { type: Schema.Types.ObjectId, required: true, }
        }
    ],
    feed_back: [{
        type: String
    }]


});

const PathModel = mongoose.model("PathModel", PathSchema);
module.exports = {
    PathModel
}