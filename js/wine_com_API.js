//Wine.com API AJAX CALL

$(document).ready(function(){

});


//Example: http://services.wine.com/api/beta2/service.svc/format/resource?apikey=key&parameters
var wineAPIley = 29be091f5bd59025f02d4ac450384cf7;
//Sample
//http://services.wine.com/api/beta2/service.svc/format/resource?apikey=key&parameters

//Merlot Example by Mark
//http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=29be091f5bd59025f02d4ac450384cf7&search=merlot


//AJAX Call to access the endpoint
  $.ajax({
    type: "Get",

    //url: "http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
    //url: "https:crossorigin.me/http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
    //url: "http://requestb.in/1cacuu41",
    url: brewDBAPI,
    success: function(wines){
        //var brewResponse =JSON.parse(brews);
        console.log(wines);
        
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