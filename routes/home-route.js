var express = require("express")
var authMiddleware = require("../middleware/auth-middleware")

var router = express.Router()

router.get("/home",authMiddleware,(req,res)=>{
    res.json({message : "welcome to the Home page"})
})

module.exports = router