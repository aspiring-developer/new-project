// This file offers a set of routes for displaying and saving data to the db.

var db = require("../models");    // Grabbing the models from models folder
// Routes
module.exports = function (app) {
  // GET route for getting all of the burgers
  app.get("/api/burgers", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function (dbBurger) {
      // We have access to the burgers as an argument inside of the callback function
      res.json(dbBurger);
    });
  });
  // POST route for saving a new burger. You can create a burger using the data on req.body
  app.post("/api/burgers", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to insert into our table. In this case we just pass in an object with a burger_name and devoured property (req.body)
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function (dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      console.log(dbBurger)
      res.json(dbBurger);
    });
  });
  // DELETE route for deleting burgers. You can access the burger's id in req.params.id
  app.delete("/api/burgers/:id", function (req, res) {
    // We just have to specify which burger we want to destroy with "where"
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBurger) {
      console.log('--- deleted ---', dbBurger)
      res.json(dbBurger);
    });
  });
  // PUT route for updating burgers. The updated burger will be available in req.body
  app.put("/api/burgers", function (req, res) {
    // Update takes in an object describing the properties we want to update, and we use where to describe which objects we want to update
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbBurger) {
      console.log('--- updated ---', dbBurger)
      res.send('OK');
    });
  });
};