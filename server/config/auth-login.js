var passport = require('passport');

exports.LoginAuthenticate = function(req, res, next) {
  var auth = passport.authenticate('local', function(err, user) {
    if (err) {
      console.log("> Auth Error caught: " + err);
      return next(err);
    }
    if (!user) {
      res.send({
        success: false
      });
    }
    req.logIn(user, function(err) {
      res.send({
        success: true,
        user: user
      });
    })
  })
  auth(req, res, next);
}

exports.requiresRole = function(role) {
  return function(req, res, next) {
    if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
      res.status(403);
      res.end();
    } else {
      next();
    }
  }
}