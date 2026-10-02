const {body,param}=require("express-validator");
const signup_auth=[
    body("username").notEmpty().isString().escape().isLength({max:40}),
    body("password").notEmpty().isLength({min:6}),
];
module.exports={signup_auth};