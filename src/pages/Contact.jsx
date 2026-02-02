import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaComment, FaCar, FaHeadset, FaGlobe, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      <section className="relative z-10 text-white py-20 overflow-hidden bg-gradient-to-r from-orange-600/90 via-orange-500/85 to-yellow-500/80">
        {/* Background Image */}
        {/* <div className="absolute inset-0">
          <img 
            src={taxi} 
            alt="Delhi Tour Cab Contact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/85 to-yellow-500/80"></div>
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-6 flex justify-center"
          >
            <FaHeadset className="text-yellow-300" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-6"
          >
            Contact <span className="text-yellow-300">Delhi Tour <span className='text-red-600'>Cab</span></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl mb-8 max-w-3xl mx-auto"
          >
            24/7 Premium Tour Cabs • Quick Response • Best Rates in Delhi
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <FaCar className="text-yellow-300" />
              <span>500+ cars</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <FaShieldAlt className="text-yellow-300" />
              <span>Safe & Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <FaGlobe className="text-yellow-300" />
              <span>All Delhi NCR</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-10 border border-orange-100"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-5xl text-orange-500 mb-4 flex justify-center"
              >
                <FaComment />
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Send Message</h2>
              <p className="text-gray-600">Get instant quote for your travel needs</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <FaUser className="absolute left-4 top-4 text-orange-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <FaPhone className="absolute left-4 top-4 text-orange-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <FaEnvelope className="absolute left-4 top-4 text-orange-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                >
                  <option value="">Select Tour Type</option>
                  <option value="local">Local Tour Cab</option>
                  <option value="outstation">Outstation Travel</option>
                  <option value="tour">Tour Package</option>
                  <option value="corporate">Corporate Rental</option>
                  <option value="airport">Airport Transfer</option>
                </select>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your travel requirements, pickup location, destination, date & time..."
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
              >
                Send Message & Get Quote
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Main Contact carssd */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-orange-100">
              <div className="text-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl text-orange-500 mb-4 flex justify-center"
                >
                  <FaPhone />
                </motion.div>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                <p className="text-gray-600">We're here 24/7 for your service</p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#fff7ed" }}
                  className="flex items-center space-x-4 p-4 rounded-2xl transition-all cursor-pointer"
                  onClick={() => window.open('tel:+919278063535')}
                >
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-2xl">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Call Now</h3>
                    <p className="text-orange-600 font-semibold">Mob. +91-9278063535</p>
                    <p className="text-gray-500 text-sm">24/7 Emergency Service</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
                  className="flex items-center space-x-4 p-4 rounded-2xl transition-all cursor-pointer"
                  onClick={() => window.open('https://wa.me/919278063535?text=Hello, I need taxi service', '_blank')}
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">WhatsApp</h3>
                    <p className="text-green-600 font-semibold">Mob. +91-9278063535</p>
                    <p className="text-gray-500 text-sm">Quick Response Guaranteed</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
                  className="flex items-center space-x-4 p-4 rounded-2xl transition-all cursor-pointer"
                  onClick={() => window.open('mailto:delhitourcab@gmail.com?subject=Taxi Service Inquiry&body=Hello, I need taxi service. Please contact me.')}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Email Us</h3>
                    <p className="text-blue-600 font-semibold">delhitourcab@gmail.com</p>
                    <p className="text-gray-500 text-sm">booking@delhitourcab.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#fef2f2" }}
                  className="flex items-center space-x-4 p-4 rounded-2xl transition-all"
                >
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-2xl">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Visit Us</h3>
                    <p className="text-red-600 font-semibold">JH. No. 5, Panchkuian Road</p>
                    <p className="text-gray-500 text-sm">Behind Palika Place Annexe Market, New Delhi 110001</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#f3e8ff" }}
                  className="flex items-center space-x-4 p-4 rounded-2xl transition-all"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-2xl">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Service Hours</h3>
                    <p className="text-purple-600 font-semibold">24/7 Available</p>
                    <p className="text-gray-500 text-sm">Always Ready to Serve</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            {/* <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Quick Actions</h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('tel:+919278063535')}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  <FaPhone className="text-xl" /> Call Now - Instant Booking
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://wa.me/919278063535?text=Hello, I need taxi service urgently', '_blank')}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-xl" /> WhatsApp - Quick Chat
                </motion.button>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us Here</h2>
            <p className="text-gray-600 text-lg">Visit our office for personalized service</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100"
          >
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5742872935!2d77.21394731508236!3d28.63294948240234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683329da7%3A0x1b2b3f6a7c8d9e0f!2sPanchkuian%20Rd%2C%20Paharganj%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delhi Tour Cab Location"
              ></iframe>
            </div>

            <div className="p-8 bg-gradient-to-r from-orange-50 to-yellow-50">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-2xl">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Office Address</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    JH. No. 5<br />
                    Panchkuian Road Behind Palika Place Annexe Market<br />
                    New Delhi 110001
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      Near Connaught Place
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Metro Accessible
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      24/7 Service
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;