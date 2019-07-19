const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const QuestionSchema = new mongoose.Schema({
    Qname: {
        type: String
    },
    description: {
        type: String
    },
    is_root: {
        type: Boolean
    }

});

const Question = mongoose.model("Question", QuestionSchema);
module.exports = {
    Question
}