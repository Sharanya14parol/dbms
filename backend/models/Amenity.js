const db = require('../config/db');

const createAmenityTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Amenity (
      amenity_id INT AUTO_INCREMENT PRIMARY KEY,
      amenity_name VARCHAR(255),
      description TEXT
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('Amenity table created');
  });
};

module.exports = createAmenityTable;
