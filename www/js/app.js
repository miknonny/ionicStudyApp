// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic']);

myApp.controller('PopCtrl', ['$scope', '$ionicPopover',
  function($scope, $ionicPopover){
    $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    })
    .then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function () {
      $scope.popover.hide();
    };
  }
]);


