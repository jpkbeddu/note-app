var index = require('./../routes/index');
var users = require('./../routes/users');
var login = require('./../routes/login');
var angularPartials = require('./../routes/angular-partials');

module.exports = function(app, env) {

  // Routing
  app.use('/', index);
  app.use('/users', users);
  app.use('/login', login);
  app.use('/partialsAngular', angularPartials);
}
