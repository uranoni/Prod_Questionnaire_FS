const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const Qlist = new mongoose.Schema({
    qid: {
        type: String,
    },
    Qname: {
        type: String
    },
    content: {
        type: String
    }
});

const Qlist = mongoose.model("Qlist", Qlist);
module.exports = {
    Qlist
}