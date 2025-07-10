const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const User = require('../models/User');
const Flight = require('../models/Flight');

const router = express.Router();

// Get user's wishlist
router.get('/', protect, async (req, res) => {
  const user = await User.findById(req.user.id).populate('wishlist');
  res.json(user.wishlist);
});

// Add to wishlist
router.post('/:id', protect, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user.wishlist.includes(req.params.id)) {
    user.wishlist.push(req.params.id);
    await user.save();
  }
  res.json(user.wishlist);
});

// Remove from wishlist
router.delete('/:id', protect, async (req, res) => {
  const user = await User.findById(req.user.id);
  user.wishlist = user.wishlist.filter(f => f.toString() !== req.params.id);
  await user.save();
  res.json(user.wishlist);
});

module.exports = router; 