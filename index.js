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
    // sql = "insert into product (product_name,product_price) values('Keyboard',20000)";//insert to tables
    // sql = "select * from product"; // get data to show
    // sql = "delete from product where product_price = 1500";
    sql = "update product set brand_id= 125554 where product_price=30000";
    con.query(sql,function(err,result){ // 2 prarameter 
        if(err) throw err;
        // console.log("Insert Complete"); 
        // console.log(result); // log for show data in database;
        // console.log("Delete Complete"); 
        console.log("Update Success");
        
    });
});