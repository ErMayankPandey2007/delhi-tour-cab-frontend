import TourDetailLayout from '../../components/TourDetailLayout';
import { haridwar, drizer, innova, ertiga, forcetempo, wagonr, kiacerens } from '../../utils/images';
import { FaOm, FaWater, FaMountain, FaShoppingBag, FaHistory, FaUserTie, FaCheckCircle, FaStar } from 'react-icons/fa';

const DelhiHaridwarTour = () => {
    const tourData = {
        title: "Delhi to Haridwar Same Day Tour",
        bannerImage: haridwar,
        description: "Begin a soul-cleansing spiritual journey to the 'Gateway to God' with Delhi Tour Cab. Our Delhi to Haridwar Same Day Tour is designed to immerse you in the sacred atmosphere of one of India's seven holiest places. From the moment you leave Delhi in our premium AC fleet, you're on a path to peace. Witness the majestic Ganges, participate in the powerful evening Aarti at Har Ki Pauri, and explore ancient temples perched on the hills. Our professional chauffeurs, experienced in highway and interstate travel, ensure your pilgrimage is smooth, safe, and deeply revitalizing, allowing you to return to Delhi the same night with a heart full of blessings.",
        whatToExpect: "Your sacred day starts with an early morning pickup from your doorstep in Delhi/NCR. As we head towards the foothills of the Himalayas, relax in the comfort of our well-maintained vehicles. In Haridwar, expect a day of divine experiences—from a holy dip at Har Ki Pauri to a panoramic cable car ride to Mansa Devi Temple. Navigate through the vibrant local spiritual markets and find peace at the various holy ghats. The highlight of your trip will be the mesmerizing Ganga Aarti, a spectacle of faith and fire. With Delhi Tour Cab, every detail of your transport is managed with car, so your only focus is your spiritual connection.",
        highlights: [
            { title: "Holy Dip at Sacred Har Ki Pauri Ghat", icon: FaWater },
            { title: "Mansa Devi Temple (by Scenic Cable car)", icon: FaMountain },
            { title: "Chandi Devi Temple Hilltop Visit", icon: FaOm },
            { title: "Witness World-Famous Evening Ganga Aarti", icon: FaHistory },
            { title: "Explore Vibrant Local Spiritual Markets", icon: FaShoppingBag },
            { title: "Visit Daksh Mahadev & Ancient Temples", icon: FaStar },
            { title: "Professional Highway Driver & Premium AC Cab", icon: FaUserTie },
            { title: "All-Inclusive Fixed Price Package", icon: FaCheckCircle }
        ],
        itinerary: [
            {
                title: "5:00 AM - Early Morning Start",
                content: "Depart from Delhi early to avoid traffic and reach Haridwar by mid-morning (approx 5 hours drive)."
            },
            {
                title: "10:30 AM - Arrive Haridwar & Mansa Devi",
                content: "Visit the Mansa Devi temple via the ropeway (Udan Khatola) for a panoramic view of the city."
            },
            {
                title: "1:00 PM - Holy Dip & Lunch",
                content: "Take a sacred bath at Har Ki Pauri and enjoy a local vegetarian meal (paliwal/chotiwala)."
            },
            {
                title: "3:00 PM - Local Temples & Markets",
                content: "Explore Chandi Devi temple and Daksh Temple, followed by exploring the vibrant Moti Bazaar."
            },
            {
                title: "6:00 PM - Ganga Aarti",
                content: "Participate in the soul-stirring evening Ganga Aarti at Har Ki Pauri."
            },
            {
                title: "7:30 PM - Return Departure",
                content: "Start the journey back to Delhi."
            },
            {
                title: "12:30 AM - Safe Arrival Delhi",
                content: "Drop off at your residence in Delhi/NCR."
            }
        ],
        includes: [
            "Personal AC Vehicle",
            "Reliable Driver for Hilly/Highway Routes",
            "Toll, Parking, Fuel and All Taxes",
            "Driver Allowance",
            "Customized Pickup/Drop"
        ],
        exclusions: [
            "Cable car (Ropeway) Tickets",
            "Meals and Personal Shopping",
            "Guide/Purohit Services",
            "Entry Fees if any"
        ],
        importantNotes: [
            "Total Duration: Approx. 14–16 hours.",
            "Advance Booking: ₹1000 Only.",
            "Cable car (Ropeway) tickets are not included in the package.",
            "Payment via GPay / PhonePe / UPI: 9278063535"
        ],
        tourTypes: [
            {
                title: "Haridwar Holy Pilgrimage",
                description: "Focused on temples and the holy dip, perfect for families and senior citizens seeking blessings."
            },
            {
                title: "Gateway to Himalayas Tour",
                description: "A blend of sightseeing and spiritual exploration, covering all major landmarks of Haridwar."
            },
            {
                title: "Corporate Devotional Day",
                description: "Luxury Tempo Travellers for corporate teams looking for a peaceful spiritual break together."
            }
        ],
        carss: [
            { name: "Hatchback WagonR (4+1)", price: "₹7,500/-", image: wagonr },
            { name: "Sedan Swift Dzire (4+1)", price: "₹8,000/-", image: drizer },
            { name: "Budget SUV Suzuki Ertiga (6+1)", price: "₹10,000/-", image: ertiga },
            { name: "Luxury SUV Kia Carens (6+1)", price: "₹12,500/-", image: kiacerens },
            { name: "Luxury SUV Innova Crysta (6+1)", price: "₹13,500/-", image: innova },
            { name: "Tempo Traveller (12+1 / 17+1)", price: "₹7500", image: forcetempo }
        ]
    };

    return <TourDetailLayout {...tourData} />;
};

export default DelhiHaridwarTour;
