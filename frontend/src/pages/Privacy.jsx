import styles from './Privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.privacyPage}>
      <h2 className={styles.title}>Privacy Policy</h2>
      <p className={styles.intro}>Your privacy is important to us. Learn how GlobeVista protects your data.</p>
      <div className={styles.section}>
        <h3>Information We Collect</h3>
        <ul>
          <li>Personal details (name, email, etc.)</li>
          <li>Booking and payment information</li>
          <li>Usage data and cookies</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>How We Use Your Data</h3>
        <ul>
          <li>To process bookings and payments</li>
          <li>To improve our services</li>
          <li>To communicate with you</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Your Rights</h3>
        <ul>
          <li>Access, update, or delete your data</li>
          <li>Opt out of marketing communications</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Contact Us</h3>
        <p>Email <a href="mailto:privacy@globevista.com">privacy@globevista.com</a> with any privacy concerns.</p>
      </div>
    </div>
  );
} 