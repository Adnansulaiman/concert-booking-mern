var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const PORT = 3001;
var app = express();

app.use(logger('dev'));app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



//Mongoose config
// mongoose.connect()
app.listen(PORT,()=>{
    console.log(`Server running at port : ${PORT} `);
})

module.exports = app;
