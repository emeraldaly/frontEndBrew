$(function() {
  // Uber API Constants
var uberClientId = "WLpbSEMABaOs_Q7X3gjvPeDrIu2ml4Jw",
uberServerToken = "FKq58vkwun346eRHZ04PIcGsBP6UnA1Tq6fbBJ0U";

// Create variables to store latitude and longitude
var userLatitude,
 userLongitude,
 partyLatitude = 40.620735,
 partyLongitude = -74.299672;

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
 
// Query Uber API if needed
 getEstimatesForUserLocation(userLatitude, userLongitude);
});

function getEstimatesForUserLocation() {
  $.ajax({
    type: "GET",
    url: "https://api.uber.com/v1/estimates/price",
    //In our example, we're using port 8000 for the URL http://localhost:8000/app/04-fetching-time-estimates/). ???? //
    headers: {
      Authorization: "Token" + uberServerToken
    },
    data: {
      start_latitude: 56.58979,
      start_longitude: -67.87908,
      end_latitude: partyLatitude,
      end_longitude: partyLongitude
    },*/
    success: function(result) {
      console.log(result);
    }
  });
}
});
//updating my app with uber data. our app could show diffeent Uber products and their time est, but our app only needs one time est to update p id=time//
 var data = result["prices"];
if (typeof data != typeof undefined) {
  //Sort Uber products by time to the user's location
 data.sort(function(t0, t1) {
  return t0.duration - t1.duration;
 });

  // Update the Uber button with the shortest time
 var shortest = data[0];
 if (typeof shortest != typeof undefined) {
   console.log("Updating time estimate...");
   $("#time").html("IN " + Math.ceil(shortest.duration / 60.0) + " MIN");
  }
} 
// refreshing time estimates
// Create variable to store timer
var timer;

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;

  // Create timer if needed
  // Once initialized, it will fire every 60 seconds as recommended by the Uber API
  // We only create the timer after we've gotten the user's location for the first time 
  if (typeof timer === typeof undefined) {
    timer = setInterval(function() {
        getEstimatesForUserLocation(userLatitude, userLongitude);
    }, 60000);

    // Query Uber API if needed
    getEstimatesForUserLocation(userLatitude, userLongitude);
  }
});*/

//use jquery to intercept the link
$("a").click(function(event){
    // Intercepted Click Event 
  });

//using mobile web deep linking infrastructure
$("a").click(function(event){
// Redirect to Uber API via deep-linking to the mobile web-app
var uberURL = "https://m.uber.com/sign-up?";

// Add parameters
uberURL += "client_id=" + uberClientId;
if (typeof userLatitude != typeof undefined) uberURL += "&" + "pickup_latitude=" + userLatitude;
if (typeof userLongitude != typeof undefined) uberURL += "&" + "pickup_longitude=" + userLongitude;
uberURL += "&" + "dropoff_latitude=" + partyLatitude;
uberURL += "&" + "dropoff_longitude=" + partyLongitude;
uberURL += "&" + "dropoff_nickname=" + "Thinkful";*/

// Redirect to Uber
window.location.href = uberURL;
});

//things to add if i have time include adding the price estimate that we're already getting from the endpoint, if/when I shou prices, follow ubers design guidelines,
//and show the surge indicator if needed, and improve user exp by fixing errors that may occur
});