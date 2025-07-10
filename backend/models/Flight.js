const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: [true, 'Destination is required'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  seats: {
    type: Number,
    required: [true, 'Number of seats is required'],
    min: [1, 'At least 1 seat must be available']
  },
  airline: {
    type: String,
    default: 'GlobeVista Airlines'
  },
  departureTime: {
    type: String,
    default: '10:00 AM'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema); 