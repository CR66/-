var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookiesession=require('cookie-session');
var bodyparser=require('body-parser');
var multer=require('multer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookiesession({
  keys:['aa','bb'],
  name:'node_id'
}));


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.indexOf('product')!==-1){//根据请求地址的不同
      cb(null, path.join(__dirname, 'public','upload','product'));//public/product
    }
    if(req.url.indexOf('user')!==-1){
      cb(null, path.join(__dirname, 'public','upload','user'))
    }
    if(req.url.indexOf('banner')!==-1){
      cb(null, path.join(__dirname, 'public','upload','banner'))
    }
  }
});

var upload=multer({storage});
app.use(upload.any());

app.use('/admin',express.static(path.join(__dirname, 'public/admin/')));
app.use('/',require('./routes/admin/banner'));
app.use('/admin/deng',require('./routes/admin/deng'));
app.use('/admin/zhuce',require('./routes/admin/zhuce'));
app.use('/admin/dengerror',require('./routes/admin/dengerror'));
// app.use('/admin/index',require('./routes/admin/index'));
app.use('/admin/*',require('./routes/admin/isindex'));
app.use('/admin/index',require('./routes/admin/index'));
app.use('/admin/xiang',require('./routes/admin/xiang'));
app.use('/admin/gou',require('./routes/admin/gou'));

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
