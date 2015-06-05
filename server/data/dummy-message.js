// Exporting dummy message module to separate file is not working. Need more inspection
// ATM this file is not linked anywhere
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
