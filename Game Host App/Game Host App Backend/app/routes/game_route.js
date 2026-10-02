const express=require("express");
const game_router=express.Router();
const user_controller=require("../controllers/admin_controller");

game_router.get("/",user_controller.get_games_data);
game_router.get("/games/",user_controller.get_games_data);
game_router.get("/games/:id",user_controller.get_game_data);
game_router.get("/game/:id",user_controller.get_game_data);
game_router.get("/slug/:id",user_controller.get_slug);
game_router.get("/uploader_id/:id",user_controller.get_uploader_id);
game_router.get("/entry_path/:id",user_controller.get_entry_path);
game_router.get("/description/:id",user_controller.get_description);
game_router.get("/created_at/:id",user_controller.get_game_created_at);

module.exports=game_router;