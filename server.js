process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
express = require('./config/express');
passport = require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();
port = (process.env.PORT || 3000);
app.listen(port, function() {
  console.log('Node app is running on port', port);
});
module.exports = app;