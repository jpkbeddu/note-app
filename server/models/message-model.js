var mongoose = require('mongoose');

// message schema
var messageSchema = mongoose.Schema({
  message: String
});

// message model
var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
