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

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', function(req,res) {
  res.render("index")
  console.log("home page!!!!!!!!")
});
app.get('/web-development', function(req,res) {
  res.render("web-development")
  console.log("Web Development page!!!!!!!!")
});

app.get('/graphic-digital', function(req,res) {
  res.render("graphic-digital")
  console.log("Graphic-Digital page!!!!!!!!")
});

app.get('/painting', function(req,res) {
  res.render("painting")
  console.log("Painting page!!!!!!!!")
});

app.get('/about', function(req,res) {
  res.render("about")
  console.log("About page!!!!!!!!")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(req,res) {
console.log(`App is running on http://localhost:${PORT}`);
});
