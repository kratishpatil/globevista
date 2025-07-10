import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import styles from './Navbar.module.css';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        setUser(null);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setMobileMenuOpen(false);
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const renderNavLinks = () => (
    <>
      <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink} onClick={closeMobileMenu} end>
        <span className={styles.navIcon}>🏠</span>
        Home
      </NavLink>
      <NavLink to="/flights" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink} onClick={closeMobileMenu}>
        <span className={styles.navIcon}>✈️</span>
        Flights
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink} onClick={closeMobileMenu}>
        <span className={styles.navIcon}>🛒</span>
        Cart
        {cart.length > 0 && <span className={styles.cartBadge}>{cart.length}</span>}
      </NavLink>
      {user ? (
        <>
          <NavLink to="/bookings" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink} onClick={closeMobileMenu}>
            <span className={styles.navIcon}>📋</span>
            My Bookings
          </NavLink>
          <div className={styles.userSection}>
            <span className={styles.welcome}>
              <span className={styles.userIcon}>👤</span>
              Welcome, {user.name}
            </span>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              <span className={styles.logoutIcon}>🚪</span>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <NavLink to="/login" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink} onClick={closeMobileMenu}>
            <span className={styles.navIcon}>🔑</span>
            Login
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink} onClick={closeMobileMenu}>
            <span className={styles.navIcon}>📝</span>
            Register
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Logo onClick={closeMobileMenu} />
        
        <div className={styles.navLinks}>
          {renderNavLinks()}
        </div>
        
        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.navLinks}>
            {renderNavLinks()}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 