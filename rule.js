const express=require("express");
const app=express();
app.post("/",function(req,res){
    res.send("this is home page")
});
app.listen(4000);