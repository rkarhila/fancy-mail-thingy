var express = require('express');
var app = express();

var monk = require('monk');
var mail_listener = require('mail-listener2');


var conf = require('./mail_and_system_conf');


console.log("starting app");


app.get('/', function (req, res) {
  res.send('Hello World')
});
app.listen(3000);

console.log("App running?");
