import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>🌟</span>
            #1 Travel Booking Platform
          </div>
          <h1 className={styles.heroTitle}>
            Explore the World with
            <span className={styles.gradientText}> GlobeVista</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discover amazing destinations, book flights with ease, and create unforgettable memories. 
            Your next adventure starts here.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/flights" className={styles.ctaButton}>
              <span className={styles.buttonIcon}>✈️</span>
              Book Now
            </Link>
            <Link to="/register" className={styles.secondaryButton}>
              <span className={styles.buttonIcon}>🎯</span>
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Destinations</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>50K+</span>
          <span className={styles.statLabel}>Happy Travelers</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>24/7</span>
          <span className={styles.statLabel}>Support</span>
        </div>
      </div>
      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose GlobeVista?</h2>
            <p className={styles.sectionSubtitle}>
              Experience the difference with our premium travel booking platform
            </p>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💎</div>
              <h3>Best Prices</h3>
              <p>Find the most competitive prices for flights to destinations worldwide with our price match guarantee.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌍</div>
              <h3>Global Destinations</h3>
              <p>Explore hundreds of destinations across all continents with our extensive network of airlines.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Secure Booking</h3>
              <p>Safe and secure booking process with instant confirmation and 256-bit SSL encryption.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Smart Search</h3>
              <p>Advanced search filters to find the perfect flight based on your preferences and budget.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Mobile Friendly</h3>
              <p>Book flights on the go with our responsive design that works perfectly on all devices.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎁</div>
              <h3>Rewards Program</h3>
              <p>Earn points with every booking and unlock exclusive deals and discounts.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Destinations */}
      <section className={styles.destinations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular Destinations</h2>
            <p className={styles.sectionSubtitle}>
              Trending destinations that travelers love
            </p>
          </div>
          <div className={styles.destinationGrid}>
            <div className={styles.destinationCard}>
              <div className={styles.destinationImage} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80)'}}>
                <div className={styles.destinationOverlay}>
                  <span className={styles.destinationName}>Paris, France</span>
                  <span className={styles.destinationPrice}>From $899</span>
                </div>
              </div>
            </div>
            <div className={styles.destinationCard}>
              <div className={styles.destinationImage} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80)'}}>
                <div className={styles.destinationOverlay}>
                  <span className={styles.destinationName}>Tokyo, Japan</span>
                  <span className={styles.destinationPrice}>From $1299</span>
                </div>
              </div>
            </div>
            <div className={styles.destinationCard}>
              <div className={styles.destinationImage} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80)'}}>
                <div className={styles.destinationOverlay}>
                  <span className={styles.destinationName}>New York, USA</span>
                  <span className={styles.destinationPrice}>From $649</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
            <p className={styles.ctaSubtitle}>
              Join thousands of travelers who trust GlobeVista for their adventures
            </p>
            <Link to="/flights" className={styles.ctaButton}>
              <span className={styles.buttonIcon}>🚀</span>
              Explore Flights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 