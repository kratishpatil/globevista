const express = require('express');
const { body, validationResult } = require('express-validator');
const Flight = require('../models/Flight');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @route   GET /api/flights
// @desc    Get all flights
// @access  Public
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find({}).sort({ date: 1 });
    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/flights
// @desc    Add a new flight
// @access  Private (JWT required)
router.post('/', protect, [
  body('destination').notEmpty().withMessage('Destination is required'),
  body('date').isISO8601().withMessage('Valid date is required'),
  body('price').isNumeric().withMessage('Valid price is required'),
  body('seats').isInt({ min: 1 }).withMessage('Valid number of seats is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { destination, date, price, seats, airline, departureTime } = req.body;

    const flight = await Flight.create({
      destination,
      date,
      price,
      seats,
      airline: airline || 'GlobeVista Airlines',
      departureTime: departureTime || '10:00 AM'
    });

    res.status(201).json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 