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

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}
