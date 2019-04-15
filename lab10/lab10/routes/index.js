var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('name', 'express');
  res.render('index', { error: false });
});

// app.get('/cookie', function (req, res) {
//   res.cookie('name', 'express'),send('cookie set')
//
// })
module.exports = router;
