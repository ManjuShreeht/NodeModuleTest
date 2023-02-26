const userSchema=require('../models/UserSchema')
const express=require("express")
const {clearVali}=require("../validation/validate");
var bcrypt = require('bcryptjs');
const UserSchema = require('../models/UserSchema');

const userlogin=async(req,res)=>{
    try {
        res.render("Login")

    } catch (error) {
        console.log(error)
    }
}

const userloginpost=async(req,res)=>{
    const log={email,password}=req.body;
    if(!email || !password){
        return res.send("missing credentials")
    }
    let userdata;
    console.log(userdata)

    try{     
            userdata= await UserSchema.findOne({email:email})
        
        if(!userdata){
            return res.send("invalid username")
        }
    
        console.log(userdata)

      const pass=  bcrypt.compareSync(password, userdata.password); // true
      if(!pass){
        return res.send("invalid")
      }
      console.log(userdata)
    }
    catch(err){
        console.log(err)
    }
}

module.exports={userlogin,userloginpost}