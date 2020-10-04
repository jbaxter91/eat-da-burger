const mysql = require("mysql");

if(process.env.JAWSDB_URL){
  const connection = mysql.createConnection(process.env.JAWSDB_URL);
  connection.connect((err)=>{
    if(err)throw err;
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
}
else{
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "burgers_db"
  });
  connection.connect((err)=>{
    if(err)throw err;
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
}