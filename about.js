const http = require("http"); 
const server=http.createServer((req,res)=>{
    //consile.log(req.url);
    if (req.url=="/"){
    res.end("hello from the other side aayushi");
    }else if (req.url=="/about"){
        res.end("hello from the aboutUs side");
    }else if (req.url=="/contact"){
        res.end("hello from the contact side");
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to the art number 8000");
});
