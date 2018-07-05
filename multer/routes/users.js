var express = require('express');
var fs=require('fs');
var userdao=require('../dao/userdao');
var db=require('../common/mysqlbasicconn');

var router = express.Router();

/** 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
*/
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/**获取用户清单 */
router.get('/display',function(req,res,next){
	userdao.listuser(req,res,next);
});



router.get('/adduser',function(req,res,next){
	console.log("enter the adduser router");

	/**
	*/
	userdao.insertuser(req,res,next);
	//res.render('success');

	console.log("*****alreary insert one ,now list all*******");
	//userdao.listuser(req,res,next);

});


router.get('/add',function(req,res,next){
	var form=fs.readFileSync('./views/adduser.html',{encoding:'utf8'});
	res.send(form);

	console.log('form read success');
});



router.get('/deluser',function(req,res,next){
	

	/**
	*/

	userdao.delete(req,res,next);
	//res.render('success');

	console.log("*****alreary delete users ,now list all*******");
	//userdao.listuser(req,res,next);

});

router.get('/del',function(req,res,next){
	var form=fs.readFileSync('./views/deluser.html',{encoding:'utf8'});
	res.send(form);


});



router.get('/updateuser',function(req,res,next){
	

	/**
	*/
	userdao.updateuser(req,res,next);
	//res.render('success');

	console.log("*****alreary updateuser users ,now list all*******");
	//userdao.listuser(req,res,next);

})

module.exports = router;
