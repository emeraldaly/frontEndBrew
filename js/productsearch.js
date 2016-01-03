$(document).ready(function() {
   $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userAddress = $("#userAddress").val();

    alert(userAddress);
   })
});