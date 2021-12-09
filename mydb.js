var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123@Navgurukul",
    
})
con.connect(function(err){
    if (err) throw err;
    console.log("Conected")
    con.query("CREATE DATABASE newbases",function (err,result){
        if (err) throw err;
        console.log("newbases created")

    })

})