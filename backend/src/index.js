
const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gustavo:gustavo12@cluster0-et6gz.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});

app.use(require('./routes'))

app.listen(3333);