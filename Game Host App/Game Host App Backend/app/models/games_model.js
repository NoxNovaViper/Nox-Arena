const knex=require("../knex");
const games_model={
    get_title:function(id){
        return knex("games").select("title").where({id}).first();
    },
    get_slug:function(id){
        return knex("games").select("slug").where({id}).first();
    },
    get_uploader_id:function(id){
        return knex("games").select("uploader_id").where({id}).first();
    },
    get_entry_path:function(id){
        return knex("games").select("entry_path").where({id}).first();
    },
    get_description:function(id){
        return knex("games").select("description").where({id}).first();
    },
    get_created_at:function(id){
        return knex("games").select("created_at").where({id}).first();
    },
    get_game_data:function(id){
        return knex("games").select("*").where({id}).first();
    },
    get_games_data:function(){
        return knex("games").select("*");
    },
    delete_data:function(id){
        return knex("games").where({id}).delete();
    },
    delete_multiple:function(ids){
        return knex("games").whereIn("id",ids).delete();
    },
    post_data:function(title,slug,uploader_id,entry_path,description){
        return knex("games").insert({title,slug,uploader_id,entry_path,description});
    },
    put_all:function(id,title,slug,uploader_id,entry_path,description){
        return knex("games").where({id}).update({title,slug,uploader_id,entry_path,description});
    },
    put_title:function(id,title){
        return knex("games").where({id}).update({title});
    },
    put_slug:function(id,slug){
        return knex("games").where({id}).update({slug});
    },
    put_uploader_id:function(id,uploader_id){
        return knex("games").where({id}).update({uploader_id});
    },
    put_entry_path:function(id,entry_path){
        return knex("games").where({id}).update({entry_path});
    },
    put_description:function(id,description){
        return knex("games").where({id}).update({description});
    },
};
module.exports=games_model;