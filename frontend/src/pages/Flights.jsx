import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import styles from './Flights.module.css';
import { useCart } from '../context/CartContext';

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingLoading, setBookingLoading] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();

  const getUserFromStorage = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch {
        localStorage.removeItem('user');
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    setUser(getUserFromStorage());
  }, []);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
        const res = await api.get('/flights');
        setFlights(res.data);
      } catch (err) {
        setError('Failed to fetch flights. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchFlights();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleBook = async (flightId) => {
    // Debug: log the user in localStorage
    console.log('user in localStorage:', localStorage.getItem('user'));
    // Always read user directly from localStorage
    const userData = localStorage.getItem('user');
    let currentUser = null;
    if (userData) {
      try {
        currentUser = JSON.parse(userData);
      } catch {
        localStorage.removeItem('user');
        currentUser = null;
      }
    }
    if (!currentUser) {
      alert('Please login to book flights');
      navigate('/login');
      return;
    }

    setBookingLoading(prev => ({ ...prev, [flightId]: true }));

    try {
      const res = await api.post('/bookings', { flightId });
      setFlights(prevFlights =>
        prevFlights.map(flight =>
          flight._id === flightId
            ? { ...flight, seats: flight.seats - 1 }
            : flight
        )
      );
      alert(res.data.message);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to book flight';
      alert(errorMessage);
    } finally {
      setBookingLoading(prev => ({ ...prev, [flightId]: false }));
    }
  };

  if (loading) {
    return (
      <div className={styles.flightsPage}>
        <div className={styles.container}>
          <h2 className={styles.title}>Available Flights</h2>
          <div className={styles.loading}>Loading flights...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.flightsPage}>
        <div className={styles.container}>
          <h2 className={styles.title}>Available Flights</h2>
          <div className={styles.error}>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.flightsPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>Available Flights</h2>
        <p className={styles.subtitle}>
          Discover amazing destinations and book your next adventure with GlobeVista
        </p>
        
        {flights.length > 0 ? (
          <div className={styles.flightsGrid}>
            {flights.map((flight) => (
              <div className={styles.flightCard} key={flight._id}>
                <div className={styles.destination}>{flight.destination}</div>
                <div className={styles.airline}>
                  {flight.airline || 'GlobeVista Airlines'}
                </div>
                
                <div className={styles.details}>
                  <span className={styles.label}>Date</span>
                  <span className={`${styles.value} ${styles.date}`}>
                    {formatDate(flight.date)}
                  </span>
                </div>
                
                <div className={styles.details}>
                  <span className={styles.label}>Price</span>
                  <span className={`${styles.value} ${styles.price}`}>
                    {formatPrice(flight.price)}
                  </span>
                </div>
                
                <div className={styles.details}>
                  <span className={styles.label}>Available Seats</span>
                  <span className={`${styles.value} ${styles.seats}`}>
                    {flight.seats}
                  </span>
                </div>
                
                {flight.departureTime && (
                  <div className={styles.details}>
                    <span className={styles.label}>Departure</span>
                    <span className={styles.value}>{flight.departureTime}</span>
                  </div>
                )}

                <button
                  className={styles.bookButton}
                  onClick={() => addToCart(flight)}
                  disabled={isInCart(flight._id)}
                >
                  {isInCart(flight._id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noFlights}>
            <p>No flights available at the moment.</p>
            <p>Please check back later for new destinations!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flights; 