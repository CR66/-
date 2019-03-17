var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data={
    user_session:res.user_session
  }
  res.render('index', data);
});

module.exports = router;
