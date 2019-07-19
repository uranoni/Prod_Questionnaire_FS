const mongoose = require('mongoose');
const User = require('./User');
const List = require('./List');
const Question = require('./Question');
const Option = require('./Option');
var Schema = mongoose.Schema;

const Path = new mongoose.Schema({
    list_info: { type: Schema.Types.ObjectId, ref: 'List' },
    user_info: { type: Schema.Types.ObjectId, ref: 'User' },
    choose_url: { type: String },
    choose_item: [
        {
            item_type: { type: Schema.Types.ObjectId },
            item_id: { type: Schema.Types.ObjectId }
        }
    ],
    feed_back:[{
        type:String
    }]


});

const Path = mongoose.model("Path", Path);
module.exports = {
    Path
}