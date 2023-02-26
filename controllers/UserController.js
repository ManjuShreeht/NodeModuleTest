const userSchema=require('../models/UserSchema')
const express=require("express")
const {clearVali}=require("../validation/validate");
var bcrypt = require('bcryptjs');

const loadRegister=async(req,res)=>{
    try {
        res.render("Register")

    } catch (error) {
        console.log(error)
    }
}

const insertUser= async(req,res)=>{
    const { name, email,mobile, password, username } = req.body;
    //validation 
    try{
        await clearVali({name,email,mobile,password,username})
        let userExit;
        try {
            userExit=await userSchema.findOne({email})
           
            
        } catch (error) {
            res.send(error)
            
        }
   
    
        console.log(userExit)
        if(userExit){
       return res.send("user exits")
        }

    


    //end
    var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(password, salt);
    try {
    const userdata=new userSchema({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        username:req.body.username,
        password:hash

    })  
    const user= await userdata.save();
    if(user){
        console.log(user)
        res.render('Register',{message:"your registration has been successfull."})
    }else{
        res.render('Register',{message:"your registration has been failed."})
    }
  

    } catch (error) {
        console.log(error)
    }
}catch(err){
    console.log(err)
}

}

module.exports={loadRegister,insertUser}