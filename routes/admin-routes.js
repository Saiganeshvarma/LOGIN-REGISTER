var express = require('express')
const authMiddlware = require('../middleware/auth-middleware')
const adminMiddlware = require('../middleware/admin-middlware')


var router = express.Router()


router.get("/admin",authMiddlware,adminMiddlware,(req,res)=>{
    res.json({message : "welcome to admin page"})
})

module.exports = router

