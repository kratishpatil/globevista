import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Flights from './pages/Flights';
import Bookings from './pages/Bookings';
import Cart from './pages/Cart';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Insurance from './pages/Insurance';
import CancellationPolicy from './pages/CancellationPolicy';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './App.css';
import { CartProvider } from './context/CartContext';

const PlaceholderPage = ({ title }) => (
  <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#003366' }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h2>
    <p style={{ fontSize: '1.1rem', color: '#666' }}>This page is coming soon.</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <div className="pageFade">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/help" element={<Help />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/cancellation-policy" element={<CancellationPolicy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press" element={<Press />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 