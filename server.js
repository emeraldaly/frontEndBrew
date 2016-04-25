var express       = require('express');
var session       = require('express-session');
// var favicon       = require("serve-favicon");
var logger        = require("morgan");
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

var PORT          = process.env.PORT || 8080;

var db            = require('./config/db.js');

var passport      = require('./config/passport');

var index         = require('./controller/index.js');
var authentication  = require('./controller/authentication.js');

var app           = express();    //Initializing Express

//Directories
app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/views"));
app.use(express.static(__dirname + "/public/views/partials"));

// app.use(favicon(__dirname + '/public/favicon.ico'));

//Middleware
app.use(logger('dev')); // log every request to the console

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({  
  key: 'bw-id',
  secret: 'keyboard Beercat', 
  cookie: {
    secure: false,
    maxAge: 60000 
  },
  saveUninitialized: true,
  resave: true 
}));

app.use(passport.initialize());
app.use(passport.session());

//Routing
app.get('/', index)

app.get('/login', authentication);

app.listen(8080, function(){
  console.log("Port listening on PORT: "+ PORT)
})