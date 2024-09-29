const express = require('express');
const { addReview, getReviewsByMovie, deleteReview, updateReview } = require('../controllers/reviewController');
const router = express.Router();

router.post('/reviews', addReview);
router.get('/reviews/:movieId', getReviewsByMovie);
router.delete('/reviews/:movieId/:reviewId', deleteReview);
router.put('/reviews/:movieId/:reviewId', updateReview);

module.exports = router;
