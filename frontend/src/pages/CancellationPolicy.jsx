import styles from './CancellationPolicy.module.css';

export default function CancellationPolicy() {
  return (
    <div className={styles.policyPage}>
      <h2 className={styles.title}>Cancellation Policy</h2>
      <p className={styles.intro}>Understand your options for cancelling or changing your GlobeVista bookings.</p>
      <div className={styles.section}>
        <h3>Flight Cancellations</h3>
        <p>You may cancel your flight booking up to 24 hours before departure for a full refund. Cancellations within 24 hours may incur a fee.</p>
      </div>
      <div className={styles.section}>
        <h3>Refunds</h3>
        <p>Refunds are processed within 5-7 business days to your original payment method.</p>
      </div>
      <div className={styles.section}>
        <h3>Need Help?</h3>
        <p>Contact our support team at <a href="mailto:support@globevista.com">support@globevista.com</a> for assistance with cancellations or changes.</p>
      </div>
    </div>
  );
} 