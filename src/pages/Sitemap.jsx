import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSitemap, FaHome, FaInfoCircle, FaCog, FaCar, FaRoute, FaBuilding, FaKey, FaGlobe, FaEnvelope, FaFileContract, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Sitemap = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: <FaHome />,
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Delhi Tour Cab' },
        { name: 'About Us', path: '/about', description: 'Learn about our company and services' },
        { name: 'Contact Us', path: '/contact', description: 'Get in touch with us' },
        { name: 'Book Now', path: '/book-now', description: 'Book your ride instantly' }
      ]
    },
    {
      category: 'Our Services',
      icon: <FaCog />,
      links: [
        { name: 'All Services', path: '/services', description: 'Overview of all our services' },
        { name: 'Local Car Rental', path: '/local-car-rental', description: 'City rides and local transportation' },
        { name: 'Outstation Car Rental', path: '/outstation-car-rental', description: 'Long distance travel services' },
        { name: 'Corporate Car Rental', path: '/corporate-car-rental', description: 'Business transportation solutions' },
        { name: 'Self Drive Cars', path: '/self-drive-cars', description: 'Rent a car and drive yourself' }
      ]
    },
    {
      category: 'Tour Packages',
      icon: <FaGlobe />,
      links: [
        { name: 'Tour Packages', path: '/tour-packages', description: 'Complete tour and travel packages' }
      ]
    },
    {
      category: 'Legal & Policies',
      icon: <FaFileContract />,
      links: [
        { name: 'Terms & Conditions', path: '/terms', description: 'Terms of service and conditions' },
        { name: 'Sitemap', path: '/sitemap', description: 'Website navigation structure' }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-15 blur-2xl"
          animate={{
            x: [0, -150, 80, 0],
            y: [0, 120, -60, 0],
            scale: [1, 0.7, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', right: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-10 blur-xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '15%', left: '15%' }}
        />
      </div>
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl mb-6 flex justify-center"
          >
            <FaSitemap />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Website <span className="text-yellow-300">Sitemap</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Navigate through all pages of Delhi Tour Cab
          </motion.p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 border border-orange-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl text-orange-500">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {section.category}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={linkIndex}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all hover:bg-orange-50"
                    >
                      <Link
                        to={link.path}
                        className="block"
                      >
                        <h3 className="font-semibold text-orange-600 hover:text-orange-700 mb-2">
                          {link.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {link.description}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg p-8 mt-8 shadow-lg border border-orange-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Quick Contact Information
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl text-orange-500 mb-2 flex justify-center">
                  <FaPhone />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                <p className="text-gray-600">+91 9278063535</p>
              </div>

              <div className="text-center">
                <div className="text-2xl text-orange-500 mb-2 flex justify-center">
                  <FaEnvelope />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">delhitourcab@gmail.com</p>
              </div>

              <div className="text-center">
                <div className="text-2xl text-orange-500 mb-2 flex justify-center">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                <p className="text-gray-600 text-sm">JH. No. 5, Panchkuian Road</p>
                <p className="text-gray-600 text-sm">New Delhi 110001</p>
              </div>

              <div className="text-center">
                <div className="text-2xl text-orange-500 mb-2 flex justify-center">
                  <FaCar />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Service</h3>
                <p className="text-gray-600">24/7 Available</p>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <div className="relative z-10 text-center text-gray-500 mt-8">
            <p>Last updated: January 2024</p>
            <p className="mt-2">© 2024 Delhi Tour Cab . All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;