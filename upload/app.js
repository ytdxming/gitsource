//import express
var express=require('express');
//import multer
//var multer=require('multer');

var fs=require('fs');
var path=require('path');


var app=express();


var multer=require('./multerUtil');
var uploadsingle=multer.single('logo');
var uploadmult=multer.array("photos",12);


app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
	res.send('please upload the file.......');
	//res.render('upload');
});

app.post('/singleUpload',function(req,res,next){
	console.log("go into post");
	//if()    //if this is single file to upload
	uploadsingle(req,res,function(err){
		console.log("go into uploadsingle");

		console.log(req.file);
		console.log(req.body);
			
	    	//res.send({ret_code: '0'});
	    	res.send("seccess");
		if(err){
			console.log("error return");
		}
		})
	//else() //if these are multi files to upload
	
})


app.post('/mulUpload',function(req,res,next){
	console.log("go into post");
	//if()    //if this is single file to upload
	uploadmult(req,res,function(err){
		console.log("go into uploadmult");

		console.log(req.files);
		console.log(req.body);
			
	    	//res.send({ret_code: '0'});
	    	res.send("seccess");
		if(err){
			console.log("error return");
		}
		})
	//else() //if these are multi files to upload
	
})
// app.post('/dataInpute',function(req,res){
// 	upload(req,res,function(err){
// 		if(err){
// 			console.log("error return");
// 		}
// 	})
// });




app.get('/upload', function(req, res, next){
    var form = fs.readFileSync('./upload.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(3000);