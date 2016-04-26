var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//Registration Strategy
passport.use('registration', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd',
    session: false
  },
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
  
));


//Login
passport.use('login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, username, password, done) {
    User.findOne({
      'username': req.body.username
    }, function(err, user) {
      //passing password to callback
      bcrypt.compare(req.body.password, user.password, function (err, res) {
        if (err) {
          return done(err);
        }
        if (!res) {

          return done(null, false);
        }
        if (res) {
          return done(null, user);
        }
      });
    });
  }));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});



module.exports = passport;