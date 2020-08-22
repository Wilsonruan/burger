// Dependencies
var express = require("express");
const mysql = require('mysql');
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//Express middlewares to handle POST request and have req.body available
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Qwaszx92!',
  database: 'burgers_db',
});

//Connection to MySQL Server
connection.connect((err) => {
  if (err) throw err;

  console.log('Connected to MySQL!');
});

// Routes 
// Use Handlebars to render the main index.html page with the burger in it.
app.get("/", function(req, res) {
  connection.query("SELECT * from burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { burger: data });
  });
});

// Create a new burger
app.post("/api/burgers", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new burger_name
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// Delete a burger
app.delete("/api/burgers/:id", function(req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });