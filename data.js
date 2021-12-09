var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello woeld! Ayushi....Sharma .....Hi");
});

app.listen(3000 , () =>{
    console.log('Listening to the port...')
});

