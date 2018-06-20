var mysql= require('mysql');
var $dbconfig=require('../conf/db');

//use the pool
//var pool=mysql.createPool($dbconfig.mysql);
var pool=mysql.createPool($dbconfig.mysql);
// var student=[
//     'Charli',
//     'Tom',
//     'Jerry'
// ]

// student.forEach()

db.query = function(sql, callback){  
  
    if (!sql) {  
        callback();  
        return;  
    }  
    pool.query(sql, function(err, rows, fields) {  
      if (err) {  
        console.log(err);  
        callback(err, null);  
        return;  
      };  
  
      callback(null, rows, fields);  
    });  
}  
module.exports = db;  


// 对query执行的结果自定义返回JSON

// function responseDoReturn(res,result,resultJSON){
//     if(typeof result === 'undefined'){
//         res.json({
//             code:'201',
//             msg:'faild to do'
//         });
//     }else{
//         res.json(result);
//     }
// };

// function query(sql,callback){
//     pool.getConnection(function(err,connetction){
//         connetction.query(sql,function(err,rows){
//             callback(err,rows);
//             connetction.release();
//         })
//     })
// };

// function queryArgs(sql,args,callback){
//     pool.getConnection(function(err,connetction){
//         connetction.query(sql,args,function(err,rows){
//             callback(err,rows);

//             connetction.release();
//         })
//     })
// }


// module.exports={
//     query:query,
//     queryArgs:queryArgs,
//     doReturn:responseDoReturn
// }
