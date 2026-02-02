import { motion } from 'framer-motion';
import { FaCar, FaUsers, FaGasPump, FaShieldAlt, FaPhone, FaWhatsapp, FaPlane, FaTrain } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { innova, fortuner, slider4, breeza, drizer, hondacity, scorpio, verna, wagonr, defender } from '../utils/images';
import PopularTours from '../components/PopularTours';

const AirportRailwayCarRental = () => {
    const navigate = useNavigate();

    const carssTypes = [
        {
            name: 'Maruti Suzuki Swift Dzire',
            image: drizer,
            capacity: '5 Seater',
            fuel: 'Petrol/CNG',
            price: '₹10/km',
            description: 'Reliable sedan with decent trunk space, perfect for quick airport transfers.',
            features: ['AC', 'Music System', 'GPS', 'Fuel Efficient'],
            examples: 'Compact Sedan'
        },
        {
            name: 'Maruti Suzuki Brezza',
            image: breeza,
            capacity: '5 Seater',
            fuel: 'Petrol',
            price: '₹14/km',
            description: 'Sturdy compact SUV with good ground clearance for a smooth ride.',
            features: ['AC', 'Music System', 'GPS', 'SUV'],
            examples: 'Compact SUV'
        },
        {
            name: 'Toyota Innova Crysta',
            image: innova,
            capacity: '7 Seater',
            fuel: 'Diesel',
            price: '₹20/km',
            description: 'Perfect for group transfers with heavy luggage. Top-notch comfort and space.',
            features: ['AC', 'Music System', 'GPS', 'Spacious'],
            examples: 'Premium MUV'
        },
        {
            name: 'Hyundai Verna',
            image: verna,
            capacity: '5 Seater',
            fuel: 'Petrol/Diesel',
            price: '₹16/km',
            description: 'Premium executive sedan for a stylish arrival at the airport or station.',
            features: ['AC', 'Music System', 'GPS', 'Premium'],
            examples: 'Premium Sedan'
        },
        {
            name: 'Maruti Suzuki WagonR',
            image: wagonr,
            capacity: '5 Seater',
            fuel: 'Petrol/CNG',
            price: '₹9/km',
            description: 'Value-for-money hatchback for 1-2 passengers with light luggage.',
            features: ['AC', 'Music System', 'GPS', 'Spacious'],
            examples: 'Hatchback'
        }
    ];

    const handleWhatsApp = (carssName = '') => {
        const text = carssName ? `Hello, I am interested in renting ${carssName} for Airport & Railway Car Rental.` : 'Hello, I am interested in Airport & Railway Car Rental services.';
        window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:+919278063535';
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-full  h-[300px] sm:h-[500px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden text-white mt-0 sm:mt-0">
        <div className="absolute inset-0 z-0">
                    <img
                        src={slider4}
                        alt="Airport and Railway transfers"
                        className="w-full h-full object-cover object-center transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mt-[120px] mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-6xl font-bold mb-4 sm:mb-6 text-orange-500 drop-shadow-2xl"
                    >
                        Airport & Railway car Rental
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl mb-6 sm:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold text-white px-2"
                    >
                        Punctual & Stress-Free Transfers in Delhi NCR
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

            {/* Highlights Section */}
            <section className="py-12 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100 shadow-sm">
                            <FaPlane className="text-4xl text-orange-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Airport Transfers</h3>
                                <p className="text-gray-600 text-sm text-justify">Reliable pickups and drops from Indira Gandhi International Airport (Terminal 1, 2 & 3). We track your flight to ensure timely arrival.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100 shadow-sm">
                            <FaTrain className="text-4xl text-orange-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Railway Station Transfers</h3>
                                <p className="text-gray-600 text-sm text-justify">Professional services for all major railway stations in Delhi. Hassle-free luggage handling and punctual service.</p>
                            </div>
                        </div>
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
                                        <div className="text-white font-black bg-orange-700/30 px-3 py-1.5 rounded-lg border border-orange-500/50 shadow-sm">{carss.price}</div>
                                    </div>
                                    <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-widest">{carss.examples}</p>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed text-justify">{carss.description}</p>

                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="flex items-center text-gray-700 text-sm font-medium bg-gray-50 p-2 rounded-lg">
                                            <FaUsers className="mr-2 text-orange-500" />
                                            {carss.capacity}
                                        </div>
                                        <div className="flex items-center text-gray-700 text-sm font-medium bg-gray-50 p-2 rounded-lg">
                                            <FaGasPump className="mr-2 text-orange-500" />
                                            {carss.fuel}
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
                        Don't Miss Your Flight or Train!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-8 opacity-90"
                    >
                        Book your transfer now for guaranteed on-time service.
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

export default AirportRailwayCarRental;
