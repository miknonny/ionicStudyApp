// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic']);

myApp.controller('PopCtrl', ['$scope', '$ionicPopup', '$timeout',
 function ($scope, $ionicPopup, $timeout) {
    
    //Triggered on button click or on someother button.
    $scope.showPopup = function () {
      $scope.data = {};
      
      //An elaborate custom popup.
      var myPopup = $ionicPopup.show({
        template: '<input type="password" ng-model="data.wifi">',
        subtitle: 'please use normal things',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.wifi) {

                //Dont allow the user to close unless he enters the
                //wifi password.
                e.preventDefault();
              } else {
                return $scope.wifi.data;
              }
            }
          }
        ]
      });
      
      myPopup.then(function (res) {
        console.log('Tapped', res);
      });

      $timeout(function () {
        myPopup.close();
      }, 3000);
    };

    $scope.showConfirm = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Consume Ice cream',
        template: 'Are you sure you want to eat this icecream?'
      })
      .then(function (res) {
        if (res) {
          console.log('Are you sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    //An alert Dialogue.
    $scope.showAlert(function () {
      var alertPopup = $ionicPopup.alert({
        title: 'Do not eat that',
        template: 'it might taste good'
      });
    });
  }
]);


