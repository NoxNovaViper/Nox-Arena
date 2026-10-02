const knex=require("../knex");
const users_model={
    get_username:function(id){
        return knex("users").select("username").where({id}).first();
    },
    get_password:function(id){
        return knex("users").select("password").where({id}).first();
    },
    get_role:function(id){
        return knex("users").select("role").where({id}).first();
    },
    get_created_at:function(id){
        return knex("users").select("created_at").where({id}).first();
    },
    get_user_data:function(id){
        return knex("users").select("*").where({id}).first();
    },
    get_users_data:function(){
        return knex("users").select("*");
    },
    get_safe_user_data:function(id){//safe
        return knex("users").select("username","role","created_at").where({id}).first();
    },
    get_safe_users_data:function(){//safe
        return knex("users").select("username","role","created_at");
    },
    delete_data:function(id){
        return knex("users").where({id}).delete();
    },
    delete_multiple:function(ids){
        return knex("users").whereIn("id",ids).delete();
    },
    post_data:function(username,password,role){
        return knex("users").insert({username,password,role});
    },
    put_all:function(id,username,password,role){
        return knex("users").where({id}).update({username,password,role});
    },
    put_username:function(id,username){
        return knex("users").where({id}).update({username});
    },
    put_password:function(id,password){
        return knex("users").where({id}).update({password});
    },
    put_role:function(id,role){
        return knex("users").where({id}).update({role});
    },
};
module.exports=users_model;