import { motion } from 'framer-motion';
import { FaCheckCircle, FaCar, FaWhatsapp, FaPhone, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotate: [0, -5, 5, -5, 5, 0]
            }}
            transition={{
              scale: { delay: 0.3, type: "spring", stiffness: 200 },
              rotate: {
                delay: 2,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2
              }
            }}
            className="text-8xl text-green-500 mb-6 flex justify-center"
          >
            <FaCheckCircle />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-600 mb-8"
          >
            Your booking request has been submitted successfully!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-orange-50 p-6 rounded-lg mb-8"
          >
            <h3 className="text-lg font-semibold text-orange-600 mb-2">What's Next?</h3>
            <p className="text-gray-700">
              Our team will contact you within 30 minutes to confirm your booking details and arrange pickup.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="space-y-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/book-now')}
              className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-3"
            >
              <FaCar /> Book Again
            </motion.button>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/919876543210?text=Hi, I just submitted a booking request', '_blank')}
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('tel:+919876543210')}
                className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone /> Call Us
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <FaHome /> Back to Home
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;