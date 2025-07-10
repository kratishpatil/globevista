import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import api from '../api/axios';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFields, setPaymentFields] = useState({ card: '', cardName: '' });

  // Reset payment state when cart changes
  useEffect(() => {
    setShowPayment(false);
    setPaymentSuccess(false);
    setPaymentFields({ card: '', cardName: '' });
  }, [cart]);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePaymentInput = (e) => {
    setPaymentFields({ ...paymentFields, [e.target.name]: e.target.value });
  };

  const handleBookAll = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      setShowPayment(false);
      completeBooking();
    }, 1200);
  };

  const completeBooking = async () => {
    setLoading(true);
    setError('');
    try {
      const flightIds = cart.map(f => f._id);
      await api.post('/bookings/bulk', { ...form, flightIds });
      setSuccess(true);
      clearCart();
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={styles.cartPage}>
        <div className={styles.confirmation}>
          <h2>Booking Confirmed!</h2>
          <p>Your flights have been booked. Check your email for details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>Your Cart</h2>
        {cart.length === 0 ? (
          <div className={styles.empty}>Your cart is empty.</div>
        ) : (
          <>
            <div className={styles.cartList}>
              {cart.map(flight => (
                <div className={styles.cartItem} key={flight._id}>
                  <div className={styles.details}>
                    <div className={styles.destination}>{flight.destination}</div>
                    <div className={styles.airline}>{flight.airline || 'GlobeVista Airlines'}</div>
                    <div className={styles.info}><span>Date:</span> {new Date(flight.date).toLocaleDateString()}</div>
                    <div className={styles.info}><span>Price:</span> ${flight.price}</div>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(flight._id)}>Remove</button>
                </div>
              ))}
            </div>
            <form className={styles.bookingForm} onSubmit={handleBookAll}>
              <h3>Enter your details to book all flights:</h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleInput}
                required
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleInput}
                required
                className={styles.input}
              />
              {error && <div className={styles.error}>{error}</div>}
              <button type="submit" className={styles.bookAllBtn} disabled={loading}>
                {loading ? 'Booking...' : 'Book All'}
              </button>
            </form>
            {showPayment && (
              <div className={styles.paymentModal}>
                <form className={styles.paymentForm} onSubmit={handlePaymentSubmit}>
                  <h3>Simulated Payment</h3>
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Cardholder Name"
                    value={paymentFields.cardName}
                    onChange={handlePaymentInput}
                    required
                    className={styles.input}
                  />
                  <input
                    type="text"
                    name="card"
                    placeholder="Card Number"
                    value={paymentFields.card}
                    onChange={handlePaymentInput}
                    required
                    className={styles.input}
                    maxLength={19}
                  />
                  <button type="submit" className={styles.payBtn} disabled={paymentSuccess}>
                    {paymentSuccess ? 'Payment Successful!' : 'Pay Now'}
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 