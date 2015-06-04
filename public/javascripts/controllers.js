angular.module('myApp')
  .controller('MainController', ['$scope', function($scope) {
    $scope.noteIndex = 0;
    $scope.myVar = "Angular is working";
    $scope.notes = [{
      title: "First note",
      content: "This is the content of first note",
      important: true,
      notebook: "Personel"
    }, {
      title: "Second note",
      content: "This is the content of Second note",
      important: false,
      notebook: "Personel"
    }, {
      title: "Third note",
      content: "This is the content of third note",
      important: true,
      notebook: "Work"
    }, {
      title: "Fourth note",
      content: "This is the content of fourth note",
      important: false,
      notebook: "Work"
    }, {
      title: "Fifth note",
      content: "This is the content of fifth note",
      important: false,
      notebook: "Personel"
    }, {
      title: "Sixth note",
      content: "This is the content of sixth note",
      important: true,
      notebook: "Work"
    }];
    $scope.openNote = function(item) {
      $scope.noteIndex = $scope.notes.indexOf(item);
    };
  }])
  .controller('LoginController', ['$scope', '$http', function($scope, $http) {
    $scope.SignIn = function(username, password) {
      console.log("SignIn function is called");
      $http.post('/login', {username: username, password: password}).
      then(function(response) {
        if(response.data.success) {
          console.log('logged in scuessfully');
        } else {
          console.log('loggin failed');
        }
      });
    };
  }]);
