var db=require('../common/mysqlbasicconn');

var sql='select * from user';
//var sql='';

db.query(sql,function(err,result){
    if(err){
        console.log(err);
        return;
    }

    console.log('display all user from user');
    //console.log('用户数：',rows[0].count);
    console.log(result);

    
});