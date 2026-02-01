const express = require('express');
const router = express.Router();
const {
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
} = require('../controllers/petController');

// Fetch all pets
router.get('/', getPets);

// Fetch a single pet by ID
router.get('/:id', getPetById);

// Create a new pet
router.post('/', createPet);

// Update an existing pet by ID
router.put('/:id', updatePet);

// Delete a pet by ID
router.delete('/:id', deletePet);

module.exports = router;