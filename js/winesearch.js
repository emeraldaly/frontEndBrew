$(document).ready(function() {
  
$('.btn-group').hover(function() {
$('ul.dropdown-menu', this).stop(true, true).slideDown(500);
$(this).addClass('open');
      }, function() {
$('ul.dropdown-menu', this).stop(true, true).slideUp(500);
$(this).removeClass('open');
      });
//   $('.clickButton').on('click', modalAppear);
});

