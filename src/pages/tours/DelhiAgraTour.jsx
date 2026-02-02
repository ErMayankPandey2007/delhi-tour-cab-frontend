import TourDetailLayout from '../../components/TourDetailLayout';
import { agra, drizer, innova, ertiga, forcetempo, wagonr, kiacerens } from '../../utils/images';
import { FaGem, FaFortAwesome, FaHistory, FaLeaf, FaShoppingBag, FaFileInvoiceDollar, FaUserTie } from 'react-icons/fa';

const DelhiAgraTour = () => {
    const tourData = {
        title: "Delhi to Agra Same Day Return Tour",
        bannerImage: agra,
        description: "Embark on an extraordinary voyage with Delhi Tour Cab, where history meets luxury. Our Delhi to Agra Same Day Tour is not just a trip, but a curated experience designed to immerse you in the Mughal grandeur. From the moment our professional chauffeur picks you up in a pristine, air-conditioned vehicle, you'll feel the difference of traveling with Delhi's most trusted tour partner. We don't just take you to the Taj Mahal; we ensure you experience it with ease, comfort, and the local insights that only Delhi Tour Cab can provide. Whether you're a solo explorer, a couple on a romantic getaway, or a family creating lifelong memories, our service is tailored to your rhythm.",
        whatToExpect: "When you book with Delhi Tour Cab, expect nothing less than perfection. Your day begins with a timely pickup and a smooth cruise along the Yamuna Expressway. In Agra, you'll bypass the typical tourist hassles as we guide you through the city's gems with efficiency. You'll witness the Taj Mahal's marble glow, explore the formidable Agra Fort, and discover the delicate 'Baby Taj'. Mid-day, we'll recommend the finest local delicacies. By evening, as you watch the sun set over the Yamuna, you'll realize why Delhi Tour Cab is the preferred choice for thousands of travelers. Our commitment to safety, transparency, and 'no hidden costs' ensures your peace of mind from start to finish.",
        highlights: [
            { title: "Taj Mahal — The crown jewel and main attraction", icon: FaGem },
            { title: "Agra Fort — Spectacular example of Mughal architecture", icon: FaFortAwesome },
            { title: "Itmad-ud-Daulah (Baby Taj) — Intricate marble craftsmanship", icon: FaHistory },
            { title: "Mehtab Bagh — Riverside garden with a great view of the Taj", icon: FaLeaf },
            { title: "Local Shopping — Marble inlay work, handicrafts, and sweets", icon: FaShoppingBag },
            { title: "All Inclusive – Fuel, Driver, Toll, Parking & Taxes", icon: FaFileInvoiceDollar },
            { title: "Comfortable AC travel with professional drivers", icon: FaUserTie }
        ],
        placesWithDetails: [
            {
                name: "Taj Mahal",
                image: agra,
                description: "The crown jewel of Mughal architecture and one of the Seven Wonders of the World. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this ivory-white marble mausoleum is a symbol of eternal love.",
                timings: "06:00 AM – 06:30 PM (Closed on Fridays)"
            },
            {
                name: "Agra Fort",
                image: agra, // Using agra image as a placeholder or secondary view
                description: "A UNESCO World Heritage site, this massive red sandstone fort was the main residence of the Mughal Emperors. It houses several beautiful palaces like Khas Mahal, Jahangir Palace, and the Pearl Mosque.",
                timings: "06:00 AM – 06:00 PM"
            },
            {
                name: "Itmad-ud-Daulah (Baby Taj)",
                image: agra,
                description: "Often described as a 'jewel box', sometimes called the 'Baby Taj', the tomb of Itmad-ud-Daulah is often regarded as a draft of the Taj Mahal. It features exquisite marble inlay work.",
                timings: "06:00 AM – 06:00 PM"
            },
            {
                name: "Mehtab Bagh",
                image: agra,
                description: "Located on the opposite bank of the Yamuna River, this garden offers a stunning view of the Taj Mahal at sunset. It's the perfect spot for photography and peaceful reflection.",
                timings: "06:00 AM – 06:00 PM"
            }
        ],
        itinerary: [
            {
                title: "5:00 AM - 6:00 AM: Departure from Delhi",
                content: "Early morning pickup from your location in Delhi/NCR to beat the traffic and start the journey to Agra via Yamuna Expressway."
            },
            {
                title: "9:00 AM: Arrival in Agra & Taj Mahal Visit",
                content: "Enter the magnificent Taj Mahal. Spend quality time exploring the beauty of this marble marvel and capturing memories."
            },
            {
                title: "12:00 PM: Agra Fort Exploration",
                content: "Visit the massive Agra Fort, a UNESCO World Heritage site that tells the stories of the Mughal Empire's power and grandeur."
            },
            {
                title: "1:30 PM: Lunch Break",
                content: "Take a break to enjoy authentic Mughlai cuisine at a local restaurant (Lunch not included in package price)."
            },
            {
                title: "2:30 PM: Itmad-ud-Daulah & Mehtab Bagh",
                content: "Visit the 'Baby Taj' and enjoy the serene view of the Taj Mahal from across the Yamuna river at Mehtab Bagh."
            },
            {
                title: "4:30 PM: Local Shopping & Exploration",
                content: "Explore Agra's famous markets for marble inlay work, handicrafts, and world-famous Agra Petha."
            },
            {
                title: "6:00 PM: Departure for Delhi",
                content: "Begin the return journey to Delhi, carrying back memories of a lifetime."
            },
            {
                title: "9:00 PM - 10:00 PM: Drop at Delhi",
                content: "Arrive back in Delhi and get dropped off at your preferred location."
            }
        ],
        whyChooseUs: [
            { title: "All Inclusive Pricing", description: "Fuel, Driver, Toll, Parking & Taxes are all included in the package." },
            { title: "Safe & Reliable", description: "Professional drivers and well-maintained AC vehicles for a comfortable journey." },
            { title: "Same Day Return", description: "Optimized itinerary to cover all major attractions and return to Delhi by night." },
            { title: "Doorstep Service", description: "Pickup and drop-off from your hotel or home in Delhi/NCR." }
        ],
        includes: [
            "AC car with professional driver",
            "Fuel, tolls, parking & driver charges",
            "Round Trip Delhi ↔ Agra",
            "All-inclusive pricing with no hidden costs"
        ],
        exclusions: [
            "Entry tickets (Taj Mahal / Agra Fort / other monuments)",
            "Meals & refreshments",
            "Tour guide (available on request for extra charge)",
            "Personal expenses"
        ],
        importantNotes: [
            "Taj Mahal is closed on all Fridays.",
            "Total Duration: Approx. 12–14 hours.",
            "Advance Booking: ₹1000 Only.",
            "Because this is a Same Day Return trip, the itinerary is primarily fixed. Minor adjustments are possible for extra charges.",
            "Payment via GPay / PhonePe / UPI: +91-9278063535"
        ],
        faqs: [
            {
                question: "Is the Taj Mahal open on Fridays?",
                answer: "No, the Taj Mahal is closed for all visitors on Fridays. It is only open for those attending afternoon prayers at the mosque."
            },
            {
                question: "What is included in the 'All Inclusive' package?",
                answer: "Our all-inclusive package covers the vehicle rental, fuel, all state taxes, toll taxes, parking fees, and driver allowance. There are no hidden charges."
            },
            {
                question: "How can I book this tour?",
                answer: "You can book by calling or WhatsApping us at +91 9278063535. You'll need to provide ID proof, preferred car model, and your pickup details. An advance of ₹1000 is required to confirm."
            },
            {
                question: "Is a tour guide included?",
                answer: "A professional tour guide is not included in the standard package but can be arranged on request for an additional charge."
            }
        ],
        tourTypes: [
            {
                title: "Business / Solo Package",
                description: "Efficient and punctual service with a focus on comfort and timing, perfect for business travelers or solo explorers."
            },
            {
                title: "Premium Family Package",
                description: "Spacious SUVs like Innova Crysta or Ertiga with child-friendly amenities and flexible stops for a relaxed family outing."
            },
            {
                title: "Large Group / Corporate",
                description: "Luxury Tempo Travellers (12-17 seats) with professional coordination for corporate groups or large extended families."
            }
        ],
        cars: [
            { name: "Hatchback WagonR (4+1)", price: "₹6,500/-", image: wagonr },
            { name: "Sedan Swift Dzire (4+1)", price: "₹7,000/-", image: drizer },
            { name: "Budget SUV Suzuki Ertiga (6+1)", price: "₹8,000/-", image: ertiga },
            { name: "Luxury SUV Kia Carens (6+1)", price: "₹10,500/-", image: kiacerens },
            { name: "Luxury SUV Innova Crysta (6+1)", price: "₹12,500/-", image: innova },
            { name: "Tempo Traveller (12+1 / 17+1)", price: "₹7500/", image: forcetempo }
        ]
    };

    return <TourDetailLayout {...tourData} />;
};

export default DelhiAgraTour;


