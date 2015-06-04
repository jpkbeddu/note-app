var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware configurations
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(stylus.middleware({
  src: path.join(__dirname, 'public'),
  compile: function compile(str, path) {
    return stylus(str).set('filename', path);
  }
}));

// MongoDB Conenction
if(env === 'development') {
  mongoose.connect('mongodb://localhost/note-app');
} else {
  mongoose.connect('mongodb://note-app-user:note-app-pass@ds049631.mongolab.com:49631/note-app');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('> note-app mongo DB opened');
});

// Creating dummy user schema
var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String
});
var newUser = mongoose.model('newUser', userSchema);
newUser.find({}).exec(function(err, collection) {
  if (err) {
    console.log("> Error caught: " + err);
  } else {
    if (collection.length === 0) {
      console.log("> No dummy users present and hence creating them");
      newUser.create({
        firstName: 'Steve',
        lastName: 'Jobs',
        userName: 'apple'
      });
      newUser.create({
        firstName: 'Sundar',
        lastName: 'Pichai',
        userName: 'google'
      });
    } else {
      console.log("> dummy users already exists: " + collection.length)
    }
  }
});

// Routing
app.use('/', routes);
app.use('/users', users);

// Angular partials
app.get('/partialsAngular/:partialPath', function(req, res) {
  res.render(path.join('partialsAngular/', req.params.partialPath));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
