// import
var mysql = require('mysql');

//create connection
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejsmysql"
});

//connect DB
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
})