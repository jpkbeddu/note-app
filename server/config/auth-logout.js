exports.Logout = function(req, res, next) {
  req.logout();
  res.end();
}
