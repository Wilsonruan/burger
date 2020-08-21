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
  password: '',
  database: '',
});

//Connection to MySQL Server
connection.connect((err) => {
  if (err) throw err;

  console.log('Connected to MySQL!');
});

// Routes 
// app.get  //Read
// app.post //create
// app.put //Update
// app.delete //Delete
app.get("/", function(req, res) {
  res.render("index", );
});



app.get("/index", function(req, res) {
  res.render("index", );
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });