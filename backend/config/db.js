const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',  // Replace with your MySQL password
  database: 'neighborhood_db'  // Replace with your database name
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected');
});

module.exports = db;
