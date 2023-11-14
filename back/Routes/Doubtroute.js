const express=require("express");
const {doubtModel}=require("../Models/Doubtmodel");

const Doubtroute=express.Router();

Doubtroute.post("/",async(req,res)=>{
    console.log(doubtModel);
    try {
      const doubt=new doubtModel(req.body);
        await doubt.save();
        res.send({"msg":"new doubt added"});

    } catch (error) {
        res.send({"msg":error.message});
    }
});


Doubtroute.get("/",async(req,res)=>{
 
    try {
        const {name}=req.body;

        const doubts=await doubtModel.find({name:name});
        console.log(doubts);
        if(doubts)
        {
            res.send(doubts);
        }else{
            res.send({"msg":"kindly login"})
        }

    } catch (error) {
        res.send({"msg":error.message});
    }
})

module.exports={Doubtroute};
