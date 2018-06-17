var multerUtil = require('./multerUtil');
        //multer有single()中的名称必须是表单上传字段的name名称。
var upload=multerUtil.upload.single('logo');       	   

exports.dataInput = function (req, res) {
    console.log("the two step is datainput");
    upload(req, res, function (err) {
        //添加错误处理
        console.log("the three step is in the upload");
        if (err) {
             return  console.log(err);
        } 
            //文件信息在req.file或者req.files中显示。
        console.log(req);
  });
 }