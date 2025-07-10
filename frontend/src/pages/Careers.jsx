import styles from './Careers.module.css';

export default function Careers() {
  return (
    <div className={styles.careersPage}>
      <h2 className={styles.title}>Careers at GlobeVista</h2>
      <p className={styles.intro}>Join our passionate team and help shape the future of travel.</p>
      <div className={styles.section}>
        <h3>Open Positions</h3>
        <ul>
          <li>Frontend Developer</li>
          <li>Backend Developer</li>
          <li>UI/UX Designer</li>
          <li>Customer Support Specialist</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Our Culture</h3>
        <p>We value diversity, creativity, and a love for travel. At GlobeVista, you’ll work with talented people from around the world.</p>
      </div>
      <div className={styles.section}>
        <h3>Apply Now</h3>
        <p>Email your resume to <a href="mailto:careers@globevista.com">careers@globevista.com</a>.</p>
      </div>
    </div>
  );
} 