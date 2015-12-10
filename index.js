var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var MobileDetect = require('mobile-detect');
var server;

/* Configure Express */

// set port
app.set('port', 8080);

// Any HTTP request will be satisfied using the content under './client'
app.use(express.static('./client'));

// use a body parse for JSON requests
app.use(bodyParser.json());

app.get('/redirect', function (req, res) {
  var mobileDetect = new MobileDetect(req.headers['user-agent']);
  if (mobileDetect.os() === 'AndroidOS') {
    res.redirect('http://facebook.com');
  } else {
    res.redirect('http://google.com');
  }
});

server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});