import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = ({ onClick }) => {
  return (
    <Link to="/" className={styles.logo} onClick={onClick}>
      <div className={styles.logoIcon}>
        <div className={styles.globe}>
          <div className={styles.meridian}></div>
          <div className={styles.parallel}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <span
        className={styles.logoText}
        style={{
          background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '2.8rem',
          fontWeight: 900,
          letterSpacing: '-1px',
          lineHeight: 1.1
        }}
      >
        GlobeVista
      </span>
    </Link>
  );
};

export default Logo; 