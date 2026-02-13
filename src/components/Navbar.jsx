import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes, FaCar, FaPhone } from 'react-icons/fa';
import { logo } from '../utils/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTourOpen, setMobileTourOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate()

  const services = [
    'Corporate Car Rental',
    'Local Car Rental',
    'Outstation Car Rental',
    'Airport and Railway Station Car Rental',
    'Wedding Car Rental',
    // 'Self Drive Cars'
  ];

  const tourPackages = [
    { label: 'Delhi Local Sightseeing', path: '/tour/delhi-local-sightseeing' },
    { label: 'Delhi to Agra Tour', path: '/tour/delhi-to-agra-tour' },
    { label: 'Delhi to Jaipur Tour', path: '/tour/delhi-to-jaipur-tour' },
    { label: 'Delhi to Mathura Vrindavan', path: '/tour/delhi-to-mathura-vrindavan' },
    { label: 'Delhi to Haridwar Tour', path: '/tour/delhi-to-haridwar-tour' },
    { label: 'Delhi to Rishikesh Tour', path: '/tour/delhi-to-rishikesh-tour' },
    { label: 'Delhi to Mathura, Vrindavan & Agra', path: '/tour/delhi-mathura-vrindavan-agra-tour' },
    { label: 'Faridabad to Agra Tour', path: '/tour/faridabad-to-agra-tour' },
    { label: 'Delhi to Agra & Fatehpur Sikri', path: '/tour/delhi-to-agra-fatehpur-sikri-tour' },
    { label: 'Noida to Agra Same Day Tour', path: '/tour/noida-greater-noida-to-agra-same-day-return-tour' },
    { label: 'Ghaziabad to Agra Same Day Tour', path: '/tour/ghaziabad-to-agra-same-day-return-tour' },
    { label: 'Gurgaon to Agra Same Day Tour', path: '/tour/gurgaon-to-agra-same-day-return-tour' },
    { label: 'Gurgaon to Mathura Same Day Tour', path: '/tour/gurgaon-to-mathura-same-day-return-tour' },
    { label: 'Noida to Mathura One Day Tour', path: '/tour/noida-greater-noida-to-mathura-one-day-tour' },
    { label: 'Gurgaon to Delhi Sightseeing', path: '/tour/gurgaon-to-delhi-local-sightseeing-tour' },
    { label: 'Noida to Delhi Sightseeing', path: '/tour/noida-to-delhi-local-sightseeing-tour' },
    { label: 'Ghaziabad to Delhi Sightseeing', path: '/tour/ghaziabad-to-delhi-local-sightseeing-tour' },
    { label: 'Faridabad to Delhi Sightseeing', path: '/tour/faridabad-to-delhi-local-sightseeing-tour' },
    { label: 'Delhi to Khatu Shyam Tour', path: '/tour/delhi-to-khatu-shyam-one-day-tour' },
    { label: 'Delhi to Mehandipur Balaji Tour', path: '/tour/delhi-to-mehandipur-balaji-one-day-tour' },
    { label: 'Delhi to Chandigarh Tour', path: '/tour/delhi-to-chandigarh-one-day-tour' },
    { label: 'Agra Sightseeing by Car', path: '/tour/agra-sightseeing-by-car' },
    { label: 'Agra to Fatehpur Sikri Tour', path: '/tour/agra-to-fatehpur-sikri-one-day-tour' },
    { label: 'Agra to Mathura Vrindavan Tour', path: '/tour/agra-to-mathura-vrindavan-tour' },
    { label: 'Jaipur Local Sightseeing by Car', path: '/tour/jaipur-local-sightseeing-by-car' },
    { label: 'Chandigarh Local Sightseeing by Car', path: '/tour/chandigarh-local-sightseeing-by-car' },
    { label: 'Haridwar Rishikesh Local Sightseeing by Car', path: '/tour/haridwar-rishikesh-local-sightseeing-by-car' },
    { label: 'Dehradoon Masoorie Local Sightseeing by Car', path: '/tour/dehradoon-masoorie-local-sightseeing-by-car' },
    { label: 'Srinagar Sonmarg Gulmarg Local Sightseeing by Car', path: '/tour/srinagar-sonmarg-gulmarg-local-sightseeing-by-car' },
    { label: 'Delhi to Kainchi Dham, Neem Karoli Baba Tour', path: '/tour/delhi-to-kainchi-dham-neem-karoli-baba-tour' },
    { label: 'Delhi to Jaipur Fatehpur Sikari Agra Golden Tringle tour (2 Night) (3 Days)', path: '/tour/delhi-jaipur-fatehpur-sikri-agra-golden-triangle-tour' },
    { label: 'Delhi to Jaipur Pushkar Ajmer Tour (2 Nights 3 Days)', path: '/tour/delhi-jaipur-pushkar-ajmer-tour' },
    { label: 'Delhi to Jim Corbett Tour (2 Nights 3 Days)', path: '/tour/delhi-to-jim-corbett-tour' },
    { label: 'Delhi to Do Dham (Kedarnath & Badrinath) 5N/6D', path: '/tour/delhi-to-do-dham-kedarnath-badrinath-tour' },
    { label: 'Delhi to Shimla & Manali Tour (5 Nights 6 Days)', path: '/tour/delhi-shimla-manali-tour' },
    { label: 'Delhi to Char Dham Yatra (11 Nights 12 Days)', path: '/tour/delhi-to-char-dham-tour' },
    { label: 'Delhi to Varanasi Ayodhya UP Tour (6 Nights 7 Days)', path: '/tour/delhi-comprehensive-up-spiritual-tour' },
    { label: 'Delhi to Kashmir, Vaishno Devi & Amritsar (9N/10D)', path: '/tour/delhi-kashmir-vaishnodevi-amritsar-grand-tour' },
  ];

  return (
    <motion.nav
      className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-28">
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start justify-center h-full"
            >
              <img src={logo}
                onClick={() => navigate('/')}
                alt="Delhi Tour Cab Logo" className="h-10 md:h-16 cursor-pointer w-auto rounded-lg object-contain" />
              <div className="bg-slate-800 text-white text-[8px] md:text-xs px-2 py-0.5 rounded-md mt-0.5 font-bold whitespace-nowrap overflow-hidden w-full max-w-[100px] md:max-w-none shadow-sm">
                <marquee behavior="scroll" direction="left" scrollamount="2">
                  A Unit of SU TAXI SERVICE
                </marquee>
              </div>
            </motion.div>

            <a href="tel:+91-9278063535" className="flex items-center space-x-1 sm:space-x-2 bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-red-700 transition-all font-bold shadow-md text-[10px] sm:text-base whitespace-nowrap">
              <FaPhone className="animate-bounce" />
              <span>+91-9278063535</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors font-medium ${location.pathname === '/' ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-500'
              }`}>
              Home
            </Link>
            <Link to="/about" className={`transition-colors font-medium ${location.pathname === '/about' ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-500'
              }`}>
              About Us
            </Link>

            {/* Services Link */}
            <Link to="/services" className={`transition-colors font-medium ${location.pathname === '/services' ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-500'
              }`}>
              Our Services
            </Link>

            {/* Tour Packages Link */}
            <Link to="/tour-packages" className={`transition-colors font-medium ${location.pathname === '/tour-packages' || location.pathname.includes('/tour') ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-500'
              }`}>
              Tour Packages
            </Link>

            <Link to="/contact" className={`transition-colors font-medium ${location.pathname === '/contact' ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-500'
              }`}>
              Contact Us
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/book-now" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all font-bold shadow-lg">
                Booking Form
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-2xl rounded-b-2xl pb-6"
            >
              <div className="py-2 space-y-1 max-h-[80vh] overflow-y-auto px-4">
                <Link to="/" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl transition-all font-medium ${location.pathname === '/' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-700 hover:bg-orange-50'}`}>Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl transition-all font-medium ${location.pathname === '/about' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-700 hover:bg-orange-50'}`}>About Us</Link>

                {/* Mobile Services */}
                <Link to="/services" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl transition-all font-medium ${location.pathname === '/services' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-700 hover:bg-orange-50'}`}>Our Services</Link>

                {/* Mobile Tour Packages */}
                <Link to="/tour-packages" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl transition-all font-medium ${location.pathname === '/tour-packages' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-700 hover:bg-orange-50'}`}>Tour Packages</Link>

                <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl transition-all font-medium ${location.pathname === '/contact' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-700 hover:bg-orange-50'}`}>Contact Us</Link>

                <div className="pt-4 grid grid-cols-1 gap-3 px-2">
                  <a href="tel:+91-9278063535" className="flex items-center justify-center gap-3 bg-orange-600 text-white px-4 py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-all">
                    <FaPhone className="animate-pulse" />
                    <span>Call +91-9278063535</span>
                  </a>
                  <Link
                    to="/book-now"
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-4 rounded-xl text-center font-bold shadow-lg active:scale-95 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Your Ride Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;