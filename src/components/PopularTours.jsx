import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { agra, jaipur, delhi, haridwar, rishikesh, mathura } from '../utils/images';

const PopularTours = () => {
    const navigate = useNavigate();

    const tours = [
        { name: 'Delhi to Agra Tour', path: '/tour/delhi-to-agra-tour', image: agra },

        { name: 'Delhi Local Sightseeing', path: '/tour/delhi-local-sightseeing', image: delhi },

        { name: 'Delhi to Mathura Vrindavan', path: '/tour/delhi-to-mathura-vrindavan', image: mathura },


    ];

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div className="text-center mx-auto">
                        <h2 className="text-3xl font-bold mx-auto text-gray-800 mb-2">
                            Popular <span className="text-orange-500">Our Top Tour Packages</span>
                        </h2>
                        <p className="text-gray-600">Discover handpicked destinations around Delhi with our premium cab services.</p>
                    </div>
                    <button
                        onClick={() => navigate('/tour-packages')}
                        className="text-orange-500 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                        View All Packages →
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg cursor-pointer group border border-gray-100"
                            onClick={() => {
                                navigate(tour.path);
                                window.scrollTo(0, 0);
                            }}
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={tour.image}
                                    alt={tour.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">{tour.name}</h3>
                                <div className="flex items-center text-sm text-orange-500 mb-4 font-bold uppercase tracking-wider">
                                    Full Day • AC Cab • Guided
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                    <div className="flex items-center text-yellow-500">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} className="text-xs mr-1" />)}
                                        <span className="text-gray-400 text-xs ml-1">(4.9)</span>
                                    </div>
                                    <span className="text-orange-500 font-bold text-sm">Explore Tour →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularTours;
