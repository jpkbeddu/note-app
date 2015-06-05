var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

module.exports = function(usersCollection) {

  // Passport authentication
  passport.use(new localStrategy(function(username, password, done) {
    usersCollection.findOne({
      userName: username
    }).exec(function(err, user) {
      if (user && user.autheticate(password)) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  }));

  passport.serializeUser(function(user, done) {
    if (user) {
      done(null, user._id);
    }
  });

  passport.deserializeUser(function(id, done) {
    usersCollection.findOne({
      _id: id
    }).exec(function(err, user) {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  });
}
