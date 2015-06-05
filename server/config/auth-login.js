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
