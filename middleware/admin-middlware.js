

var adminMiddlware = (req,res,next)=>{
    var userType = req.user.role 
    console.log(userType);
    if(userType !== "admin"){
        return res.status(401).json({message : "only admin is alloawed"})
    }
    next()

}


module.exports = adminMiddlware



