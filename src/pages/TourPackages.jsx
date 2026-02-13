import { motion } from 'framer-motion';
import { FaMountain, FaUmbrellaBeach, FaBuilding, FaSnowflake, FaLeaf, FaCamera, FaStar, FaClock, FaUsers, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaHeart, FaDollarSign, FaMap, FaBed, FaShieldAlt, FaPlane, FaHotel, FaCar, FaOm, FaRoute } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { slider2, innova, ertiga2, agra, jaipur, delhi, haridwar, rishikesh, mathura, delhiBannerNew, chandigarh, dehradun, ajmer, varanasi, ayodhya, amritsar } from '../utils/images';

const TourPackages = () => {
  const navigate = useNavigate();
  const [likedPackages, setLikedPackages] = useState(new Set());

  const toggleLike = (index) => {
    const newLiked = new Set(likedPackages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedPackages(newLiked);
  };

  const packages = [
    {
      icon: <FaCamera />,
      name: 'Delhi Local Sightseeing',
      duration: '8 Hours / 80 KM',
      price: '₹2,500',
      originalPrice: '₹3,000',
      rating: 4.8,
      reviews: 245,
      image: delhi,
      location: 'Delhi, India',
      highlights: ['Red Fort', 'Qutub Minar', 'India Gate', 'Lotus Temple', 'Chandni Chowk'],
      description: 'Step into the soul of India! Experience the vibrant mix of ancient legends and modern marvels in absolute luxury.',
      includes: ['AC Cab', 'Driver', 'Fuel', 'Pickup/Drop'],
      path: '/tour/delhi-local-sightseeing'
    },
    {
      icon: <FaStar />,
      name: 'Delhi to Agra Same Day',
      duration: 'Full Day',
      price: '₹5,500',
      originalPrice: '₹6,500',
      rating: 4.9,
      reviews: 312,
      image: agra,
      location: 'Agra, India',
      highlights: ['Taj Mahal', 'Agra Fort', 'Baby Taj', 'Mehtab Bagh', 'Yamuna Expressway'],
      description: 'Embark on a royal passage to the Taj Mahal. Witness the ivory masterpiece and Mughal glory in premium comfort.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Driver Allowance', 'Entry Assistance'],
      path: '/tour/delhi-to-agra-tour'
    },
    {
      icon: <FaBuilding />,
      name: 'Royal Jaipur Same Day',
      duration: 'Full Day',
      price: '₹6,000',
      originalPrice: '₹7,200',
      rating: 4.7,
      reviews: 189,
      image: jaipur,
      location: 'Jaipur, India',
      highlights: ['Amer Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Jal Mahal'],
      description: "Trade city lights for the Pink City's regal glow! Discover the majestic forts and colorful heritage of Rajasthan.",
      includes: ['Comfortable Sedan', 'Verified Driver', 'Tolls/State Tax', 'Local Guidance'],
      path: '/tour/delhi-to-jaipur-tour'
    },
    {
      icon: <FaHeart />,
      name: 'Mathura & Vrindavan',
      duration: 'Full Day',
      price: '₹4,500',
      originalPrice: '₹5,200',
      rating: 4.9,
      reviews: 215,
      image: mathura,
      location: 'Mathura/Vrindavan',
      highlights: ['Janmabhoomi', 'Bankey Bihari', 'Prem Mandir', 'ISKCON', 'Yamuna Aarti'],
      description: 'Experience a divine escape to Braj Bhoomi. A soulful journey to the land of eternal bliss and Krishna\'s legends.',
      includes: ['Doorstep Pickup', 'Darshan Assistance', 'Fast Tag', 'Professional Driver'],
      path: '/tour/delhi-to-mathura-vrindavan'
    },
    {
      icon: <FaLeaf />,
      name: 'Haridwar Spiritual',
      duration: 'Same Day',
      price: '₹5,200',
      originalPrice: '₹6,000',
      rating: 4.8,
      reviews: 156,
      image: haridwar,
      location: 'Haridwar, India',
      highlights: ['Har Ki Pauri', 'Ganga Aarti', 'Mansa Devi', 'Chandi Devi', 'Daksh Temple'],
      description: 'Witness the divine harmony by the Ganges. A refreshing spiritual retreat to the gateway of Indian traditions.',
      includes: ['Highway Permit', 'Safe Driver', 'Flexible Timing', 'AC Comfort'],
      path: '/tour/delhi-to-haridwar-tour'
    },
    {
      icon: <FaSnowflake />,
      name: 'Rishikesh Adventure',
      duration: 'Same Day',
      price: '₹5,800',
      originalPrice: '₹6,800',
      rating: 4.8,
      reviews: 198,
      image: rishikesh,
      location: 'Rishikesh, India',
      highlights: ['Laxman Jhula', 'Ram Jhula', 'Parmarth Aarti', 'Triveni Ghat', 'Riverside Cafes'],
      description: 'Find your balance between thrill and tranquility! The ultimate Yoga Capital experience awaits beyond the hills.',
      includes: ['Meerut Expressway', 'Professional Driver', 'Parking/Tolls', 'AC Travel'],
      path: '/tour/delhi-to-rishikesh-tour'
    },
    {
      icon: <FaMap />,
      name: 'Mathura, Vrindavan & Agra',
      duration: 'Same Day',
      price: '₹7,500',
      originalPrice: '₹8,500',
      rating: 5.0,
      reviews: 124,
      image: agra,
      location: 'Agra/Mathura',
      highlights: ['Taj Mahal', 'Agra Fort', 'Krishna Janmabhoomi', 'Bankey Bihari', 'Prem Mandir'],
      description: 'The ultimate combo tour! Experience the grandeur of the Taj Mahal along with the spiritual vibrations of Brij Bhoomi.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Yamuna Expressway', 'Doorstep Pickup'],
      path: '/tour/delhi-mathura-vrindavan-agra-tour'
    },
    {
      icon: <FaMap />,
      name: 'Faridabad to Agra',
      duration: 'Same Day',
      price: '₹6,000',
      originalPrice: '₹7,000',
      rating: 4.8,
      reviews: 86,
      image: agra,
      location: 'Faridabad to Agra',
      highlights: ['Taj Mahal', 'Agra Fort', 'Yamuna Expressway', 'Local Shopping'],
      description: 'Quick and comfortable getaway from Faridabad to the city of love. Best rates guaranteed!',
      includes: ['AC Sedan', 'Tolls/Parking', 'Doorstep Pickup', 'No Hidden Costs'],
      path: '/tour/faridabad-to-agra-tour'
    },
    {
      icon: <FaMap />,
      name: 'Agra & Fatehpur Sikri',
      duration: 'Same Day',
      price: '₹7,500',
      originalPrice: '₹8,500',
      rating: 4.9,
      reviews: 156,
      image: agra,
      location: 'Agra/Fatehpur Sikri',
      highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Buland Darwaza'],
      description: 'Step back in time! A complete heritage tour covering the best of Mughal architecture and history.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Professional Driver', 'All State Taxes'],
      path: '/tour/delhi-to-agra-fatehpur-sikri-tour'
    },
    {
      icon: <FaMap />,
      name: 'Ghaziabad to Agra Same Day',
      duration: 'Same Day',
      price: '₹6,500',
      originalPrice: '₹7,500',
      rating: 4.8,
      reviews: 84,
      image: agra,
      location: 'Ghaziabad/Agra',
      highlights: ['Taj Mahal', 'Agra Fort', 'Baby Taj', 'Shopping'],
      description: 'Quickest way to visit the Taj Mahal from Ghaziabad. Enjoy a door-to-door premium cab service.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Yamuna Expressway', 'All Taxes'],
      path: '/tour/ghaziabad-to-agra-same-day-return-tour'
    },
    {
      icon: <FaMap />,
      name: 'Gurgaon to Agra Same Day',
      duration: 'Same Day',
      price: '₹6,500',
      originalPrice: '₹7,500',
      rating: 4.8,
      reviews: 76,
      image: agra,
      location: 'Gurgaon/Agra',
      highlights: ['Taj Mahal', 'Agra Fort', 'Baby Taj', 'Mehtab Bagh'],
      description: 'The most comfortable way to visit the Taj Mahal from Gurgaon. Door-to-door pickup included.',
      includes: ['AC Sedan', 'Tolls/Parking', 'KMP/Expressway', 'All Taxes'],
      path: '/tour/gurgaon-to-agra-same-day-return-tour'
    },
    {
      icon: <FaMap />,
      name: 'Gurgaon to Mathura Same Day',
      duration: 'Same Day',
      price: '₹5,000',
      originalPrice: '₹6,000',
      rating: 4.8,
      reviews: 62,
      image: mathura,
      location: 'Gurgaon/Mathura',
      highlights: ['Janmabhoomi', 'Prem Mandir', 'Bankey Bihari', 'Vrindavan'],
      description: 'Divine spiritual journey to Brij Bhoomi from Gurgaon. Book your private cab for a peaceful pilgrimage.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Taxes', 'Pro Driver'],
      path: '/tour/gurgaon-to-mathura-same-day-return-tour'
    },
    {
      icon: <FaMap />,
      name: 'Noida to Mathura One Day',
      duration: 'One Day',
      price: '₹5,000',
      originalPrice: '₹6,000',
      rating: 4.9,
      reviews: 58,
      image: mathura,
      location: 'Noida/Mathura',
      highlights: ['Janmabhoomi', 'Prem Mandir', 'Bankey Bihari', 'ISKCON'],
      description: 'Divine spiritual journey to Brij Bhoomi from Noida/Greater Noida. Comfort and devotion combined.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Taxes', 'Pro Driver'],
      path: '/tour/noida-greater-noida-to-mathura-one-day-tour'
    },
    {
      icon: <FaMap />,
      name: 'Gurgaon to Delhi Sightseeing',
      duration: 'One Day',
      price: '₹2,800',
      originalPrice: '₹3,500',
      rating: 4.8,
      reviews: 42,
      image: delhiBannerNew,
      location: 'Gurgaon/Delhi',
      highlights: ['Qutub Minar', 'India Gate', 'Lotus Temple', 'Akshardham'],
      description: 'Explore the capital from Gurgaon. A perfectly planned day trip covering all major icons of Delhi.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Taxes', 'Pro Driver'],
      path: '/tour/gurgaon-to-delhi-local-sightseeing-tour'
    },
    {
      icon: <FaMap />,
      name: 'Noida to Delhi Sightseeing',
      duration: 'One Day',
      price: '₹3,000',
      originalPrice: '₹3,500',
      rating: 4.8,
      reviews: 45,
      image: delhiBannerNew,
      location: 'Noida/Delhi',
      highlights: ['Qutub Minar', 'India Gate', 'Lotus Temple', 'Mughal History'],
      description: 'Explore the capital from Noida. A seamlessly organized day trip covering Delhi\'s must-visit icons.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Taxes', 'Pro Driver'],
      path: '/tour/noida-to-delhi-local-sightseeing-tour'
    },
    {
      icon: <FaMap />,
      name: 'Ghaziabad to Delhi Sightseeing',
      duration: 'One Day',
      price: '₹3,200',
      originalPrice: '₹4,000',
      rating: 4.8,
      reviews: 38,
      image: delhiBannerNew,
      location: 'Ghaziabad/Delhi',
      highlights: ['Qutub Minar', 'India Gate', 'Red Fort', 'Indirapuram Pickup'],
      description: 'The easiest way to explore the capital from Ghaziabad. Enjoy a door-to-door premium cab service.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Taxes', 'Pro Driver'],
      path: '/tour/ghaziabad-to-delhi-local-sightseeing-tour'
    },
    {
      icon: <FaMap />,
      name: 'Faridabad to Delhi Sightseeing',
      duration: 'One Day',
      price: '₹3,200',
      originalPrice: '₹4,000',
      rating: 4.8,
      reviews: 35,
      image: delhiBannerNew,
      location: 'Faridabad/Delhi',
      highlights: ['Qutub Minar', 'India Gate', 'Lotus Temple', 'NIT Pickup'],
      description: 'The most convenient way to explore the capital from Faridabad. Full-day private cab tour.',
      includes: ['AC Sedan', 'Tolls/Parking', 'Taxes', 'Pro Driver'],
      path: '/tour/faridabad-to-delhi-local-sightseeing-tour'
    },
    {
      icon: <FaMap />,
      name: 'Delhi to Khatu Shyam One Day',
      duration: 'One Day',
      price: '₹10,000',
      originalPrice: '₹12,000',
      rating: 4.9,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&h=600&fit=crop",
      location: 'Delhi/Rajasthan',
      highlights: ['Baba Shyam Darshan', 'Shyam Kund', 'Bagichi', 'Premium Cab'],
      description: 'Divine one-day pilgrimage to Khatu Shyam Ji from Delhi. Seek blessings with a comfortable private ride.',
      includes: ['AC Sedan', 'Tolls/Parking', 'State Taxes', 'Pro Driver'],
      path: '/tour/delhi-to-khatu-shyam-one-day-tour'
    },
    {
      icon: <FaMap />,
      name: 'Delhi to Mehandipur Balaji',
      duration: 'One Day',
      price: '₹7,000',
      originalPrice: '₹9,000',
      rating: 4.8,
      reviews: 78,
      image: "https://mehandipursawamani.com/wp-content/uploads/2022/06/0-min.jpg",
      location: 'Delhi/Rajasthan',
      highlights: ['Shri Balaji Darshan', 'Pretraj Sarkar', 'Bhairav Ji', 'Divine Healing'],
      description: 'Seek blessings at the powerful Shri Mehandipur Balaji Temple. One-day return private cab tour.',
      includes: ['AC Sedan', 'Tolls/Parking', 'State Taxes', 'Pro Driver'],
      path: '/tour/delhi-to-mehandipur-balaji-one-day-tour'
    },
    {
      icon: <FaMap />,
      name: 'Delhi to Chandigarh One Day',
      duration: 'One Day',
      price: '₹6,500',
      originalPrice: '₹8,000',
      rating: 4.8,
      reviews: 65,
      image: chandigarh,
      location: 'Delhi/Punjab (UT)',
      highlights: ['Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Premium Drive'],
      description: 'Explore the "City Beautiful" from Delhi. A perfectly organized day trip covering all major Chandigarh icons.',
      includes: ['AC Sedan', 'Tolls/Parking', 'State Taxes', 'Pro Driver'],
      path: '/tour/delhi-to-chandigarh-one-day-tour'
    },
    {
      icon: <FaMap />,
      name: 'Agra to Fatehpur Sikri',
      duration: 'One Day',
      price: '₹3,000',
      originalPrice: '₹3,800',
      rating: 4.9,
      reviews: 142,
      image: agra,
      location: 'Agra/Fatehpur Sikri',
      highlights: ['Buland Darwaza', 'Salim Chishti Tomb', 'Panch Mahal', 'Diwan-i-Khas'],
      description: 'Journey to the abandoned Mughal capital. Explore the architectural brilliance of Akbar\'s dream city.',
      includes: ['AC Cab', 'Professional Driver', 'Parking', 'Local Taxes'],
      path: '/tour/agra-to-fatehpur-sikri-one-day-tour'
    },
    {
      icon: <FaMap />,
      name: 'Agra to Mathura Vrindavan',
      duration: 'One Day',
      price: '₹4,000',
      originalPrice: '₹4,800',
      rating: 5.0,
      reviews: 168,
      image: mathura,
      location: 'Mathura/Vrindavan',
      highlights: ['Krishna Janmabhoomi', 'Bankey Bihari', 'Prem Mandir', 'ISKCON'],
      description: 'Experience a divine spiritual tour from Agra to the sacred twin cities of Mathura and Vrindavan.',
      includes: ['AC Sedan', 'Fuel/Tolls', 'Doorstep Pickup', 'Pro Driver'],
      path: '/tour/agra-to-mathura-vrindavan-tour'
    },
    {
      icon: <FaMap />,
      name: 'Jaipur Local Sightseeing',
      duration: 'One Day',
      price: '₹2,500',
      originalPrice: '₹3,200',
      rating: 4.8,
      reviews: 124,
      image: jaipur,
      location: 'Jaipur, Rajasthan',
      highlights: ['Amer Fort', 'Hawa Mahal', 'City Palace', 'Jal Mahal', 'Albert Hall'],
      description: 'Discover the Pink City\'s royal essence. A perfectly curated day trip covering Jaipur\'s major heritage spots.',
      includes: ['AC Sedan', 'Verified Driver', 'Fuel', 'City Guidance'],
      path: '/tour/jaipur-local-sightseeing-by-car'
    },
    {
      icon: <FaMap />,
      name: 'Chandigarh Local Tour',
      duration: 'One Day',
      price: '₹2,500',
      originalPrice: '₹3,000',
      rating: 4.7,
      reviews: 96,
      image: chandigarh,
      location: 'Chandigarh, India',
      highlights: ['Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Sector 17 Market'],
      description: 'Explore the modern architectural marvel of India. A clean and green city tour with professional service.',
      includes: ['AC Cab', 'Local Expert Driver', 'Fuel', 'Pickup/Drop'],
      path: '/tour/chandigarh-local-sightseeing-by-car'
    },
    {
      icon: <FaMap />,
      name: 'Haridwar & Rishikesh Local',
      duration: 'One Day',
      price: '₹2,500',
      originalPrice: '₹3,200',
      rating: 4.9,
      reviews: 212,
      image: rishikesh,
      location: 'Haridwar/Rishikesh',
      highlights: ['Har Ki Pauri', 'Ram Jhula', 'Laxman Jhula', 'Ganga Aarti'],
      description: 'Seek spiritual peace in the twin holy cities. Experience the divine vibrations of the Ganges.',
      includes: ['AC Car', 'Fuel/Parking', 'Toll Taxes', 'Expert Driver'],
      path: '/tour/haridwar-rishikesh-local-sightseeing-by-car'
    },
    {
      icon: <FaMountain />,
      name: 'Dehradun & Mussoorie',
      duration: 'One Day',
      price: '₹3,000',
      originalPrice: '₹4,000',
      rating: 4.8,
      reviews: 84,
      image: dehradun,
      location: 'Dehradun/Mussoorie',
      highlights: ['Kempty Falls', 'Mall Road', 'Sahastradhara', 'Robber\'s Cave'],
      description: 'Escape to the hills! A refreshing day trip covering the best of Dehradun and the Queen of Hills, Mussoorie.',
      includes: ['Hill Driving Expert', 'AC Comfort', 'Fuel', 'Pickup/Drop'],
      path: '/tour/dehradoon-masoorie-local-sightseeing-by-car'
    },
    {
      icon: <FaMap />,
      name: 'Delhi to Kainchi Dham',
      duration: '1 Night / 2 Days',
      price: '₹9,500',
      originalPrice: '₹12,000',
      rating: 5.0,
      reviews: 72,
      image: dehradun,
      location: 'Neem Karoli Baba Ashram',
      highlights: ['Kainchi Dham', 'Hanuman Temple', 'Bhimtal', 'Peaceful Darshan'],
      description: 'Embark on a spiritual retreat to the world-famous Kainchi Dham Ashram. Find inner peace in Kumaon hills.',
      includes: ['2 Days AC Cab', 'State Tax/Tolls', 'Driver Allowance', 'Highway Comfort'],
      path: '/tour/delhi-to-kainchi-dham-neem-karoli-baba-tour'
    },
    {
      icon: <FaMap />,
      name: 'Golden Triangle (3 Days)',
      duration: '2 Night / 3 Days',
      price: '₹16,500',
      originalPrice: '₹19,000',
      rating: 4.9,
      reviews: 145,
      image: agra,
      location: 'Delhi-Jaipur-Agra',
      highlights: ['Taj Mahal', 'Amber Fort', 'Fatehpur Sikri', 'City Palace'],
      description: 'The ultimate Indian heritage tour! Experience the royal history of three iconic cities in 3 amazing days.',
      includes: ['3 Days AC Car', 'All Tolls/Taxes', 'Pro Driver', 'Multi-City Coverage'],
      path: '/tour/delhi-jaipur-fatehpur-sikri-agra-golden-triangle-tour'
    },
    {
      icon: <FaMap />,
      name: 'Jaipur, Ajmer & Pushkar',
      duration: '2 Night / 3 Days',
      price: '₹12,500',
      originalPrice: '₹15,000',
      rating: 4.8,
      reviews: 112,
      image: ajmer,
      location: 'Rajasthan Heritage',
      highlights: ['Amer Fort', 'Ajmer Dargah', 'Pushkar Lake', 'Brahma Temple'],
      description: 'Discover the heart of Rajasthan. A Soulful blend of royal history and deep spiritual traditions.',
      includes: ['3 Days AC Cab', 'State Tax/Tolls', 'Safe Highway Driver', 'All Fuel'],
      path: '/tour/delhi-jaipur-pushkar-ajmer-tour'
    },
    {
      icon: <FaMap />,
      name: 'Jim Corbett Wildlife',
      duration: '2 Night / 3 Days',
      price: '₹9,000',
      originalPrice: '₹11,500',
      rating: 4.9,
      reviews: 98,
      image: dehradun,
      location: 'Wildlife Adventure',
      highlights: ['Jeep Safari', 'Kosi River', 'Corbett Falls', 'Garjiya Temple'],
      description: 'Get ready for a thrilling wildlife adventure! Spot the majestic tigers in India\'s oldest national park.',
      includes: ['3 Days AC SUV', 'Forest Entry Aid', 'Safe Driver', 'All Road Charges'],
      path: '/tour/delhi-to-jim-corbett-tour'
    },
    {
      icon: <FaSnowflake />,
      name: 'Kashmir Paradise Tour',
      duration: 'Customizable',
      price: '₹3,000 / Day',
      originalPrice: '₹4,000',
      rating: 5.0,
      reviews: 142,
      image: dehradun,
      location: 'Srinagar/Gulmarg/Sonmarg',
      highlights: ['Dal Lake', 'Gulmarg Gondola', 'Sonmarg Glaciers', 'Mughal Gardens'],
      description: 'Experience the heaven on earth! Explore the mesmerizing beauty of Kashmir at your own pace.',
      includes: ['Heated AC Car', 'Local Expert Driver', 'Fuel', 'Pickup/Drop Srinagar'],
      path: '/tour/srinagar-sonmarg-gulmarg-local-sightseeing-by-car'
    },
    {
      icon: <FaOm />,
      name: 'Do Dham (Kedar-Badri)',
      duration: '5 Night / 6 Days',
      price: '₹18,500',
      originalPrice: '₹22,000',
      rating: 5.0,
      reviews: 186,
      image: haridwar,
      location: 'Kedarnath & Badrinath',
      highlights: ['Kedarnath Temple', 'Badrinath Temple', 'Devprayag', 'Mana Village'],
      description: 'The sacred journey of a lifetime! Complete your Do Dham Yatra with safety and comfort in our private premium cabs.',
      includes: ['6 Days AC Cab', 'Mountain Expert Driver', 'All State Taxes', 'Parking'],
      path: '/tour/delhi-to-do-dham-kedarnath-badrinath-tour'
    },
    {
      icon: <FaSnowflake />,
      name: 'Shimla & Manali',
      duration: '5 Night / 6 Days',
      price: '₹18,500',
      originalPrice: '₹23,000',
      rating: 4.9,
      reviews: 212,
      image: dehradun,
      location: 'Himachal Pradesh',
      highlights: ['The Ridge (Shimla)', 'Solang Valley', 'Hadimba Temple', 'Mall Road'],
      description: 'The classic Himalayan getaway! Experience the best of Shimla and Manali with our premium car rental service.',
      includes: ['6 Days AC Cab', 'Expert Hill Driver', 'All State Taxes', 'Fuel'],
      path: '/tour/delhi-shimla-manali-tour'
    },
    {
      icon: <FaOm />,
      name: 'Char Dham Yatra',
      duration: '11 Night / 12 Days',
      price: '₹36,000',
      originalPrice: '₹45,000',
      rating: 5.0,
      reviews: 242,
      image: haridwar,
      location: 'Kedarnath, Badrinath + 2',
      highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
      description: 'The complete spiritual circle! Embark on the holy Char Dham Yatra with our most trusted drivers and premium mountain-ready vehicles.',
      includes: ['12 Days AC Cab', 'Specialist Hill Driver', 'All State Taxes', 'Priority Support'],
      path: '/tour/delhi-to-char-dham-tour'
    },
    {
      icon: <FaStar />,
      name: 'Varanasi & Ayodhya UP Tour',
      duration: '6 Night / 7 Days',
      price: '₹27,500',
      originalPrice: '₹35,000',
      rating: 5.0,
      reviews: 198,
      image: varanasi,
      location: 'UP Spiritual Hub',
      highlights: ['Ayodhya Ram Mandir', 'Varanasi Aarti', 'Lucknow Heritage', 'Sangam'],
      description: 'The ultimate journey through India\'s spiritual Heartland! Explore Ayodhya, Varanasi, and Lucknow in absolute comfort.',
      includes: ['7 Days AC Cab', 'Expressway Driver', 'All State Taxes', 'Fuel'],
      path: '/tour/delhi-comprehensive-up-spiritual-tour'
    },
    {
      icon: <FaRoute />,
      name: 'Kashmir & Vaishno Devi Grand',
      duration: '9 Night / 10 Days',
      price: '₹30,000',
      originalPrice: '₹38,000',
      rating: 4.9,
      reviews: 215,
      image: amritsar,
      location: 'Kashmir/PB/JK',
      highlights: ['Srinagar Houseboat', 'Gulmarg Gondola', 'Vaishno Devi', 'Golden Temple'],
      description: 'The ultimate North India loop! From the heaven of Kashmir to the faith of Vaishno Devi and Amritsar.',
      includes: ['10 Days AC Cab', 'Mountain Expert Driver', 'Inter-State Taxes', 'Fuel'],
      path: '/tour/delhi-kashmir-vaishnodevi-amritsar-grand-tour'
    }
  ];

  const features = [
    { icon: <FaUsers />, title: 'Expert Guides', desc: 'Professional local guides' },
    { icon: <FaClock />, title: '24/7 Support', desc: 'Round the clock assistance' },
    { icon: <FaMapMarkerAlt />, title: 'Best Locations', desc: 'Handpicked destinations' },
    { icon: <FaStar />, title: 'Top Rated', desc: '4.8+ customer rating' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute w-64 h-64 bg-orange-100 rounded-full opacity-20"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-blue-100 rounded-full opacity-15"
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '60%', right: '15%' }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[850px] mt-20 overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
        {/* Background Image - Immersive Look */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transition-transform duration-1000"
          style={{ backgroundImage: `url(${slider2})` }}
        />
        {/* Animated Background Circles */}
        <motion.div
          className="absolute w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '60%', right: '15%' }}
        />
        {/* Optimized Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 via-transparent to-pink-500/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white drop-shadow-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Tour <span className="text-yellow-300 drop-shadow-lg">Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl mb-8 font-semibold text-yellow-100"
          >
            Discover India's Most Beautiful Destinations with Comfort & Style
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-base md:text-lg"
          >
            <motion.span 
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/30 backdrop-blur-md px-6 py-3 rounded-full font-bold shadow-lg border-2 border-white/50"
            >
              <FaPlane className="inline mr-2 text-yellow-300" /> All Inclusive
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/30 backdrop-blur-md px-6 py-3 rounded-full font-bold shadow-lg border-2 border-white/50"
            >
              <FaHotel className="inline mr-2 text-yellow-300" /> Premium Hotels
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/30 backdrop-blur-md px-6 py-3 rounded-full font-bold shadow-lg border-2 border-white/50"
            >
              <FaCar className="inline mr-2 text-yellow-300" /> Comfortable Travel
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Popular <span className="text-orange-500">Tour Packages</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(index)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <FaHeart className={`text-lg ${likedPackages.has(index) ? 'text-red-500' : 'text-white'}`} />
                  </button>

                  {/* Package Icon */}
                  <div className="absolute top-4 left-4 text-3xl text-white bg-orange-500/80 p-2 rounded-full">
                    {pkg.icon}
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-1">
                      <FaMapMarkerAlt className="mr-1" />
                      <span className="text-sm">{pkg.location}</span>
                    </div>
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Rating & Duration */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-semibold">{pkg.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({pkg.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pkg.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-red-100 text-orange-500 px-2 py-1 rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {pkg.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Book Button */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-orange-500">{pkg.price}</span>
                        <span className="text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                      </div>
                      {/* <span className="text-gray-500 text-sm">per person</span> */}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(pkg.path)}
                      className="bg-orange-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-semibold shadow-md"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Why Choose <span className="text-orange-500">Our Packages?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Best Price Guarantee', desc: 'Competitive pricing with no hidden costs', icon: <FaDollarSign /> },
              { title: 'Expert Planning', desc: 'carefully crafted itineraries by travel experts', icon: <FaMap /> },
              { title: 'Comfortable Stay', desc: 'Premium hotels and comfortable accommodations', icon: <FaBed /> },
              { title: 'Safe Travel', desc: 'Experienced drivers and well-maintained vehicles', icon: <FaShieldAlt /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <div className="text-4xl text-orange-500 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready for Your Dream Vacation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Contact us to customize your perfect tour package or get instant quotes!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <FaPhone /> Call Now
            </button>
            <button
              onClick={() => window.open('https://wa.me/919999999999', '_blank')}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp /> WhatsApp
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;