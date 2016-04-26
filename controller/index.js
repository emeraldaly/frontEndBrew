var express = require('express');
var router = express.Router();


router.get("*", function(req,res){
  res.sendFile(process.cwd() + "/public/views/index.html")
})

router.get('/', function (req, res) {
  res.redirect('/');
});

router.get('/registration', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/partials/register.html');

});

router.get('/login', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/partials/login.html');

});

router.get('/about', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/partials/about.html');

});
router.get('/contact', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/partials/contact.html');

});
router.get('/uberRide', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/partials/uberRide.html');

});


module.exports = router;