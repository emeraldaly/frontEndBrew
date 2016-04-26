var express = require('express');
var router = express.Router();
var passport = require('passport');




//login and logout authentication routes
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
    res.redirect('/');
  
});

module.exports = router;