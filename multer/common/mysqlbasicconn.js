var mysql= require('mysql');
var $dbconfig=require('../conf/db');

//use the pool
var pool=mysql.createPool($dbconfig.mysql);



