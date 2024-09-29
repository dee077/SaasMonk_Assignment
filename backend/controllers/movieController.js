const Movie = require('../models/movie');
const Review = require('../models/review');

const createMovie = async (req, res) => {
    const { name, releaseDate } = req.body;
    const newMovie = new Movie({ name, releaseDate });
    await newMovie.save();
    res.status(201).json(newMovie);
};

const getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    await Review.deleteMany({ movieId: id });
    res.json({ message: 'Movie and associated reviews deleted' });
};

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { name, releaseDate } = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(
        id,
        { name, releaseDate },
        { new: true } // Return the updated movie
    );
    res.status(200).json(updatedMovie);
}

module.exports = { createMovie, getMovies, deleteMovie, updateMovie}
