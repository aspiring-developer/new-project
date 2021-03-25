// importing required module
const mysql = require("mysql");

// creating connection to mysql database server
// adding Heroku connection information after subscribing with CC to Heroku host
// ####### This block of codes below serves Heroku connection #########
let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  // ####### This block of codes below serves MySQL connection #########
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Stanopal001$",
    database: "burgers_db"
  });
};
// finding out if the connection is established or not
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// exporting the module from this page to be imported into another page
module.exports = connection;
