import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCar } from 'react-icons/fa';
import { logo, iso, ministry, msme } from '../utils/images';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  bg-white text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <img src={logo} alt="Delhi Tour Cab Logo" className="h-20 " />

            <p className="text-gray-400 text-sm">
              Your trusted partner for Delhi tours cab, outstation travel, and premium cab .
              Available 24/7 for all your travel and tourism needs.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaFacebook size={24} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <FaTwitter size={24} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                <FaInstagram size={24} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <FaLinkedin size={24} className="text-white" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-center md:text-left md:ml-20"
          >
            <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400  hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400  hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400  hover:text-orange-500 transition-colors">Our Services</Link></li>
              <li><Link to="/tour-packages" className="text-gray-400  hover:text-orange-500 transition-colors">Tour Packages</Link></li>
              <li><Link to="/contact" className="text-gray-400  hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-orange-500">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start justify-center md:justify-start"><FaCar className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={14} />Local Tour Cab</li>
              <li className="text-gray-400 flex items-start justify-center md:justify-start"><FaCar className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={14} />Outstation Travel</li>
              <li className="text-gray-400 flex items-start justify-center md:justify-start"><FaCar className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={14} />Corporate Car Rental</li>
              <li className="text-gray-400 flex items-start justify-center md:justify-start"><FaCar className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={14} />Airport Transfer</li>
              <li className="text-gray-400 flex items-start justify-center md:justify-start"><FaCar className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={14} />Tour Packages</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-orange-500">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 justify-center md:justify-start">
                <FaPhone className="mr-3 text-orange-500 flex-shrink-0" size={16} />
                <span>Mob. +91-9278063535</span>
              </div>
              <div className="flex items-center text-gray-400 justify-center md:justify-start">
                <FaPhone className="mr-3 text-orange-500 flex-shrink-0" size={16} />
                <span>Mob. +91-9838774155</span>
              </div>
              <div className="flex items-center text-gray-400 justify-center md:justify-start">
                <FaWhatsapp className="mr-3 text-orange-500 flex-shrink-0" size={16} />
                <span>Mob. +91-9278063535</span>
              </div>
              <div className="flex items-center text-gray-400 justify-center md:justify-start">
                <FaEnvelope className="mr-3 text-orange-500 flex-shrink-0" size={16} />
                <span className="text-sm">delhitourcab@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-400 justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-3 text-orange-500 mt-1 flex-shrink-0" size={16} />
                <span className="text-sm">JH. No. 5, Panchkuian Road Behind <br /><span className=''> Palika Place Annexe Market </span><br /> <span className='text-center ml-2'>New Delhi ( 110001 )</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certification Logos Section */}
      <div className="border-t border-gray-200 bg-gradient-to-br from-orange-50 via-white to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Certified & <span className="text-orange-500">Trusted</span></h3>
            <p className="text-gray-600 text-sm">Recognized by Government of India</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-20"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-orange-100 hover:border-orange-300"
            >
              <img
                src={ministry}
                alt="Ministry Certification"
                className="h-24 md:h-28 w-auto object-contain"
              />
            </motion.div>
             <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-orange-100 hover:border-orange-300"
            >
              <img
                src={iso}
                alt="ISO Certification"
                className="h-24 md:h-28 w-auto object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-orange-100 hover:border-orange-300"
            >
              <img
                src={msme}
                alt="MSME Certification"
                className="h-24 md:h-28 w-auto object-contain"
              />
            </motion.div>
           
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
            </motion.p>
            <div className='flex justify-center items-center -mt-8 md:mr-80 md:mt-1'> <p className='text-black'> &copy; 2026 DelhiTourCab.com </p>| <a href="https://sutaxiservice.com/" target='_blank' className='text-sm md:text-md text-orange-500'>A Unit of SU TAXI SERVICE</a></div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <Link to="/privacy" className="text-gray-400  hover:text-orange-500 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400  hover:text-orange-500 text-sm transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400  hover:text-orange-500 text-sm transition-colors">Sitemap</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;