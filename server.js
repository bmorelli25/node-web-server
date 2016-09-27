var express = require('express');
var app = express();

var middleware = require('./middleware');
var PORT = 3000;

app.use(middleware.logger); // app level middleware

app.get('/about', middleware.requireAuthentication,function (req, res) {
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server running on port ' + PORT); //Called when server is up
});
