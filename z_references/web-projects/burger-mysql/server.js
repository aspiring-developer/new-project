// importing required modules
const express = require("express");
const exphbs = require("express-handlebars");
let router = require("./controllers/burgers_controller");

// setting port for the app
const PORT = process.env.PORT || 5000;
const app = express();

// this is required to use static pages, images, stylesheets, etc 
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

// handlebars template engine 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// this makes server running
app.listen(PORT, () => {
  console.log("Server is listening on http://localhost:" + PORT);
});

