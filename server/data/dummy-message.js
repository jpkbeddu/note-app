var mongoose = require('mongoose');

module.exports = function() {
	
  // Checking DB data fetching - 
  var messageSchema = mongoose.Schema({message: String});
  var Message = mongoose.model('Message', messageSchema);
  var mongoMessage;
  Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
  });
}
