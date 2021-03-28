// Importing/requiring modules/files
const User = require('../models/User');

// Creating controllers for pages: these are exported to use in router.js
exports.indexController = function(req, res) {
  res.render('index')
};

exports.webController = function(req, res) {
  res.render('web-development')
};

exports.graphicController = function(req, res) {
  res.render('graphic-digital')
};

exports.paintingController = function(req, res) {
  res.render('painting')
};

exports.aboutController = function(req, res) {
  res.render('about')
};

// Creating an instance of the User model based on user entered req.body
exports.registerController = function(req,res) {
  console.log(req.body);
let user = new User(req.body);
user.registerUser();
  //res.send("Thank you for registering!");
  if(user.errorMessage.length) {
    res.send(user.errorMessage);
  } else {
    res.send("Good job! All fields received appropriate values.")
  }
}