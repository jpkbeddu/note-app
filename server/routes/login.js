var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.post('/', function(req, res, next) {
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
});

module.exports = router;
