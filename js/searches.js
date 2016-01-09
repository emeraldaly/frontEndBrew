//Cookies.get(); 

$(document).ready(function(){
    
  //var message = snapshot.val();

  alert("searches.js loads")

  myDataRef.on('child_added', function(snapshot) {
        var brewsFB = snapshot.val();
        console.log(brewsFB);
  });
  

  beerResults();

  function beerResults(){     //Function to Append the results from the API 
    console.log(window.brewSearch1);

    $("tbody").empty();     // Empty the results of the table 

     //for (var i = 0; i < window.brewSearch1.length; i++) {
    //   var brewRow = brewBuildRow();
    //   console.log(brewRow);
    //   $(".search-results-table").append(brewCol)
    // };
  }
    
    


  function brewByNamesBuildRow () {
        
    var nameTD = $("<td>").append(window.beersByNames);
    var descriptionTD = $("<td>").append((window.beersByNamesWithDescriptions));
    var newRow = ("<tr>");

    return $(newRow).append(nameTD) // Adding each cell with correct information from object
          .append(descriptionTD)
      
    };
   //end of function

});