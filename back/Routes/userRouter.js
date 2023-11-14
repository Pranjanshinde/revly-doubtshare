const express=require("express");
const bcrypt = require('bcrypt');
const {userModel}=require("../Models/Usermodel");
const userRouter=express.Router();
var jwt = require('jsonwebtoken');



userRouter.post("/register",async(req,res)=>{

   
    try {
        const {name,email,password,language,subject,type,grade} = req.body;
        bcrypt.hash(password, 3,async function(err, hash) {
            // Store hash in your password DB.
            const user=new userModel({
                name:name,email:email,password:hash,language:language,subject:subject,type:type,grade:grade
            });
            await user.save();
            res.send({"msg":"new user registered"});
    
        });

    } catch (error) {
        res.send({"msg":error.message});
    }
});


userRouter.post("/login",async(req,res)=>{

   
    try {
        const {email,password} = req.body;
        const user=await userModel.findOne({email:email});

        if(user)
        {
            bcrypt.compare(password, user.password, function(err, result) {
                // result == true
               if(result)
               {
                var token = jwt.sign({ user_id: user._id }, 'masai');
                res.send({token:token,user:user})
               }else{
                res.send({"msg":"Please Login"});
               }
                
            });
        }else{
            res.send({"msg":"Please Login"});
        }
    } catch (error) {
        res.send({"msg":error.message});
    }
});




module.exports={userRouter};
