const express = require('express');
const { createMovie, getMovies, deleteMovie, updateMovie } = require('../controllers/movieController');
const router = express.Router();

router.get('/movies', getMovies);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

module.exports = router;
