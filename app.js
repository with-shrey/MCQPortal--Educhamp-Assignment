var express = require('express');
require('dotenv').config()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
var V1 = require('./routes');
const bearerToken = require('express-bearer-token');
var app = express();
require('./config/mongoose')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(bearerToken());
app.use('/api', V1);

app.use('*',(req,res,next) => {
  res.sendfile(__dirname + '/client/build/index.html');
});
app.use((err,req,res,next) => {
  console.error(err);
  res.json({code:500})
})
module.exports = app;
