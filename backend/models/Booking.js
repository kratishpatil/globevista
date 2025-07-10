const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',
    required: [true, 'Flight is required']
  },
  bookedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled', 'pending'],
    default: 'confirmed'
  }
}, {
  timestamps: true
});

// Create compound index to prevent duplicate bookings
bookingSchema.index({ user: 1, flight: 1 }, { unique: true });

module.exports = mongoose.model('Booking', bookingSchema); 