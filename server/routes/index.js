var express = require('express');
var router = express.Router();
var dummyMessage = require('./../data/dummy-message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Note app',
    mongoMessage: dummyMessage.mongoMessage
  });
});

module.exports = router;
