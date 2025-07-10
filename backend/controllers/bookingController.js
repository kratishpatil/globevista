const Booking = require('../models/Booking');
const Flight = require('../models/Flight');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = async (req, res) => {
  try {
    const { flightId } = req.body;
    const userId = req.user.id;

    // Validate flightId
    if (!flightId) {
      return res.status(400).json({ message: 'Flight ID is required' });
    }

    // Check if flight exists
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    // Check if flight has available seats
    if (flight.seats <= 0) {
      return res.status(400).json({ message: 'No seats available for this flight' });
    }

    // Check if user already booked this flight
    const existingBooking = await Booking.findOne({ user: userId, flight: flightId });
    if (existingBooking) {
      return res.status(400).json({ message: 'You have already booked this flight' });
    }

    // Create booking
    const booking = await Booking.create({
      user: userId,
      flight: flightId
    });

    // Decrease available seats
    await Flight.findByIdAndUpdate(flightId, {
      $inc: { seats: -1 }
    });

    // Populate flight details for response
    await booking.populate('flight', 'destination date price airline');

    res.status(201).json({
      message: 'Flight booked successfully!',
      booking: {
        id: booking._id,
        flight: booking.flight,
        bookedAt: booking.bookedAt,
        status: booking.status
      }
    });

  } catch (error) {
    console.error('Booking error:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ message: 'You have already booked this flight' });
    }
    
    res.status(500).json({ message: 'Server error while creating booking' });
  }
};

// @desc    Get user's bookings
// @route   GET /api/bookings
// @access  Private
const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await Booking.find({ user: userId })
      .populate('flight', 'destination date price airline departureTime')
      .sort({ bookedAt: -1 });

    res.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ message: 'Server error while fetching bookings' });
  }
};

// @desc    Cancel a booking
// @route   DELETE /api/bookings/:id
// @access  Private
const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const userId = req.user.id;

    const booking = await Booking.findOne({ _id: bookingId, user: userId });
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({ message: 'Booking is already cancelled' });
    }

    // Update booking status
    booking.status = 'cancelled';
    await booking.save();

    // Increase available seats back
    await Flight.findByIdAndUpdate(booking.flight, {
      $inc: { seats: 1 }
    });

    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({ message: 'Server error while cancelling booking' });
  }
};

// @desc    Book multiple flights at once
// @route   POST /api/bookings/bulk
// @access  Private
const bulkBooking = async (req, res) => {
  try {
    const { flightIds, name, email } = req.body;
    const userId = req.user.id;
    if (!Array.isArray(flightIds) || flightIds.length === 0) {
      return res.status(400).json({ message: 'No flights selected.' });
    }
    const results = [];
    for (const flightId of flightIds) {
      // Check if flight exists and has seats
      const flight = await Flight.findById(flightId);
      if (!flight) {
        results.push({ flightId, status: 'error', message: 'Flight not found' });
        continue;
      }
      if (flight.seats <= 0) {
        results.push({ flightId, status: 'error', message: 'No seats available' });
        continue;
      }
      // Check for duplicate booking
      const existing = await Booking.findOne({ user: userId, flight: flightId });
      if (existing) {
        results.push({ flightId, status: 'error', message: 'Already booked' });
        continue;
      }
      // Create booking
      const booking = await Booking.create({ user: userId, flight: flightId });
      await Flight.findByIdAndUpdate(flightId, { $inc: { seats: -1 } });
      results.push({ flightId, status: 'success', bookingId: booking._id });
    }
    res.status(201).json({ message: 'Bulk booking complete', results });
  } catch (error) {
    console.error('Bulk booking error:', error);
    res.status(500).json({ message: 'Server error during bulk booking' });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  cancelBooking,
  bulkBooking
}; 