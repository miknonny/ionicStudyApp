// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic']);

myApp.controller('SlideCtrl', ['$scope', '$ionicSlideBoxDelegate',
  function ($scope, $ionicSlideBoxDelegate) {
    
    // Goes to the next Slide.
    $scope.nextSlide = function () {
      $ionicSlideBoxDelegate.next();
    };

    // Goes to the previous slide.
    $scope.previousSlide = function () {
      $ionicSlideBoxDelegate.previous();
    };

    // Counts the Number of slides.
    $scope.slideCount = function () {
      return $ionicSlideBoxDelegate.slidesCount();
    };

    //Returns number. The index of the current slide.
    $scope.slideIndex = function () {
      return $ionicSlideBoxDelegate.currentIndex();
    };
  }
]);




