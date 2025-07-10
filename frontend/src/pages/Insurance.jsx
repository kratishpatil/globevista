import styles from './Insurance.module.css';

export default function Insurance() {
  return (
    <div className={styles.insurancePage}>
      <h2 className={styles.title}>Travel Insurance</h2>
      <p className={styles.intro}>Protect your trip with GlobeVista's comprehensive travel insurance plans.</p>
      <div className={styles.section}>
        <h3>Why Choose Travel Insurance?</h3>
        <ul>
          <li>Coverage for trip cancellations and interruptions</li>
          <li>Medical emergencies and assistance abroad</li>
          <li>Lost or delayed baggage protection</li>
          <li>24/7 global support</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>How to Add Insurance</h3>
        <p>You can add travel insurance during the booking process or by contacting our support team after booking.</p>
      </div>
      <div className={styles.section}>
        <h3>Questions?</h3>
        <p>Email <a href="mailto:insurance@globevista.com">insurance@globevista.com</a> or call 1-800-GLOBE-24 for more details.</p>
      </div>
    </div>
  );
} 