
window.beerName; //search1

window.breweryName; //search2

window.breweryLocationbyZipCode; //search3

window.brewDBAPI;


window.beersByNames; //search 1
window.beersByNamesWithDescriptions; //search 1

window.breweriesByName;   //search2
window.breweriesByNameWithDescriptions;   //search2

window.breweriesByZipCode;    //search3
window.breweriesDescriptionsByZipCode;    //search3

window.brewSearch1;
window.brewSearch2;
window.brewSearch3;

$(document).ready(function(){



  $(".search1").on("click", function(e){

    e.preventDefault();

    //alert("search button 1 works"); //Testing Search Now Button 

    window.beerName = $("#beerNameSearch1").val();

    beerNameEncoded = encodeURIComponent(window.beerName);

    console.log(window.beerName);  //Does the variable save the name? 
    console.log(beerNameEncoded);  //Does the variable save the encoded name? 
    
    breweryDBurlAPIbeersByName (beerNameEncoded);         //Run the url function
    console.log(brewDBAPI);
    endpointBreweryDBbeersByName (brewDBAPI);       //Run the AJAX call function
  });



//Search For Brewery 
  $(".search3").on("click", function(e){

    e.preventDefault();

    //alert("search button 3 works"); //Testing Search Now Button 

    window.breweryName = $("#breweryNameSearch3").val();
    

    breweryNameEncoded = encodeURIComponent(window.breweryName);

    console.log(window.breweryName);  //Does the variable save the name? 
    console.log(breweryNameEncoded);
    
    breweryDBurlAPIbreweriesByName (window.breweryNameEncoded);         //Run the url function
    console.log(brewDBAPI);
    
    endpointBreweryDBbreweriesByName (brewDBAPI);       //Run the AJAX call function
  });

  //Search For Brewery by Zip Code
  $(".search5").on("click", function(e){

    e.preventDefault();

    //alert("search button 5 works"); //Testing Search Now Button 

    window.breweryLocationbyZipCode = $("#breweryZipCodeSearch5").val();

    breweryLocationbyZipCodeEncoded = encodeURIComponent(window.breweryLocationbyZipCode);
    
    console.log(window.breweryLocationbyZipCode);  //Does the variable save the name? 
    console.log(breweryLocationbyZipCodeEncoded)
    
    breweryDBurlAPIbreweriesByZipCode (breweryLocationbyZipCodeEncoded);         //Run the url function

    endpointBreweryDBzipCode (brewDBAPI);       //Run the AJAX call function
    console.log( brewDBAPI);
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
    console.log(brewDBAPI);

  };

  function breweryDBurlAPIbreweriesByName (queryString) {
    debugger
    brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
    
    brewDBAPI += "search?q=" + queryString + "&type=brewery"

    brewDBAPI += "&key=4d31671ed97df8dccb12177e18f94199";
    
    console.log(brewDBAPI);
  };


  function breweryDBurlAPIbreweriesByZipCode (queryString) {

    brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
    
    brewDBAPI += "locations?postalCode=" + queryString

    brewDBAPI += "&key=4d31671ed97df8dccb12177e18f94199";
    
  };


//Searches with AJAX

// Search #1 - Beers by Names

  function endpointBreweryDBbeersByName (APIurl){

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
          brewSearch1 = brews;
          console.log(brewSearch1); // Saving the results objects
          console.log(brews.data[0].name);

          for (var i = 0; i < brews.data.length; i++){
            //debugger
            console.log(brews.data[i].name);
            window.beersByNames = brews.data[i].name;
            window.beersByNamesWithDescriptions = brews.data[i].description
            console.log(window.beersByNames);
            console.log(window.beersByNamesWithDescriptions);
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


// Search #2 - Breweries by Names
  function endpointBreweryDBbreweriesByName (APIurl){

  //Call the Endpoint URL builder


  //AJAX Call to access the endpoint
    $.ajax({
      type: "Get",
      dataType: 'json',
      
      url: APIurl,
      success: function(brews){
          
          console.log(brews);
          brewSearch2 = brews;
          console.log(brewSearch2); // Saving the results objects

          console.log(brews.data[0].name);

          for (var i = 0; i < brews.data.length; i++){
            //debugger
            console.log(brews.data[i].name);
            breweriesByName = brews.data[i].name;
            breweriesByNameWithDescriptions = brews.data[i].description;
            console.log(breweriesByName);
            console.log(breweriesByNameWithDescriptions);
       
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



//This is the "Breweries by ZIp Code" AJAX Call for Search Results
  function endpointBreweryDBzipCode (APIurl){

  //Call the Endpoint URL builder


  //AJAX Call to access the endpoint
    $.ajax({
      type: "Get",
      dataType: 'json',
   
      url: APIurl,
      success: function(brews){
        
          console.log(brews);
          brewSearch3 = brews;
          console.log(brewSearch3); // Saving the results objects
       

          for (var i = 0; i < brews.data.length; i++){
            //debugger
            console.log(brews.data[i].brewery.name); //Accessing the AJAX object
            console.log(brews.data[i].brewery.description); //Accessing the AJAX object
            breweriesByZipCode = brews.data[i].brewery.name;
            breweriesDescriptionsByZipCode = brews.data[i].brewery.description
            console.log(breweriesByZipCode); //Checking variable stored
            console.log(breweriesDescriptionsByZipCode); //Checking variable stored

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