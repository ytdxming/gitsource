
var  multer=require('multer');
var fs=require("fs");
var storage = multer.diskStorage({
   //设置上传后文件路径，uploads文件夹会自动创建。
      destination: function (req, file, cb) {
            cb(null, './uploadtemp');
       }, 
     //给上传文件重命名，获取添加后缀名
      filename: function (req, file, cb) {
          var fileFormat = (file.originalname).split(".");
          //cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
          console.log(Date.now());
          cb(null, Date.now()+'-'+ file.originalname);
      }
 });  

//create the uploadfolder
var createFolder=function(folder){
      try {
        //To test the folder 
        //if the folder not e xist,the pull error"no such file or directory"
        fs.accessSync(folder);

      } catch(e) {
        // statements
        console.log(e);
        fs.mkdirSync(folder);
      }

};


var uploadfolder="./uploadtemp";
createFolder(uploadfolder);

     //添加配置文件到muler对象。
var upload = multer({
          storage: storage
});
    
  //如需其他设置，请参考multer的limits,使用方法如下。
   //var upload = multer({
  //    storage: storage,
  //    limits:{}
  // });
  
 //导出对象
module.exports = upload;