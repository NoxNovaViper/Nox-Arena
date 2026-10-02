const express=require("express");
const router=express.Router();
const user_routes=require("../routes/user_route");
const uploader_routes=require("../routes/uploader_route");
const admin_routes=require("../routes/admin_route");
const auth=require("../middleware/auth_jwt");
const role_auth=require("../middleware/auth_role");
const login_routes=require("../routes/login_route");
const signup_routes=require("../routes/signup_route");
const game_routes=require("../routes/game_route");

router.use("/",login_routes);
router.use("/",signup_routes);
router.use("/users",auth,role_auth.user_only,user_routes);
router.use("/uploaders",auth,role_auth.uploader_only,uploader_routes);
router.use("/admin",auth,role_auth.admin_only,admin_routes);
router.use("/games", game_routes)

module.exports=router;
