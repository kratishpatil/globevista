const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const Review = require('../models/Review');

const router = express.Router();

// Get reviews for a destination
router.get('/:destination', async (req, res) => {
  try {
    const reviews = await Review.find({ destination: req.params.destination }).populate('user', 'name');
    res.json(reviews || []);
  } catch (err) {
    res.json([]); // Always return an array
  }
});

// Add a review
router.post('/:destination', protect, async (req, res) => {
  const { rating, comment } = req.body;
  const review = new Review({
    user: req.user.id,
    destination: req.params.destination,
    rating,
    comment
  });
  await review.save();
  res.status(201).json(review);
});

module.exports = router; 