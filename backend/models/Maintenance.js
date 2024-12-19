const db = require('../config/db');

const createMaintenanceTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Maintenance (
      maintenance_id INT AUTO_INCREMENT PRIMARY KEY,
      resident_id INT,
      amount DECIMAL(10, 2),
      payment_status ENUM('Paid', 'Pending') DEFAULT 'Pending',
      payment_date DATETIME,
      FOREIGN KEY (resident_id) REFERENCES Resident(resident_id)
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('Maintenance table created');
  });
};

module.exports = createMaintenanceTable;

