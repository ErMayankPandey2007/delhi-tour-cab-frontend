import TourDetailLayout from '../../components/TourDetailLayout';
import { rishikesh, drizer, innova, ertiga, forceurbania, wagonr, kiacerens, forcetempo } from '../../utils/images';
import { FaMountain, FaWater, FaOm, FaUtensils, FaUserTie, FaCheckCircle, FaStar, FaLeaf } from 'react-icons/fa';

const DelhiRishikeshTour = () => {
    const tourData = {
        title: "Delhi to Rishikesh Adventure Tour",
        bannerImage: rishikesh,
        description: "Experience the perfect blend of spiritual serenity and pulse-racing adventure with Delhi Tour Cab's Rishikesh Day Tour. Known as the 'Yoga Capital of the World', Rishikesh offers a unique landscape where the emerald Ganges meets the foothills of the Himalayas. Whether you're seeking a soul-stirring Ganga Aarti, a peaceful meditative session in a riverside ashram, or the thrill of white-water rafting, our day tour is designed to deliver it all. Travel in the comfort of our premium AC vehicles, driven by professional chauffeurs who know the best routes and hidden gems of Rishikesh, ensuring your one-day escape is perfectly managed and memorable.",
        whatToExpect: "Your journey starts with a swift sunrise drive from Delhi/NCR, cruising along the modern expressways. In Rishikesh, expect a day of contrasts: from walking across the iconic Ram Jhula to cafe-hopping in the vibrant lanes of Tapovan. You'll witness the divine evening Aarti at Parmarth Niketan, a spectacle of light and sound that stays with you forever. With Delhi Tour Cab, you skip the hassles of public transport and focus entirely on the experience—whether it's the adrenaline of the rapids or the peace of the temples. Our all-inclusive pricing means you travel with total peace of mind.",
        highlights: [
            { title: "Visit Iconic Laxman Jhula & Ram Jhula", icon: FaMountain },
            { title: "River Rafting Adventure (Optional)", icon: FaWater },
            { title: "Evening Ganga Aarti at Parmarth Niketan", icon: FaOm },
            { title: "Explore Yoga Ashrams & Beatles Ashram", icon: FaLeaf },
            { title: "Riverside Cafe Hopping & Local Sightseeing", icon: FaUtensils },
            { title: "Triveni Ghat Holy Dip & Sightseeing", icon: FaStar },
            { title: "Professional Driver & Comfortable AC Cab", icon: FaUserTie },
            { title: "All-Inclusive Fixed Price Package", icon: FaCheckCircle }
        ],
        itinerary: [
            {
                title: "5:00 AM - Early Morning Departure",
                content: "Depart from Delhi via Meerut Expressway to reach Rishikesh comfortably by 10 AM."
            },
            {
                title: "10:30 AM - Sightseeing Bridges",
                content: "Visit the iconic Ram Jhula and Laxman Jhula (if open) and explore the nearby ashrams."
            },
            {
                title: "1:00 PM - River Bank Lunch",
                content: "Enjoy lunch at one of the famous riverside cafes like Little Buddha or Freedom Cafe."
            },
            {
                title: "2:30 PM - Spiritual Exploration",
                content: "Visit Swarg Ashram, Geeta Bhawan, and the Parmarth Niketan Ashram."
            },
            {
                title: "5:30 PM - Evening Aarti",
                content: "Witness the divine Ganga Aarti at Parmarth Niketan or Triveni Ghat."
            },
            {
                title: "7:00 PM - Departure for Delhi",
                content: "Start the return drive."
            },
            {
                title: "11:30 PM - Arrival back in Delhi",
                content: "Drop off at your original location."
            }
        ],
        includes: [
            "Private Air-Conditioned Cab",
            "Professional Driver",
            "Fuel, Tolls, State Taxes and Parking",
            "Driver Day Allowance",
            "Multiple Pickup Points in NCR"
        ],
        exclusions: [
            "Rafting or Camping fees",
            "Guide or Ashram donations",
            "Meals and Snacks",
            "Laundry/Personal items"
        ],
        importantNotes: [
            "Total Duration: Approx. 14–16 hours.",
            "Advance Booking: ₹1000 Only.",
            "Rafting is subject to weather conditions and time availability.",
            "Payment via GPay / PhonePe / UPI: 9278063535"
        ],
        tourTypes: [
            {
                title: "Adventure Discovery Package",
                description: "Perfect for youngsters and groups looking to combine sightseeing with river rafting thrill."
            },
            {
                title: "Rishikesh Spiritual Escape",
                description: "Focuses on temples, ashrams, and the divine Ganga Aarti for a peaceful family day trip."
            },
            {
                title: "Corporate Team-Bonding",
                description: "Luxury Tempo Travellers for corporate groups looking for a revitalizing day in the hills."
            }
        ],
        carss: [
            { name: "Hatchback WagonR (4+1)", price: "₹8,500/-", image: wagonr },
            { name: "Sedan Swift Dzire (4+1)", price: "₹9,000/-", image: drizer },
            { name: "Budget SUV Suzuki Ertiga (6+1)", price: "₹11,000/-", image: ertiga },
            { name: "Luxury SUV Kia Carens (6+1)", price: "₹13,500/-", image: kiacerens },
            { name: "Luxury SUV Innova Crysta (6+1)", price: "₹14,500/-", image: innova },
            { name: "Tempo Traveller (12+1 / 17+1)", price: "₹12,500/", image: forcetempo }
        ]
    };

    return <TourDetailLayout {...tourData} />;
};

export default DelhiRishikeshTour;
