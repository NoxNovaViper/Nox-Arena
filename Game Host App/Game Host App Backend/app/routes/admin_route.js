const express=require("express");
const admin_router=express.Router();
const admin_controller=require("../controllers/admin_controller");
const valid=require("../middleware/valid_jwt");
const rules=require("../validators/rules_admin");

// Games endpoints
admin_router.get("/games/",valid.check_valid,admin_controller.get_games_data);
admin_router.get("/games/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.get_game_data);
admin_router.get("/games/title/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.get_title);
admin_router.get("/games/slug/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.get_slug);
admin_router.get("/games/uploader_id/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.get_uploader_id);
admin_router.get("/games/entry_path/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.get_entry_path);
admin_router.get("/games/description/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.get_description);
admin_router.get("/games/created_at/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.get_game_created_at);

// Also maintain legacy singular aliases for backwards compatibility
admin_router.get("/game/",valid.check_valid,admin_controller.get_games_data);

// Users endpoints
admin_router.get("/users/",valid.check_valid,admin_controller.get_users_data);
admin_router.get("/users/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.get_user_data);
admin_router.get("/users/role/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.get_role);
admin_router.get("/users/username/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.get_username);
admin_router.get("/users/created_at/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.get_user_created_at);

// Also maintain legacy singular aliases for user endpoints
admin_router.get("/user/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.get_user_data);
admin_router.get("/role/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.get_role);
admin_router.get("/username/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.get_username);

// User PUT endpoints
admin_router.put("/users/password/:id",rules.admin_put_pwd_auth,valid.check_valid,admin_controller.put_password);
admin_router.put("/users/role/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.put_role);
admin_router.put("/users/username/:id",rules.admin_put_name_auth,valid.check_valid,admin_controller.put_username);
admin_router.put("/users/:id",rules.admin_put_all_u_auth,valid.check_valid,admin_controller.put_user_all);
// Legacy user PUT
admin_router.put("/password/:id",rules.admin_put_pwd_auth,valid.check_valid,admin_controller.put_password);
admin_router.put("/user/:id",rules.admin_put_all_u_auth,valid.check_valid,admin_controller.put_user_all);

// Game PUT endpoints
admin_router.put("/games/title/:id",rules.admin_put_title_auth,valid.check_valid,admin_controller.put_title);
admin_router.put("/games/slug/:id",rules.admin_put_slug_auth,valid.check_valid,admin_controller.put_slug);
admin_router.put("/games/entry_path/:id",rules.admin_put_entry_path_auth,valid.check_valid,admin_controller.put_entry_path);
admin_router.put("/games/description/:id",rules.admin_put_description_auth,valid.check_valid,admin_controller.put_description);
admin_router.put("/games/uploader_id/:id",rules.admin_put_upld_id_auth,valid.check_valid,admin_controller.put_uploader_id);
admin_router.put("/games/:id",rules.admin_put_all_g_auth,valid.check_valid,admin_controller.put_game_all);
// Legacy game PUT
admin_router.put("/title/:id",rules.admin_put_title_auth,valid.check_valid,admin_controller.put_title);
admin_router.put("/slug/:id",rules.admin_put_slug_auth,valid.check_valid,admin_controller.put_slug);
admin_router.put("/entry_path/:id",rules.admin_put_entry_path_auth,valid.check_valid,admin_controller.put_entry_path);
admin_router.put("/description/:id",rules.admin_put_description_auth,valid.check_valid,admin_controller.put_description);
admin_router.put("/uploader_id/:id",rules.admin_put_upld_id_auth,valid.check_valid,admin_controller.put_uploader_id);
admin_router.put("/game/:id",rules.admin_put_all_g_auth,valid.check_valid,admin_controller.put_game_all);

// POST endpoints
admin_router.post("/users/",rules.admin_post_u_auth,valid.check_valid,admin_controller.post_user);
admin_router.post("/user/",rules.admin_post_u_auth,valid.check_valid,admin_controller.post_user);
admin_router.post("/games/",rules.admin_post_g_auth,valid.check_valid,admin_controller.post_game);
admin_router.post("/game/",rules.admin_post_g_auth,valid.check_valid,admin_controller.post_game);

// DELETE endpoints
admin_router.delete("/users/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.delete_user_data);
admin_router.delete("/user/:id",rules.admin_id_u_auth,valid.check_valid,admin_controller.delete_user_data);
admin_router.delete("/games/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.delete_game_data);
admin_router.delete("/game/:id",rules.admin_id_g_auth,valid.check_valid,admin_controller.delete_game_data);
admin_router.delete("/users/",valid.check_valid,admin_controller.delete_users_data);
admin_router.delete("/games/",valid.check_valid,admin_controller.delete_games_data);

module.exports=admin_router;