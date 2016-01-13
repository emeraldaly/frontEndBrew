//Cookies.get(); 


$(document).ready(function(){


  $("tbody").empty();

  var brewsArray = [];

  var myDataRef =  new Firebase ('https://brewine-find.firebaseio.com/');

  myDataRef.on('child_added', function(snapshot) {  //intro
    var brewsFB = snapshot.val(); //was coming up as undefined
                                      //return a data object from Firebase
    //debugger
    //brewsArray.push(brewsFB);
    
    console.log(brewsFB);     //checking data from Firebase
    //console.log(brewsArray);  //checking array of objects        
    
    //beerResults(brewsArray)

    brewByNamesBuildRow(brewsFB);

  });
  
  //debugger;
   //After completing array of objects, run build functions

  // function beerResults(beerData) {     //Function to Append the results from the API 
  //   console.log(beerData); // making sure that array passes through

  //   $("tbody").empty();     // Empty the results of the table 
   
  //  debugger;
  //   for (var i = 0; i < beerData.length; i++) {

  //     brewByNamesBuildRow(beerData[i]);
  //   }; //rub through brews array      
  // }
    

  function brewByNamesBuildRow (rowData) {
    //debugger
    console.log(rowData); //checking for beer name array element passing

    var nameTD = $("<td>").append(rowData.beer_name); //append beer_name key from Firebase object
    console.log(nameTD);
    
    var descriptionTD = $("<td>").append(rowData.beer_description); //append beer_description key from Firebase object
    console.log(nameTD);
    
    var newRow = ("<tr>");
    console.log(newRow);

    return $("tbody").append(newRow)
          .append(nameTD) // Adding each cell with correct information from object
          .append(descriptionTD);
      
    };
   //end of function

});