var middleware = {
  requireAuthentication: function (req, res, next) { //route level middleware
    console.log('private route hit!');
    next();
  },
  logger: function (req, res, next) { // app level middleware
    var date = new Date().toString();
    console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on: ' + date);
    next();
  }
};

module.exports = middleware;
