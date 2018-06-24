

var db=require('../common/mysqlbasicconn');


//var sql='';

var jsonWrite=function(res,ret){
	if(typeof ret=='undefined'){
		res.json({
			code:'1',
			msg:'Can not do it'
		});
	}else {
		res.json(ret)
	}
};




module.exports={
	
	listuser: function(req,res,next){ 
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
	},



	insertuser: function(req,res,next){
		  //res.render('adduser.ejs');
	var param=req.query||req.params;
	/**
	*/

	console.log("***Raram is not null ");
	console.log(param);
	//console.log("*****"+param.id,param.name,param.age);

	if(param.name==null || param.age==null) {
		jsonWrite(res,undefined);
		return;
	}


	console.log("***Raram is not null ");
	console.log("*****"+param.id,param.name,param.age);





	db.query('INSERT INTO user (id,name,age) VALUES(?,?,?)',[param.id,param.name,param.age],(err,result)=>{
		if(err){
			console.log(err);
			return;
		};
		console.log(result.affectedRows);

		if(result){
			res.render('success');
//console.log("success");
			

		//res.render('userlist.ejs',{userList:result});
		}else {
			res.render('error');
		
		}
		console.log('*********addoneuser user***********');
		//res.render('index.ejs',result:result);
		console.log(result);
		return;

		//res.render('userlist.ejs',{userList:result});
		
	});	

	},



	delete:function(req,res,next){
			  //res.render('adduser.ejs');
	var param=req.query||req.params;
	/**
	*/

	console.log("***Raram is not null ");
	console.log(param);
	//console.log("*****"+param.id,param.name,param.age);

	if(param.name==null || param.age==null) {
		jsonWrite(res,undefined);
		return;
	}


	console.log("***Raram is not null ");
	console.log("*****"+param.id,param.name,param.age);



	db.query('delete * from user where id=?',param.id,(err,result)=>{
if(err){
	console.log(err);
	return;
},
	})

	}


}