import { motion } from 'framer-motion';
import { FaCar, FaUsers, FaGasPump, FaShieldAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { innova, fortuner, slider3, breeza, drizer, hondacity, scorpio, verna, wagonr, ertiga, kiacarnival, toyotavellfire, defender, thar, kiacarens, forcewinger, forcetempo, volvo, forceurbano } from '../utils/images';
import PopularTours from '../components/PopularTours';

const LocalCarRental = () => {
  const navigate = useNavigate();

  const carssTypes = [
    {
      name: 'Maruti Suzuki WagonR',
      image: wagonr,
      capacity: '5 Seater',
      fuel: 'Petrol/CNG',
      basePrice: '₹1,800',
      extraKm: '₹14/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'Budget-friendly hatchback with surprisingly spacious interiors for short city hops.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Spacious'],
      examples: 'Hatchback'
    },
    {
      name: 'Maruti Suzuki Swift Dzire',
      image: drizer,
      capacity: '5 Seater',
      fuel: 'Petrol/CNG',
      basePrice: '₹2,000',
      extraKm: '₹16/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'The most popular choice for city commuters. Highly fuel-efficient and comfortable.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Fuel Efficient'],
      examples: 'Compact Sedan'
    },
    {
      name: 'Maruti Suzuki Vitara Brezza',
      image: breeza,
      capacity: '5 Seater',
      fuel: 'Petrol',
      basePrice: '₹2,200',
      extraKm: '₹16/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'Sporty and compact SUV, perfect for navigating city traffic with ease.',
      features: ['8hr & 80km', 'AC', 'Music System', 'SUV'],
      examples: 'Compact SUV'
    },
    {
      name: 'Maruti Suzuki Ertiga',
      image: ertiga,
      capacity: '7 Seater',
      fuel: 'Petrol/CNG',
      basePrice: '₹2,500',
      extraKm: '₹18/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'Budget-friendly 7-seater, perfect for family reunions or group city travel.',
      features: ['8hr & 80km', 'AC Vents', 'Flexible Seats', 'Economy'],
      examples: 'MUV'
    },
    {
      name: 'Kia Carens',
      image: kiacarens,
      capacity: '7 Seater',
      fuel: 'Petrol/Diesel',
      basePrice: '₹3,000',
      extraKm: '₹20/km',
      extraHr: '₹300/hr',
      nightCharge: '₹300',
      description: 'Modern MUV with premium features for comfortable family travel.',
      features: ['8hr & 80km', 'Captain Seats', 'Dual AC', 'Premium'],
      examples: 'Premium MUV'
    },
    {
      name: 'Mahindra Scorpio',
      image: scorpio,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹3,000',
      extraKm: '₹22/km',
      extraHr: '₹400/hr',
      nightCharge: '₹400',
      description: 'Solid and powerful SUV for group travel or making a statement in the city.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Rugged'],
      examples: 'SUV'
    },
    {
      name: 'Toyota Innova Crysta',
      image: innova,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹3,500',
      extraKm: '₹22/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'The benchmark of comfort and reliability for family outings or corporate needs.',
      features: ['8hr & 80km', 'Rear AC', 'Large Boot', 'Spacious'],
      examples: 'MUV'
    },
    {
      name: 'Mahindra Thar',
      image: thar,
      capacity: '5 Seater',
      fuel: 'Diesel',
      basePrice: '₹3,500',
      extraKm: '₹25/km',
      extraHr: '₹400/hr',
      nightCharge: '₹400',
      description: 'Adventure-ready SUV with rugged styling and powerful performance.',
      features: ['8hr & 80km', '4x4', 'Off-Road', 'Adventure'],
      examples: 'Adventure SUV'
    },
    {
      name: 'Honda City',
      image: hondacity,
      capacity: '5 Seater',
      fuel: 'Petrol',
      basePrice: '₹4,500',
      extraKm: '₹35/km',
      extraHr: '₹400/hr',
      nightCharge: '₹500',
      description: 'Executive sedan for those who prioritize luxury and a smooth driving experience.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Premium'],
      examples: 'Premium Sedan'
    },
    {
      name: 'Hyundai Verna',
      image: verna,
      capacity: '5 Seater',
      fuel: 'Petrol/Diesel',
      basePrice: '₹4,500',
      extraKm: '₹35/km',
      extraHr: '₹400/hr',
      nightCharge: '₹500',
      description: 'Sleek design with advanced features for a premium city tour experience.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Premium'],
      examples: 'Premium Sedan'
    },
    {
      name: 'Toyota Fortuner',
      image:  fortuner ,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹7,500',
      extraKm: '₹45/km',
      extraHr: '₹500/hr',
      nightCharge: '₹500',
      description: 'The ultimate luxury SUV for a powerful presence and unmatched comfort.',
      features: ['8hr & 80km', '4x4', 'Leather Seats', 'Status'],
      examples: 'Luxury SUV'
    },
    {
      name: 'Kia Carnival',
      image: kiacarnival,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹8,500',
      extraKm: '₹65/km',
      extraHr: '₹600/hr',
      nightCharge: '₹600',
      description: 'Ultra-luxurious MUV with advanced features for premium executive travel.',
      features: ['8hr & 80km', 'Captain Seats', 'Dual Sunroof', 'VIP Look'],
      examples: 'Luxury MUV'
    },
    {
      name: 'Land Rover Defender',
      image: defender,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹9,500',
      extraKm: '₹90/km',
      extraHr: '₹800/hr',
      nightCharge: '₹700',
      description: 'Iconic luxury SUV with unmatched off-road capability and premium features.',
      features: ['8hr & 80km', '4x4', 'Luxury', 'Premium'],
      examples: 'Ultra Luxury SUV'
    },
  
    {
      name: 'Toyota Vellfire',
      image: toyotavellfire,
      capacity: '13 Seater',
      fuel: 'Petrol Hybrid',
      basePrice: '₹10,500',
      extraKm: '₹105/km',
      extraHr: '₹1,000/hr',
      nightCharge: '₹800',
      description: 'Ultimate luxury MPV with executive lounge seating and cutting-edge technology.',
      features: ['8hr & 80km', 'Executive Seats', 'Hybrid', 'Ultra Luxury'],
      examples: 'Ultra Luxury MPV'
    },
    {
      name: 'Winger',
      image: forcewinger,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹5500',
      extraKm: '₹25/km',
      extraHr: '₹500/hr',
      nightCharge: '₹500',
      description: 'Spacious van for group outstation trips.',
      features: ['8hr & 80km', 'Executive Seats', 'Hybrid', 'Ultra Luxury'],
      examples: 'Ultra Luxury MPV'
    },
    {
      name: 'Tempo(12+1)',
      image: forcetempo,
      capacity: '(12+1) Seater',
      fuel: 'Diesel',
      basePrice: '₹6000',
      extraKm: '₹30/km',
      extraHr: '₹500/hr',
      nightCharge: '₹500',
      description: 'Perfect for group tours and family outings.',
      features: ['8hr & 80km', 'Executive Seats', 'Hybrid', 'Ultra Luxury'],
      examples: 'Ultra Luxury MPV'
    },
    {
      name: 'Tempo(17+1)',
      image: volvo,
      capacity: '(17+1) Seater',
      fuel: 'Diesel',
      basePrice: '₹6500',
      extraKm: '₹30/km',
      extraHr: '₹500/hr',
      nightCharge: '₹500',
      description: 'Large group travel solution for outstation tours.',
      features: ['8hr & 80km', 'Executive Seats', 'Hybrid', 'Ultra Luxury'],
      examples: 'Ultra Luxury MPV'
    },
    {
      name: 'Urbania',
      image: forceurbano,
      capacity: '17 seats',
      fuel: 'Diesel',
      basePrice: '₹8500',
      extraKm: '₹40/km',
      extraHr: '₹800/hr',
      nightCharge: '₹800',
      description: 'Large group travel solution for outstation tours.',
      features: ['8hr & 80km', 'Executive Seats', 'Hybrid', 'Ultra Luxury'],
      examples: 'Ultra Luxury MPV'
    },
    {
      name: 'Bus (25-45 seats)',
      image:volvo,
      capacity: '(25-45)seats',
      fuel: 'Diesel',
      basePrice: 'On request',
      extraKm: 'On request/km',
      extraHr: 'On request/hr',
      nightCharge: 'On request',
      description: 'Large group travel solution for outstation tours.',
      features: ['8hr & 80km', 'Executive Seats', 'Hybrid', 'Ultra Luxury'],
      examples: 'Ultra Luxury MPV'
    },
  ];

  const handleWhatsApp = (carssName = '') => {
    const text = carssName ? `Hello, I am interested in renting ${carssName} for Local Car Rental.` : 'Hello, I am interested in Local Car Rental services.';
    window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919278063535';
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden text-white mt-0 sm:mt-0">
        <div className="absolute inset-0 z-0">
          <img
            src={slider3}
            alt="Local Car Rental"
            className="w-full h-full object-cover object-center transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mt-[120px] md:-ml-[600px] px-4 text-center md:mb-[650px] text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold mb-4 sm:mb-6 text-orange-500 drop-shadow-2xl"
          >
            Local Car Rental
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl mb-6 sm:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold px-2"
          >
            Reliable & Affordable Local Transportation in Delhi
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate('/book-now')}
              className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg cursor-pointer text-sm sm:text-base"
            >
              Book Now
            </button>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <FaWhatsapp /> Quick Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* carss Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Choose Your <span className="text-orange-500">Vehicle</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {carssTypes.map((carss, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative bg-gray-100 p-0 overflow-hidden h-64 md:h-80">
                  <img
                    src={carss.image}
                    alt={carss.name}
                    className="w-full h-full object-contain scale-110 hover:scale-125 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-grow bg-white">
                  <div className="flex justify-between items-start mb-4 bg-gradient-to-r from-orange-600 to-orange-400 p-3 rounded-xl shadow-inner">
                    <h3 className="text-sm font-bold text-white flex-1 mr-2 leading-tight uppercase tracking-wide">{carss.name}</h3>
                    <div className="text-white font-black bg-orange-700/30 px-3 py-1.5 rounded-lg border border-orange-500/50 shadow-sm">{carss.basePrice}</div>
                  </div>
                  <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-widest">{carss.examples}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed text-justify">{carss.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-gray-700 text-sm font-medium bg-gray-50 p-2 rounded-lg">
                      <FaUsers className="mr-2 text-orange-500" />
                      {carss.capacity}
                    </div>
                    <div className="flex items-center text-gray-700 text-sm font-medium bg-gray-50 p-2 rounded-lg">
                      <FaGasPump className="mr-2 text-orange-500" />
                      {carss.fuel}
                    </div>
                  </div>

                  {/* Pricing Details */}
                  <div className="bg-gradient-to-br  from-orange-50 to-yellow-50 p-3 rounded-lg mb-4 border border-orange-100">
                    <div className="flex flex-col gap-1 text-lef text-xs">
                      <div className="flex gap-4">
                        <span className="text-gray-600 font-medium">8 hr & 40 km</span>
                        <span className="text-orange-600 font-bold">{carss.basePrice}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 font-medium">Extra km:</span>
                        <span className="text-orange-600 font-bold">{carss.extraKm}</span>
                      </div>
                      <div className="flex gap-4 ">
                        <span className="text-gray-600 font-medium">Extra hrs:</span>
                        <span className="text-orange-600 font-bold">{carss.extraHr}</span>
                      </div>
                      <div className="flex gap-4 col-span-2">
                        <span className="text-gray-600 font-medium">Night (10 pm - 6 am):</span>
                        <span className="text-orange-600 font-bold">{carss.nightCharge}</span>
                      </div>
                      <div className="flex gap-4 col-span-2 pt-2 border-t border-orange-200">
                        <span className="text-gray-600 font-medium">Toll/Parking:</span>
                        <span className="text-orange-600 font-bold">On Request</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex flex-wrap gap-2">
                      {carss.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-orange-100/50 shadow-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* carssd Action Buttons */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50/50 border-t border-gray-100">
                  <motion.button
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleWhatsApp(carss.name)}
                    className="bg-green-50 text-green-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-green-600 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm border border-green-100"
                  >
                    <FaWhatsapp className="mb-1 text-sm md:text-base" /> Enquiry
                  </motion.button>
                  <motion.button
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCall}
                    className="bg-blue-50 text-blue-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm border border-blue-100"
                  >
                    <FaPhone className="mb-1 text-sm md:text-base" /> Call
                  </motion.button>
                  <motion.button
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/book-now')}
                    className="bg-orange-50 text-orange-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer h-full shadow-sm border border-orange-100"
                  >
                    <FaCar className="mb-1 text-sm md:text-base" /> Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PopularTours />

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Ready to Explore the City?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Get the best local carss rental experience in Delhi NCR with our professional drivers.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <FaPhone /> Call Now
            </button>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <FaWhatsapp /> Quick Enquiry
            </button>
            <button
              onClick={() => navigate('/book-now')}
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalCarRental;