import styles from './Help.module.css';

export default function Help() {
  return (
    <div className={styles.helpPage}>
      <h2 className={styles.title}>Help Center</h2>
      <p className={styles.intro}>Find answers to common questions and get support for your GlobeVista experience.</p>
      <div className={styles.faqSection}>
        <h3>Frequently Asked Questions</h3>
        <ul className={styles.faqList}>
          <li>
            <strong>How do I book a flight?</strong>
            <p>Browse available flights on the Flights page, add your preferred flights to the cart, and complete your booking through the Cart page.</p>
          </li>
          <li>
            <strong>Can I cancel or change my booking?</strong>
            <p>Yes, visit the My Bookings page to view, cancel, or manage your bookings. Cancellation policies may apply.</p>
          </li>
          <li>
            <strong>How do I contact support?</strong>
            <p>Use the Contact Us page or email us at <a href="mailto:support@globevista.com">support@globevista.com</a>.</p>
          </li>
          <li>
            <strong>Is my payment information secure?</strong>
            <p>Yes, all payments are processed securely using industry-standard encryption.</p>
          </li>
        </ul>
      </div>
      <div className={styles.supportSection}>
        <h3>Need more help?</h3>
        <p>Contact our 24/7 support team at <a href="mailto:support@globevista.com">support@globevista.com</a> or call 1-800-GLOBE-24.</p>
      </div>
    </div>
  );
} 