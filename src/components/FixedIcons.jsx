import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaHeadset } from 'react-icons/fa';

const FixedIcons = ({ onCallbackClick }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919278063535?text=Hello, I need taxi service', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+919278063535');
  };

  return (
    <>
      {/* WhatsApp - Left Side on Mobile */}
      <div className="fixed left-2 md:left-auto md:right-4 bottom-4 md:bottom-25 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: ['#10b981', '#059669', '#047857', '#10b981'],
            x: [0, -8, 8, -8, 8, -6, 6, -4, 4, 0],
            y: [0, -4, 4, -4, 4, -2, 2, 0],
            rotate: [0, -20, 20, -20, 20, -15, 15, -10, 10, 0]
          }}
          transition={{
            backgroundColor: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
            x: { repeat: Infinity, duration: 0.6, repeatDelay: 3 },
            y: { repeat: Infinity, duration: 0.6, repeatDelay: 3 },
            rotate: { repeat: Infinity, duration: 0.6, repeatDelay: 3 }
          }}
          onClick={handleWhatsApp}
          className="text-white p-2 md:p-3 rounded-full cursor-pointer shadow-lg"
        >
          <FaWhatsapp size={20} className="md:w-6 md:h-6" />
        </motion.button>
      </div>

      {/* Phone - Right Side on Mobile */}
      <div className="fixed right-2 md:right-4 bottom-4 md:bottom-10 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: ['#ef4444', '#dc2626', '#b91c1c', '#ef4444'],
            x: [0, -8, 8, -8, 8, -6, 6, -4, 4, 0],
            y: [0, -4, 4, -4, 4, -2, 2, 0],
            rotate: [0, -20, 20, -20, 20, -15, 15, -10, 10, 0]
          }}
          transition={{
            backgroundColor: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
            x: { repeat: Infinity, duration: 0.6, repeatDelay: 3.5 },
            y: { repeat: Infinity, duration: 0.6, repeatDelay: 3.5 },
            rotate: { repeat: Infinity, duration: 0.6, repeatDelay: 3.5 }
          }}
          onClick={handlePhone}
          className="text-white p-2 md:p-3 rounded-full cursor-pointer shadow-lg"
        >
          <FaPhone size={20} className="md:w-6 md:h-6" />
        </motion.button>
      </div>
    </>
  );
};

export default FixedIcons;