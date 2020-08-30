const mysql = require('mysql');
var connection;

//Mysql connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(rocess.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db',
  });
}


//Connection to MySQL Server
connection.connect((err) => {
  if (err) throw err;

  console.log('Connected to MySQL!');
});

// Export connection for our ORM to use.
module.exports = connection;