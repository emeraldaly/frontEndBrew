var searchController = angular.module('searchController', ['ngAnimate']);
searchController.controller('SearchController', function($scope, $rootScope, $http, $location, $stateParams, sharedProperties) {
  $scope.search = function () {
        console.log("search was submitted");
        // $scope.workouts.push($scope.exercise);
        // $scope.exercise = {};


  // function breweryDBurlAPIbeersByName (queryString) {


  //   brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
    
  //   brewDBAPI += "search?q=" + queryString + "&type=beer";

  //   brewDBAPI += "&key=4d31671ed97df8dccb12177e18f94199";
  //   console.log(brewDBAPI);

  // };

  // function breweryDBurlAPIbreweriesByName (queryString) {
  //   //debugger
  //   brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
    
  //   brewDBAPI += "search?q=" + queryString + "&type=brewery"

  //   brewDBAPI += "&key=4d31671ed97df8dccb12177e18f94199";
    
  //   console.log(brewDBAPI);
  // };


  // function breweryDBurlAPIbreweriesByZipCode (queryString) {

  //   brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
    
  //   brewDBAPI += "locations?postalCode=" + queryString

  //   brewDBAPI += "&key=4d31671ed97df8dccb12177e18f94199";
    
  // };

  };
});
