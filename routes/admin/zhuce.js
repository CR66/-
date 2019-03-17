var express=require('express');
var router=express.Router();
var mgdb = require('../../common/mgdb');
router.get('/',function(req,res,next){
    res.render('zhuce',{})
});
router.post('/submit', function(req, res, next) {
    console.log(req.body);
    let {username,password} = req.body;
    mgdb({
        collection:'admin'
    },({collection,client})=>{
        collection.insertMany([
            {username,password},
            {
                projection:{_id:0}
            } 
        ], function(err, result) {
        if(err){
            console.log('err',err)
        }else{
            res.redirect('/admin/deng')
        }
        });
    })
  
  });
module.exports=router;