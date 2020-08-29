var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Use Handlebars to render the main index.html page with the burger in it.
router.get("/", function (req, res) {
    burger.all(function (data) {
      res.render("index", { burger: data });
    });
  });
  
  // Create a new burger
  router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  // Delete a burger
  // router.delete("/api/burgers/:id", function (req, res) {
  //   burger.delete("DELETE FROM burgers WHERE id = ?", [req.params.id], function (result) {
  //   if (result.affectedRows === 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     }
  //     res.status(200).end();
  
  //   });
  // });
  
  // Update a burger
  // router.put("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   console.log("condition", condition);
  
  //   burger.update(
  //     {
  //       devoured: req.body.devoured
  //     },
  //     condition,
  //     function(result) {
  //       if (result.changedRows === 0) {
  //         return res.status(404).end();
  //       }
  //       res.status(200).end();
  //     }
  //   );
  // });

  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;