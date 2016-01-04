$(function() {
// create placeholder variables
var userLatitude
  , userLongitude;
var userLatitude
  , userLongitude
  , partyLatitude = 40.7283405
  , partyLongitude = -73.994567;

navigator.geolocation.watchPosition(function(position) {
    console.log(position);

    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});
});