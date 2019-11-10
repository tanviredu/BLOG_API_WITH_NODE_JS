
// this is the module that is gonna be used
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');

// init the express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// not gonna use the jade enine we use the html thus ejs engeen
//app.set('view engine', 'jade');

///// VVI // this two line bellows is a must need to render html insted of jade
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
/////////////////////////



// using th ebody parser for json encoding
// you have to use to show how the data is parsed
app.use(bodyParser.urlencoded({extended:true})); // parse the data
app.use(bodyParser.json());



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//sub app devided by the router
app.use('/', indexRouter);
app.use('/users', usersRouter);
//// this is by default

// blog starts here
// routes for the blog
app.use('/blog', blogRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
