const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const cors = require("cors");

mongoose.connect('mongodb://localhost:27017/questionnaire', function (err) {
    if (err) {
        console.log('Connection error');
    }
}, {
        useCreateIndex: true,
        useNewUrlParser: true
    });

var userRouter = require('./api/user.js')
var listRouter = require('./api/list')
var questionRouter = require('./api/question')

var app = express();
app.use(morgan("dev"));
app.use(cors());

app.use(express.json({ limit: '200mb' }));
app.use(express.static(__dirname))

app.use(express.urlencoded({
    extended: true,
    limit: '200mb'
}));


app.use('/api/user', userRouter)
app.use('/api/list', listRouter)
app.use('/api/question', questionRouter)

app.listen(8000, () => {
    console.log(`http://localhost:8000`);
})