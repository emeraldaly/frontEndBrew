//Wine.com API AJAX CALL

$(document).ready(function(){
  var wineName;
  var wineNameEncoded
  var wineDotComAPIurl;
  var winesByNames;
  var wineriesByName;
  var wineriesByZipCode;

//Example: http://services.wine.com/api/beta2/service.svc/format/resource?apikey=key&parameters

//Merlot Example by Mark
//http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=29be091f5bd59025f02d4ac450384cf7&search=merlot

  $(".search2").on("click", function(e){

    e.preventDefault();

    //alert("search button 1 works"); //Testing Search Now Button 

    wineName = $("#wineNameSearch2").val();

    wineNameEncoded = encodeURIComponent(wineName);

    console.log(wineName);  //Does the variable save the name? 
    console.log(wineNameEncoded);  //Does the variable save the name? 
    
    wineDotComurlAPIwinessByName (wineNameEncoded);         //Run the url function

    endpointWineDotComAPI (wineDotComAPIurl);       //Run the AJAX call function
  });



  function wineDotComurlAPIwinessByName (queryString) {

    wineDotComAPIurl = "http://services.wine.com/api/beta2/service.svc/json/";
    
    wineDotComAPIurl += "catalog?" + "apikey=29be091f5bd59025f02d4ac450384cf7";

    wineDotComAPIurl += "&search=" + wineNameEncoded;
    

  };


  function endpointWineDotComAPI (APIurl){

  //Call the Endpoint URL builder


  //AJAX Call to access the endpoint
    $.ajax({
      type: "Get",
      dataType: 'json',
     
      url: APIurl,

      success: function(wines){
          //var brewResponse =JSON.parse(brews);
          //console.log(brews.data[4]);
          console.log(wines);

          console.log(wines.Products.List[0]);


          for (var i = 0; i < wines.Products.List.length; i++){
            debugger
            console.log(wines.Products.List[i]);
         
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

});
