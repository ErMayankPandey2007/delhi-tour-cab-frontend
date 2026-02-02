import { motion } from 'framer-motion';
import { FaCar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete && onComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Glowing Circle */}
        <div className="relative mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-4 border-transparent border-t-orange-500 border-r-orange-400 rounded-full mx-auto"
          />

          {/* carss in Center */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center text-4xl text-orange-400"
          >
            <FaCar />
          </motion.div>
        </div>

        {/* Neon Text */}
        <motion.h1
          animate={{
            textShadow: [
              '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316',
              '0 0 20px #fb923c, 0 0 30px #fb923c, 0 0 40px #fb923c',
              '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl font-bold text-white mb-2"
        >
          DELHI TOUR CAB
        </motion.h1>

        <motion.p
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-orange-300 text-lg font-medium mb-6"
        >
          {/* Service */}
        </motion.p>

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
          />
        </div>

        {/* Progress Percentage */}
        <motion.p
          className="text-white text-xl font-bold mb-6"
        >
          {Math.round(progress)}%
        </motion.p>

        {/* Pulse Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-300 text-lg"
        >
          {progress < 100 ? 'Loading...' : 'Ready!'}
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;