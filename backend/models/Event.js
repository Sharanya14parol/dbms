const db = require('../config/db');

const createEventTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Event (
      event_id INT AUTO_INCREMENT PRIMARY KEY,
      event_name VARCHAR(255),
      event_date DATETIME,
      location VARCHAR(255),
      description TEXT
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('Event table created');
  });
};

module.exports = createEventTable;
