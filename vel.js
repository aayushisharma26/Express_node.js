const express=require('express');
const app =express();
app.get("/",(req,res) => {
    res.send("hello world from aayushi");

});
app.listen(8000,()=>{
    console.log('listing the port at 8000');

});
    