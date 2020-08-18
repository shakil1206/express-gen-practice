module.exports.root =(req,res,next)=>{
    res.json({
        message:"This is from user Controler root method"
    });
    next();
}


module.exports.test =(req,res,next)=>{
    res.json({
        message:"This is from user Controler Test method"
    })
}