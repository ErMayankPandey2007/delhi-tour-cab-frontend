import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaEye, FaDatabase, FaGavel } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-20 blur-3xl"
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
          className="absolute w-80 h-80 bg-gradient-to-r from-red-200 to-orange-200 rounded-full opacity-15 blur-2xl"
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
          className="absolute w-64 h-64 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-10 blur-xl"
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
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl mb-6 flex justify-center"
          >
            <FaShieldAlt className="text-yellow-300" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Your privacy is important to us. Learn how we protect your data.
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="space-y-8">
            {/* Information Collection */}
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-orange-500 pl-6"
            >
              <div className="flex items-center mb-4">
                <FaDatabase className="text-orange-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
              </div>
              <div className="text-gray-600 space-y-3">
                <p>We collect information you provide directly to us, such as:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Booking details (pickup/drop locations, travel dates)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication records (messages, calls, feedback)</li>
                </ul>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-red-500 pl-6"
            >
              <div className="flex items-center mb-4">
                <FaEye className="text-red-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              <div className="text-gray-600 space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide and improve our cab and tour travel</li>
                  <li>Process bookings and payments</li>
                  <li>Communicate with you about your trips</li>
                  <li>Send promotional offers and updates (with your consent)</li>
                  <li>Ensure safety and security of our tour cab</li>
                </ul>
              </div>
            </motion.section>

            {/* Information Sharing */}
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-orange-600 pl-6"
            >
              <div className="flex items-center mb-4">
                <FaUserShield className="text-orange-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Information Sharing</h2>
              </div>
              <div className="text-gray-600 space-y-3">
                <p>We do not sell, trade, or rent your personal information. We may share information only:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>With drivers to facilitate your trip</li>
                  <li>With payment processors for transaction processing</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights and safety</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-red-600 pl-6"
            >
              <div className="flex items-center mb-4">
                <FaLock className="text-red-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
              </div>
              <div className="text-gray-600 space-y-3">
                <p>We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-orange-400 pl-6"
            >
              <div className="flex items-center mb-4">
                <FaGavel className="text-orange-400 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Your Rights</h2>
              </div>
              <div className="text-gray-600 space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <div className="text-gray-600 space-y-2">
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> delhitourcab@gmail.com</p>
                  <p><strong>Phone:</strong> Mob. +91-9278063535</p>
                  <p><strong>Address:</strong> Connaught Place, New Delhi - 110001</p>
                </div>
              </div>
            </motion.section>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-gray-500 text-sm border-t pt-6"
            >
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p className="mt-2">This Privacy Policy may be updated from time to time. We will notify you of any changes.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;