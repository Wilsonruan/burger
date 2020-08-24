const mysql = require('mysql');

//Mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'burgers_db',
});

//Connection to MySQL Server
connection.connect((err) => {
  if (err) throw err;

  console.log('Connected to MySQL!');
});

// Export connection for our ORM to use.
module.exports = connection;