var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    let data={
        user_session:res.user_session
      }
      res.render('xiang', data);
});

module.exports=router;