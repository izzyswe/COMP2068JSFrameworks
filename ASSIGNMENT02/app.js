//dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const passportConfig = require('./config/passport.config')

//routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var authRouter = require('./routes/auth')

var app = express();


mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log("Connected to MongoDB.")
  console.log("Database host:", mongoose.connection.host)
}).catch((err) => {
  console.log("MongoDB Connection Failed")
  console.error("Error name:", err.name)
  console.error("Error message:", err.message)
  if (err.reason) console.error("Reason:", err.reason)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/auth', authRouter);

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
