import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  delhi, agra, jaipur, varanasi, haridwar, rishikesh,
  mathura, vrindavan, ayodhya, prayagraj, chandigarh,
  rumidarvaja,
  dehradun,
  ludhiana,
  amritsar,
  jalandhar,
  gorakhpur,
  patna,
  ajmer,
  udaipur,
  mumbai,
  kolkata,
  bangoluru,
  hydrabad
} from '../utils/images';

const ServiceCities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const cities = [
    {
      location: 'Delhi NCR',
      placeName: 'India Gate',
      image: delhi,
      description: 'Capital city with rich history and modern amenities'
    },
    {
      location: 'Lucknow',
      placeName: 'Rumi Darwaza',
      image: rumidarvaja,
      description: 'City of Nawabs with rich culture'
    },
    {
      location: 'Vrindavan',
      placeName: 'Prem Mandir',
      image: mathura,
      description: 'Birthplace of Lord Krishna'
    },
    {
      location: 'Mathura',
      placeName: 'Banke Bihari',
      image: vrindavan,
      description: 'Land of Lord Krishna\'s childhood'
    },
    {
      location: 'Agra',
      placeName: 'Taj Mahal',
      image: agra,
      description: 'Home to the magnificent Taj Mahal'
    },
    {
      location: 'Jaipur',
      placeName: 'Hawa Mahal',
      image: jaipur,
      description: 'Pink City with royal palaces and forts'
    },
    {
      location: 'Haridwar',
      placeName: 'Har Ki Pauri',
      image: haridwar,
      description: 'Holy city on the banks of Ganges'
    },
    {
      location: 'Rishikesh',
      placeName: 'Laxman Jhula',
      image: rishikesh,
      description: 'Yoga capital and adventure sports hub'
    },
    {
      location: 'Dehradun',
      placeName: 'Sahastradhara ',
      image: dehradun,
      description: 'Thousand-fold Spring'
    },
    {
      location: 'Chandigarh',
      placeName: 'Sukhna Lake',
      image: chandigarh,
      description: 'Beautiful planned city'
    },
    {
      location: 'Ludhiana',
      placeName: 'Phillaur Fort',
      image: ludhiana,
      description: 'A symbol of the potent heritage of Punjab'
    },
    {
      location: 'Amritsar',
      placeName: 'Golden Temple',
      image: amritsar,
      description: 'Holy city with Golden Temple'
    },
    {
      location: 'Jalandhar',
      placeName: 'Devi Talab Mandir',
      image: jalandhar,
      description: 'Sports goods manufacturing hub'
    },
    {
      location: 'Ayodhya',
      placeName: 'Ram Mandir',
      image: ayodhya,
      description: 'Birthplace of Lord Rama'
    },
    {
      location: 'Prayagraj',
      placeName: 'Bade  Hanuman Ji Maharaj',
      image: prayagraj,
      description: "Shri Bade Hanuman Ji Mandir is one of Prayagraj's most visited spiritual landmarks,"
    },
    {
      location: 'Varanasi',
      placeName: 'Kashi Vishwanath',
      image: varanasi,
      description: 'Spiritual capital with ancient temples'
    },
    {
      location: 'Gorakhpur',
      placeName: 'Gorakhnath Temple',
      image: gorakhpur,
      description: 'Religious and cultural center'
    },
    {
      location: 'Patna',
      placeName: 'Bihar Museum ',
      image: patna,
      description: 'Capital of Bihar with rich heritage'
    },
    {
      location: 'Ajmer',
      placeName: 'Taragarh Fort',
      image: ajmer,
      description: 'Famous pilgrimage destination'
    },
    {
      location: 'Udaipur',
      placeName: 'Kumbhalgarh Fort',
      image: udaipur,
      description: 'City of Lakes and palaces'
    },
    {
      location: 'Mumbai',
      placeName: 'Gateway of India',
      image: mumbai,
      description: 'Financial capital of India'
    },
    {
      location: 'Kolkata',
      placeName: 'Victoria Memorial',
      image: kolkata,
      description: 'City of Joy with rich culture'
    },
    {
      location: 'Bangalore',
      placeName: 'Vidhana Soudha ',
      image: bangoluru,
      description: 'IT hub and Garden City'
    },
    {
      location: 'Hyderabad',
      placeName: 'Charminar',
      image: hydrabad,
      description: 'City of Pearls and Biryani'
    }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => {
          const itemsPerSlide = isMobile ? 1 : 3;
          const maxSlide = cities.length - itemsPerSlide;
          return prev >= maxSlide ? 0 : prev + 1;
        });
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, isMobile, cities.length]);

  const nextSlide = () => {
    const itemsPerSlide = isMobile ? 1 : 3;
    const maxSlide = cities.length - itemsPerSlide;
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const itemsPerSlide = isMobile ? 1 : 3;
    const maxSlide = cities.length - itemsPerSlide;
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
  };

  const getSlideWidth = () => {
    return isMobile ? 100 : 100 / 3;
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-800"
        >
          Service Provide in <span className="text-orange-500">Cities</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base px-4"
        >
          We provide reliable taxi services across major cities in India. From bustling metros to scenic hill stations, our professional drivers ensure safe and comfortable journeys.
        </motion.p>

        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-lg mx-auto max-w-lg md:max-w-none">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * getSlideWidth()}%)` }}
            >
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`${isMobile ? 'w-full px-2' : 'w-1/3'} flex-shrink-0 px-2 md:px-4`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 ${isMobile ? 'h-82' : 'h-full'}`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={city.image}
                        alt={city.placeName}
                        className={`w-full ${isMobile ? 'h-64' : 'h-48 md:h-56'} object-cover hover:scale-105 transition-transform duration-500`}
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3">
                        <p className='bg-black text-white px-3 py-1 text-sm font-bold rounded-2xl'>
                          {city.placeName}
                        </p>
                      </div>
                    </div>

                    <div className={`${isMobile ? 'p-3' : 'p-4 md:p-6'} flex justify-center items-center gap-4`}>
                      {/* <p className={`text-zinc-800 font-extrabold ${isMobile ? 'text-lg mr-5' : 'text-xl md:text-xl'} mb-2 line-clamp-2`}>
                        <FaMapMarkerAlt className="inline mr-1 text-orange-500" />
                        {city.location}
                      </p> */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <motion.p
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}

                          className={`text-zinc-100 bg-[#ff6900] py-2 px-10 text-center rounded-xl font-extrabold ${isMobile ? 'text-lg mr-5' : 'text-xl md:text-xl'} mb-2 line-clamp-2`}>
                          <FaMapMarkerAlt className="inline mr-1 text-white" />
                          {city.location}
                         
                        
                          
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute cursor-pointer left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 md:p-3 rounded-full hover:bg-orange-600 transition-all shadow-lg opacity-0 group-hover:opacity-100 z-10"
          >
            <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute cursor-pointer right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 md:p-3 rounded-full hover:bg-orange-600 transition-all shadow-lg opacity-0 group-hover:opacity-100 z-10"
          >
            <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </div>


      </div >
    </section >
  );
};

export default ServiceCities;