const db = require('../config/db');

const createVoteTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Vote (
      vote_id INT AUTO_INCREMENT PRIMARY KEY,
      resident_id INT,
      candidate_id INT,
      vote_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      vote_status ENUM('Confirmed', 'Pending') DEFAULT 'Pending',
      FOREIGN KEY (resident_id) REFERENCES Resident(resident_id),
      FOREIGN KEY (candidate_id) REFERENCES Candidate(candidate_id)
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('Vote table created');
  });
};

module.exports = createVoteTable;
