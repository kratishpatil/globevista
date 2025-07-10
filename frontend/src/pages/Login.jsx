import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login', formData);
      console.log('Login response:', response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.href = '/flights';
    } catch (err) {
      console.log('Login error:', err.response?.data || err);
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <div className={styles.loginLogo}>
            <div className={styles.logoIcon}></div>
            <span className={styles.logoText}>GlobeVista</span>
          </div>
          <h1 className={styles.loginTitle}>Welcome Back</h1>
          <p className={styles.loginSubtitle}>
            Sign in to your account and continue your journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className={styles.registerLink}>
          <p className={styles.registerText}>
            Don't have an account? Join GlobeVista today!
          </p>
          <Link to="/register" className={styles.registerButton}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 