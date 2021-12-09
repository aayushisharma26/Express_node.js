var express = require('express');
var app = express();

app.get('/:id/:name', function(req, res){
   res.send('The id you specified is ' + req.params.name,);
   console.log(req.params);
});
app.listen(7000);


// var express = require('express');
// var app = express();

// app.get('/:id', function(req, res){
//    res.send('The id you specified is ' + req.params.id);
//    console.log(req.params);
// });
// app.listen(3000);


// var express = require('express');
// var app = express();

// app.get('/things/:name/:id', function(req, res) {
//    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
// });
// app.listen(3000);