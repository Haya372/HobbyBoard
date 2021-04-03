var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var gatherRouter = require('./routes/gather');
var hobbyRouter = require('./routes/hobby');
var userRouter = require('./routes/user');
var passport = require('passport');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var sessionCheck = function(req, res, next) {
  console.log("sessioncheck",req.session)
  if (req.session.passport.user) {
    console.log("sessioncheck:username",req.session.passport.user)
    next();
  } else {
    console.log("sessioncheck_redirect")
    res.redirect('/login');
  }
};

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false,
}));

// app.use('/login', loginRouter); 
app.use('/', indexRouter, sessionCheck);
app.use('/api/gather', gatherRouter);
app.use('/api/hobby', hobbyRouter);
app.use('/api/user', userRouter);
// test api
app.get('/test', (req, res) => {
    res.send('Hello World');
});

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
