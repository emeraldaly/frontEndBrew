$(document).ready(function(){

  

  alert("searches.js loads")
  beerResults();

  function beerResults(){     //Function to Append the results from the API 

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