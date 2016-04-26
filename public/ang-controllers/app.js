var brewineApp = angular.module("brewineapp", ['ui.router']);

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


brewineApp.config( function($stateProvider, $urlRouterProvider, $locationProvider) {
   
   $urlRouterProvider.otherwise("/"); //provide for routes that don't exist

   //use stateProvider to template our routes


  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
      //controller??
    })

    .state('register', {
      url: '/registration',
      templateUrl: 'partials/register.html',
      //controller: "authenticationController"
    })

    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      //controller: "authenticationController"
    })

    .state('uberRide', {
      url: '/uberRide',
      templateUrl: 'partials/uberRide.html'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'partials/contact.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html'
    });

});
  




