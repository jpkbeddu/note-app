var mongoose = require('mongoose');

module.exports = function(env) {

  // MongoDB Conenction
  if (env === 'development') {
    mongoose.connect('mongodb://localhost/note-app');
  } else {
    mongoose.connect('mongodb://note-app-user:note-app-pass@ds049631.mongolab.com:49631/note-app');
  }
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('> note-app mongo DB opened');
  });
  require('./../models/user-model');
  require('./../models/message-model');
}
