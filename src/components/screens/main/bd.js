const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "CarsCatalog",
  password: "ReallyHardPassword7"
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

const sql ='SELECT * FROM cars'; 

connection.query(sql, function(err, results) {
    if(err) console.log(err);
    module.exports.data = results;
});
connection.end();
