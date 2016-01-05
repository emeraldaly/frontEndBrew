//Wine.com API AJAX CALL

$(document).ready(function(){

  var userWineSearch;
var wineAPIkey = "apikey=29be091f5bd59025f02d4ac450384cf7";
var wineAPIurl = "http://services.wine.com/api/beta2/service.svc/json/catalog?"

wineAPIurl += "search=";
wineAPIurl += userWineSearch;
wineAPIurl += wineAPIkey;

//Example: http://services.wine.com/api/beta2/service.svc/format/resource?apikey=key&parameters

//Merlot Example by Mark
//http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=29be091f5bd59025f02d4ac450384cf7&search=merlot


//AJAX Call to access the endpoint
  $.ajax({
    type: "Get",

    
    url: "http://services.wine.com/api/beta2/service.svc/json/catalog?search=mondavi+cab&size=5&offset=10&apikey=29be091f5bd59025f02d4ac450384cf7",
    success: function(wines){
        
        console.log(wines);
        
      //for(var i =0; i< drinks.length; i++){
        //sdebugger
        //console.log(drinks[i]);
        //console.log(brews[1][0])
      },
    
    error: function ( jqXHR, textStatus, errorThrown ) {
      console.log("something went wrong");
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown); 
    }
  });

});
