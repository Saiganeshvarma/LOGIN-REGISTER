var express = require("express")
const authMiddlware = require("../middleware/auth-middleware")

var router = express.Router()

router.get("/home",authMiddlware,(req,res)=>{
   res.json({message : "welcome to the home page"})
})

module.exports = router