const express=require("express");
const router=express.Router();
const knex=require("../knex");
const jwt=require("jsonwebtoken");
const helper=require("../helper/helper");
const valid=require("../middleware/valid_jwt");
const signup_rules=require("../validators/rules_signup");
router.post("/signup",signup_rules.signup_auth,valid.check_valid,helper.err_handler(
    async(req,res)=>{
        const {username,password,role}=req.body;
        try{
            await knex("users").insert({username,password,role:"user"});
        }
        catch(err){
            if(err.code=="ER_DUP_ENTRY"){
                return helper.sendError(res,409,"Duplicate entry collision error, the name's already taken!");
            }
            throw(err);
        }
        helper.sendOk(res,"The user was created :)");
    }
));
module.exports=router;