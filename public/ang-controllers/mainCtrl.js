var mainController = angular.module('mainController', ['ngAnimate']);

mainController.controller("LoginController", function($scope, $rootScope, $http, $location, $stateParams, sharedProperties) {

  $rootScope.authenticated = false;
  $rootScope.current_user = " ";

  $scope.user = {
    user_id:  '',
    username: '',
    password: ''
  };

  $scope.error_message = '';

  $scope.login = function() {
    console.log("logging in");
    $http.post('/auth/login', $scope.user).success(function(data) {
      if (data.username) {

        $rootScope.authenticated = true;
        $rootScope.user_id = data._id;
        $rootScope.current_user = data.username;

        //Object for the service
        $rootScope.user = {
          user_id: data._id,
          username: data.username,
        };
        
        //Assign User Data to Service to share between controllers
        sharedProperties.setUser($rootScope.user);

        console.log("successfully Logged In");
        $location.path('/profile');
      } else {
        $scope.error_message = data.message;
      }
    });
  };


});




mainController.controller("RegisterController", function($scope, $rootScope, $http, $location, $stateParams, sharedProperties) {

  $rootScope.authenticated = false;
  $rootScope.current_user = " ";

  $scope.user = {
    user_id:  '',
    username: '',
    password: ''
  };

  $scope.error_message = '';

  $scope.register = function() {
    $http.post('/auth/register', $scope.user).success(function(data) {
       console.log('login');
      if (data.username) {
        $rootScope.authenticated = true;
        $rootScope.current_user = data.username;
        console.log("successfully registered");
        $location.path('/');
      } else {
        $scope.error_message = data.message;
      };
    });
  };


});