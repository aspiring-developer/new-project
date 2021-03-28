// Importing/requiring modules/files
const mongodb = require('mongodb');
require('dotenv').config();
const app = require('./app');

let db;
let connectionString = process.env.MONGO_URI;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db();
  console.log("Database connection established!");

// Importing app.js file modules to use in db.js file
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(req,res) {
console.log(`App is running on http://localhost:${PORT}`);
});
});