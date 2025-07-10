import styles from './Press.module.css';

export default function Press() {
  return (
    <div className={styles.pressPage}>
      <h2 className={styles.title}>Press & Media</h2>
      <p className={styles.intro}>Read the latest news and press releases from GlobeVista.</p>
      <div className={styles.section}>
        <h3>Press Releases</h3>
        <ul>
          <li>GlobeVista Launches New Booking Experience (2024)</li>
          <li>Partnership with World Airlines Announced</li>
          <li>GlobeVista Reaches 1 Million Users</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Media Contact</h3>
        <p>Email <a href="mailto:press@globevista.com">press@globevista.com</a> for media inquiries.</p>
      </div>
    </div>
  );
} 