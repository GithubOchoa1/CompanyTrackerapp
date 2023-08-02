const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "Root2",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;


// Export mysql path to you vscode
