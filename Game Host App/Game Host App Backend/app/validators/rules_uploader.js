const {body,param}=require("express-validator");
const upld_id_u_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
];
const upld_post_u_auth=[
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
    body("password").notEmpty().withMessage("It must be strong."),
];
const upld_put_name_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
];
const upld_put_pwd_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("password").notEmpty().withMessage("It must be strong."),
];
const upld_put_all_u_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("password").notEmpty().withMessage("It must be strong."),
    body("username").notEmpty().isString().trim().escape().withMessage("It must unique."),
];


//games rules
const upld_put_all_g_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("title").notEmpty().isString().trim().escape(),
    body("slug").notEmpty().isString().trim().escape(),
    body("uploader_id").optional().isInt(),
    body("description").optional().isString().trim().escape(),
    body("entry_path").notEmpty().isString().trim(),
];
const upld_post_g_auth=[
    body("title").notEmpty().isString().trim().escape(),
    body("slug").notEmpty().isString().trim().escape(),
    body("uploader_id").optional().isInt(),
    body("description").optional().isString().trim().escape(),
    body("entry_path").notEmpty().isString().trim(),
];
const upld_id_g_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
];
const upld_put_title_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("title").notEmpty().isString().trim().escape(),
];
const upld_put_slug_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("slug").notEmpty().isString().trim().escape(),
];
const upld_put_description_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("description").optional().isString().trim().escape(),
];
const upld_put_entry_path_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("entry_path").notEmpty().isString().trim(),
];
const upld_put_upld_id_auth=[
    param("id").notEmpty().isInt().withMessage("It must be an integer."),
    body("uploader_id").notEmpty().isInt(),
];
module.exports={
    upld_id_u_auth,
    upld_id_g_auth,
    upld_post_g_auth,
    upld_post_u_auth,
    upld_put_name_auth,
    upld_put_pwd_auth,
    upld_put_all_u_auth,
    upld_put_title_auth,
    upld_put_slug_auth,
    upld_put_description_auth,
    upld_put_upld_id_auth,
    upld_put_entry_path_auth,
    upld_put_all_g_auth
};