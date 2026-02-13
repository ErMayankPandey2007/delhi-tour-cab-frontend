import { motion } from 'framer-motion';
import { FaMapMarkedAlt } from 'react-icons/fa';

const PopularDestinations = () => {
  const destinations = [
    {
      title: "Delhi Mathura Vrindavan Agra Fatehpur Sikri Tour",
      description: "Experience the divine journey through sacred temples of Mathura and Vrindavan, followed by the magnificent Taj Mahal in Agra and the historic Fatehpur Sikri. A perfect blend of spirituality and heritage in one unforgettable trip.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Delhi Jim Corbett Ranikhet Tour",
      description: "Embark on an exciting wildlife adventure at Jim Corbett National Park, home to majestic Bengal tigers, followed by the serene hill station of Ranikhet. Perfect for nature lovers and adventure seekers looking for a refreshing mountain escape.",
      image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Delhi Nainital Bhimtal Kainchi Dham Tour",
      description: "Discover the enchanting beauty of Nainital's pristine lakes, explore the peaceful Bhimtal, and seek blessings at the sacred Kainchi Dham temple. A spiritual and scenic journey through Uttarakhand's most beautiful destinations.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Delhi Haridwar Rishikesh Dehradun Mussoorie Dhanaulti Tour",
      description: "Experience the spiritual aura of Haridwar and Rishikesh, enjoy the colonial charm of Dehradun and Mussoorie, and discover the tranquil beauty of Dhanaulti. A complete Uttarakhand experience combining spirituality, adventure, and natural beauty.",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Char Dham Yatra - Yamunotri Gangotri Kedarnath Badrinath",
      description: "Undertake the sacred Char Dham pilgrimage to the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. A divine journey through the Himalayas that promises spiritual enlightenment and breathtaking mountain vistas.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Delhi Lucknow Ayodhya Prayagraj Varanasi Tour",
      description: "Explore the spiritual heartland of India with visits to Lucknow's Nawabi heritage, Ayodhya's Ram Janmabhoomi, Prayagraj's sacred confluence, and Varanasi's ancient ghats. A profound journey through India's cultural and religious heritage.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Delhi Shimla Kasol Manikaran Manali Kullu Kelong Lahaul Spiti Tour",
      description: "Journey through Himachal's most stunning landscapes from Shimla's colonial charm to Spiti's rugged beauty. Experience the hippie culture of Kasol, hot springs of Manikaran, adventure hub Manali, and the remote beauty of Lahaul Spiti valley.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Delhi Dharamshala Dalhousie Jawalamukhi Tour",
      description: "Discover the Tibetan culture in Dharamshala, enjoy the colonial architecture of Dalhousie, and seek blessings at the sacred Jawalamukhi temple. A perfect blend of spirituality, culture, and scenic mountain beauty in Himachal Pradesh.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "Delhi Amritsar Wagah Border Tour",
      description: "Visit the Golden Temple, witness the patriotic Wagah Border ceremony, and explore the rich Sikh heritage of Amritsar. Experience the spiritual energy, historical significance, and warm Punjabi hospitality in this memorable journey.",
      image: "https://images.unsplash.com/photo-1580371838969-57b2f2d8e0be?w=800&q=80",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      title: "Delhi Jammu Pahalgam Srinagar Sonmarg Gulmarg Tour",
      description: "Experience the paradise on earth with visits to Kashmir's most beautiful destinations. From Pahalgam's meadows to Srinagar's Dal Lake, Sonmarg's glaciers to Gulmarg's snow-covered peaks - a dream vacation in the Himalayas.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Delhi Srinagar Kargil Zozila Leh Ladakh Khardungla Nubra Pangong Hanle Umlingla Baralacha Tour",
      description: "Embark on the ultimate Ladakh adventure covering the world's highest motorable passes, pristine Pangong Lake, mystical Nubra Valley, and remote Hanle. Experience the raw beauty of the Himalayas on this epic road trip through Ladakh.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      gradient: "from-slate-600 to-gray-700"
    },
    {
      title: "Delhi Khatushyam Salasar Jhunjhunu Tour",
      description: "Seek blessings at the famous Khatushyam temple, visit the sacred Salasar Balaji shrine, and explore the heritage havelis of Jhunjhunu. A spiritual journey through Rajasthan's religious sites and architectural marvels.",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: "Delhi Jaipur Pushkar Ajmer Tour",
      description: "Explore the Pink City of Jaipur's magnificent forts and palaces, experience the spiritual vibes of Pushkar's sacred lake and Brahma temple, and visit the revered Ajmer Sharif Dargah. A perfect blend of heritage, spirituality, and culture.",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Delhi Jodhpur Jaisalmer Udaipur Tour",
      description: "Discover Rajasthan's royal heritage with visits to Jodhpur's Mehrangarh Fort, Jaisalmer's golden sand dunes and desert camps, and Udaipur's romantic lakes and palaces. Experience the grandeur of Rajasthan's most iconic destinations.",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular <span className="text-orange-500">Tour Destinations</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Explore India's most breathtaking destinations with our carefully curated tour packages. From spiritual journeys to adventure expeditions, we cover it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-60`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-xl md:text-2xl font-bold">Coming Soon</p>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <FaMapMarkedAlt className="text-orange-500" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                  {destination.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {destination.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
