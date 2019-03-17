var express = require('express');
var router = express.Router();
var mgdb = require('../../common/mgdb');

router.get('/', function(req, res, next) {
  res.render('deng',{});
});
router.post('/submit', function(req, res, next) {
  console.log(req.body);
  let {username,password} = req.body;

  mgdb(
    {collection:'admin'},
    ({collection,client})=>{
      collection.find(
        {username,password},
        {
          projection:{_id:0}
        }
      ).toArray((err,result)=>{
        if(!err && result.length>0){
          //种cookie , 留session
          req.session['username']=result[0].username;
          req.session['icon']=result[0].icon;
          res.redirect('/admin/index');
        }else{
          // res.redirect(跳转地址==string)
          res.redirect('/admin/dengerror?msg=登录失败,用户或者密码有误')
        }
      })
    }
  )


});
module.exports = router;