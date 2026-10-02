const {body,param}=require("express-validator");
const admin_id_u_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
];
const admin_post_u_auth=[
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
    body("password").notEmpty().withMessage("It must be strong."),
];
const admin_put_name_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
];
const admin_put_pwd_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("password").notEmpty().withMessage("It must be strong."),
];
const admin_put_all_u_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("password").notEmpty().withMessage("It must be strong."),
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
];


//games rules
const admin_put_all_g_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("title").notEmpty().isString().trim().escape(),
    body("slug").notEmpty().isString().trim().escape(),
    body("uploader_id").notEmpty().isInt(),
    body("description").optional().isString().trim().escape(),
    body("entry_path").notEmpty().isString().trim(),
];
const admin_post_g_auth=[
    body("title").notEmpty().isString().trim().escape(),
    body("slug").notEmpty().isString().trim().escape(),
    body("uploader_id").notEmpty().isInt(),
    body("description").optional().isString().trim().escape(),
    body("entry_path").notEmpty().isString().trim(),
];
const admin_id_g_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
];
const admin_put_title_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("title").notEmpty().isString().trim().escape(),
];
const admin_put_slug_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("slug").notEmpty().isString().trim().escape(),
];
const admin_put_description_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("description").optional().isString().trim().escape(),
];
const admin_put_entry_path_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("entry_path").notEmpty().isString().trim(),
];
const admin_put_upld_id_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("uploader_id").notEmpty().isInt(),
];
module.exports={
    admin_id_u_auth,
    admin_id_g_auth,
    admin_post_g_auth,
    admin_post_u_auth,
    admin_put_name_auth,
    admin_put_pwd_auth,
    admin_put_all_u_auth,
    admin_put_title_auth,
    admin_put_slug_auth,
    admin_put_description_auth,
    admin_put_upld_id_auth,
    admin_put_entry_path_auth,
    admin_put_all_g_auth
};