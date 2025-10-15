
var express = require("express")
const authMiddlware = require("../middleware/auth-middleware")
const adminMiddleware = require("../middleware/admin-middlware")

var router = express.Router()

router.get("/admin",authMiddlware,adminMiddleware,(req,res)=>{
    res.json({message : "welcome to the admin page"})
})

module.exports = router