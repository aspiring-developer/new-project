// Importing/requiring modules/files
const userEnteredData = require('../db');
const validator = require('validator');

// Creating User model for database (it is a construction function)
let User = function (formData) {
  this.userInput = formData;
  this.errorMessage = [];
}

User.prototype.cleanUp = function () {
  if (typeof (this.userInput.username) != "string") { this.userInput.username = "" };
  if (typeof (this.userInput.email) != "string") { this.userInput.email = "" };
  if (typeof (this.userInput.password) != "string") { this.userInput.password = "" };

  // This block below resets/updates the fields to have only wanted characters/texts/objects/etc (as validated codes above). And also trims and makes lower case of username and email field texts.
  this.userInput = {
    username: this.userInput.username.trim().toLowerCase(),
    email: this.userInput.email.trim().toLowerCase(),
    password: this.userInput.password
  }
}

User.prototype.validate = function () {
  // Username validation condition
  if (this.userInput.username == "") { this.errorMessage.push("Username is required!") };
  if (this.userInput.username.length > 0 && this.userInput.username.length < 3) { this.errorMessage.push("Username must be at least 3 characters long.") };
  if (this.userInput.username.length > 20) { this.errorMessage.push("Username must not be over 20 characters.") };
  if (this.userInput.username !== "" && !validator.isAlphanumeric(this.userInput.username)) { this.errorMessage.push("Username can only contain letters and numbers.") };

  // Email validation condition
  if (!validator.isEmail(this.userInput.email)) { this.errorMessage.push("A valid email is required!") };

  // Password validation condition
  if (this.userInput.password == "") { this.errorMessage.push("Password is required!") };
  if (this.userInput.password.length > 0 && this.userInput.password.length < 6) { this.errorMessage.push("Password must be at least 6 characters long.") };
  if (this.userInput.password.length > 20) { this.errorMessage.push("Password must not be over 20 characters.") };
}

User.prototype.loginUser = function () {
  this.cleanUp();
  userEnteredData.collection("personal_site_collection").findOne({username: this.userInput.username}), (err, userWhoIsLogging) => {
if(userWhoIsLogging && userWhoIsLogging.password == this.userInput.password) {
   console.log("successfully login!")
} else {
  console.log("Invalid username or password!");
}
  }
}

User.prototype.registerUser = function () {
  this.cleanUp();
  this.validate();
  if (!this.errorMessage.length) {
    userEnteredData.collection("personal_site_collection").insertOne(this.userInput)
  };
}

// Exporting User model to use in registerController module in PageController file
module.exports = User;