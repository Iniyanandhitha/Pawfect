const db = require('./db');

const Donation = {
  create: (userId, amount, message, callback) => {
    db.query(
      'INSERT INTO donations (user_id, amount, message) VALUES (?, ?, ?)',
      [userId, amount, message],
      callback
    );
  },
  getAll: (callback) => {
    db.query('SELECT * FROM donations', callback);
  }
};

module.exports = Donation;
