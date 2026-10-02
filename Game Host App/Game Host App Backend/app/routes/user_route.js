const express=require("express");
const user_router=express.Router();
const user_controller=require("../controllers/user_controller");
const valid=require("../middleware/valid_jwt");
const rules=require("../validators/rules_user");

// Games GET endpoints
user_router.get("/games/",valid.check_valid,user_controller.get_games_data);
user_router.get("/games/:id",rules.user_id_g_auth,valid.check_valid,user_controller.get_game_data);
user_router.get("/games/title/:id",rules.user_id_g_auth,valid.check_valid,user_controller.get_title);
user_router.get("/games/slug/:id",rules.user_id_g_auth,valid.check_valid,user_controller.get_slug);
user_router.get("/games/uploader_id/:id",rules.user_id_g_auth,valid.check_valid,user_controller.get_uploader_id);
user_router.get("/games/entry_path/:id",rules.user_id_g_auth,valid.check_valid,user_controller.get_entry_path);
user_router.get("/games/description/:id",rules.user_id_g_auth,valid.check_valid,user_controller.get_description);
user_router.get("/games/created_at/:id",rules.user_id_g_auth,valid.check_valid,user_controller.get_game_created_at);

// Legacy singular alias
user_router.get("/game/:id",rules.user_id_g_auth,valid.check_valid,user_controller.get_game_data);

// Users GET endpoints
user_router.get("/users/",valid.check_valid,user_controller.get_users_data);
user_router.get("/users/:id",rules.user_id_u_auth,valid.check_valid,user_controller.get_user_data);
user_router.get("/users/role/:id",rules.user_id_u_auth,valid.check_valid,user_controller.get_role);
user_router.get("/users/username/:id",rules.user_id_u_auth,valid.check_valid,user_controller.get_username);
user_router.get("/users/created_at/:id",rules.user_id_u_auth,valid.check_valid,user_controller.get_user_created_at);

// Legacy user GET aliases
user_router.get("/user/:id",rules.user_id_u_auth,valid.check_valid,user_controller.get_user_data);
user_router.get("/role/:id",rules.user_id_u_auth,valid.check_valid,user_controller.get_role);
user_router.get("/username/:id",rules.user_id_u_auth,valid.check_valid,user_controller.get_username);

// User PUT endpoints
user_router.put("/users/password/:id",rules.user_put_pwd_auth,valid.check_valid,user_controller.put_password);
user_router.put("/users/role/:id",rules.user_id_u_auth,valid.check_valid,user_controller.put_role);
user_router.put("/users/username/:id",rules.user_put_name_auth,valid.check_valid,user_controller.put_username);
user_router.put("/users/:id",rules.user_put_all_u_auth,valid.check_valid,user_controller.put_user_all);
// Legacy user PUT
user_router.put("/password/:id",rules.user_put_pwd_auth,valid.check_valid,user_controller.put_password);
user_router.put("/user/:id",rules.user_put_all_u_auth,valid.check_valid,user_controller.put_user_all);

// User POST
user_router.post("/users/",rules.user_post_u_auth,valid.check_valid,user_controller.post_user);
user_router.post("/user/",rules.user_post_u_auth,valid.check_valid,user_controller.post_user);

// User DELETE
user_router.delete("/users/:id",rules.user_id_u_auth,valid.check_valid,user_controller.delete_user_data);
user_router.delete("/user/:id",rules.user_id_u_auth,valid.check_valid,user_controller.delete_user_data);

module.exports=user_router;