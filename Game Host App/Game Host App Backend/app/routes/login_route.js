const express=require("express");
const router=express.Router();
const knex=require("../knex");
const jwt=require("jsonwebtoken");
const helper=require("../helper/helper");
const valid=require("../middleware/valid_jwt");
const login_rules=require("../validators/rules_login");
router.post("/login",login_rules.login_auth,valid.check_valid,helper.err_handler(
    async(req,res)=>{
        const {username,password}=req.body;
        const user=await knex("users").where({username}).first();
        if(!user||user.password!==password){
            return helper.sendError(res,401,"Invalid credentials!");
        }
        const token=jwt.sign(
            {id:user.id,role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:"2h"}
        );
        helper.sendOk(res,token);
    }
));
module.exports=router;