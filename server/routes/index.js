var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Checking DB data fetching - 
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
mongoMessage = messageDoc.message;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Note app',
    mongoMessage: mongoMessage,
    bootstrappedUser: req.user
  });
  if(!!req.user) {
  	console.log('> Logged in username: ' + req.user.userName);  	
  } else {
  	console.log('> Hit from an anonymous user: ' + req.user);  	
  }  
});

module.exports = router;
