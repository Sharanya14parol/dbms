const db = require('../config/db');

const createAnnouncementTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Announcement (
      announcement_id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      content TEXT,
      date_posted DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('Announcement table created');
  });
};

module.exports = createAnnouncementTable;
