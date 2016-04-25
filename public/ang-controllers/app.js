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


brewineApp.config( ['$stateProvider', '$urlRouterProvider', '$locationProvider'], function ($stateProvider, $urlRouterProvider, $locationProvider) {
   
   $urlRouterProvider.otherwise("/"); //provide for routes that don't exist

   //use stateProvider to template our routes


  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    });

    // .state('registration', {
    //   url: '/register',
    //   templateUrl: '/views/register.html'
    // })

    // .state('login', {
    //   url: '/login',
    //   templateUrl: '/views/login.html'
    // })

    // .state('uberRide', {
    //   url: '/uberRide',
    //   templateUrl: '/views/uberRide.html'
    // })

    // .state('contact', {
    //   url: '/contact',
    //   templateUrl: '/views/contact.html'
    // })

    // .state('about', {
    //   url: '/about',
    //   templateUrl: '/views/about.html'
    // });

});
  




