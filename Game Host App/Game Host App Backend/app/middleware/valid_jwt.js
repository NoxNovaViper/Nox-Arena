const {validationResult}=require("express-validator");
const check_valid=(req,res,next)=>{
    const err=validationResult(req);//takes out the respponse for rule fails
    if(!err.isEmpty()){//validation report
        return res.status(400).json({success:false,error:err.array()});
    }
    next();
};
module.exports={check_valid};