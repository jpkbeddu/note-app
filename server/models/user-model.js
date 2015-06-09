var mongoose = require('mongoose');
var cryptoConfig = require('./../config/crypto-config');

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
require('./../config/auth')(newUser);
require('./../data/dummy-users')(newUser);

module.exports = newUser;
