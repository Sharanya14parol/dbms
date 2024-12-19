const db = require('../config/db');

const createCandidateTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Candidate (
      candidate_id INT AUTO_INCREMENT PRIMARY KEY,
      resident_id INT UNIQUE,
      profile_picture VARCHAR(255),
      total_votes INT DEFAULT 0,
      FOREIGN KEY (resident_id) REFERENCES Resident(resident_id)
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('Candidate table created');
  });
};

module.exports = createCandidateTable;
