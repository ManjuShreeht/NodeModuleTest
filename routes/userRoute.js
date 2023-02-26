const express=require("express")
const {loadRegister,insertUser}=require("../controllers/UserController")


const router=express.Router();

router.get("/register",loadRegister)
router.post("/register",insertUser)

module.exports=router