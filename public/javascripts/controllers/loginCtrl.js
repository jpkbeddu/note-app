angular.module('myApp')
  .controller('LoginController', ['$scope', '$http', 'mvIdentity', 'mvNotifier', 'mvAuth', function($scope, $http, mvIdentity, mvNotifier, mvAuth) {
    $scope.identity = mvIdentity;
    $scope.SignIn = function(username, password) {
      console.log("SignIn function is called");
      mvAuth.authenticateUser(username, password)
        .then(function(success) {
          if (success) {
            mvNotifier.notify('Logged in successfully');
            console.log('logged in scuessfully');
          } else {
            mvNotifier.notify('Check username/password');
            console.log('loggin failed');
          }
        });
    };
  }]);
