import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaRoute, FaKey, FaPlane, FaGlobe, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { innova, delhi, agra, slider2, slider1, slider3, slider4, slider5 } from '../utils/images';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
     
      title: 'Corporate Car Rental',
      description: 'Professional transportation for businesses',
      route: '/corporate-car-rental',
      color: 'from-blue-500 to-blue-600',
      image: slider1
    },
     {
      
      title: 'Outstation Car Rental',
      description: 'Long-distance comfortable travel',
      route: '/outstation-car-rental',
      color: 'from-orange-500 to-orange-600',
      image: slider2
    },
    {
    
      title: 'Local Car Rental',
      description: 'City travel and daily commutes',
      route: '/local-car-rental',
      color: 'from-green-500 to-green-600',
      image: slider3
    },
    {
      
      title: 'Airport & Railway Station Transfer',
      description: 'Long Distance Travel Made Easy',
      route: '/airport-railway-car-rental',
      color: 'from-orange-500 to-orange-600',
      image: slider4
    },

    {
       
      title: 'Wedding Car Rental',
      description: 'style, luxury, making memories, and smooth journeys',
      route: '/wedding-car-rental',
      color: 'from-red-500 to-red-600',
      image: slider5
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setTimeout(() => {
      navigate(service.route);
    }, 300);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-yellow-300">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Choose Your Perfect Transportation Solution
          </motion.p>
        </div>
      </section>

      {/* Services Dropdown Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleServiceClick(service)}
                className="relative bg-white rounded-3xl shadow-2xl cursor-pointer overflow-hidden group"
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <motion.div
                    animate={{
                      rotate: selectedService?.title === service.title ? [0, 360] : 0,
                      scale: selectedService?.title === service.title ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-6 left-6 text-5xl text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors mb-4">
                    {service.description}
                  </p>

                  {/* Click indicator */}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-orange-500 font-semibold"
                  >
                    <span>Explore Service</span>
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Need Help Choosing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Our team is here to help you find the perfect transportation solution
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:+919278063535'}
              className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <FaPhone /> Call Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/919278063535?text=Hello, I need help choosing a service.', '_blank')}
              className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <FaWhatsapp /> WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-colors shadow-lg cursor-pointer"
            >
              Contact Us Now
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;