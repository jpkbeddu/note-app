angular.module('myApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });
    $routeProvider
      .when('/', {
        templateUrl: 'partialsAngular/main',
        controller: "MainController"
      });
  })
  .controller('MainController', ['$scope', function($scope) {
    $scope.myVar = "Angular is working";
  }]);
