var express = require('express');
//var db=require('../common/mysqlbasicconn');

var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
