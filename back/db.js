const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://pranjanshinde:pranjanshinde@cluster0.q3eodaz.mongodb.net/doubtshare?retryWrites=true&w=majority");

module.exports={connection};