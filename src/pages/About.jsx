import { motion } from 'framer-motion';
import { FaCar, FaMapMarkedAlt, FaUsers, FaClock, FaPhone, FaWhatsapp, FaStar, FaQuoteLeft, FaShieldAlt, FaMoneyBillWave, FaHeadset, FaAward, FaHandshake, FaRoad, FaUserTie } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { breeza, scorpio, verna, wagonr } from '../utils/images';
import ServiceCities from '../components/ServiceCities';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Cleanup function to prevent memory leaks
    return () => {
      // Clear any pending animations or timers
    };
  }, []);

  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const cities = [
    {
      name: 'Delhi NCR',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      places: 'India Gate, Red Fort, Qutub Minar, Lotus Temple'
    },
    {
      name: 'Agra',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
      places: 'Taj Mahal, Agra Fort, Fatehpur Sikri'
    },
    {
      name: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop',
      places: 'Hawa Mahal, Amber Fort, City Palace, Jantar Mantar'
    },
    {
      name: 'Mathura',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop',
      places: 'Krishna Janmabhoomi, Dwarkadhish Temple, Vishram Ghat'
    },
    {
      name: 'Vrindavan',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
      places: 'Banke Bihari Temple, ISKCON Temple, Prem Mandir'
    },
    {
      name: 'Haridwar',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop',
      places: 'Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple'
    },
    {
      name: 'Rishikesh',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      places: 'Laxman Jhula, Ram Jhula, Beatles Ashram, Triveni Ghat'
    },
    {
      name: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      places: 'Robber\'s Cave, Sahastradhara, Mindrolling Monastery'
    },
    {
      name: 'Chandigarh',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&h=600&fit=crop',
      places: 'Rock Garden, Sukhna Lake, Rose Garden'
    },
    {
      name: 'Amritsar',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&h=600&fit=crop',
      places: 'Golden Temple, Jallianwala Bagh, Wagah Border'
    },
    {
      name: 'Lucknow',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop',
      places: 'Bara Imambara, Rumi Darwaza, British Residency'
    },
    {
      name: 'Ayodhya',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
      places: 'Ram Mandir, Hanuman Garhi, Kanak Bhawan'
    },
    {
      name: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop',
      places: 'Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath'
    },
    {
      name: 'Prayagraj',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop',
      places: 'Triveni Sangam, Allahabad Fort, Anand Bhawan'
    },
    {
      name: 'Gorakhpur',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
      places: 'Gorakhnath Temple, Ramgarh Tal, Geeta Press'
    },
    {
      name: 'Patna',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop',
      places: 'Golghar, Patna Sahib, Mahavir Mandir'
    },
    {
      name: 'Ajmer',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop',
      places: 'Ajmer Sharif Dargah, Ana Sagar Lake, Taragarh Fort'
    },
    {
      name: 'Udaipur',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop',
      places: 'City Palace, Lake Pichola, Jag Mandir'
    },
    {
      name: 'Ludhiana',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&h=600&fit=crop',
      places: 'Lodhi Fort, Maharaja Ranjit Singh Museum'
    },
    {
      name: 'Jalandhar',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&h=600&fit=crop',
      places: 'Devi Talab Mandir, Wonderland Theme Park'
    },
    {
      name: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&h=600&fit=crop',
      places: 'Gateway of India, Marine Drive, Elephanta Caves'
    },
    {
      name: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800&h=600&fit=crop',
      places: 'Victoria Memorial, Howrah Bridge, Dakshineswar Temple'
    },
    {
      name: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=600&fit=crop',
      places: 'Lalbagh Garden, Bangalore Palace, Cubbon Park'
    },
    {
      name: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&h=600&fit=crop',
      places: 'Charminar, Golconda Fort, Hussain Sagar Lake'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(cities.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(cities.length / 4)) % Math.ceil(cities.length / 4));
  };

  const stats = [
    { number: '10000+', label: 'Happy Customers' },
    { number: '500+', label: 'Cities Covered' },
    { number: '50+', label: 'Premium Cars' },
    { number: '15+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Safety First',
      description: 'Your safety is our top priority with verified drivers and well-maintained vehicles'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through consistent, dependable service'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional service that exceeds expectations'
    },
    {
      icon: <FaUserTie />,
      title: 'Professionalism',
      description: 'Courteous, professional drivers who respect your time and comfort'
    }
  ];

  const team = [
    {
      name: 'Shivam Upadhyay',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description: '15+ years of real on-road experience, professional driver-turned-entrepreneur'
    },
    {
      name: 'Priya Sharma',
      position: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      description: 'Expert in fleet management and customer service'
    },
    {
      name: 'Amit Patel',
      position: 'Customer Relations Head',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      description: 'Dedicated to ensuring customer satisfaction 24/7'
    }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute w-64 h-64 bg-orange-100 rounded-full opacity-20"
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
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-orange-400 to-orange-500 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-center">
          <div className="text-center text-white space-y-4 md:space-y-8">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight"
            >
              About <span className="text-yellow-200">Us</span>
            </motion.h1>

            {/* Company Name */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-2xl lg:text-4xl font-semibold text-yellow-200"
            >
              Delhi Tour Cab
            </motion.h2>

            {/* Description */}
            {/* <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
            >
              Your trusted travel companion for over <span className="font-bold text-yellow-200">15 years</span>, providing safe, reliable, and comfortable transportation services across India.
            </motion.p> */}

            {/* Stats carssds */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-200 mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-row sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-8"
            >
              <button
                onClick={() => navigate('/contact')} className="bg-white text-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 cursor-pointer transition-colors flex items-center justify-center gap-2 text-base md:text-lg">
                <FaPhone className='rotate-90' /> Contact Us
              </button>
              <button
                onClick={() => navigate('/book-now')}
                className="bg-orange-400 cursor-pointer border border-orange-600 text-orange-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-orange-500 transition-colors text-base md:text-lg">
                Book Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div> */}
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              Our <span className="text-orange-500">Story</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <p className="text-justify text-lg font-medium text-gray-800">
                Delhi Tour Cab began with a simple idea. Do the work properly, take pride in it, and treat every traveler with care.
              </p>
              <p className="text-justify">
                Founded by <strong>Shivam Upadhyay</strong>, Delhi Tour Cab grew from years of hands-on driving experience into a trusted travel company built on honesty, safety, and deep respect for the road. Shivam started his career as a professional driver, learning India’s highways, mountain roads, city streets, and long-distance routes firsthand. That experience shaped how he understands travel, not just routes and destinations, but people, their expectations, and what makes a journey feel calm and secure.
              </p>
              <p className="text-justify">
                From the beginning, Shivam focused on doing more than just driving from point A to point B. He paid attention to safety, comfort, timing, and the small details that make travelers feel looked after. That mindset became the foundation of Delhi Tour Cab.
              </p>
              <p className="text-justify">
                Today, Shivam remains closely involved in daily operations. He still drives guests, oversees services, and ensures every trip meets the same standards he set for himself years ago. This hands-on approach means our clients are supported by someone who truly understands the challenges of travel and plans for them before they arise.
              </p>

              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 my-8">
                <p className="text-xl font-bold text-orange-600 mb-2">Our principles are simple and non-negotiable:</p>
                <p className="text-2xl font-bold text-gray-800 tracking-tight">Comfort, Safety, and Trust.</p>
              </div>

              <p className="text-justify">
                Our vehicles are modern, well maintained, and chosen for reliability. Our chauffeurs are experienced, background-verified, courteous, and trained to put guests first. Honesty is part of how we operate. If something is left behind, it is returned. If advice is needed, it is given sincerely.
              </p>
              <p className="text-justify">
                From local Delhi travel to long journeys across Ladakh, Uttarakhand, Jammu and Kashmir, and beyond, our strength comes from real route knowledge, terrain experience, and awareness of road and weather conditions. We rely on experience built over years of travel, not just navigation apps.
              </p>
              <p className="text-justify">
                We believe premium travel is defined by peace of mind, reliability, and genuine care. That belief is why families, professionals, and travelers continue to trust Delhi Tour Cab.
              </p>
              <p className="text-justify font-semibold text-gray-800">
                When you travel with us, you travel with people who respect the road and the responsibility that comes with it.
              </p>

              <div className="text-center pt-8 border-t border-gray-100">
                <p className="text-2xl font-bold text-gray-800 mb-1">Delhi Tour Cab</p>
                <p className="text-orange-600 font-bold text-lg mb-2 italic">Driven by experience. Built on trust.</p>
                <p className="text-gray-500 font-medium italic">Because when journeys matter, experience makes the difference.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-white"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-orange-400"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                To provide safe, reliable, and affordable transportation services that connect people to their destinations with comfort and peace of mind. We strive to exceed customer expectations through professional service, well-maintained vehicles, and experienced drivers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-orange-400"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                To become India's most trusted and preferred cabs provider, known for our commitment to safety, reliability, and customer satisfaction. We envision a future where every journey with us is a pleasant and memorable experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          >
            Our <span className="text-orange-500">Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-4 md:p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="text-3xl md:text-4xl text-orange-500 mb-3 md:mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Team Section */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Meet Our <span className="text-orange-500">Team</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}



      {/* Services in Cities Section */}
      <ServiceCities />
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Why Choose <span className="text-orange-500">Delhi Tour Cab?</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <FaCar className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Fleet</h3>
              <p className="text-gray-600 ">Well-maintained vehicles from top brands ensuring comfort and reliability</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <FaUsers className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Drivers</h3>
              <p className="text-gray-600 ">Professional, licensed, and experienced drivers who know the routes well</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <FaClock className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock availability for all your transportation needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Experience Our Cabs?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white mb-8"
          >
            Book your ride today and discover why thousands trust Delhi Tour Cab
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FaPhone /> +91 9278063535
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FaWhatsapp /> WhatsApp Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;