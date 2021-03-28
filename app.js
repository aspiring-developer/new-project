// Importing/requiring modules/files
const express = require('express');
const app = express();
const mongodb = require('mongodb');
const router = require('./router')

// Configure for ejs template engine
app.set("view engine", "ejs");
app.set("views", "views");

// Configure for body-parser to use req.body
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Configure for static page usage
app.use(express.static('public'));

// Using router from router.js file (it is imported above)
app.use('/', router);

// Exporting app.js file modules to use in db.js file
module.exports = app;
