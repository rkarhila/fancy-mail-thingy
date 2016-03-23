var express = require('express')
var app = express()

console.log("starting app");


app.get('/', function (req, res) {
  res.send('Hello World')
});
app.listen(3000);

console.log("App running?");
