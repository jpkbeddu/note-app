angular.module('myApp')
  .controller('LoginController', ['$scope', '$http', 'mvIdentity', 'mvNotifier', 'mvAuth', '$location', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
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
    $scope.SignOut = function() {
      console.log("SignOut Function is called");
      mvAuth.logoutUser().then(function() {
        $scope.username = "";
        $scope.password = "";
        mvNotifier.notify('You have successfully signed out');
        $location.path('/');
      })
    };
  }]);
