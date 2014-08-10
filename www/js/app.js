// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic']);

myApp.controller('LoadingCtrl', ['$scope', '$ionicLoading',
  function($scope, $ionicLoading){
    $scope.show = function () {
      $ionicLoading.show({
        template: 'Loading...',
        duration: 2000
      });
    };

    $scope.hide = function () {
      $ionicLoading.hide();
    };
  }
]);


