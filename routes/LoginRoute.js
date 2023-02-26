const express=require("express");
const {userlogin, userloginpost}=require("../controllers/handlelogin")
const router=express.Router();

router.get('/login',userlogin)
// router.get("/register",loadRegister)
router.post('/login',userloginpost)




module.exports=router;