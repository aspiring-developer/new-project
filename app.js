const express = require('express');
const mongodb = require('mongodb');
const app = express();
require('dotenv').config();

let db;
let connectionString = process.env.MONGO_URI;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  db = client.db();
  console.log("Database connection established!")
})

app.set("view engine", "ejs");
app.set("views", "views");

app.get('/', function(req,res) {
  res.send("<h1>Welcome to new app!</h1>")
  console.log("home page!!!!!!!!")
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(req,res) {
console.log(`App is running on http://localhost:${PORT}`);
});
