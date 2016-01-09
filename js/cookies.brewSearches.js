$(document).ready(function(){
  Cookies.set('beerNameSearches', 'value', { expires: 7 });


//Read cookie
  Cookies.get('name'); // => 'value'
  Cookies.get('nothing'); // => undefined

});