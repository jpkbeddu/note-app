var express = require('express');

var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = {
  rootPath: __dirname
};

require('./server/config/express')(app, config);
require('./server/config/routes')(app, env);
require('./server/config/db')(env);

console.log('> note-app:server is launching in ' + env + ' environment');

module.exports = app;
