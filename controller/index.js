var express = require('express');
var router = express.Router();


router.get("*", function(req,res){
  res.sendFile(process.cwd() + "/public/index.html")
})

router.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/index.html');

});
router.get('/about', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/about.html');

});
router.get('/contact', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/contact.html');

});
router.get('/uberRide', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/uberRide.html');

});
router.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/index.html');

});


module.exports = router;