var express = require('express');
var db=require('../common/mysqlbasicconn');

var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/**获取用户清单 */
router.get('/display',function(req,res,next){
	db.query('select * from user',(err,result)=>{
		if(err){
			console.log(err);
			return;
		};
		console.log('*********display all user***********');
		//res.render('index.ejs',result:result);
		console.log(result);

		res.render('userlist.ejs',{userList:result});
		
	});	
})

module.exports = router;
