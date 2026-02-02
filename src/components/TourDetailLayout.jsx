import { motion } from 'framer-motion';
import { FaClock, FaUsers, FaCheckCircle, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaCar, FaInfoCircle, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { agra, jaipur, delhi, haridwar, rishikesh, mathura } from '../utils/images';

const TourDetailLayout = ({ title, bannerImage, description, highlights, itinerary, includes, exclusions, carss, placesCovered, faqs, importantNotes, whyChooseUs, placesWithDetails, whatToExpect, tourTypes }) => {
    const navigate = useNavigate();

    const relatedTours = [
        { name: 'Delhi Local Sightseeing', path: '/tour/delhi-local-sightseeing', image: delhi },
        { name: 'Delhi to Agra Tour', path: '/tour/delhi-to-agra-tour', image: agra },
        { name: 'Delhi to Jaipur Tour', path: '/tour/delhi-to-jaipur-tour', image: jaipur },
        { name: 'Delhi to Mathura Vrindavan', path: '/tour/delhi-to-mathura-vrindavan', image: mathura },
        { name: 'Delhi to Haridwar Tour', path: '/tour/delhi-to-haridwar-tour', image: haridwar },
        { name: 'Delhi to Rishikesh Tour', path: '/tour/delhi-to-rishikesh-tour', image: rishikesh },
    ].filter(t => t.name !== title);

    const handleWhatsApp = () => {
        const text = `Hello, I am interested in ${title}. Please provide more details.`;
        window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[850px] flex items-center justify-center text-white overflow-hidden">
                {/* Background Image - Immersive Look */}
                <img
                    src={bannerImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-1000"
                />
                {/* Optimized Overlay for Mobile & Desktop Readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

                <div className="relative z-10 text-center mt-50 md:mt-120 px-4 max-w-4xl mx-auto drop-shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6"
                    >
                        <span className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg text-sm md:text-base inline-block">
                            Premium Tour from Delhi
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-2xl leading-tight"
                    >
                        {title}
                    </motion.h1>
                </div>
            </section>

            {/* Mobile Only: Available Vehicles (Right after Hero) */}
            {carss && carss.length > 0 && (
                <section className="lg:hidden px-4 pt-8 bg-gray-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                        <h4 className="font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 w-fit text-xl">
                            Available Vehicles:
                        </h4>
                        <div className="space-y-6">
                            {carss.map((carss, index) => (
                                <div key={index} className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-100 group hover:shadow-xl transition-all duration-300">
                                    <div className="h-40 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-4">
                                        <motion.img
                                            whileHover={{ scale: 1.15, rotate: 2 }}
                                            src={carss.image}
                                            alt={carss.name}
                                            className="max-w-full max-h-full object-contain transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-orange-600 to-orange-400 p-4 rounded-xl shadow-inner">
                                        <span className="font-bold text-white text-base">{carss.name}</span>
                                        <span className="text-white font-black bg-orange-700/30 px-3 py-1.5 rounded-md text-lg">{carss.price}</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <motion.a
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            href="tel:+919278063535"
                                            className="flex flex-col items-center justify-center py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all border border-blue-100 shadow-sm"
                                        >
                                            <FaPhone className="text-sm mb-1" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-center">Call Now</span>
                                        </motion.a>
                                        <motion.button
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                const text = `Hello, I'm interested in booking the ${carss.name} for the ${title}. Price quoted: ${carss.price}`;
                                                window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
                                            }}
                                            className="flex flex-col items-center justify-center py-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all border border-green-100 shadow-sm"
                                        >
                                            <FaWhatsapp className="text-sm mb-1" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-center">Enquiry Now</span>
                                        </motion.button>
                                        <motion.button
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => navigate('/book-now')}
                                            className="flex flex-col items-center justify-center py-3 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-500 hover:text-white transition-all border border-orange-100 shadow-sm"
                                        >
                                            <FaCar className="text-sm mb-1" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-center">Book Now</span>
                                        </motion.button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Places Details First (As requested) */}
                    {placesWithDetails ? (
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-orange-500" /> Top Places to Visit
                            </h2>
                            <div className="space-y-8">
                                {placesWithDetails.map((place, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <span className="text-orange-500">{index + 1}.</span> {place.name}
                                        </h3>
                                        <div className='w-full flex justify-center h-69'>
                                            <img src={place.image} alt={place.name} className="w-800
                                             h-64 object-contain rounded-lg mb-4" />
                                        </div>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{place.description}</p>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg w-fit">

                                            <FaClock className="text-xs" /> {place.timings}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : placesCovered && (
                        <section className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-orange-500" /> Places Covered
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {placesCovered.map((place, index) => (
                                    <span key={index} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-orange-100 text-gray-700 font-medium hover:bg-orange-500 hover:text-white transition-colors cursor-default">
                                        {place}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Description Section */}
                    <section >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2 text-center">
                            <FaInfoCircle className="text-orange-500 mr-3" />
                            Explore {title} – A Professional Travel Experience
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg text-justify">
                            {description}
                        </p>
                    </section>

                    {whyChooseUs && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our {title}?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-gray-800">{item.title}</h4>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 opacity-50"></div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-orange-500 rounded-full"></span>
                            Tour <span className="text-orange-500">Highlights</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {highlights.map((item, index) => {
                                const isObject = typeof item === 'object' && item !== null;
                                const title = isObject ? item.title : item;
                                const Icon = isObject ? item.icon : FaCheckCircle;

                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:bg-orange-50 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                            {isObject ? <Icon className="text-xl" /> : <FaCheckCircle className="text-xl" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-800 font-bold group-hover:text-orange-700 transition-colors leading-snug">
                                                {title}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>

                    {itinerary && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Itinerary</h2>
                            <div className="space-y-6">
                                {itinerary.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            {index !== itinerary.length - 1 && <div className="w-1 h-full bg-red-100 my-1"></div>}
                                        </div>
                                        <div className="pb-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {whatToExpect && (
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <FaStar className="text-orange-500" /> What to Expect
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {whatToExpect}
                            </p>
                        </section>
                    )}

                    {tourTypes && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-orange-500 pb-2 w-fit">Tour Packages</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tourTypes.map((type, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500 hover:shadow-xl transition-all">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">{type.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{type.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                            <h3 className="text-xl font-bold text-green-800 mb-4">What's Included</h3>
                            <ul className="space-y-3">
                                {includes.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-green-700 text-sm">
                                        <FaCheckCircle className="mt-1 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
                            <h3 className="text-xl font-bold text-red-800 mb-4">What's Excluded</h3>
                            <ul className="space-y-3">
                                {exclusions.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-red-700 text-sm">
                                        <span className="font-bold text-lg leading-none mt-[-2px]">×</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {importantNotes && (
                        <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                                <FaInfoCircle className="text-blue-500" /> Important Notes
                            </h3>
                            <ul className="space-y-2">
                                {importantNotes.map((note, index) => (
                                    <li key={index} className="flex items-start gap-2 text-blue-700 text-sm">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Book This Tour</h3>
                        <div className="space-y-4">
                            <button
                                onClick={() => navigate('/book-now')}
                                className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                <FaCar /> Book Now
                            </button>
                            <button
                                onClick={handleWhatsApp}
                                className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp />Enquiry Now
                            </button>
                            <a
                                href="tel:+919278063535"
                                className="w-full bg-brand-yellow text-gray-800 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                <FaPhone /> Call Now
                            </a>
                        </div>

                        {carss && carss.length > 0 && (
                            <div className="mt-8 pt-8 border-t border-gray-100 hidden lg:block">
                                <h4 className="font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2 w-fit">Available Vehicles:</h4>
                                <div className="space-y-4">
                                    {carss.map((carss, index) => (
                                        <div key={index} className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-100 group hover:shadow-xl transition-all duration-300">
                                            <div className="h-32 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-4">
                                                <motion.img
                                                    whileHover={{ scale: 1.15, rotate: 2 }}
                                                    src={carss.image}
                                                    alt={carss.name}
                                                    className="max-w-full max-h-full object-contain transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-orange-600 to-orange-400 p-3 rounded-xl shadow-inner">
                                                <span className="font-bold text-white text-sm">{carss.name}</span>
                                                <span className="text-white font-black bg-orange-700/30 px-2 py-1 rounded-md">{carss.price}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                <motion.a
                                                    animate={{ scale: [1, 1.05, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href="tel:+919278063535"
                                                    className="flex flex-col items-center justify-center py-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all border border-blue-100 shadow-sm hover:shadow-blue-200"
                                                    title="Call Now"
                                                >
                                                    <FaPhone className="text-sm mb-1" />
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">Call Now</span>
                                                </motion.a>
                                                <motion.button
                                                    animate={{ scale: [1, 1.05, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => {
                                                        const text = `Hello, I'm interested in booking the ${carss.name} for the ${title}. Price quoted: ${carss.price}`;
                                                        window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
                                                    }}
                                                    className="flex flex-col items-center justify-center py-2.5 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all border border-green-100 shadow-sm hover:shadow-green-200"
                                                    title="WhatsApp"
                                                >
                                                    <FaWhatsapp className="text-sm mb-1" />
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">Enquiry Now</span>
                                                </motion.button>
                                                <motion.button
                                                    animate={{ scale: [1, 1.05, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => navigate('/book-now')}
                                                    className="flex flex-col items-center justify-center py-2.5 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-500 hover:text-white transition-all border border-orange-100 shadow-sm hover:shadow-orange-200"
                                                    title="Book Now"
                                                >
                                                    <FaCar className="text-sm mb-1" />
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">Book Now</span>
                                                </motion.button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Related Tours Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                        Explore <span className="text-orange-500">Other Tour Packages</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedTours.slice(0, 3).map((tour, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                                onClick={() => {
                                    navigate(tour.path);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={tour.image}
                                        alt={tour.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">{tour.name}</h3>
                                    <div className="flex items-center text-sm text-gray-500 mb-4 font-semibold">
                                        <FaMapMarkerAlt className="text-orange-500 mr-1" /> From Delhi
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                        <div className="flex items-center text-yellow-500">
                                            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-xs mr-1" />)}
                                        </div>
                                        <span className="text-orange-500 font-bold">View Details →</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {faqs && faqs.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                            Frequently Asked <span className="text-orange-500">Questions</span>
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
                                    <summary className="p-5 font-bold text-gray-800 cursor-pointer hover:bg-orange-50 transition-colors flex justify-between items-center list-none">
                                        {faq.question}
                                        <span className="text-orange-500 transition-transform group-open:rotate-180">▼</span>
                                    </summary>
                                    <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default TourDetailLayout;
