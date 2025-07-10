import styles from './FAQ.module.css';

export default function FAQ() {
  return (
    <div className={styles.faqPage}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <ul className={styles.faqList}>
        <li>
          <strong>How do I search for flights?</strong>
          <p>Use the Flights page to browse and search for available flights by destination and date.</p>
        </li>
        <li>
          <strong>How do I book multiple flights?</strong>
          <p>Add flights to your cart and use the Cart page to book them all at once.</p>
        </li>
        <li>
          <strong>Can I change my booking?</strong>
          <p>Yes, visit the My Bookings page to manage your bookings. Some changes may be subject to fees.</p>
        </li>
        <li>
          <strong>How do I contact customer support?</strong>
          <p>Email <a href="mailto:support@globevista.com">support@globevista.com</a> or use the Contact Us page.</p>
        </li>
        <li>
          <strong>Is my data secure?</strong>
          <p>Yes, GlobeVista uses industry-standard security to protect your information.</p>
        </li>
      </ul>
    </div>
  );
} 