var express = require('express');
var db=require('../common/mysqlbasicconn');

var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/display',function(req,res,next){
	db.query('select * from user',(err,result)=>{
		if(err){
			console.log(err);
			return;
		};
		console.log('*********display all user***********');
		//res.render('index.ejs',result:result);
		res.render('userlist.ejs',{userList:result});
		console.log(result);

	});	
})

module.exports = router;
