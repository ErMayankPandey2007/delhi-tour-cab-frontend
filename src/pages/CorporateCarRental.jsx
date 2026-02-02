import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaCalendarAlt, FaShieldAlt, FaClock, FaHeadset, FaCheckCircle, FaPhone, FaWhatsapp, FaGasPump, FaCar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { slider1, drizer, innova, hondacity, verna, fortuner, ertiga, kiacarnival, toyotavellfire, defender, breeza } from '../utils/images';
import PopularTours from '../components/PopularTours';

const CorporateCarRental = () => {
  const navigate = useNavigate();

  const corporatecarss = [
    {
      name: 'Toyota Innova Crysta',
      image: innova,
      capacity: '7 Seater',
      fuel: 'Diesel',
      description: 'The gold standard for corporate travel. Spacious, comfortable, and highly reliable.',
      features: ['Automatic AC', 'Leather Seats', 'Ample Legroom'],
      price: 'On Request'
    },
    {
      name: 'Honda City / Verna',
      image: hondacity,
      capacity: '5 Seater',
      fuel: 'Petrol',
      description: 'Perfect executive sedans for business meetings and city commutes.',
      features: ['Plush Interiors', 'Smooth Ride', 'Sunroof Options'],
      price: 'On Request'
    },
    {
      name: 'Kia Carnival',
      image: kiacarnival,
      capacity: '7 Seater',
      fuel: 'Diesel',
      description: 'Ultra-luxurious MUV with advanced features for premium executive travel and comfort.',
      features: ['Captain Seats', 'Dual Sunroof', 'VIP Style'],
      price: 'On Request'
    },
    {
      name: 'Toyota Vellfire',
      image: toyotavellfire,
      capacity: '7 Seater',
      fuel: 'Hybrid',
      description: 'The pinnacle of luxury corporate mobility with ottoman seats and lounge experience.',
      features: ['Lounge Seating', 'Electric Doors', 'Hybrid Silent'],
      price: 'On Request'
    },
    {
      name: 'Land Rover Defender',
      image: defender,
      capacity: '5+2 Seater',
      fuel: 'Diesel/Petrol',
      description: 'Assertive and capable. Perfect for high-profile executive site visits and off-road mobility.',
      features: ['Rugged Luxury', 'Smart Mirror', 'Elite Safety'],
      price: 'On Request'
    },
    {
      name: 'Maruti Suzuki Swift Dzire',
      image: drizer,
      capacity: '5 Seater',
      fuel: 'Petrol/CNG',
      description: 'Ideal for cost-effective daily employee commutes and airport transfers.',
      features: ['Fuel Efficient', 'Effective AC', 'Compact Design'],
      price: 'On Request'
    },
    {
      name: 'Toyota Fortuner',
      image: fortuner,
      capacity: '7 Seater',
      fuel: 'Diesel',
      description: 'Make a powerful impression. Premium luxury SUV for senior executives.',
      features: ['Majestic Presence', '4x4 Capability', 'VIP Safety'],
      price: 'On Request'
    },
    {
      name: 'Maruti Suzuki Brezza',
      image: breeza,
      capacity: '7 Seater',
      fuel: 'Diesel',
      description: 'Make a powerful impression. Premium luxury SUV for senior executives.',
      features: ['Majestic Presence', '4x4 Capability', 'VIP Safety'],
      price: 'On Request'
    }
  ];

  const features = [
    {
      icon: <FaBuilding />,
      title: 'Executive Vehicles',
      description: 'Premium sedans and SUVs for corporate travel'
    },
    {
      icon: <FaUsers />,
      title: 'Professional Chauffeurs',
      description: 'Well-trained, uniformed drivers with corporate etiquette'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Flexible Booking',
      description: 'Easy online booking with advance scheduling options'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for peace of mind'
    },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and assistance'
    },
    {
      icon: <FaHeadset />,
      title: 'Account Management',
      description: 'Dedicated account manager for corporate clients'
    }
  ];

  const handleWhatsApp = (carssName = '') => {
    const text = carssName ? `Hello, I am interested in renting ${carssName} for Corporate Car Rental.` : 'Hello, I am interested in Corporate Car Rental services.';
    window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919278063535';
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-screen h-[300px] sm:h-[500px] md:h-[700px] lg:h-[850px] flex items-center justify-center overflow-hidden text-white mt-0 sm:mt-0">
        <div className="absolute inset-0 z-0">
          <img
            src={slider1}
            alt="Corporate Car Rental"
            className="w-full h-full object-cover object-center transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mt-[150px] mx-auto px-4 md:mb-[600px] md:-ml-[0px]  text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold mb-2 sm:mb-6 text-orange-500 drop-shadow-2xl"
          >
            Corporate Car Rental
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl mb-3 sm:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold px-2"
          >
            Premium Business Travel By Cab
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate('/book-now')}
              className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg cursor-pointer text-sm sm:text-base"
            >
              Custom Quote
            </button>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <FaWhatsapp /> Quick Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Fleet Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our <span className="text-orange-500">Corporate Fleet</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {corporatecarss.map((carss, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative bg-gray-100 p-0 overflow-hidden h-64 md:h-80">
                  <img
                    src={carss.image}
                    alt={carss.name}
                    className="w-full h-full object-contain scale-110 hover:scale-125 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-grow bg-white">
                  <div className="flex justify-between items-start mb-4 bg-gradient-to-r from-orange-600 to-orange-400 p-3 rounded-xl shadow-inner">
                    <h3 className="text-sm font-bold text-white flex-1 mr-2 leading-tight uppercase tracking-wide">{carss.name}</h3>
                    <div className="text-white font-black bg-orange-700/30 px-3 py-1.5 rounded-lg border border-orange-500/50 shadow-sm whitespace-nowrap">{carss.price}</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 text-justify leading-relaxed">{carss.description}</p>

                  <div className="flex gap-4 mb-6 text-gray-700 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-md border border-gray-100"><FaUsers className="text-orange-500" /> {carss.capacity}</span>
                    <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-md border border-gray-100"><FaGasPump className="text-orange-500" /> {carss.fuel}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {carss.features.map((feature, idx) => (
                      <span key={idx} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-orange-100/50 shadow-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* carssd Action Buttons */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50/50 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleWhatsApp(carss.name)}
                    className="bg-green-50 text-green-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-green-600 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm border border-green-100"
                  >
                    <FaWhatsapp className="mb-1 text-sm md:text-base" /> Enquiry
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCall}
                    className="bg-blue-50 text-blue-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm border border-blue-100"
                  >
                    <FaPhone className="mb-1 text-sm md:text-base" /> Call
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/book-now')}
                    className="bg-orange-50 text-orange-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer h-full shadow-sm border border-orange-100"
                  >
                    <FaCar className="mb-1 text-sm md:text-base" /> Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PopularTours />

      {/* Footer CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Simplifying Corporate Travel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Customized packages, priority support, and premium vehicles for your business.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <FaPhone /> Call Now
            </button>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <FaWhatsapp /> Quick Enquiry
            </button>
            <button
              onClick={() => navigate('/book-now')}
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateCarRental;