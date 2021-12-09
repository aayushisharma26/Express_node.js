var express=require('express');
var cookieparser=require('cookie-parser')

var app=express();
app.use(cookieparser())
app.get("/",function(req,res){
    res.cookie("cookie1","aayushi sharma").send("cookie set")//cookies create hogi

})
app.get("/show",function(req,res){
    res.send(req.cookies);  
    console.log(req.cookies)
})    
app.get("/delete",function(req,res){
    res.clearCookie("cookie1").send("cookie1 has been deleted`")
})
app.listen(4000);


