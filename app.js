var express = require('express');
var app = express();
var helpers = require('./helpers');
var logined = false

app.get('/login', function (req, res) {
  logined = true
  res.send('');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/sum', function (req, res) {

  if(!helpers.logined() && !logined)
  	return res.send('');

  var sum = Number(req.query.a) + Number(req.query.b);
  res.send(`${sum}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app; 
