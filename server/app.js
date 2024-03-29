/**
 * Created by Rahul Singh
 */

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// view engine setup

app.use(logger('dev'));   //used this to for logs on console (status/errors).
var router = require('./router')(app);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') { 
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({status :'error',
      error: err.message,
      error_stack: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({status: 'error',
    error: err.message,
    error_stack: {}
  });
});


module.exports = app;
