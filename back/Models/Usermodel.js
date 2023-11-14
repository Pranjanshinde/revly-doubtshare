const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    name:String,
    type:String,
    language:String,
    subject:Array,
    grade:Array,
    email:String,
    password:String
});


const userModel=mongoose.model("user",UserSchema);

module.exports={userModel};
