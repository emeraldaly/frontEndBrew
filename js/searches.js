$(document).ready(function(){
  //Testing Search Now Button 
  $(".search1").on("click", function(e){
    e.preventDefault();
    alert("search button 1 works");
    var beerName = $("#beerNameSearch1").val();
    console.log(beerName);
    alert(beerName);
  });

//var userBeerNameSearch = $()
});