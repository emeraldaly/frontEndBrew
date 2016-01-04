$(function() {
  // Uber API Constants
var uberClientId = "WLpbSEMABaOs_Q7X3gjvPeDrIu2ml4Jw"
var uberServerToken = "FKq58vkwun346eRHZ04PIcGsBP6UnA1Tq6fbBJ0U";

// Create variables to store latitude and longitude
var userLatitude
var userLongitude
var partyLatitude = 40.7283405
var partyLongitude = -73.994567;

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;

function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    type: "GET",
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
      Authorization: "Token" 
    },
    data: {
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: partyLatitude,
      end_longitude: partyLongitude
    },
    success: function(result) {
      console.log(result);
    }
  });
};
});
});  
