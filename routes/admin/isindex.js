module.exports=(req,res,next)=>{
  if(!req.session['username']){
    res.redirect('/admin/deng')
  }else{
    res.user_session={username:req.session.username,icon:req.session.icon}
    next();
  }
};