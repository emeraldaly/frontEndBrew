$(document).ready(function(){





//Will use specific API endpoints to run searches

//General Search URL:
//http://api.brewerydb.com/v2/search?q=60%2Bminute&type=beer&key=4d31671ed97df8dccb12177e18f94199


//Search Beer By Name:
//https://api.brewerydb.com/v2/beers?name=60%20minute%20IPA&key=4d31671ed97df8dccb12177e18f94199
// %20 = space


//Locations
//By State
//https://api.brewerydb.com/v2/locations?state=new%20york%20&key=4d31671ed97df8dccb12177e18f94199

//By Zip Code
//https://api.brewerydb.com/v2/locations?postalCode=10469&key=4d31671ed97df8dccb12177e18f94199


//*Not working* = URL for Location Search: api.brewerydb.com/v2/breweries?key=XXXXXX&withLocations=Y

//Brweries by General Search
//http://api.brewerydb.com/v2/search?q=60%2Bminute&type=beer&key=4d31671ed97df8dccb12177e18f94199

//Breweries by Beer Search Example: Coors Light
 //http://api.brewerydb.com/v2/beers?name=coors%20light&withBreweries=Y&key=4d31671ed97df8dccb12177e18f94199


//A Function To Run the Search based on the URL we specify

/*
  function breweryDBurlAPI () {

    var brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
    

    if (  ) { //if option selected is Beer Names, add /beers?names to end of API URL
      alert("Beers by Name was selected")
      //brewDBAPI += /beers?names
    
    }else if (){
      alert("Beers by Name was selected")

      //brewDBAPI += /locations?postalCode=

    } else if () {
      alert("Beers by Name was selected")
    };
    
    


    brewDBAPI += "?key=4d31671ed97df8dccb12177e18f94199";
    //brewDBAPI += "/beer/random";
    //http://api.brewerydb.com/v2/search?q=%2218%22+Imperial+IPA&key=4d31671ed97df8dccb12177e18f94199


  };

*/

brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/beers?name=60%20minute%20IPA&key=4d31671ed97df8dccb12177e18f94199";
//AJAX Call to access the endpoint
  $.ajax({
    type: "Get",
    dataType: 'json',
    //GET: "/location/d25euF",

    //url: "http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
    //url: "https:crossorigin.me/http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
    //url: "http://requestb.in/1cacuu41",
    url: brewDBAPI,
    success: function(brews){
        //var brewResponse =JSON.parse(brews);
        //console.log(brews.data[4]);
        console.log(brews);
        //console.log(brews.data.status);
      //for(var i =0; i< drinks.length; i++){
        debugger
        //console.log(drinks[i]);
        //console.log(brews[1][0])
      },
    
    error: function ( jqXHR, textStatus, errorThrown ) {
      console.log("something went wrong");
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown); 
    }
  }); //End of AJAX call

//Function to Append the results from the API 
  for (var i = 0; i < window.brews.length; i++) {
    var brewRow = brewBuild(window.brews[i]);
    console.log(brewCol);
    $(".search panel").append(tweetCol)
  };

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