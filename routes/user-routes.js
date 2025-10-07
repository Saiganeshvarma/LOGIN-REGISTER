var express = require("express")
var { register, login } = require("../controllers/user-controllers")

var router = express.Router()

router.post("/register",register)

router.get("/login",login)

module.exports = router


