var express = require('express');
var app = express();

var PORT = 3000;
var middleware = {
  requireAuthentication: function (req, res, next) { //route level middleware
    console.log('private route hit!');
    next();
  },
  logger: function (req, res, next) { // app level middleware
    var date = new Date().toString();
    console.log('Request: ' + req.method + ' ' + req.originalUrl + 'on: ' + date);
    next();
  }
};

// app.use(middleware.requireAuthentication); app level middleware
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication,function (req, res) {
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server running on port ' + PORT); //Called when server is up
});
