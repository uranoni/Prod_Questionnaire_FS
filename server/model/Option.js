const mongoose = require('mongoose');
const Question = require('./Question');
var Schema = mongoose.Schema;
const OptionSchema = new mongoose.Schema({
    option_name: {
        type: String
    },
    description: {
        type: String
    },
    next: [{
        type: Schema.Types.ObjectId, ref: 'Question'
    }],
    picture: String,
    video: String,
    article: String
});

const Option = mongoose.model("Option", OptionSchema);
module.exports = {
    Option
}