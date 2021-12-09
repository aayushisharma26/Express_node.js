const { signedCookie } = require('cookie-parser')
var express = require('express')
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  res.send('Time:',Date.now)
  next()
  
})
app.listen(3000);