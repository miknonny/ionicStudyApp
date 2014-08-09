// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic']);

myApp.controller('ModalCtrl', ['$scope', '$ionicModal',
  function($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('my-modal.htm', {
      scope: $scope,
      animation: 'slide-in-up'
    })
    .then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
    };
  
  }
]);




