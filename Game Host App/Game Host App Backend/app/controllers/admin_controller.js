const user_model=require("../models/users_model.js");
const game_model=require("../models/games_model.js");
const helper=require("../helper/helper.js");
const admin_controller={
    //User Gets
    get_user_data:helper.err_handler(
        async function(req,res){
            const data=await user_model.get_safe_user_data(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_users_data:helper.err_handler(
        async function(req,res){
            const data=await user_model.get_safe_users_data();
            helper.sendOk(res,data);
        }
    ),
    get_username:helper.err_handler(
        async function(req,res){
            const data=await user_model.get_username(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_role:helper.err_handler(
        async function(req,res){
            const data=await user_model.get_role(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_user_created_at:helper.err_handler(
        async function(req,res){
            const data=await user_model.get_created_at(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    //Game Gets
    get_game_data:helper.err_handler(
        async function(req,res){
            const data=await game_model.get_game_data(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_games_data:helper.err_handler(
        async function(req,res){
            const data=await game_model.get_games_data();
            helper.sendOk(res,data);
        }
    ),
    get_title:helper.err_handler(
        async function(req,res){
            const data=await game_model.get_title(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_slug:helper.err_handler(
        async function(req,res){
            const data=await game_model.get_slug(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_uploader_id:helper.err_handler(
        async function(req,res){
            const data=await game_model.get_uploader_id(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_description:helper.err_handler(
        async function(req,res){
            const data=await game_model.get_description(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_entry_path:helper.err_handler(
        async function(req,res){
            const data=await game_model.get_entry_path(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    get_game_created_at:helper.err_handler(
        async function(req,res){
            const data=await game_model.get_created_at(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    //Delete User
    delete_user_data:helper.err_handler(
        async function(req,res){
            const data=await user_model.delete_data(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    delete_users_data:helper.err_handler(
        async function(req,res){
            const {ids}=req.body;
            const data=await user_model.delete_multiple(ids);
            helper.sendOk(res,data,`${data} is the number of users deleted.`);
        }
    ),
    //Delete Game
    delete_game_data:helper.err_handler(
        async function(req,res){
            const data=await game_model.delete_data(req.params.id);
            helper.sendOk(res,data);
        }
    ),
    delete_games_data:helper.err_handler(
        async function(req,res){
            const {ids}=req.body;
            const data=await game_model.delete_multiple(ids);
            helper.sendOk(res,data,`${data} is the number of games deleted.`);
        }
    ),
    //Add User
    post_user:helper.err_handler(
        async function(req,res){
            const {username,password,role}=req.body;
            const data=await user_model.post_data(username,password,role);
            helper.sendOk(res,data);
        }
    ),
    //Add Game
    post_game:helper.err_handler(
        async function(req,res){
            const {title,slug,uploader_id,entry_path,description}=req.body;
            const data=await game_model.post_data(title,slug,uploader_id,entry_path,description);
            helper.sendOk(res,data);
        }
    ),
    //Update User
    put_username:helper.err_handler(
        async function(req,res){
            const {username}=req.body;
            const data=await user_model.put_username(req.params.id,username);
            helper.sendOk(res,data);
        }
    ),
    put_password:helper.err_handler(
        async function(req,res){
            const {password}=req.body;
            const data=await user_model.put_password(req.params.id,password);
            helper.sendOk(res,data);
        }
    ),
    put_role:helper.err_handler(
        async function(req,res){
            const {role}=req.body;
            const data=await user_model.put_role(req.params.id,role);
            helper.sendOk(res,data);
        }
    ),
    put_user_all:helper.err_handler(
        async function(req,res){
            const {username,password,role}=req.body;
            const data=await user_model.put_all(req.params.id,username,password,role);
            helper.sendOk(res,data);
        }
    ),
    //Update Game
    put_title:helper.err_handler(
        async function(req,res){
            const {title}=req.body;
            const data=await game_model.put_title(req.params.id,title);
            helper.sendOk(res,data);
        }
    ),
    put_slug:helper.err_handler(
        async function(req,res){
            const {slug}=req.body;
            const data=await game_model.put_slug(req.params.id,slug);
            helper.sendOk(res,data);
        }
    ),
    put_uploader_id:helper.err_handler(
        async function(req,res){
            const {uploader_id}=req.body;
            const data=await game_model.put_uploader_id(req.params.id,uploader_id);
            helper.sendOk(res,data);
        }
    ),
    put_entry_path:helper.err_handler(
        async function(req,res){
            const {entry_path}=req.body;
            const data=await game_model.put_entry_path(req.params.id,entry_path);
            helper.sendOk(res,data);
        }
    ),
    put_description:helper.err_handler(
        async function(req,res){
            const {description}=req.body;
            const data=await game_model.put_description(req.params.id,description);
            helper.sendOk(res,data);
        }
    ),

    put_game_all:helper.err_handler(
        async function(req,res){
            const {title,slug,uploader_id,entry_path,description}=req.body;
            const data=await game_model.put_all(req.params.id,title,slug,uploader_id,entry_path,description);
            helper.sendOk(res,data);
        }
    ),
};
module.exports=admin_controller;