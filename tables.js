
var mysql=require('mysql');
var con =mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"123@Navgurukul",
    database:"newbases"
});
con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    var sql="CREATE TABLE customers(name VARCHAR(255),address VARCHAR(255))";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Table created");
    });
});



