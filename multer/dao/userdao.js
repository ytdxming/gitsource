var db=require('../common/mysqlbasicconn');

var sql='select count(*) as count from user';


db.query(sql,function(sql,rows,fields){
    if(err){
        console.log(err);
        return;
    }
    console.log('用户数：',rows[0].count);
});