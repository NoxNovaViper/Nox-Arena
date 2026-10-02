const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const knex=require("knex")({
    client:"mysql2",
    connection:{
        host:process.env.DB_host,
        user:process.env.DB_user,
        password:process.env.DB_password,
        database:process.env.DB_name,
    },
});
module.exports=knex;