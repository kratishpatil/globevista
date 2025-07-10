import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <h2 className={styles.title}>About GlobeVista</h2>
      <p className={styles.intro}>GlobeVista is dedicated to making travel accessible, enjoyable, and memorable for everyone.</p>
      <div className={styles.section}>
        <h3>Our Mission</h3>
        <p>To empower travelers with seamless booking experiences and inspire adventures across the globe.</p>
      </div>
      <div className={styles.section}>
        <h3>Our Vision</h3>
        <p>To be the world’s most trusted travel platform, connecting people and places with ease and confidence.</p>
      </div>
      <div className={styles.section}>
        <h3>Our Values</h3>
        <ul>
          <li>Customer First</li>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Global Community</li>
        </ul>
      </div>
    </div>
  );
} 