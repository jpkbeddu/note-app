var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var passport = require('passport');
var stylus = require('stylus');

module.exports = function(app, config) {
  // view engine setup
  app.set('views', path.join(config.rootPath, 'server/views'));
  app.set('view engine', 'jade');

  // Middleware configurations
  app.use(favicon(config.rootPath + '/public/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());
  app.use(session({
    secret: 'Note app using MEAN stack',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(path.join(config.rootPath, 'public')));
  app.use(stylus.middleware({
    src: path.join(config.rootPath, 'public'),
    compile: function compile(str, path) {
      return stylus(str).set('filename', path);
    }
  }));
}
