require("dotenv").config()
var express = require("express")

var connectToDatabase = require("./database/db")
var userRoute = require("./routes/user-routes")
var cors = require("cors")

var app = express()

// connect to the data base


connectToDatabase()

// add the middle ware

app.use(express.json())

app.use("/api/auth",userRoute)

app.use(cors())



var PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("The server is running");
})

