var express = require('express');
var router = express.Router();


router.get("*", function(req,res){
  res.sendFile(process.cwd() + "/public/views/index.html")
})

router.get('/', function (req, res) {
  res.redirect('/');
});

router.get('/registration', function (req, res) {
  res.redirect('/#/register');

});

router.get('/login', function (req, res) {
  res.redirect('/#/login');
});

router.get('/about', function (req, res) {
//   res.sendFile(process.cwd() + '/public/views/partials/about.html');
  res.redirect('/#/about');
});

router.get('/contact', function (req, res) {
  //res.sendFile(process.cwd() + '/public/views/partials/contact.html');
  res.redirect('/#/contact');
});
router.get('/uberRide', function (req, res) {
//   res.sendFile(process.cwd() + '/public/views/partials/uberRide.html');
  res.redirect('/#/uberRide');
});
 

module.exports = router;