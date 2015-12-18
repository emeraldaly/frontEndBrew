$(document).ready(function(){
  $.ajax({
    type: "Get",
    url: "http://api.brewerydb.com/v2/?key=4d31671ed97df8dccb12177e18f94199",
    success: function(drinks){
      console.log(drinks);
    },
    //error: function (jqXHR, textStatus, errorThrown) {
      console.log("something went wrong");
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
  })
});

API Key:  4d31671ed97df8dccb12177e18f94199