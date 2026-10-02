const helper=require("../helper/helper");
const user_model=require("../models/users_model");
const admin_only=(req,res,next)=>{
    const {role}=req.user;
    if(role!=="admin"){
        console.warn(`Denied Access: User: ${req.user.id} Role: ${req.user.role} tried to access ${req.originalUrl}`);
        return helper.sendError(res,403,"The user had an incorrect role, so their access is denied.");
    }
    next();
};
const user_only=(req,res,next)=>{
    const {role}=req.user;
    if(role!=="user"){
        console.warn(`Denied Access: User: ${req.user.id} Role: ${req.user.role} tried to access ${req.originalUrl}`);
        return helper.sendError(res,403,"The user had an incorrect role, so their access is denied.");
    }
    next();
};
const uploader_only=(req,res,next)=>{
    const {role}=req.user;
    if(role!=="uploader"){
        console.warn(`Denied Access: User: ${req.user.id} Role: ${req.user.role} tried to access ${req.originalUrl}`);
        return helper.sendError(res,403,"The user had an incorrect role, so their access is denied.");
    }
    next();
};
module.exports={admin_only,user_only,uploader_only};