// importing modules
const express = require('express');
const burger = require('../models/burger.js')
let router = express.Router();

// setting routers  --- create all routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );

});

router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.deleteOne(
    condition,
    (result) => {

      res.status(200).end();

    }
  );

});

// exporting the module from this page to be imported into another page
module.exports = router; 
