/*const err_handler=(fn)=>(req,res,next)=>{//nested function returning a function with error handling
    Promise.resolve(fn(req,res,next)).catch(next);
};*/// To help understand
function err_handler(func){
    return function(req,res,next){//nested function returning a function with error handling
        Promise.resolve(func(req,res,next)).catch(next);
    }
}
const sendOk=(res,data,message="Ok")=>{
    res.json({success:true,message,data});
};
function sendError(res,_statusCode,message){
    res.status(_statusCode).json({success:false,message});
}
module.exports={err_handler,sendOk,sendError};