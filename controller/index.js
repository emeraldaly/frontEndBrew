var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/public/views/index.html');

});


module.exports = router;