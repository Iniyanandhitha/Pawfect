const db = require('../models/db');

// Fetch all pets
const getPets = (req, res) => {
  db.query('SELECT * FROM pets WHERE adopted = FALSE', (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

// Fetch a single pet by ID
const getPetById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM pets WHERE id = ?', [id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json({ message: 'Pet not found' });
    res.json(data[0]);
  });
};

// Create a new pet
const createPet = (req, res) => {
  const { name, age, breed, adopted } = req.body;
  db.query(
    'INSERT INTO pets (name, age, breed, adopted) VALUES (?, ?, ?, ?)',
    [name, age, breed, adopted || false],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: 'Pet created successfully', id: result.insertId });
    }
  );
};

// Update an existing pet by ID
const updatePet = (req, res) => {
  const { id } = req.params;
  const { name, age, breed, adopted } = req.body;
  db.query(
    'UPDATE pets SET name = ?, age = ?, breed = ?, adopted = ? WHERE id = ?',
    [name, age, breed, adopted, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Pet not found' });
      res.json({ message: 'Pet updated successfully' });
    }
  );
};

// Delete a pet by ID
const deletePet = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM pets WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Pet not found' });
    res.json({ message: 'Pet deleted successfully' });
  });
};

module.exports = { getPets, getPetById, createPet, updatePet, deletePet };