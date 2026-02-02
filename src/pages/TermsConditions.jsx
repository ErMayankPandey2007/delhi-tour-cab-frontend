import { motion } from 'framer-motion';
import { FaFileContract, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';

const TermsConditions = () => {
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
            <FaFileContract />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Terms & <span className="text-yellow-300">Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Delhi Tour Cab Service - Last Updated: January 2024
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8 space-y-8 border border-orange-100"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-orange-500" /> Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Delhi Tour Cab Service. These Terms and Conditions govern your use of our taxi and transportation services. By booking or using our services, you agree to be bound by these terms.
              </p>
            </div>

            {/* Booking Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Terms</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• All bookings are subject to vehicle availability</li>
                <li>• Advance booking is recommended for outstation trips</li>
                <li>• Booking confirmation will be sent via SMS/WhatsApp</li>
                <li>• Customer must provide accurate pickup location and contact details</li>
                <li>• Any changes to booking must be communicated at least 2 hours in advance</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Terms</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Payment can be made in cash, UPI, or card</li>
                <li>• For outstation trips, 50% advance payment may be required</li>
                <li>• All prices are inclusive of driver charges</li>
                <li>• Toll charges, parking fees, and state taxes are extra</li>
                <li>• Night charges (11 PM to 6 AM) apply as per rate card</li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaExclamationTriangle className="text-orange-500" /> Cancellation Policy
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Free cancellation up to 2 hours before pickup time</li>
                <li>• Cancellation within 2 hours: 25% of fare will be charged</li>
                <li>• No-show or cancellation after driver arrival: 50% of fare will be charged</li>
                <li>• For outstation trips: 24 hours advance notice required for free cancellation</li>
                <li>• Refunds will be processed within 5-7 business days</li>
              </ul>
            </div>

            {/* Customer Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Responsibilities</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Be ready at pickup location at scheduled time</li>
                <li>• Provide valid ID proof when requested</li>
                <li>• No smoking, drinking, or illegal activities in vehicles</li>
                <li>• Respect driver and maintain decorum during journey</li>
                <li>• Report any issues immediately to customer support</li>
                <li>• Ensure all personal belongings before leaving the vehicle</li>
              </ul>
            </div>

            {/* Company Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Responsibilities</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Provide clean, well-maintained vehicles</li>
                <li>• Ensure professional and courteous drivers</li>
                <li>• Maintain vehicle insurance and necessary permits</li>
                <li>• Provide 24/7 customer support</li>
                <li>• Ensure driver verification and background checks</li>
                <li>• GPS tracking for safety and monitoring</li>
              </ul>
            </div>

            {/* Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Liability</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Company is not liable for delays due to traffic, weather, or road conditions</li>
                <li>• Lost or damaged personal belongings are customer's responsibility</li>
                <li>• Company maintains comprehensive insurance for vehicles</li>
                <li>• Maximum liability limited to the fare amount paid</li>
                <li>• Force majeure events are beyond company control</li>
              </ul>
            </div>

            {/* Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy & Data Protection</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Customer data is collected only for service purposes</li>
                <li>• Personal information is kept confidential and secure</li>
                <li>• Data may be shared with drivers for trip coordination</li>
                <li>• GPS tracking data is used for safety and route optimization</li>
                <li>• Customer can request data deletion by contacting support</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Dispute Resolution</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• All disputes will be resolved through mutual discussion</li>
                <li>• Customer can raise complaints within 24 hours of service</li>
                <li>• Escalation process: Driver → Customer Support → Management</li>
                <li>• Legal jurisdiction: Delhi courts only</li>
                <li>• Arbitration may be used for major disputes</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Address:</strong> JH. No. 5, Panchkuian Road Behind Palika Place Annexe Market, New Delhi 110001</p>
                <p><strong>Phone:</strong> +91 9278063535</p>
                <p><strong>Email:</strong> delhitourcab@gmail.com</p>
                <p><strong>WhatsApp:</strong> +91 9278063535</p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-gray-500 pt-6 border-t border-orange-200">
              <p>These terms and conditions are subject to change without prior notice. Please check this page regularly for updates.</p>
              <p className="mt-2">© 2024 Delhi Tour Cab Service. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;