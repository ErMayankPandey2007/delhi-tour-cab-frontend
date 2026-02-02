import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaCar, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaPhone,
  FaEnvelope, FaUsers, FaCheckCircle, FaWhatsapp, FaChild, FaPlus, FaMinus,
  FaArrowRight, FaShieldAlt, FaHeadset
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const BookNow = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropLocation: '',
    pickupDate: '',
    pickupTime: '',
    adults: 1,
    children: 0,
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountChange = (field, type) => {
    setFormData(prev => ({
      ...prev,
      [field]: type === 'inc' ? prev[field] + 1 : Math.max(0, prev[field] - 1)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `*New Booking Request*%0A%0A` +
      `*Full Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Pickup:* ${formData.pickupLocation}%0A` +
      `*Drop:* ${formData.dropLocation}%0A` +
      `*Date:* ${formData.pickupDate}%0A` +
      `*Time:* ${formData.pickupTime}%0A` +
      `*Travellers:* ${formData.adults} Adults, ${formData.children} Children%0A` +
      `*Notes:* ${formData.specialRequests}`;

    toast.success('Booking request initiated! Opening WhatsApp...');

    setTimeout(() => {
      window.open(`https://wa.me/919278063535?text=${message}`, '_blank');
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pb-16">
      {/* Hero Header with Animation */}
      <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 py-20 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                <FaCar className="text-2xl" />
                <span className="font-bold text-sm uppercase tracking-wider">Premium Cab Service</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              Book Your <span className="text-yellow-300 drop-shadow-lg">Dream Ride</span>
            </h1>

            <p className="text-xl opacity-95 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience luxury travel with our premium fleet. Safe, comfortable, and affordable.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black">500+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">100%</div>
                <div className="text-sm opacity-90">Safe & Secure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-12">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >

          {/* Form Header with Icon */}
          <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 p-8 text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <FaCar className="text-3xl" />
              </div>
              <div>
                <h2 className="text-3xl font-black">Booking Form</h2>
                <p className="text-white/90 text-sm font-medium mt-1">Fill in your details to confirm your ride</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">

            {/* Personal Details Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Personal Details</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Contact Number
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2 group">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t-2 border-dashed border-gray-200"></div>

            {/* Trip Details Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Trip Details</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Pickup Location
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 group-focus-within:text-green-600 transition-colors" />
                    <input
                      type="text"
                      name="pickupLocation"
                      required
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      placeholder="Enter pickup location"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Drop Location */}
                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Drop Location
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 group-focus-within:text-red-600 transition-colors" />
                    <input
                      type="text"
                      name="dropLocation"
                      required
                      value={formData.dropLocation}
                      onChange={handleInputChange}
                      placeholder="Enter drop location"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-red-500 focus:bg-white rounded-2xl outline-none transition-all font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Pickup Date */}
                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Pickup Date
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="date"
                      name="pickupDate"
                      required
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Pickup Time */}
                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Pickup Time
                  </label>
                  <div className="relative">
                    <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="time"
                      name="pickupTime"
                      required
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t-2 border-dashed border-gray-200"></div>

            {/* Travellers Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                  <FaUsers />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Number of Travellers</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Adults Count */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <FaUsers className="text-purple-500" /> Adults (12+ years)
                  </label>
                  <div className="flex items-center gap-4 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border-2 border-purple-100">
                    <button
                      type="button"
                      onClick={() => handleCountChange('adults', 'dec')}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md text-purple-600 hover:bg-purple-600 hover:text-white transition-all cursor-pointer hover:scale-110 active:scale-95"
                    >
                      <FaMinus className="text-lg" />
                    </button>
                    <div className="flex-1 text-center">
                      <div className="text-4xl font-black text-purple-600">{formData.adults}</div>
                      <div className="text-xs text-gray-500 font-semibold mt-1">Passengers</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCountChange('adults', 'inc')}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md text-purple-600 hover:bg-purple-600 hover:text-white transition-all cursor-pointer hover:scale-110 active:scale-95"
                    >
                      <FaPlus className="text-lg" />
                    </button>
                  </div>
                </div>

                {/* Children Count */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <FaChild className="text-pink-500" /> Children (Below 12)
                  </label>
                  <div className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-orange-50 p-4 rounded-2xl border-2 border-pink-100">
                    <button
                      type="button"
                      onClick={() => handleCountChange('children', 'dec')}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md text-pink-600 hover:bg-pink-600 hover:text-white transition-all cursor-pointer hover:scale-110 active:scale-95"
                    >
                      <FaMinus className="text-lg" />
                    </button>
                    <div className="flex-1 text-center">
                      <div className="text-4xl font-black text-pink-600">{formData.children}</div>
                      <div className="text-xs text-gray-500 font-semibold mt-1">Kids</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCountChange('children', 'inc')}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md text-pink-600 hover:bg-pink-600 hover:text-white transition-all cursor-pointer hover:scale-110 active:scale-95"
                    >
                      <FaPlus className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Special Requests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <label className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Any special requirements, preferences, or notes for your journey..."
                rows="4"
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all font-medium resize-none shadow-sm hover:shadow-md"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-6"
            >
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-white py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-orange-300 hover:shadow-orange-400 transition-all active:scale-98 flex items-center justify-center gap-4 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-4">
                  CONFIRM BOOKING
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-center text-blue-700 text-sm font-semibold flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-green-500" />
                  You'll be redirected to WhatsApp to finalize your booking
                </p>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-gray-100"
            >
              <div className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <span className="text-xs font-bold text-gray-700 uppercase text-center leading-tight">No Hidden<br />Charges</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <span className="text-xs font-bold text-gray-700 uppercase text-center leading-tight">100% Safe<br />& Secure</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaHeadset className="text-white text-2xl" />
                </div>
                <span className="text-xs font-bold text-gray-700 uppercase text-center leading-tight">24/7<br />Support</span>
              </div>
            </motion.div>
          </div>
        </motion.form>

        {/* Quick WhatsApp Support carssd */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <FaWhatsapp className="text-4xl" />
              </div>
              <div>
                <h4 className="font-black text-2xl">Need Instant Help?</h4>
                <p className="text-white/90 text-sm font-medium">Our team is available 24/7 to assist you</p>
              </div>
            </div>

            <a
              href="https://wa.me/919278063535?text=Hello, I want to book a cab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-green-600 py-4 rounded-2xl font-bold text-lg text-center hover:bg-gray-50 transition-all shadow-xl flex items-center justify-center gap-3 group"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              <span>Chat on WhatsApp Now</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookNow;