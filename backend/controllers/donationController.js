const Donation = require('../models/donation');

const createDonation = (req, res) => {
  const { user_id, amount, message } = req.body;

  Donation.create(user_id, amount, message, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true, donationId: result.insertId });
  });
};

const getAllDonations = (req, res) => {
  Donation.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

module.exports = { createDonation, getAllDonations };
