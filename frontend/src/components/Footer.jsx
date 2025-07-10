import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <div className={styles.logoIcon}>
                <div className={styles.globe}>
                  <div className={styles.meridian}></div>
                  <div className={styles.parallel}></div>
                  <div className={styles.dot}></div>
                </div>
              </div>
              <div className={styles.logoText}>
                <span className={styles.globeText}>Globe</span>
                <span className={styles.vistaText}>Vista</span>
              </div>
            </div>
            <p className={styles.footerDescription}>
              Your trusted partner for exploring the world. Book flights, discover destinations, 
              and create unforgettable memories with GlobeVista.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                📘
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                🐦
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                📷
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                💼
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/" className={styles.footerLink}>Home</Link></li>
              <li><Link to="/flights" className={styles.footerLink}>Flights</Link></li>
              <li><Link to="/bookings" className={styles.footerLink}>My Bookings</Link></li>
              <li><Link to="/login" className={styles.footerLink}>Login</Link></li>
              <li><Link to="/register" className={styles.footerLink}>Register</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Support</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/help" className={styles.footerLink}>Help Center</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
              <li><Link to="/insurance" className={styles.footerLink}>Travel Insurance</Link></li>
              <li><Link to="/cancellation-policy" className={styles.footerLink}>Cancellation Policy</Link></li>
              <li><Link to="/faq" className={styles.footerLink}>FAQ</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Company</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link to="/careers" className={styles.footerLink}>Careers</Link></li>
              <li><Link to="/press" className={styles.footerLink}>Press</Link></li>
              <li><Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
              <li><Link to="/terms" className={styles.footerLink}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © {currentYear} GlobeVista. All rights reserved. Made with ❤️ for travelers worldwide.
            </p>
            <div className={styles.footerBadges}>
              <span className={styles.badge}>🔒 Secure Booking</span>
              <span className={styles.badge}>🌍 500+ Destinations</span>
              <span className={styles.badge}>⭐ 4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 