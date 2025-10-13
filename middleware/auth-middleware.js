var jwt = require("jsonwebtoken")
var authMiddleware = (req,res,next)=>{
    console.log("The middle ware is running");
     var headerAuth = req.headers["authorization"]
     var token = headerAuth && headerAuth.split(" ")[1]
     if(!token){
       return res.status(401).json({message : "no token"})

     }
     try{
        var decodedToken = jwt.verify(token,process.env.JSON_WEB_TOKEN)
         req.user = decodedToken
         console.log(req.user);
        next()




     }catch(error){
       return res.status(401).json({message : "invalid token"})
     }

}

module.exports = authMiddleware
