import { motion } from 'framer-motion';
import { FaKey, FaCar, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaPhone, FaWhatsapp, FaGasPump, FaMapMarkedAlt, FaStar, FaWifi, FaSnowflake, FaMusic, FaRoute, FaHeadset, FaTools, FaAward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { slider2, wagonr, breeza, hondacity, verna, scorpio, drizer, } from '../utils/images';
import PopularTours from '../components/PopularTours';

const SelfDriveCars = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaKey />,
      title: 'Complete Freedom',
      description: 'Drive yourself with total privacy and flexibility'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Timing',
      description: 'Rent for hours, days, or weeks - your choice'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Fully Insured',
      description: 'Comprehensive insurance and 24/7 roadside assistance'
    },
    {
      icon: <FaRoute />,
      title: 'Unlimited KMs',
      description: 'No kilometer restrictions on daily rentals'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and assistance'
    },
    {
      icon: <FaTools />,
      title: 'Well Maintained',
      description: 'Regular servicing and sanitized vehicles'
    }
  ];

  const carssCategories = [
    {
      category: 'Economy Hatchback',
      price: '₹999/day',
      description: 'Perfect for city drives and short trips',
      carss: [
        {
          name: 'Maruti WagonR',
          image: wagonr,
          price: '₹999/day',
          features: ['AC', 'Music System', 'Power Steering', 'Central Locking'],
          specs: { seats: '5', fuel: 'Petrol', transmission: 'Manual' }
        }
      ]
    },
    {
      category: 'Premium Hatchback',
      price: '₹1,299/day',
      description: 'Stylish and comfortable for urban exploration',
      carss: [
        {
          name: 'Maruti Vitara Brezza',
          image: breeza,
          price: '₹1,299/day',
          features: ['AC', 'Touchscreen', 'Reverse Camera', 'Keyless Entry'],
          specs: { seats: '5', fuel: 'Petrol', transmission: 'Manual/Auto' }
        }
      ]
    },
    {
      category: 'Compact Sedan',
      price: '₹1,599/day',
      description: 'Comfortable sedans for business and leisure',
      carss: [
        {
          name: 'Maruti Swift Dzire',
          image: drizer,
          price: '₹1,599/day',
          features: ['AC', 'Touchscreen', 'Cruise Control', 'Rear AC Vents'],
          specs: { seats: '5', fuel: 'Petrol/CNG', transmission: 'Manual/Auto' }
        }
      ]
    },
    {
      category: 'Premium Sedan',
      price: '₹1,999/day',
      description: 'Luxury sedans for premium travel experience',
      carss: [
        {
          name: 'Honda City',
          image: hondacity,
          price: '₹1,999/day',
          features: ['AC', 'Sunroof', 'Leather Seats', 'Lane Watch Camera'],
          specs: { seats: '5', fuel: 'Petrol', transmission: 'Manual/CVT' }
        },
        {
          name: 'Hyundai Verna',
          image: verna,
          price: '₹2,099/day',
          features: ['AC', 'Ventilated Seats', 'Wireless Charging', 'Bose Audio'],
          specs: { seats: '5', fuel: 'Petrol/Diesel', transmission: 'Manual/Auto' }
        }
      ]
    },
    {
      category: 'Premium SUV',
      price: '₹2,999/day',
      description: 'Spacious SUVs for family trips and group travel',
      carss: [
        {
          name: 'Mahindra Scorpio',
          image: scorpio,
          price: '₹3,999/day',
          features: ['AC', '4WD', 'Touchscreen', 'Roof Rails'],
          specs: { seats: '7', fuel: 'Diesel', transmission: 'Manual/Auto' }
        }
      ]
    }
  ];

  const handleWhatsApp = (carssName = '') => {
    const text = carssName ? `Hello, I am interested in ${carssName} for Self Drive Rental.` : 'Hello, I am interested in Self Drive Cars services.';
    window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919278063535';
  };

  return (
    <div className="pt-20 relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-red via-red-600 to-brand-red text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Self Drive car
            </motion.h1>
            <motion.p
              className="text-2xl mb-4 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              "Drive Your Way, Your Time, Your Freedom"
            </motion.p>
            <motion.p
              className="text-lg mb-8 opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Choose from 50+ well-maintained vehicles | Starting from ₹999/day | No Hidden Charges
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/book-now')}
                className="bg-white text-brand-red px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors cursor-pointer shadow-lg relative z-10"
              >
                Book Now - Get 20% Off
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp()}
                className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors cursor-pointer shadow-lg flex items-center gap-2 relative z-10"
              >
                <FaWhatsapp /> Quick Enquiry
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* carss Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Premium <span className="text-brand-red">Self Drive Fleet</span>
            </h2>
          </motion.div>

          {carssCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="border-l-4 border-brand-red pl-4 mb-10">
                <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.carss.map((carss, carssIndex) => (
                  <motion.div
                    key={carssIndex}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: carssIndex * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all flex flex-col"
                  >
                    <div className="relative bg-gray-100 p-4">
                      <img
                        src={carss.image}
                        alt={carss.name}
                        className="w-full h-48 md:h-64 object-contain hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded-full font-bold text-xs shadow-lg">
                        {carss.price}
                      </div>
                    </div>
                    <div className="p-6 flex-grow bg-white">
                      <div className="flex justify-between items-start mb-4 bg-gradient-to-r from-red-600 to-red-400 p-3 rounded-xl shadow-inner">
                        <h4 className="text-sm font-bold text-white flex-1 mr-2 leading-tight uppercase tracking-wide">{carss.name}</h4>
                        <div className="text-white font-black bg-red-700/30 px-3 py-1.5 rounded-lg border border-red-500/50 shadow-sm whitespace-nowrap">{carss.price}</div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md border border-gray-100"><FaUsers className="text-red-500" /> {carss.specs.seats}</span>
                        <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md border border-gray-100"><FaGasPump className="text-red-500" /> {carss.specs.fuel}</span>
                        <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md border border-gray-100"><FaCar className="text-red-500" /> {carss.specs.transmission}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-2">
                        {carss.features.map((feature, idx) => (
                          <span key={idx} className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-red-100/50 shadow-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50/50 border-t border-gray-100">
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleWhatsApp(carss.name)}
                        className="bg-green-50 text-green-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-green-600 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm border border-green-100"
                      >
                        <FaWhatsapp className="mb-1 text-sm sm:text-base" /> Enquiry
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCall}
                        className="bg-red-50 text-red-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm border border-red-100"
                      >
                        <FaPhone className="mb-1 text-sm sm:text-base" /> Call
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/book-now')}
                        className="bg-gray-50 text-gray-800 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-gray-800 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer h-full shadow-sm border border-gray-200"
                      >
                        <FaCar className="mb-1 text-sm sm:text-base" /> Book Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PopularTours />

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-red via-red-600 to-brand-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your perfect self-drive car today and experience the freedom of the open road!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-white text-brand-red px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <FaPhone /> Call Now
            </button>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-500 text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <FaWhatsapp /> Quick Enquiry
            </button>
            <button
              onClick={() => navigate('/book-now')}
              className="bg-gray-800 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfDriveCars;