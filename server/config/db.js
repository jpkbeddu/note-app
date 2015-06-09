var mongoose = require('mongoose');
var cryptoConfig = require('./crypto-config');

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

  // user schema
  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
  });
  userSchema.methods = {
    autheticate: function(passwordToMatch) {
      return cryptoConfig.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  }

  // user model
  var newUser = mongoose.model('newUser', userSchema);

  require('./auth')(newUser);
  require('./../data/dummy-users')(newUser);
}
