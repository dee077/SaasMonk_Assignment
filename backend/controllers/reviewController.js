const Review = require('../models/review');
const Movie = require('../models/movie');

const addReview = async (req, res) => {
    const { movieId, reviewerName, rating, reviewComments } = req.body;
    const newReview = new Review({ movieId, reviewerName, rating, reviewComments });
    await newReview.save();
    const reviews = await Review.find({ movieId });
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    await Movie.findByIdAndUpdate(movieId, { averageRating });
    res.status(201).json(newReview);
};

const getReviewsByMovie = async (req, res) => {
    const { movieId } = req.params;
    const reviews = await Review.find({ movieId });
    res.json(reviews);
};

const deleteReview = async (req, res) => {
    const { reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);
    res.status(200).json({ message: 'Review deleted successfully' });
};

const updateReview = async (req, res) => {
    const { reviewId, movieId } = req.params;
    const { rating, reviewComments } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
        reviewId,
        { rating, reviewComments },
        { new: true }
    );
    const reviews = await Review.find({ movieId });
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    await Movie.findByIdAndUpdate(movieId, { averageRating });
    res.status(200).json(updatedReview);
};

module.exports = { addReview, getReviewsByMovie, deleteReview, updateReview };
