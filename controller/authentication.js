var express = require('express');
var router = express.Router();
var passport = require('passport');

//login authentication routes

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});


module.exports = router