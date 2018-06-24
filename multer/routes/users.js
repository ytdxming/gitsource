var express = require('express');
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
	

	/**
	*/
	userdao.insertuser(req,res,next);
	//res.render('success');

	console.log("*****alreary insert one ,now list all*******");
	//userdao.listuser(req,res,next);

})

module.exports = router;
