$(document).ready(function(){

  var brewDBAPI = "https:crossorigin.me/http://api.brewerydb.com/v2/";
  brewDBAPI += "?key=4d31671ed97df8dccb12177e18f94199";
  //brewDBAPI += "/beer/random";
  //http://api.brewerydb.com/v2//search?q=%2218%22+Imperial+IPA&key=4d31671ed97df8dccb12177e18f94199


  $.ajax({
    type: "Get",
    dataType: 'json',
    GET: "/location/d25euF",

    //url: "http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
    //url: "https:crossorigin.me/http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
    //url: "http://requestb.in/1cacuu41",
    url: brewDBAPI,
    success: function(brews){
        //var brewResponse =JSON.parse(brews);
        console.log(brews.data[4]);
        console.log(brews[0]);
        console.log(brews.data.status);
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
  });
});

//API Key:  4d31671ed97df8dccb12177e18f94199