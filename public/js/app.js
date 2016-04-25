angular.module('BeerWineApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'partials/home.html'
      })
    .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
      })
    .state('beerselect', {
        url: '/beerselect',
        templateUrl: 'partials/beerselect.html'
      })
    .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
      })
    .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html'
      })
    .state('search', {
        url: '/search',
        templateUrl: 'partials/search.html'
      })
    .state('swoop', {
        url: '/swoop',
        templateUrl: 'partials/swoop.html'
      })
    .state('uberRide', {
        url: '/uberRide',
        templateUrl: 'partials/uberRide.html'
      })
    .state('wineselect', {
        url: '/wineselect',
        templateUrl: 'partials/wineselect.html'
      })
  $locationProvider.html5Mode(true);
  }]);