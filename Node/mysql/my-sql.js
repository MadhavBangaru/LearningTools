// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'bangaru120',
  database: 'Business',
  port:3306,
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
// simple query
connection.query(
  'SELECT * FROM `CustomerInfo`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);

// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );