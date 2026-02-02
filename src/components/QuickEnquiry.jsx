import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCar, FaMapMarkerAlt, FaWhatsapp, FaPhone, FaPaperPlane, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const QuickEnquiry = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service:
            'Local Sightseeing',
        date: '',
        message: ''
    });

    const services = [
        'Local Sightseeing',
        'Outstation Tour',
        'Airport Transfer',
        'Corporate Rental',
        'Wedding Rental'
    ];

    const toggleDrawer = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct WhatsApp message
        const text = `*Quick Enquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Message:* ${formData.message}`;
        window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
        setIsOpen(false);
    };

    return (
        <>
            {/* Fixed Vertical Button */}
            {!isOpen && (
                <motion.button
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsOpen(true)}
                    className="fixed left-0 bottom-15 z-[60] bg-orange-500 text-white py-3 px-4 rounded-r-xl shadow-2xl cursor-pointer hover:bg-orange-600 transition-all flex items-center gap-2"
                >
                    <FaChevronRight size={16} />
                    <AnimatePresence>
                        {isHovered && (
                            <motion.span
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "auto", opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                className="whitespace-nowrap overflow-hidden font-bold"
                            >
                                Quick Enquiry
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            )}

            {/* Side Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleDrawer}
                            className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
                        />

                        {/* Content Panel */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-[320px] md:w-[400px] bg-white z-[110] shadow-2xl overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6 border-b pb-4">
                                    <h2 className="text-2xl font-extrabold text-gray-800">Quick Enquiry</h2>
                                    <button
                                        onClick={toggleDrawer}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                                    >
                                        <FaTimes className="text-gray-500 cursor-pointer" size={20} />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Service Type</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-medium"
                                        >
                                            {services.map((s, i) => (
                                                <option key={i} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Travel Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none shadow-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Message (Optional)</label>
                                        <textarea
                                            name="message"
                                            rows="3"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Any special requirements?"
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full cursor-pointer bg-orange-500 text-white py-3.5 rounded-xl font-extrabold text-lg shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaPaperPlane /> Send Enquiry
                                    </motion.button>
                                </form>

                                <div className="mt-8 pt-6 border-t font-bold">
                                    <p className="text-gray-500 text-center text-sm mb-4">Or Contact Us Directly</p>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://wa.me/919278063535"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex justify-center items-center gap-2 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all shadow-md text-sm"
                                        >
                                            <FaWhatsapp size={18} /> Enquiry Now
                                        </a>
                                        <a
                                            href="tel:+919278063535"
                                            className="flex-1 flex justify-center items-center gap-2 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-all shadow-md text-sm"
                                        >
                                            <FaPhone size={16} /> Call Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default QuickEnquiry;
