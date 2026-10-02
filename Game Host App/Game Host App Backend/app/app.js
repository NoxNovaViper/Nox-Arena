const path=require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express=require("express");
const {PORT}=require("./config/config");
const routes=require("../app/routes/index");
const app=express();

// Allow cross-origin requests from the Vite frontend
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","Content-Type,Authorization");
    if(req.method==="OPTIONS"){
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());
app.use("/",routes);
app.use((req,res)=>{
    res.status(404).json({error:"The route was not found!"});
});
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).json({error:"Something went wrong."});
});
app.listen(PORT,()=>{
    console.log(`The server is hosted at http://localhost:${PORT}`);
});