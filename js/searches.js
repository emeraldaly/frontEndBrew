$(document).ready(function(){

  @import(brewerydb.js)

//Function to Append the results from the API 
  for (var i = 0; i < window.brews.length; i++) {
    var brewRow = brewBuild(window.brews[i]);
    console.log(brewCol);
    $(".search panel").append(brewCol)
  };

  function brewListBuild(brewResults) {
    var brewColDiv = $("<div>").addClass("col-md-4");
    var brewNameDiv = $("<div>").addClass("name");
    var brewDescriptionDiv = $("<div>").addClass("description");
    var brewNames = $("<img>").attr("src",  brewResults.data.images.medium)
    var brewName;
    var brewLocation;
    //var  blah blah;

    console.log(brewPic);
    console.log(brewColDiv);
    colDiv.append(brewNameDiv);
    colDiv.append(brewDescriptionDiv)

    return colDiv;
  }; //end of function

});