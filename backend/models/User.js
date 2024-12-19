const db = require('../config/db');

const createUserTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS User (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) UNIQUE,
      password VARCHAR(255),
      email VARCHAR(255) UNIQUE,
      is_admin BOOLEAN DEFAULT false
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('User table created');
  });
};

module.exports = createUserTable;
