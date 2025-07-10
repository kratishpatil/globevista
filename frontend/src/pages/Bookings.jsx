import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import styles from './Bookings.module.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/bookings');
      setBookings(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    try {
      await api.delete(`/api/bookings/${bookingId}`);
      setBookings(bookings.filter(booking => booking._id !== bookingId));
      alert('Booking cancelled successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to cancel booking');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return styles.confirmed;
      case 'cancelled':
        return styles.cancelled;
      case 'pending':
        return styles.pending;
      default:
        return styles.pending;
    }
  };

  if (loading) {
    return (
      <div className={styles.bookingsPage}>
        <div className={styles.container}>
          <div className={styles.loading}>Loading your bookings...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.bookingsPage}>
        <div className={styles.container}>
          <div className={styles.error}>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.bookingsPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Bookings</h1>
        <p className={styles.subtitle}>
          Track all your flight bookings and manage them with ease
        </p>

        {bookings.length === 0 ? (
          <div className={styles.noBookings}>
            <p>You haven't made any bookings yet.</p>
            <p>Start exploring amazing destinations and book your next adventure!</p>
            <Link to="/flights" className="btn btn-primary">
              Explore Flights
            </Link>
          </div>
        ) : (
          <div className={styles.bookingsGrid}>
            {bookings.map((booking) => (
              <div key={booking._id} className={styles.bookingCard}>
                <div className={styles.bookingHeader}>
                  <span className={styles.bookingId}>Booking #{booking._id.slice(-8)}</span>
                  <span className={`${styles.bookingStatus} ${getStatusClass(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>

                <div className={styles.flightInfo}>
                  <div className={styles.flightIcon}>✈️</div>
                  <div className={styles.flightDetails}>
                    <div className={styles.destination}>
                      {booking.flight.destination}
                    </div>
                    <div className={styles.airline}>
                      {booking.flight.airline}
                    </div>
                  </div>
                </div>

                <div className={styles.bookingDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>
                      <span>📅</span>
                      Flight Date
                    </span>
                    <span className={`${styles.detailValue} ${styles.bookingDate}`}>
                      {formatDate(booking.flight.date)}
                    </span>
                  </div>
                  
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>
                      <span>💰</span>
                      Price
                    </span>
                    <span className={`${styles.detailValue} ${styles.bookingPrice}`}>
                      ${booking.flight.price}
                    </span>
                  </div>
                  
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>
                      <span>📋</span>
                      Booked On
                    </span>
                    <span className={styles.detailValue}>
                      {formatDate(booking.bookedAt)}
                    </span>
                  </div>
                  
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>
                      <span>💺</span>
                      Available Seats
                    </span>
                    <span className={styles.detailValue}>
                      {booking.flight.seats}
                    </span>
                  </div>
                </div>

                <div className={styles.bookingActions}>
                  {booking.status.toLowerCase() === 'confirmed' && (
                    <button
                      onClick={() => handleCancelBooking(booking._id)}
                      className={styles.cancelButton}
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings; 