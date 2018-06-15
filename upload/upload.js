//import express
var express=require('express');
//import multer
var multer=require('multer');

var fs=require('fs');
const path=require('path');


var testupload=require('./testupload');
 //app.post('/dataInpute',testController.dataInput);
// def the upload dir
//this is tempdir(all the upload file store in this dir)
//but the factory is add model path use:path.join(_dirname,'temp')

var upload=multer({dest: "/usr/src/nodecode/upload/temp"});
var app=express();


//do with http://127.0.0.1:3000 request ,but not use this 
app.get('/',function(req,res){
	res.send('please upload the file.......');
	//res.render('upload');
});

//do with /upload useing single
app.post('/upload', upload.single('logo'), function(req, res, next){
//app.post('/upload',  function(req, res, next){	
//display the information of the file
	var file = req.file;

    	console.log('文件类型：%s', file.mimetype);
    	console.log('原始文件名：%s', file.originalname);
    	console.log('文件大小：%s', file.size);
    	console.log('文件保存路径：%s', file.path);

    res.send({ret_code: '0'});
});

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

app.use(express.static(path.join(__dirname, 'public')));



app.post('/dataInput',testupload.dataInput,function(res,res,next){
	console.log("the first step");
});

//upload unit
//notice thie upload face <input type="file" name="avatar"/> the name must with the code below ok
//app.post('/singleUpload',upload.single('avatar'),function(req,res,next){
app.post('/singleUpload',function(req,res,next){
	//req.file is the 'avatar' file
	//req.body will hold the next fields,if there were any 
	console.log(req.file);
	console.log(req.body);

	res.end("Success Upload");
})

//multefile uploade
//notice the upload face <input type="file" name="photos"/> the name must be the code below ok
app.post('/mulUpload',upload.array('photos',12),function(req,res,next){
	console.log(req.files);
	console.log(req.body);

	//res.end(req.file+"<br/><br/>"+req.body)
	res.end("aaaaa" );
})

app.listen(3000);
