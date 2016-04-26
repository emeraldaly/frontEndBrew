// getting-started.js
var mongoose = require('mongoose');

//Database configuration
if (process.env.PORT) {
  mongoose.connect("mongodb://heroku_bw23419l:qh5rebm2e4btsd5huq4sng6mqj@ds041144.mlab.com:41144/heroku_bw23419l");
} else {
  mongoose.connect('mongodb://localhost/brewine-find');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("we're connected! Mongoose connection successful.");
});


module.export = db;