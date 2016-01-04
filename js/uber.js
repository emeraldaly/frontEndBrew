$(function() {
  // Uber API Constants
var uberClientId = "WLpbSEMABaOs_Q7X3gjvPeDrIu2ml4Jw"
  , uberServerToken = "FKq58vkwun346eRHZ04PIcGsBP6UnA1Tq6fbBJ0U";

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