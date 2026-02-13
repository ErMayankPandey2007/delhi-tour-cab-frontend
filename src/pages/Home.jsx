import { motion } from 'framer-motion';
import { FaCar, FaMapMarkedAlt, FaUsers, FaClock, FaPhone, FaWhatsapp, FaStar, FaQuoteLeft, FaShieldAlt, FaMoneyBillWave, FaHeadset, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import ServiceCities from '../components/ServiceCities';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  wagonr, breeza, dzire, hondacity,
  innova, scorpio, verna, defender, thar,
  kiacarnival, kiacarens, forcetempo, forceurbano, forcewinger, vellfire,
  volvo, ertiga2, agra, haridwar, jaipur, mathura, rishikesh, delhiBannerNew,
  qutubMinar, lotustemple, humayuntomb, indiagate, parliamenthouse, rashtrapati, redfort, rajghat, akshardham
} from '../utils/images';
import TourPackages from './TourPackages';
import PopularTours from '../components/PopularTours';
import PopularDestinations from '../components/PopularDestinations';

const Home = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentcarsslide, setCurrentcarsslide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [iscarssPaused, setIscarssPaused] = useState(false);
  const [expandedTour, setExpandedTour] = useState(null);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    // Immediate scroll
    scrollToTop();

    // Delayed scroll to handle animations
    const timer = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate()

  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Safe, Secured & Reliable',
      description: 'Background-verified drivers ensure safe and pleasant journeys for every passenger.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Best Price Guaranteed',
      description: 'Transparent pricing with no hidden costs. Get the best value for your money.'
    },
    {
      icon: <FaClock />,
      title: 'In-Time Pick-up',
      description: 'Punctuality is our priority. We ensure on-time pickups for all your bookings.'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Customer Support',
      description: 'Available round-the-clock for bookings, queries, and on-trip assistance.'
    }
  ];

  const services = [
    {
      title: 'Delhi Airport Cab Service',
      desc: 'Reliable 24/7 airport transfers for both IGIA and domestic terminals.',
      features: ['Flight Delay Tracking', 'Meet & Greet', 'Fixed Rates']
    },
    {
      title: 'Outstation Cab Service',
      desc: 'Safe and affordable rides for round trips or one-way drops to any destination.',
      features: ['Flexible Packages', 'Experienced Drivers', 'Well Maintained cars']
    },
    {
      title: 'Local Cab Service',
      desc: 'Full-day or half-day rentals for city chores, shopping, or office commuting.',
      features: ['Quick Pickup', 'Professional Drivers', 'Transparent Billing']
    },
    {
      title: 'Sightseeing Tour Packages',
      desc: 'Customized tour plans for exploring historical landmarks and tourist spots.',
      features: ['Local Expertise', 'Guided Tours', 'Hassle-free Experience']
    },
    {
      title: 'Corporate car Rental',
      desc: 'Monthly or daily rentals for business meetings and employee transport.',
      features: ['Corporate Billing', 'Premium Fleet', 'Dedicated Support']
    },
    {
      title: 'Tempo Traveller Rental',
      desc: 'Spacious 9-seater to 26-seater luxury tempo travellers for group trips.',
      features: ['Luxury Seating', 'AC & Entertainment', 'Extra Luggage Space']
    }
  ];

  const reviews = [
    {
      name: 'Ramavtar Ramavtar',
      location: 'Delhi',
      rating: 5,
      comment: 'I booked a cab for Delhi sightseeing. The driver was polite, car was clean, and ride was comfortable. Highly recommended!',
      avatar: 'RR'
    },
    {
      name: 'Anita Yadav',
      location: 'Agra',
      rating: 5,
      comment: 'Good driver and cab, full knowledge of Agra Mathura Vrindavan tour. Very satisfied with the service.',
      avatar: 'AY'
    },
    {
      name: 'Uday Raj',
      location: 'Delhi',
      rating: 5,
      comment: 'Best tour and travel company in Delhi. We booked a Delhi to Agra cab and got excellent service.',
      avatar: 'UR'
    },
    {
      name: 'Preeti Singh',
      location: 'Delhi',
      rating: 5,
      comment: 'Good tempo traveller service company in Delhi for local trip. My family was really happy.',
      avatar: 'PS'
    }
  ];

  const stats = [
    { number: '10000+', label: 'Happy Customers' },
    { number: '500+', label: 'Cities Covered' },
    { number: '50+', label: 'Premium cars' },
    { number: '24/7', label: 'Support Available' }
  ];

  const carssCompanies = [
    { name: 'Volvo', model: 'Volvo Bus', image: volvo },
    { name: 'Maruti Suzuki', model: 'WagonR', image: wagonr },
    { name: 'Maruti Suzuki', model: 'Vitara Brezza', image: breeza },
    { name: 'Maruti Suzuki', model: 'Swift Dzire', image: dzire },
    { name: 'Maruti Suzuki', model: 'Ertiga', image: ertiga2 },
    { name: 'Toyota', model: 'Innova Crysta', image: innova },
    { name: 'Toyota', model: 'Vellfire', image: vellfire },
    { name: 'Honda', model: 'City', image: hondacity },
    { name: 'Hyundai', model: 'Verna', image: verna },
    { name: 'Mahindra', model: 'Scorpio', image: scorpio },
    { name: 'Mahindra', model: 'Thar', image: thar },
    { name: 'Land Rover', model: 'Defender', image: defender },
    { name: 'Kia', model: 'Carnival', image: kiacarnival },
    { name: 'Kia', model: 'Carens', image: kiacarens },
    { name: 'Force', model: 'Tempo Traveller', image: forcetempo },
    { name: 'Force', model: 'Urbania ', image: forceurbano },
    { name: 'Tata', model: 'Winger', image: forcewinger }
  ];



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const carssTimer = setInterval(() => {
      if (!iscarssPaused) {
        setCurrentcarsslide((prev) => {
          // Check if mobile view
          const isMobile = window.innerWidth < 768;
          const maxSlide = isMobile ? carssCompanies.length - 1 : carssCompanies.length - 3;
          return prev >= maxSlide ? 0 : prev + 1;
        });
      }
    }, 3000);
    return () => clearInterval(carssTimer);
  }, [iscarssPaused]);



  const nextcarsslide = () => {
    setCurrentcarsslide((prev) => {
      const isMobile = window.innerWidth < 768;
      const maxSlide = isMobile ? carssCompanies.length - 1 : carssCompanies.length - 3;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevcarsslide = () => {
    setCurrentcarsslide((prev) => {
      const isMobile = window.innerWidth < 768;
      const maxSlide = isMobile ? carssCompanies.length - 1 : carssCompanies.length - 3;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };



  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute w-64 h-64 bg-orange-500/20 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-orange-200 rounded-full opacity-15"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '15%' }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-orange-300 rounded-full opacity-10"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', left: '20%' }}
        />
      </div>
      {/* Hero Slider */}

      <HeroSlider />
      {/* Most Trusted Taxi Service Section */}
      <section className="py-6 md:py-16 bg-gray-50 text-justify">
        {/* <TourPackages/> */}
        <PopularTours />
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-800"
          >
            Cab Service in <span className="text-orange-500">Delhi NCR</span> – For Every Travel Need
          </motion.h2>

          <div className="text-justify gap-8 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-3 md:space-y-6 order-2 lg:order-1"
            >
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                Hire Cab Service in Delhi NCR at Genuine Prices
              </h3>
              <p className="text-xs md:text-base text-gray-600 leading-relaxed text-justify">
                At Delhi Tour Cab, we take pride in being one of the leading names for cab service in Delhi. With a fleet of well-maintained cars and highly professional drivers, we ensure your journey is smooth, safe, and pleasant. Whether you need a cab for local city travel, airport pickup and drop, full-day sightseeing, or long-distance outstation journeys, we provide safe, comfortable, and affordable cab solutions tailored to your needs.
              </p>
              <p className="text-xs md:text-base text-gray-600 leading-relaxed text-justify">
                Our services cover all areas of Delhi NCR, including Saket, Hauz Khas, Rohini, Pitampura, Laxmi Nagar, Mayur Vihar, Dwarka, Janakpuri, and more. We specialize in late-night picks, early 4 AM flight drops, and we track flight delays to ensure someone is always there to meet you.
              </p>
              <p className="text-xs md:text-base text-gray-600 leading-relaxed text-justify">
                We offer a wide range of vehicles, from small fuel-efficient cars for city errands to luxury SUVs and tempo travellers for group travel. Our transparent pricing policy means there are never any hidden costs.
              </p>
              <p className="text-xs md:text-base text-gray-600 leading-relaxed font-semibold text-orange-500 text-justify">
                100+ Happy Customers Trust Delhi Tour Cab in Delhi.<br />
                Your Journey, Our Promise
              </p>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-orange-400">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">Our Mission</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">
                    Our mission is to provide world-class luxury cab services in Delhi by delivering exceptional comfort, uncompromising safety, and personalized customer service. We aim to set new standards in the travel industry through reliability, professionalism, and a customer-first approach.
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-orange-400">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">Our Vision</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">
                    Our vision is to become Delhi's most trusted and preferred luxury tour cab service, recognized for excellence, innovation, and superior customer experience. We aspire to redefine urban and outstation travel by combining modern vehicles, skilled chauffeurs, and premium service values.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mt-4 md:mt-6">
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">Why Choose Delhi Tour Cab?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  <div className="flex items-center text-xs md:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Premium & luxury vehicles
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Professional, courteous chauffeurs
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Transparent pricing with no hidden charges
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    On-time airport pickup & drop services
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Customized Delhi sightseeing & outstation tours
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    24×7 customer assistance
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <PopularDestinations />

      {/* carss Companies carssousel Section */}
      <section className="py-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-12 text-gray-800"
          >
            Our Range <span className="text-orange-500">Of Vehicles</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-4 md:mb-12 max-w-3xl mx-auto text-xs md:text-base px-4 text-justify"
          >
            Choose from our diverse range of well-maintained vehicles. From compact car for city rides to luxury SUVs for outstation trips, we have the perfect vehicle for every journey and budget.
          </motion.p>

          {/* Mobile View - Show single carssd */}
          <div className="block md:hidden">
            <div
              className="relative group"
              onMouseEnter={() => setIscarssPaused(true)}
              onMouseLeave={() => setIscarssPaused(false)}
            >
              <div className="overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipeThreshold = 50;
                    if (offset.x < -swipeThreshold || velocity.x < -500) {
                      nextcarsslide();
                    } else if (offset.x > swipeThreshold || velocity.x > 500) {
                      prevcarsslide();
                    }
                  }}
                  animate={{ x: `-${currentcarsslide * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex touch-pan-y"
                >
                  {carssCompanies.map((carss, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mx-auto max-w-sm"
                      >
                        <div className="relative overflow-hidden group/img">
                          <img
                            src={carss.image}
                            alt={carss.model}
                            className="w-full h-64 object-contain bg-gray-50 group-hover/img:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            {carss.name}
                          </div>
                        </div>
                        <div className="p-4 bg-white">
                          <motion.button
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-all text-sm font-bold shadow-lg hover:shadow-orange-200 cursor-pointer flex items-center justify-center gap-2"
                            onClick={() => navigate('/book-now')}
                          >
                            <FaCar /> Book {carss.model}
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Navigation Buttons */}
              <button
                onClick={prevcarsslide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-orange-500 p-3 rounded-full hover:bg-orange-600 hover:text-white transition-all shadow-lg z-20 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={nextcarsslide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-orange-500 p-3 rounded-full hover:bg-orange-600 hover:text-white transition-all shadow-lg z-20 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Desktop View - Show 3 carssds */}
          <div className="hidden md:block">
            <div
              className="relative group"
              onMouseEnter={() => setIscarssPaused(true)}
              onMouseLeave={() => setIscarssPaused(false)}
            >
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${currentcarsslide * (100 / 3)}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {carssCompanies.map((carss, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="relative overflow-hidden group/img">
                          <img
                            src={carss.image}
                            alt={carss.model}
                            className="w-full h-80 object-contain bg-gray-50 group-hover/img:scale-125 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg">
                            {carss.name}
                          </div>
                        </div>
                        <div className="p-5 text-center bg-white border-t border-gray-50">
                          <motion.button
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-orange-500 text-white py-3.5 rounded-xl hover:bg-orange-600 transition-all font-bold shadow-lg hover:shadow-orange-200 cursor-pointer flex items-center justify-center gap-2"
                            onClick={() => navigate('/book-now')}
                          >
                            <FaCar size={18} /> Book {carss.model}
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button
                onClick={prevcarsslide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-full hover:bg-orange-600 transition-all shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer z-20"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={nextcarsslide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-full hover:bg-orange-600 transition-all shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer z-20"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          >
            Why Choose <span className="text-orange-500">Delhi Tour Cab ?</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md border-t-4 border-orange-400 hover:shadow-lg transition-all"
              >
                <div className="text-3xl md:text-4xl text-orange-500 mb-3 md:mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          >
            Our <span className="text-orange-500">Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all border-l-4 border-orange-400"
              >
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{service.desc}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs md:text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="text-orange-500 font-semibold hover:text-red-800 flex items-center gap-2 transition-colors text-sm md:text-base cursor-pointer">
                    <NavLink to={'/corporate-carss-rental'}>  Learn More →</NavLink>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Service Provide in Cities Section */}
      <ServiceCities />

      {/* Stats Section */}
      <section className="py-8 md:py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-white"
              >
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stat.number}</div>
                <div className="text-sm md:text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          >
            What Our <span className="text-orange-500">Customers Say</span>
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-4 md:p-8 text-center"
            >
              <FaQuoteLeft className="text-2xl md:text-4xl text-orange-500 mx-auto mb-4 md:mb-6" />
              <div className="flex justify-center mb-3 md:mb-4">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500 text-lg md:text-xl" />
                ))}
              </div>
              <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6 italic px-2">
                "{reviews[currentReview].comment}"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4 bg-orange-500 text-white flex items-center justify-center font-bold text-lg md:text-xl">
                  {reviews[currentReview].avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">{reviews[currentReview].name}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{reviews[currentReview].location}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentReview ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-4 md:p-6"
            >
              <FaShieldAlt className="text-4xl md:text-5xl text-orange-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-sm md:text-base text-gray-600">All our drivers are verified and vehicles are regularly maintained for your safety</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-4 md:p-6"
            >
              <FaMoneyBillWave className="text-4xl md:text-5xl text-orange-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Best Rates</h3>
              <p className="text-sm md:text-base text-gray-600">Competitive pricing with no hidden charges. Get the best value for your money</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-4 md:p-6"
            >
              <FaHeadset className="text-4xl md:text-5xl text-orange-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm md:text-base text-gray-600">Round the clock customer support for all your travel needs and queries</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none text-gray-600">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Cab Service in Delhi Near Me – Serving All Areas</h2>
            <p className="mb-4 text-justify">
              Are you looking for a reliable cab service in Delhi that combines genuine pricing, comfort, and professional service? Delhi Tour Cab is your trusted travel partner for all types of cab requirements across Delhi NCR. Whether you need a cab for local city travel, airport pickup and drop, full-day sightseeing, or long-distance outstation journeys, we provide safe, comfortable, and affordable cab solutions tailored to your needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Saket</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Hauz Khas</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Rohini</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Dwarka</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Janakpuri</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Laxmi Nagar</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Pitampura</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Mayur Vihar</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Gurgaon</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Manesar</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Faridabad</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Noida</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Greater Noida</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Ghaziabad</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Bahadurgarh</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Sonipat</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Meerut</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Gurugram</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Karol Bagh</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Patel Nagar</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Rajouri Garden</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Civil Lines</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Kashmere Gate</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Anand Vihar</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">IGI Airport</span>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <span className="font-semibold block text-orange-500">Vasant Kunj</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6"
          >
            Ready to Book Your Ride?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white mb-6 md:mb-8"
          >
            Contact us now for instant booking and best rates
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:+919278063535'}
              className="bg-white text-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center text-base md:text-lg w-full sm:w-auto cursor-pointer"
            >
              <FaPhone className="text-sm md:text-base" /> +91 9278063535
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center gap-2 justify-center text-base md:text-lg w-full sm:w-auto cursor-pointer"
              onClick={() => window.open('https://wa.me/919278063535', '_blank')}
            >
              <FaWhatsapp className="text-sm md:text-base" /> WhatsApp Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;