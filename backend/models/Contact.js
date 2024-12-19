const db = require('../config/db');

const createContactTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Contact (
      contact_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255),
      message TEXT,
      date_sent DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('Contact table created');
  });
};

module.exports = createContactTable;
