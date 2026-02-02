import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TourPackages from './pages/TourPackages';
import Contact from './pages/Contact';
import CorporateCarRental from './pages/CorporateCarRental';
import OutstationCarRental from './pages/OutstationCarRental';
import LocalCarRental from './pages/LocalCarRental';
import SelfDriveCars from './pages/SelfDriveCars';
import BookNow from './pages/BookNow';
import AirportRailwayCarRental from './pages/AirportRailwayCarRental';
import WeddingCarRental from './pages/WeddingCarRental';
import ThankYou from './pages/ThankYou';
import FixedIcons from './components/FixedIcons';
import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import QuickEnquiry from './components/QuickEnquiry';
import CallbackForm from './components/CallbackForm';
import TermsConditions from './pages/TermsConditions';
import TourDetail from './pages/TourDetail';
import { useState, useEffect } from 'react';

const AppContent = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Skip loading for thank-you page to avoid interrupting the flow
    if (location.pathname === '/thank-you') {
      setLoading(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    setLoading(true);
    // Remove the timer since loader will handle completion
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/corporate-car-rental" element={<CorporateCarRental />} />
        <Route path="/outstation-car-rental" element={<OutstationCarRental />} />
        <Route path="/local-car-rental" element={<LocalCarRental />} />
        <Route path="/airport-railway-car-rental" element={<AirportRailwayCarRental />} />
        <Route path="/wedding-car-rental" element={<WeddingCarRental />} />
        <Route path="/self-drive-cars" element={<SelfDriveCars />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/tour/:slug" element={<TourDetail />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='/book-now' element={<Book} */}
      </Routes>
      <Footer />
      <QuickEnquiry />
      <FixedIcons onCallbackClick={() => setShowCallbackForm(true)} />
      {showCallbackForm && (
        <CallbackForm onClose={() => setShowCallbackForm(false)} />
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;