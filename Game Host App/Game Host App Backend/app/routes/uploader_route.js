const express=require("express");
const uploader_router=express.Router();
const uploader_controller=require("../controllers/uploader_controller");
const valid=require("../middleware/valid_jwt");
const rules=require("../validators/rules_uploader");

// Games GET endpoints
uploader_router.get("/games/",valid.check_valid,uploader_controller.get_games_data);
uploader_router.get("/games/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.get_game_data);
uploader_router.get("/games/title/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.get_title);
uploader_router.get("/games/slug/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.get_slug);
uploader_router.get("/games/uploader_id/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.get_uploader_id);
uploader_router.get("/games/entry_path/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.get_entry_path);
uploader_router.get("/games/description/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.get_description);
uploader_router.get("/games/created_at/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.get_game_created_at);

// Legacy singular aliases
uploader_router.get("/game/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.get_game_data);

// Users GET endpoints
uploader_router.get("/users/",valid.check_valid,uploader_controller.get_users_data);
uploader_router.get("/users/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.get_user_data);
uploader_router.get("/users/role/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.get_role);
uploader_router.get("/users/username/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.get_username);
uploader_router.get("/users/created_at/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.get_user_created_at);

// Legacy user GET aliases
uploader_router.get("/user/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.get_user_data);
uploader_router.get("/role/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.get_role);
uploader_router.get("/username/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.get_username);

// User PUT endpoints
uploader_router.put("/users/password/:id",rules.upld_put_pwd_auth,valid.check_valid,uploader_controller.put_password);
uploader_router.put("/users/role/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.put_role);
uploader_router.put("/users/username/:id",rules.upld_put_name_auth,valid.check_valid,uploader_controller.put_username);
uploader_router.put("/users/:id",rules.upld_put_all_u_auth,valid.check_valid,uploader_controller.put_user_all);
// Legacy user PUT
uploader_router.put("/password/:id",rules.upld_put_pwd_auth,valid.check_valid,uploader_controller.put_password);
uploader_router.put("/user/:id",rules.upld_put_all_u_auth,valid.check_valid,uploader_controller.put_user_all);

// Game PUT endpoints
uploader_router.put("/games/title/:id",rules.upld_put_title_auth,valid.check_valid,uploader_controller.put_title);
uploader_router.put("/games/slug/:id",rules.upld_put_slug_auth,valid.check_valid,uploader_controller.put_slug);
uploader_router.put("/games/entry_path/:id",rules.upld_put_entry_path_auth,valid.check_valid,uploader_controller.put_entry_path);
uploader_router.put("/games/description/:id",rules.upld_put_description_auth,valid.check_valid,uploader_controller.put_description);
uploader_router.put("/games/uploader_id/:id",rules.upld_put_upld_id_auth,valid.check_valid,uploader_controller.put_uploader_id);
uploader_router.put("/games/:id",rules.upld_put_all_g_auth,valid.check_valid,uploader_controller.put_game_all);
// Legacy game PUT
uploader_router.put("/title/:id",rules.upld_put_title_auth,valid.check_valid,uploader_controller.put_title);
uploader_router.put("/slug/:id",rules.upld_put_slug_auth,valid.check_valid,uploader_controller.put_slug);
uploader_router.put("/entry_path/:id",rules.upld_put_entry_path_auth,valid.check_valid,uploader_controller.put_entry_path);
uploader_router.put("/description/:id",rules.upld_put_description_auth,valid.check_valid,uploader_controller.put_description);
uploader_router.put("/uploader_id/:id",rules.upld_put_upld_id_auth,valid.check_valid,uploader_controller.put_uploader_id);
uploader_router.put("/game/:id",rules.upld_put_all_g_auth,valid.check_valid,uploader_controller.put_game_all);

// POST endpoints
uploader_router.post("/users/",rules.upld_post_u_auth,valid.check_valid,uploader_controller.post_user);
uploader_router.post("/user/",rules.upld_post_u_auth,valid.check_valid,uploader_controller.post_user);
uploader_router.post("/games/",rules.upld_post_g_auth,valid.check_valid,uploader_controller.post_game);
uploader_router.post("/game/",rules.upld_post_g_auth,valid.check_valid,uploader_controller.post_game);

// DELETE endpoints
uploader_router.delete("/users/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.delete_user_data);
uploader_router.delete("/user/:id",rules.upld_id_u_auth,valid.check_valid,uploader_controller.delete_user_data);
uploader_router.delete("/games/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.delete_game_data);
uploader_router.delete("/game/:id",rules.upld_id_g_auth,valid.check_valid,uploader_controller.delete_game_data);

module.exports=uploader_router;