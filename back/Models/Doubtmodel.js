const mongoose=require("mongoose");

const DoubtSchema=mongoose.Schema({
    name:String,
    grade:String,
    doubt:String,
    subject:String
});

const doubtModel=mongoose.model("doubt",DoubtSchema);

module.exports={doubtModel};