
var db = {};
var mysql = require('mysql');
var $dbconfig = require('../conf/db');

//use the pool
//var pool=mysql.createPool($dbconfig.mysql);
var pool = mysql.createPool($dbconfig.mysql);
// var student=[
//     'Charli',
//     'Tom',
//     'Jerry'
// ]

// student.forEach()

// db.query = function(sql, callback){  


/**
 * 
 * @param {*} sql 执行的sql语句，
 * @param {*} callback 执行的回调函数
 */
function query(sql, ArgsB, ArgsC) {

    /**
     * 检查sql语句
     */
    if (!sql) {
        //callback();  
        console.log("not sql error");
        return;
    }

    /**
    * 检查query共有几个参数
    */
    if (arguments.length == 2) {
        //参数ArgsB为callback,ArgsC没有传
        var callback = ArgsB;

        /**
         * 只有两个参数时，
         * pool.query(sql,function(err,result){
         * 
         *  //statement
         * })
         * 执行查询语句，有参数传递来的增加或删除无法执行
         */
        pool.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                callback(err, null);
                return;
            };

            callback(null, result);
        });

    } else if (arguments.length == 3) {
        var args = ArgsB;
        var callback = ArgsC;
        
        pool.query(sql, args, function (err, result) {
            if (err) {
                console.log(err);
                callback(err, null, null);
                return;
            };

            callback(null, args, result);
        });

    } else {
        throw new Error('Query 参数');
        return;
    }







    // pool.query(sql, function(err, rows, fields) {  
    //     if (err) {  
    //     console.log(err);  
    //     //callback(err, null);  
    //     return;  
    //   };  

    //   callback(null, rows, fields);  
    // });  
}
module.exports = {
    query: query
}

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
