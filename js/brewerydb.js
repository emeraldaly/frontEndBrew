$(document).ready(function(){

var beerName;
var breweryName;
var beerLocationbyZipCode;
var brewDBAPI;

  $(".search1").on("click", function(e){

    e.preventDefault();

    //alert("search button 1 works"); //Testing Search Now Button 

    beerName = $("#beerNameSearch1").val();

    beerNameEncoded = encodeURIComponent(beerName);

    console.log(beerName);  //Does the variable save the name? 
    console.log(beerNameEncoded);  //Does the variable save the encoded name? 
    
    breweryDBurlAPIbeersByName (beerNameEncoded);         //Run the url function

    endpointBreweryDB (brewDBAPI);       //Run the AJAX call function
  });



//Search For Brewery 
  $(".search3").on("click", function(e){

    e.preventDefault();

    alert("search button 3 works"); //Testing Search Now Button 

    breweryName = $("#breweryNameSearch3").val();

    console.log(breweryName);  //Does the variable save the name? 
    
    breweryDBurlAPIbreweriesByName (breweryName);         //Run the url function

    endpointBreweryDB (brewDBAPI);       //Run the AJAX call function
  });




//Will use specific API endpoints to run searches

//General Search URL:
//http://api.brewerydb.com/v2/search?q=60%2Bminute&type=beer&key=4d31671ed97df8dccb12177e18f94199


//Search Beer By Name: 60 Minute IPA
//https://api.brewerydb.com/v2/beers?name=60%20minute%20IPA&key=4d31671ed97df8dccb12177e18f94199
//%20 = space


//Locations
//By State
//https://api.brewerydb.com/v2/locations?state=new%20york%20&key=4d31671ed97df8dccb12177e18f94199

//By Zip Code
//https://api.brewerydb.com/v2/locations?postalCode=10469&key=4d31671ed97df8dccb12177e18f94199


//*Not working* = URL for Location Search: api.brewerydb.com/v2/breweries?key=XXXXXX&withLocations=Y

//Breweries by General Search
//http://api.brewerydb.com/v2/search?q=60%2Bminute&type=beer&key=4d31671ed97df8dccb12177e18f94199

//Breweries by Beer Search Example: Coors Light
 //http://api.brewerydb.com/v2/beers?name=coors%20light&withBreweries=Y&key=4d31671ed97df8dccb12177e18f94199


//brewDBAPI += "/beer/random";
    //http://api.brewerydb.com/v2/search?q=%2218%22+Imperial+IPA&key=4d31671ed97df8dccb12177e18f94199
//TEST: brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/beers?name=60%20minute%20IPA&key=4d31671ed97df8dccb12177e18f94199";
//brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/beers?name=60%20minute%20IPA&key=4d31671ed97df8dccb12177e18f94199";


//A Function To Run the Search based on the URL we specify


  function breweryDBurlAPIbeersByName (queryString) {

    brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
    
    brewDBAPI += "search?q=" + queryString + "&type=beer";

    brewDBAPI += "&key=4d31671ed97df8dccb12177e18f94199";
    

  };

  function breweryDBurlAPIbreweriesByName (queryString) {

    brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
    
    brewDBAPI += "search?q=" + queryString + "&type=brewery";

    brewDBAPI += "&key=4d31671ed97df8dccb12177e18f94199";
    

  };



  function endpointBreweryDB (APIurl){

  //Call the Endpoint URL builder


  //AJAX Call to access the endpoint
    $.ajax({
      type: "Get",
      dataType: 'json',
      //GET: "/location/d25euF",

      //url: "http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
      //url: "https:crossorigin.me/http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
      //url: "http://requestb.in/1cacuu41",
      url: APIurl,

      success: function(brews){
          //var brewResponse =JSON.parse(brews);
          //console.log(brews.data[4]);
          console.log(brews);

          console.log(brews.data[0].name);

          for (var i = 0; i < brews.data.length; i++){
            //debugger
            console.log(brews.data[i].name);
          //console.log(drinks[i]);
          //console.log(brews[1][0])
          }
      },
      
      error: function ( jqXHR, textStatus, errorThrown ) {
        console.log("something went wrong");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown); 
      }
    }); //End of AJAX call

  };




/*
//Function to Append the results from the API 
  for (var i = 0; i < window.brews.length; i++) {
    var brewRow = brewBuild(window.brews[i]);
    console.log(brewCol);
    $(".search panel").append(tweetCol)
  };
*/
  function brewBuild(brewResults) {
    var brewColDiv = $("<div>").addClass("col-md-4");
    var brewPictureDiv = $("<div>").addClass("picture");
    var brewPic = $("<img>").attr("src",  brewResults.data.images.medium)
    var brewName;
    var brewLocation;
    //var  blah blah;

    console.log(brewPic);
    console.log(brewColDiv);
    colDiv.append(brewPic);

    return colDiv;
  }; //end of function

//API Key:  4d31671ed97df8dccb12177e18f94199



});