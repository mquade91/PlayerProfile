//server.js
var express = require('express');
var app = express();
var port = 8081;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");


var configDB = require('./config/database.js');
console.log(configDB);

//configuration(1)
mongoose.connect(configDB.url);

// PASSPORT
require('./config/passport')(passport); //pass passport for configuration

//express application 
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());


//use express static to server the public folder as static directory
app.use(express.static("public"));

//may not need this depending on if we use EJS or not??
app.set('view engine', 'ejs');

//required for passport
app.use(session({ secret: 'appSecret' }));
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); //use connect-flash for flash messages

//routes==============
require('./app/routes.js')(app, passport); //load our routes

//launch=========
app.listen(port);
console.log("App is running on PORT: " + port);
