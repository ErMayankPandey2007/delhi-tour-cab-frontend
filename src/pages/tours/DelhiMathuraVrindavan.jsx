import TourDetailLayout from '../../components/TourDetailLayout';
import { mathura, drizer, innova, ertiga, scorpio, wagonr, kiacerens, forcetempo } from '../../utils/images';
import { FaPray, FaOm, FaHeart, FaStar, FaHistory, FaUserTie, FaCheckCircle, FaRupeeSign } from 'react-icons/fa';

const DelhiMathuraVrindavan = () => {
    const tourData = {
        title: "Delhi to Mathura Vrindavan Tour",
        bannerImage: mathura,
        description: "Embark on a divine spiritual journey to the holy center of Brij Bhoomi with Delhi Tour Cab. Our Delhi to Mathura and Vrindavan Same Day Tour is meticulously crafted to connect you with the birthplace of Lord Krishna. Experience the celestial energy of ancient temples, witness soul-stirring aartis, and immerse yourself in the devotion that fills every street. Traveling in our premium AC fleet, you'll enjoy a serene and peaceful pilgrimage, free from the hassles of public transport. Our professional drivers, well-versed with the sacred routes, ensure you and your family have ample time for peaceful darshan and creating spiritual memories that last a lifetime.",
        whatToExpect: "Your spiritual day begins with a comfortable sunrise pickup from Delhi/NCR. As we glide along the Yamuna Expressway, leave the city's noise behind. In Mathura, you'll visit the powerful Krishna Janmabhoomi and explore the historical temples where divinity feels alive. In Vrindavan, expect a deep connection at the Bankey Bihari Temple and the architectural marvel of Prem Mandir. By evening, as the temples light up like jewels, you'll experience a sense of peace that only Brij Bhoomi can offer. With Delhi Tour Cab's fixed pricing and dedicated service, your only focus remains on your spiritual devotion.",
        highlights: [
            { title: "Krishna Janmabhoomi (Birthplace) Visit", icon: FaPray },
            { title: "Darshan at Bankey Bihari Temple (Vrindavan)", icon: FaOm },
            { title: "Explore the magnificent Prem Mandir", icon: FaStar },
            { title: "Visit ISKCON Temple & Nidhivan", icon: FaHeart },
            { title: "See the holy Yamuna Ghats", icon: FaHistory },
            { title: "Brij Culture & Local Mathura Peda Special", icon: FaStar },
            { title: "Comfortable AC Travel & Pro Driver", icon: FaUserTie },
            { title: "All Inclusive Fixed Pricing Package", icon: FaCheckCircle }
        ],
        itinerary: [
            {
                title: "6:30 AM - Departure from Delhi",
                content: "Morning pickup from Delhi/NCR and drive towards Mathura via Yamuna Expressway."
            },
            {
                title: "9:30 AM - Mathura Sightseeing",
                content: "Visit Shri Krishna Janmabhoomi (Birthplace Temple) and the historical Dwarkadhish Temple."
            },
            {
                title: "12:00 PM - Proceed to Vrindavan",
                content: "Short drive to Vrindavan. Afternoon visit to Nidhivan and the famous Bankey Bihari Temple for Darshan."
            },
            {
                title: "2:00 PM - Lunch Break",
                content: "Enjoy traditional Satvik lunch at a local restaurant."
            },
            {
                title: "3:30 PM - ISKCON & Prem Mandir",
                content: "Visit the serene ISKCON Temple and later the stunning Prem Mandir, known for its marble carvings and evening lighting."
            },
            {
                title: "6:00 PM - Evening Aarti & Departure",
                content: "Attend evening prayers and start the return journey to Delhi."
            },
            {
                title: "9:30 PM - Drop at Delhi",
                content: "Safe drop back at your home or hotel in Delhi/NCR."
            }
        ],
        includes: [
            "AC Dedicated Vehicle",
            "Experienced Driver knowing Local Routes",
            "Fuel, Toll, Parking and Taxes",
            "Driver Allowance",
            "Doorstep Pickup/Drop"
        ],
        exclusions: [
            "Pooja/Donation expenses",
            "Guide services",
            "Personal Food/Shopping",
            "Temple VIP Darshan tickets"
        ],
        importantNotes: [
            "Total Duration: Approx. 12-14 hours.",
            "Advance Booking: ₹1000 Only.",
            "As this is a Same Day Return Trip, the itinerary is primarily fixed. Minor adjustments possible.",
            "Payment via GPay / PhonePe / UPI: 9278063535"
        ],
        tourTypes: [
            {
                title: "Spiritual Family Package",
                description: "Spacious SUVs like Innova or Ertiga for a comfortable pilgrimage with elders and children."
            },
            {
                title: "Devotional Group Tour",
                description: "Luxury Tempo Travellers for larger groups of devotees traveling together to Brij Bhoomi."
            },
            {
                title: "Premium Solo/Couple Trip",
                description: "Dedicated sedan for a private and serene spiritual experience at your own pace."
            }
        ],
        carss: [
            { name: "Hatchback WagonR (4+1)", price: "₹7,500/-", image: wagonr },
            { name: "Sedan Swift Dzire (4+1)", price: "₹8,000/-", image: drizer },
            { name: "Budget SUV Suzuki Ertiga (6+1)", price: "₹9,000/-", image: ertiga },
            { name: "Luxury SUV Kia Carens / Innova Crysta (6+1)", price: "₹11,500/-", image: kiacerens },
            { name: "Tempo Traveller (12+1)", price: "₹15,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹18,000/-", image: forcetempo }
        ]
    };

    return <TourDetailLayout {...tourData} />;
};

export default DelhiMathuraVrindavan;
