const {body,param}=require("express-validator");
const user_id_u_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
];
const user_post_u_auth=[
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
    body("password").notEmpty().withMessage("It must be strong."),
];
const user_put_name_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
];
const user_put_pwd_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("password").notEmpty().withMessage("It must be strong."),
];
const user_put_all_u_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("password").notEmpty().withMessage("It must be strong."),
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
];

//games rules
const user_id_g_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
];
module.exports={
    user_id_u_auth,
    user_id_g_auth,
    user_post_u_auth,
    user_put_name_auth,
    user_put_pwd_auth,
    user_put_all_u_auth,
};