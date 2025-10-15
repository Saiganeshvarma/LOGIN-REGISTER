
var jwt = require("jsonwebtoken")
var authMiddlware = (req,res,next)=>{
    console.log("The middle ware is running");
    var authheaders = req.headers["authorization"]
    var token = authheaders && authheaders.split(" ")[1]
    if(!token){
        return res.status(401).json({message : "no token found"})
    }
    try{

        var deocode = jwt.verify(token,process.env.JSON_WEB_TOKEN)
         req.user = deocode
        next()

        

    }catch(error){
        res.status(401).json({message : "invalid token"})
    }

    next()
}

module.exports = authMiddlware






