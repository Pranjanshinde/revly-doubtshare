const express=require("express");
const {userRouter}=require("./Routes/userRouter.js");
const {Doubtroute}=require("./Routes/Doubtroute.js")
const {connection}=require("./db.js");
const {Auth}=require("./Middleware/Auth.js");
var cors = require('cors');

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.use("/users",userRouter);

app.use(Auth);
app.use("/doubts",Doubtroute);


app.listen(8080,async()=>{
    try {
        console.log("connecting...");
        await connection;
        console.log("Connected");
    } catch (error) {
        res.send({"msg":error.message});
    }
});