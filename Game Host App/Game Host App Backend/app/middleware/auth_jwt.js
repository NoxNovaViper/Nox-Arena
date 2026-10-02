const jwt=require("jsonwebtoken");
const helper=require("../helper/helper");
const auth_jwt=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token=authHeader&&authHeader.split(" ")[1];
    if(!token){
        return helper.sendError(res,401,"Access denied!");
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded_user)=>{
        if(err){
            return helper.sendError(res,401,"Access denied!");
        }
        req.user=decoded_user;
        next();
    });
};
module.exports=auth_jwt;