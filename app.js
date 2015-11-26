var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var homeController = require('./controllers/home');
var blogController = require('./controllers/blog');

mongoose.connect("mongodb://localhost:27017/events");
mongoose.connection.on('error',function(){
  console.log("Mongo Error in connection");
});
mongoose.connection.on('sucess',function(){
  console.log("Mongo connected");
});
app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.use(bodyParser());
app.use(express.static(__dirname+'/public'));
