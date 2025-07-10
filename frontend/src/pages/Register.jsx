import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <div className={styles.registerHeader}>
          <div className={styles.registerLogo}>
            <div className={styles.logoIcon}></div>
            <span className={styles.logoText}>GlobeVista</span>
          </div>
          <h1 className={styles.registerTitle}>Join GlobeVista</h1>
          <p className={styles.registerSubtitle}>
            Create your account and start exploring the world
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Enter your full name"
              required
            />
          </div>

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
              placeholder="Create a strong password"
              required
              minLength={6}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.formLabel}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Confirm your password"
              required
              minLength={6}
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
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className={styles.loginLink}>
          <p className={styles.loginText}>
            Already have an account? Welcome back!
          </p>
          <Link to="/login" className={styles.loginButton}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 