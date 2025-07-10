import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.intro}>We're here to help! Reach out to our team with your questions or feedback.</p>
      <form className={styles.contactForm} onSubmit={e => { e.preventDefault(); alert('Thank you for contacting GlobeVista! We will get back to you soon.'); }}>
        <input className={styles.input} type="text" name="name" placeholder="Your Name" required />
        <input className={styles.input} type="email" name="email" placeholder="Your Email" required />
        <textarea className={styles.textarea} name="message" placeholder="Your Message" required />
        <button className={styles.submitBtn} type="submit">Send Message</button>
      </form>
      <div className={styles.infoSection}>
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:support@globevista.com">support@globevista.com</a></p>
        <p>Phone: 1-800-GLOBE-24</p>
        <p>Address: 123 GlobeVista Ave, Travel City, World 45678</p>
      </div>
    </div>
  );
} 