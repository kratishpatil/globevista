const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  createBooking,
  getUserBookings,
  cancelBooking,
  bulkBooking
} = require('../controllers/bookingController');

const router = express.Router();

// All routes are protected (require authentication)
router.use(protect);

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Private
router.post('/', createBooking);

// @route   GET /api/bookings
// @desc    Get user's bookings
// @access  Private
router.get('/', getUserBookings);

// @route   POST /api/bookings/bulk
// @desc    Book multiple flights at once
// @access  Private
router.post('/bulk', bulkBooking);

// @route   DELETE /api/bookings/:id
// @desc    Cancel a booking
// @access  Private
router.delete('/:id', cancelBooking);

module.exports = router; 