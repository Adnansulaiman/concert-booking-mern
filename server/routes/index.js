var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.json({message:"Hello world"});
});
router.get('/', function(req, res, next) {
  res.json({message:"Hello world"});
});

module.exports = router;
