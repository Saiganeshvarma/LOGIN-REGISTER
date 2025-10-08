
var user = require("../model/user")
var byCrpt = require("bcrypt")
var webToken = require("jsonwebtoken")
// register controller
var register = async(req,res)=>{
    try{
        // extract the user information
        var {userName,email,password,role} = req.body 
        // checkwthere the userName and email exists
        var userExists = await user.findOne({$or : [{userName},{email}]})
        if(userExists){
            return res.status(400).json({message : "user exists"})
        }
        // generate a salt and hash the password
        var salt = await byCrpt.genSalt(10)
        var hashPassword = await byCrpt.hash(password,salt)
        // create a new user in the data base 
        var myUser = await user.create({
            userName,
            email ,
            password  : hashPassword,
            role 
        })
        // send the sucessfull response
        if(myUser){
         return res.status(201).json({message : "created a new user"})

        }else{
            return res.status(400).json({message : "cannot create"})
        }





    }catch(error){
        console.log("error",error);
    }
}

var login = async(req,res)=>{
    // collect the user name and the password
    var {userName,password} = req.body
    // checl whethet the user name exists or not
    var userThere = await user.findOne({userName})
    if(!userThere){
      return  res.status(400).json({message : "invalid user name or password"})
    }

    var isPassword = await byCrpt.compare(password,userThere.password)
    console.log(isPassword);
    if(!isPassword){
        return res.status(400).json({message : "invalid user name or password"})

    }

    var gerenatedToeken = webToken.sign({
        userName : userThere._id,
        email : userThere.email,
        role : userThere.password
    },process.env.JSON_WEB_TOKEN,{expiresIn : "10m"})

    res.status(200).json({message : "login sucessfull",token : gerenatedToeken})













}

module.exports = {
    register,login
}