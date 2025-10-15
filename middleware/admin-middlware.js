

var adminMiddleware = (req,res,next)=>{

    var userType = req.user.role
    if(userType !== "admin"){
        return res.json({message : "only admin is allowed"})
    }
    next()



}


module.exports = adminMiddleware






