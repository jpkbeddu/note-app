var userModel = require('./../models/user-model');

exports.GetUsers = function(req, res) {
  userModel.find({}).exec(function(err, doc) {
    res.send(doc);
  })
}
