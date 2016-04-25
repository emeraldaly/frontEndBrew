var brewineApp = angular.module("brewineApp", []);

brewineApp.service('sharedProperties', function() {
  var user = 'test string value';

  return {
    getUser: function() {
      return user;
    },
    setUser: function(value) {
      user = value;
    }
  };
});


brewineApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
   
   $urlRouterProvider.otherwise("/"); //provide for routes that don't exist

   //use stateProvider to template our routes
});
  




