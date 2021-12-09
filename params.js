// const { response } = require("express");

// Server .get("/school/:name",(request,responce)=>{
//     let schoolName=request.params.schoolName;
//     response.json({name:schoolName})

// })
// Server.listen(proceess.env.PORT,()=>{
//     console.log("server started at ",process.env.PORT)}
// )


// app.post('/api/users', function(req, res) {
//     const user_id = req.body.id;
//     const token = req.body.token;
//     const geo = req.body.geo;
  
//     res.send({
//       'user_id': user_id,
//       'token': token,
//       'geo': geo
//     });
//   });
  
//   app.listen(post);
//   console.log('Server started at http://localhost:' + port);




var express = require('express');
var app = express();

app.get('/things/:name/:age/:class/:address', function(req, res){
   res.send('name: ' + req.params.name +'age:'+ req.params.age +'class:'+req.params.class +'address:'+req.params.address);
   console.log(req.params)
});

app.listen(9000);