var express = require('express');
var app = express();
app .get("/home",function(req,res){
    console.log(req.query)
    res.send(req.query);


 });
app.listen(8080,function(){
    console.log("server started")
})