var fs = require('fs');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var MobileDetect = require('mobile-detect');
var server;

var config = JSON.parse(fs.readFileSync('config.json').toString());

/* Configure Express */

// set port
app.set('port', config.port || 8080);

// use a body parse for JSON requests
app.use(bodyParser.json());

app.get(config.redirectRoute || '/redirect', function (req, res) {
  var mobileDetect = new MobileDetect(req.headers['user-agent']);
  if (mobileDetect.os() === 'AndroidOS') {
    res.redirect(config.isAndroidUrl || 'http://google.com/');
  } else {
    res.redirect(config.default || 'http://facebook.com/');
  }
});

server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});