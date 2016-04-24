var express       = require('express');
var favicon       = require("serve-favicon");
var logger        = require("morgan");
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

var PORT          = process.env.PORT || 8080;

var passport      = require('./config/passport');
var db            = require('./config/db.js');

//Initializing Express
var app           = express();


app.configure( function () {

  //Public Directories
  app.use(express.static(__dirname + "/public"));
  app.use(express.static(__dirname + "/public/views"));
  app.use(express.static(__dirname + "/public/views/partials"));

  app.use(favicon(__dirname + '/public/favicon.ico'));

  //Middleware
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({  key: 'bw-id',secret: 'keyboard Beercat', cookie: { maxAge: 60000 } }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(morgan('dev')); // log every request to the console
  app.use(app.router);
});


//Routing
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(8080, function(){
  console.log("Port listening on PORT: "+ PORT)
})