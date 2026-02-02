import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaChevronLeft, FaChevronRight, FaChevronCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import {
  agra, rumidarvaja, delhi, indiagate, haridwar,
  dzireSlider, kiacarensSlider, innovaSlider, scorpioSlider, ertigaSlider,
  vernaSlider, forceurbanoSlider, wagnorSlider, tharSlider, defenderSlider, breezaSlider
} from '../utils/images';
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    {
      bgImage: agra, // Slider 1: Taj Mahal
      carssImageL: innovaSlider,
      carssImageR: breezaSlider,
      title: 'Corporate car Rental',
      subtitle: 'Professional Travel Solutions for Business',
      description: 'Reliable and punctual car rental services for corporate meetings, employee transport, and business events across Delhi NCR.'
    },
    {
      bgImage: rumidarvaja, // Slider 2: Rummy Darwaza
      carssImageL: kiacarensSlider,
      carssImageR: forceurbanoSlider,
      title: 'Outstation car Rental',
      subtitle: 'Safe & Comfortable Long Distance Travel',
      description: 'Explore popular destinations across India with our experienced drivers and well-maintained fleet for your outstation journeys.'
    },
    {
      bgImage: delhi, // Slider 3
      carssImageL: ertigaSlider,
      carssImageR: dzireSlider,
      title: 'Local car Rental',
      subtitle: 'Quick & Convenient City Transport',
      description: 'Half-day and full-day local rentals for city sightseeing, shopping, and daily commuting with professional chauffeurs.'
    },
    {
      bgImage: indiagate, // Slider 4
      carssImageL: ertigaSlider,
      carssImageR: innovaSlider,
      title: 'Airport and Railway Station car Rental',
      subtitle: 'Timely Pickups & Drops Guaranteed',
      description: 'Hassle-free transfers to IGIA Airport and major railway stations with flight delay tracking and 24/7 availability.'
    },
    {
      bgImage: haridwar, // Slider 5
      carssImageL: vernaSlider,
      carssImageR: kiacarensSlider,
      title: 'Wedding car Rental',
      subtitle: 'Luxury car for Your Special Day',
      description: 'Make your wedding memory special with our premium fleet of luxury car, elegantly maintained and driven by professional chauffeurs.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const navigate = useNavigate();

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const handleCall = () => {
    window.location.href = 'tel:+919278063535';
  };

  return (
    <div className="relative w-full  aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] min-h-[500px] md:min-h-[600px] overflow-hidden bg-[#242e3e]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants} 
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset }) => {
            if (offset.x < -100) {
              nextSlide();
            } else if (offset.x > 100) {
              prevSlide();
            }
          }}
          className="absolute inset-0 md:-mt-16 touch-pan-y"
        >
          {/* Background with Opacity */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover  bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].bgImage})`,
              opacity: 0.3, // Background image opacity
            }}
          />

          {/* Subtle architectual overlay if needed, but the bg image is enough */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#242e3e]/80" />

          <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 text-center pt-16 md:pt-32">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#f39c12] mb-3 sm:mb-6 leading-tight drop-shadow-lg"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white text-[11px] sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-12 leading-relaxed max-w-xl mx-auto opacity-90 font-medium px-2"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3  sm:gap-6 relative z-20 mb-10 md:-mt-10"
              >
                <button
                  onClick={() => navigate('/book-now')}
                  className="bg-[#ff3838] text-white px-5 md:px-10 py-2.5 md:py-3.5 rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-all shadow-2xl text-[10px] md:text-lg uppercase tracking-wider cursor-pointer transform hover:scale-105"
                >
                  Book Now <FaChevronCircleRight />
                </button>
                <button
                  onClick={handleCall}
                  className="bg-[#f1c40f] text-[#2c3e50] px-5 md:px-10 py-2.5 md:py-3.5 rounded-xl font-bold flex items-center gap-2 hover:bg-yellow-500 transition-all shadow-2xl text-[10px] md:text-lg uppercase tracking-wider cursor-pointer transform hover:scale-105"
                >
                  Call Now <FaPhone />
                </button>
              </motion.div>
            </div>

            {/* carss Images - Single extra large carss on mobile, two on desktop */}
            <div className="absolute inset-x-0 bottom-0 pointer-events-none flex justify-center md:justify-between items-end px-0 md:px-12 lg:px-24 overflow-hidden">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                className="hidden md:block md:w-[320px] lg:w-[420px]"
              >
                <img
                  src={slides[currentSlide].carssImageL}
                  alt="carss left"
                  className="w-full h-auto object-contain mb-[-5px] md:mb-[-10px] bg-transparent"
                />
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                className="w-[105%] sm:w-[90%] md:w-[320px] lg:w-[420px] bg-transparent flex justify-center"
              >
                <img
                  src={slides[currentSlide].carssImageR}
                  alt="carss right"
                  className="w-full h-auto object-contain mb-[-5px] md:mb-[-20px] bg-transparent transform scale-110 md:scale-100 origin-bottom"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Extreme Edge Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 md:p-4 rounded-full hover:bg-orange-500 hover:scale-110 transition-all z-40 cursor-pointer opacity-0 group-hover:opacity-100"
      >
        <FaChevronLeft size={isMobile ? 16 : 24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 md:p-4 rounded-full hover:bg-orange-500 hover:scale-110 transition-all z-40 cursor-pointer opacity-0 group-hover:opacity-100"
      >
        <FaChevronRight size={isMobile ? 16 : 24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all rounded-full cursor-pointer ${index === currentSlide ? 'w-10 bg-orange-500' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;