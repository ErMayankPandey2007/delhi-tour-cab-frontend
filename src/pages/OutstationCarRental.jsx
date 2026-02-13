import { motion } from 'framer-motion';
import { FaRoute, FaMapMarkedAlt, FaCar, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaPhone, FaWhatsapp, FaGasPump } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { slider2, drizer, innova, verna, scorpio, ertiga, breeza, fortuner, kiacarnival, wagonr, kiacarens, hondacity, thar, defender, vellfire, forcewinger, forcetempo, forceurbano, volvo } from '../utils/images';
import PopularTours from '../components/PopularTours';

const OutstationCarRental = () => {
  const navigate = useNavigate();

  const carssTypes = [
    {
      name: 'Maruti Suzuki WagonR',
      image: wagonr,
      capacity: '5 Seater',
      fuel: 'Petrol/CNG',
      perKm: '₹11/km',
      driverAllow: '₹300/day',
      dayLimit: '250km',
      description: 'Budget-friendly hatchback perfect for short outstation trips.',
      features: ['Economical', 'Compact', 'Easy Drive']
    },
    {
      name: 'Maruti Suzuki Swift Dzire',
      image: drizer,
      capacity: '5 Seater',
      fuel: 'Petrol/CNG',
      perKm: '₹12/km',
      driverAllow: '₹300/day',
      dayLimit: '250km',
      description: 'Compact sedan, ideal for small families or solo business trips out of town.',
      features: ['Comfortable Sedan', 'Efficient', 'Proven Reliability']
    },
    {
      name: 'Maruti Suzuki Vitara Brezza',
      image: breeza,
      capacity: '5 Seater',
      fuel: 'Petrol',
      perKm: '₹13/km',
      driverAllow: '₹300/day',
      dayLimit: '250km',
      description: 'Compact SUV for safe and comfortable highway trips with a sporty feel.',
      features: ['High Ground Clearance', 'Tough Build', 'Easy Driving']
    },
    {
      name: 'Maruti Suzuki Ertiga',
      image: ertiga,
      capacity: '7 Seater',
      fuel: 'Petrol/CNG',
      perKm: '₹15/km',
      driverAllow: '₹300/day',
      dayLimit: '250km',
      description: 'Economical 7-seater for group travels. Perfect balance of price and space.',
      features: ['Value for Money', 'Smooth Ride', 'Flexible Seating']
    },
    {
      name: 'Kia Carens',
      image: kiacarens,
      capacity: '7 Seater',
      fuel: 'Petrol/Diesel',
      perKm: '₹17/km',
      driverAllow: '₹300/day',
      dayLimit: '250km',
      description: 'Modern MUV with premium features for comfortable family outstation travel.',
      features: ['Premium Comfort', 'Spacious', 'Modern Design']
    },
    {
      name: 'Toyota Innova Crysta',
      image: innova,
      capacity: '7 Seater',
      fuel: 'Diesel',
      perKm: '₹20/km',
      driverAllow: '₹400/day',
      dayLimit: '250km',
      description: 'The ultimate choice for long family trips. Superior comfort and huge luggage space.',
      features: ['Long Route Comfort', 'Large Boot Space', 'Rear AC Vents']
    },
    {
      name: 'Mahindra Scorpio',
      image: scorpio,
      capacity: '7 Seater',
      fuel: 'Diesel',
      perKm: '₹20/km',
      driverAllow: '₹400/day',
      dayLimit: '250km',
      description: 'Rugged SUV for hilly areas and tough terrains. Strong presence on the highway.',
      features: ['Rugged SUV', 'Powerful Engine', 'High Ground Clearance']
    },
    {
      name: 'Mahindra Thar',
      image: thar,
      capacity: '5 Seater',
      fuel: 'Diesel',
      perKm: '₹22/km',
      driverAllow: '₹400/day',
      dayLimit: '250km',
      description: 'Adventure-ready SUV perfect for mountain trips and off-road journeys.',
      features: ['4x4 Capability', 'Adventure Ready', 'Rugged']
    },
    {
      name: 'Honda City',
      image: hondacity,
      capacity: '5 Seater',
      fuel: 'Petrol',
      perKm: '₹30/km',
      driverAllow: '₹500/day',
      dayLimit: '250km',
      description: 'Executive sedan for premium outstation business trips.',
      features: ['Premium Sedan', 'Luxury', 'Smooth Drive']
    },
    {
      name: 'Hyundai Verna',
      image: verna,
      capacity: '5 Seater',
      fuel: 'Petrol/Diesel',
      perKm: '₹30/km',
      driverAllow: '₹500/day',
      dayLimit: '250km',
      description: 'A stylish and comfortable sedan for smooth highway cruising and elite travel.',
      features: ['Smart Trunk', 'Ventilated Seats', 'Premium Audio']
    },
    {
      name: 'Toyota Fortuner',
      image: fortuner,
      capacity: '7 Seater',
      fuel: 'Diesel',
      perKm: '₹40/km',
      driverAllow: '₹500/day',
      dayLimit: '250km',
      description: 'The king of highways. Powerful, safe, and prestigious for long-distance travel.',
      features: ['Premium Comfort', 'All Terrain', 'VIP Presence']
    },
    {
      name: 'Kia Carnival',
      image: kiacarnival,
      capacity: '7 Seater',
      fuel: 'Diesel',
      perKm: '₹60/km',
      driverAllow: '₹800/day',
      dayLimit: '250km',
      description: 'Luxury travel redefined. Perfect for premium family vacations and executive outstation trips.',
      features: ['VIP Lounge Seats', 'Dual Sunroof', 'Advanced Safety']
    },
    {
      name: 'Land Rover Defender',
      image: defender,
      capacity: '7 Seater',
      fuel: 'Diesel',
      perKm: '₹80/km',
      driverAllow: '₹800/day',
      dayLimit: '250km',
      description: 'Iconic luxury SUV for premium outstation adventures.',
      features: ['Ultra Luxury', '4x4', 'Premium']
    },
    {
      name: 'Toyota Vellfire',
      image: vellfire,
      capacity: '7 Seater',
      fuel: 'Petrol Hybrid',
      perKm: '₹95/km',
      driverAllow: '₹1,000/day',
      dayLimit: '250km',
      description: 'Ultimate luxury MPV for VIP outstation travel.',
      features: ['Executive Lounge', 'Hybrid', 'Ultra Luxury']
    },
    {
      name: 'Force Winger',
      image: forcewinger,
      capacity: '13 Seater',
      fuel: 'Diesel',
      perKm: '₹22/km',
      driverAllow: '₹400/day',
      dayLimit: '250km',
      description: 'Spacious van for group outstation trips.',
      features: ['Group Travel', 'Spacious', 'Comfortable']
    },
    {
      name: 'Tempo Traveller (12+1)',
      image: forcetempo,
      capacity: '13 Seater',
      fuel: 'Diesel',
      perKm: '₹25/km',
      driverAllow: '₹500/day',
      dayLimit: '250km',
      description: 'Perfect for group tours and family outings.',
      features: ['Push Back Seats', 'AC', 'Music System']
    },
    {
      name: 'Tempo Traveller (17+1)',
      image: forcetempo,
      capacity: '18 Seater',
      fuel: 'Diesel',
      perKm: '₹30/km',
      driverAllow: '₹500/day',
      dayLimit: '250km',
      description: 'Large group travel solution for outstation tours.',
      features: ['Large Group', 'Comfortable', 'Spacious']
    },
    {
      name: 'Bus (25 to 45 Seats)',
      image: volvo,
      capacity: '25-45 Seater',
      fuel: 'Diesel',
      perKm: '₹35-75/km',
      driverAllow: '₹1,000/day',
      dayLimit: '250km',
      description: 'Large buses for corporate and group outstation travel.',
      features: ['Large Capacity', 'AC', 'On Request']
    },
    {
      name: 'Volvo Sleeper Bus',
      image: volvo,
      capacity: '40 Seater',
      fuel: 'Diesel',
      perKm: '₹90-125/km',
      driverAllow: '₹800/day',
      dayLimit: '250km',
      description: 'Luxury sleeper bus for long-distance overnight journeys.',
      features: ['Sleeper Berths', 'AC', 'Premium']
    },
    {
      name: 'Urbania',
      image: forceurbano,
      capacity: '17 Seater',
      fuel: 'Diesel',
      perKm: '₹40/km',
      driverAllow: '₹800/day',
      dayLimit: '250km',
      description: 'Luxury sleeper bus for long-distance overnight journeys.',
      features: ['Sleeper Berths', 'AC', 'Premium']
    },
  ];

  const handleWhatsApp = (carssName = '') => {
    const text = carssName ? `Hello, I am interested in renting ${carssName} for Outstation Car Rental.` : 'Hello, I am interested in Outstation Car Rental services.';
    window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919278063535';
  };

  return (
    <div className="pt-20 relative overflow-hidden bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-screen h-[300px] sm:h-[500px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden text-white mt-0 sm:mt-0">
        <div className="absolute inset-0 z-0">
          <img
            src={slider2}
            alt="Outstation Car Rental"
            className="w-full h-full object-cover object-center transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mt-[150px] md:-ml-[600px] px-4 text-center md:mb-[710px] text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-3 sm:mb-6 text-orange-500 drop-shadow-2xl">Outstation Car Rental</h1>
            <p className="text-lg md:text-2xl mb-3 sm:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold text-white px-2">Comfortable Long Distance Travel.</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/book-now')}
                className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg cursor-pointer text-sm sm:text-base"
              >
                Book Your Trip
              </button>
              <button
                onClick={() => handleWhatsApp()}
                className="bg-green-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <FaWhatsapp /> Quick Enquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* carss Selection Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Choose Vehicle for <span className="text-orange-500">Long Trips</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {carssTypes.map((carss, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col group"
              >
                <div className="h-64 md:h-80 overflow-hidden bg-gray-50 flex items-center justify-center p-0">
                  <img
                    src={carss.image}
                    alt={carss.name}
                    className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-grow bg-white">
                  <div className="flex justify-between items-start mb-4 bg-gradient-to-r from-orange-600 to-orange-400 p-3 rounded-xl shadow-inner">
                    <h3 className="text-sm font-bold text-white flex-1 mr-2 leading-tight uppercase tracking-wide">{carss.name}</h3>
                    <div className="text-white font-black bg-orange-700/30 px-3 py-1.5 rounded-lg border border-orange-500/50 shadow-sm">{carss.perKm}</div>
                  </div>
                  <div className="flex gap-4 text-[10px] font-bold text-zinc-500 mb-3 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100"><FaUsers className="text-orange-500" /> {carss.capacity}</span>
                    <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100"><FaGasPump className="text-orange-500" /> {carss.fuel}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed text-justify italic">"{carss.description}"</p>
                  
                  {/* Pricing Details */}
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-3 rounded-lg mb-4 border border-orange-100">
                    <div className="gap-4 flex flex-col text-xs">
                      <div className="flex gap-4">
                        <span className="text-gray-600 font-medium">Driver Allow:</span>
                        <span className="text-orange-600 font-bold">{carss.driverAllow}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 font-medium">Day Limit:</span>
                        <span className="text-orange-600 font-bold">{carss.dayLimit}</span>
                      </div>
                      <div className="flex gap-4 col-span-2 pt-2 border-t border-orange-200">
                        <span className="text-gray-600 font-medium">Toll/State Tax:</span>
                        <span className="text-orange-600 font-bold">On Request</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {carss.features.map((feat, i) => (
                      <span key={i} className="text-[10px] bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-bold uppercase border border-orange-100/50 shadow-sm">
                        {feat}
                      </span>
                    ))}
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

      {/* Footer CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white text-center">Your Reliable Partner for Outstation Tours</h2>
          <p className="text-xl mb-8 opacity-90 text-center">Safety, Comfort, and Reliability – every step of the way.</p>
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

export default OutstationCarRental;