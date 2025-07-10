import styles from './Terms.module.css';

export default function Terms() {
  return (
    <div className={styles.termsPage}>
      <h2 className={styles.title}>Terms of Service</h2>
      <p className={styles.intro}>Please read these terms before using GlobeVista.</p>
      <div className={styles.section}>
        <h3>Use of Service</h3>
        <p>GlobeVista provides a platform for booking flights and related services. Users must provide accurate information and comply with all applicable laws.</p>
      </div>
      <div className={styles.section}>
        <h3>Bookings & Payments</h3>
        <p>All bookings are subject to availability and confirmation. Payments are processed securely.</p>
      </div>
      <div className={styles.section}>
        <h3>Liability</h3>
        <p>GlobeVista is not liable for delays, cancellations, or issues caused by third-party providers.</p>
      </div>
      <div className={styles.section}>
        <h3>Contact</h3>
        <p>For questions, email <a href="mailto:terms@globevista.com">terms@globevista.com</a>.</p>
      </div>
    </div>
  );
} 