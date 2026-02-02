import TourDetailLayout from '../../components/TourDetailLayout';
import {
    jaipur, drizer, innova, ertiga, forcetempo, wagonr, kiacerens,
    albertHallMuseum, amberFort, cityPalace, jalMahal, jantarMantar, nahargarhFort
} from '../../utils/images';
import { FaFortAwesome, FaWind, FaSun, FaCrown, FaWater, FaOm, FaPalette, FaFileInvoiceDollar } from 'react-icons/fa';

const DelhiJaipurTour = () => {
    const tourData = {
        title: "Delhi to Jaipur Same Day Return Tour",
        bannerImage: jaipur,
        description: "Step into a world of royal heritage and vibrant culture with Delhi Tour Cab's exclusive Delhi to Jaipur Same Day Return Tour. Known as the 'Pink City', Jaipur is a living museum of Rajputana glory. Our curated tour ensures you experience the best of Jaipur’s forts, palaces, and bazaars, all within a single day. Travel in the plush comfort of our premium AC fleet, driven by professional chauffeurs who understand the heritage and the roads. With Delhi Tour Cab, the 270km journey becomes a part of the royal experience itself.",
        whatToExpect: "Your regal adventure starts with a sunrise pickup across Delhi/NCR. As we head towards Rajasthan, relax in our well-maintained vehicles. In Jaipur, you'll be greeted by the amber-hued walls of the Amer Fort, the symmetrical beauty of Hawa Mahal, and the scientific marvels of Jantar Mantar. We optimize your time so you can wander through the City Palace and catch a glimpse of the Jal Mahal floating in Man Sagar Lake. Expect a day filled with stunning photography, local shopping opportunities for handicrafts, and a seamless return to Delhi by night, perfectly managed by the team at Delhi Tour Cab.",
        highlights: [
            { title: "Amber Fort  – Hilltop fort with stunning views", icon: FaFortAwesome },
            { title: "Hawa Mahal  – Iconic Palace of Winds", icon: FaWind },
            { title: "Jantar Mantar  – UNESCO Heritage Site", icon: FaSun },
            { title: "City Palace  – Royal palace museum complex", icon: FaCrown },
            { title: "Jal Mahal  – Beautiful Water Palace", icon: FaWater },
            { title: "Nahargarhh Fort  – White marble temple", icon: FaOm },
            { title: "Albert Hall Museum  – Art & heritage treasures", icon: FaPalette },
            { title: "All Inclusive – Fuel, Driver, Toll, Parking & Taxes", icon: FaFileInvoiceDollar }
        ],
        placesWithDetails: [
            {
                name: "Hawa Mahal",
                image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1000&auto=format&fit=crop",
                description: "Known as the “Palace of Winds,” Hawa Mahal has 953 small windows that allowed royal women to observe street festivals unseen. Its pink façade is an architectural wonder and Jaipur’s most iconic monument.",
                timings: "09:00 AM – 05:00 PM"
            },
            {
                name: "Jantar Mantar",
                image: jantarMantar,
                description: "A UNESCO World Heritage Site, Jantar Mantar is an astronomical observatory built by Maharaja Sawai Jai Singh II. The instruments are still accurate in measuring time and celestial bodies.",
                timings: "09:00 AM – 04:30 PM"
            },
            {
                name: "City Palace",
                image: cityPalace,
                description: "City Palace is a blend of Rajasthani and Mughal architecture, housing museums, courtyards, and the royal residence. It reflects Jaipur’s regal heritage and vibrant culture.",
                timings: "09:30 AM – 05:00 PM"
            },
            {
                name: "Albert Hall Museum",
                image: albertHallMuseum,
                description: "The oldest museum in Rajasthan, Albert Hall displays royal artifacts, paintings, weapons, and an Egyptian mummy. Its Indo-Saracenic architecture is stunning by night.",
                timings: "09:00 AM – 05:00 PM"
            },
            {
                name: "Nahargarh Fort",
                image: nahargarhFort,
                description: "Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking the city of Jaipur in the Indian state of Rajasthan. Along with Amer Fort and Jaigarh Fort, Nahargarh once formed a strong defense ring for the city.",
                timings: "10:00 AM – 05:30 PM"
            },
            {
                name: "Jal Mahal",
                image: jalMahal,
                description: "Located in the middle of Man Sagar Lake, Jal Mahal appears to float on water. Though entry is restricted, its view from the banks is mesmerizing, especially at sunset.",
                timings: "Photography stop only"
            },
            {
                name: "Amber Fort",
                image: amberFort,
                description: "Amber Fort is a majestic fort on a hilltop with grand courtyards, mirror work halls, and stunning architecture. A light-and-sound show tells its glorious story.",
                timings: "08:00 AM – 05:30 PM"
            }
        ],
        itinerary: [
            {
                title: "6:00 AM: Departure from Delhi",
                content: "Early morning pickup from your hotel or home in Delhi/NCR to begin the journey to the Pink City."
            },
            {
                title: "11:00 AM: Arrival in Jaipur & Amber Fort Visit",
                content: "Reach Jaipur and proceed directly to the majestic Amber Fort for an exploratory tour of its palaces and courtyards."
            },
            {
                title: "1:00 PM: Hawa Mahal & Jal Mahal Photo Stop",
                content: "Stop for iconic photographs at the Hawa Mahal and the serene Jal Mahal located in the middle of Man Sagar Lake."
            },
            {
                title: "2:00 PM: Lunch Break",
                content: "Enjoy traditional Rajasthani cuisine at a local restaurant (Lunch not included in package price)."
            },
            {
                title: "3:00 PM: City Palace & Jantar Mantar",
                content: "Explore the royal City Palace complex and the astronomical wonders of Jantar Mantar."
            },
            {
                title: "5:00 PM: Local Bazaars & Birken Mandir",
                content: "Optional quick shopping for Jaipur's famous textiles and jewelry, followed by a peaceful visit to Birla Mandir."
            },
            {
                title: "6:30 PM: Departure for Delhi",
                content: "Start the return journey via the Highway, carrying the royal memories of Jaipur."
            },
            {
                title: "11:30 PM: Drop at Delhi",
                content: "Safe drop-off at your preferred location in Delhi/NCR."
            }
        ],
        whyChooseUs: [
            { title: "Royal Experience", description: "Travel like royalty with our premium vehicles and professional service." },
            { title: "Fixed All-Inclusive rates", description: "No surprises — Tolls, Parking, Fuel and Driver charges are all covered." },
            { title: "Expert Navigation", description: "Our drivers are well-versed with the Delhi-Jaipur highway for a smooth ride." },
            { title: "Tailored to You", description: "Comfortable pacing and flexible stops to ensure you enjoy every moment." }
        ],
        includes: [
            "AC car with Professional Driver",
            "Fuel, Toll, Parking & Driver Charges",
            "Round Trip Delhi ↔ Jaipur",
            "All taxes and state permits"
        ],
        exclusions: [
            "Entry Tickets (Monuments, Forts, Palaces, Museums)",
            "Meals & Refreshments",
            "Tour Guide (available on request with extra charges)",
            "Elephant / Jeep rides at Amber Fort"
        ],
        importantNotes: [
            "Total Duration: 12–14 Hours.",
            "Advance Booking: ₹1000 Only.",
            "As this is a Same Day Return Trip, the itinerary is primarily fixed. Minor adjustments are possible with extra charges.",
            "Payment via GPay / PhonePe / UPI: 9278063535"
        ],
        faqs: [
            {
                question: "How long is the drive from Delhi to Jaipur?",
                answer: "The drive typically takes about 5 hours one way, depending on traffic conditions and the starting point in Delhi/NCR."
            },
            {
                question: "Are the parkings and tolls included in the price?",
                answer: "Yes, our quoted price is all-inclusive of fuel, tolls, parking, and state taxes. No hidden costs."
            },
            {
                question: "Can we visit Chowki Dhani on this tour?",
                answer: "Chowki Dhani usually opens in the evening (after 6 PM). Visiting it on a same-day return trip is difficult but can be managed for an extra charge for late-night return."
            },
            {
                question: "Is it possible to hire a guide in Jaipur?",
                answer: "Yes, we can arrange a professional licensed guide for Jaipur sightseeing on request for an additional fee."
            }
        ],
        tourTypes: [
            {
                title: "Royal Solo/Couple Package",
                description: "Ideal for solo travelers or couples who want a private, romantic tour of the Pink City in a comfortable sedan."
            },
            {
                title: "Jaipur Legacy Family Package",
                description: "Spacious SUVs like Innova Crysta, perfect for families to travel together and explore heritage comfortably."
            },
            {
                title: "Jaipur Group Expedition",
                description: "Large-capacity Tempo Travellers for friends or corporate groups looking for a royal day out together."
            }
        ],
        carss: [
            { name: "Hatchback WagonR (4+1)", price: "₹7,500/-", image: wagonr },
            { name: "Sedan Swift Dzire (4+1)", price: "₹8,000/-", image: drizer },
            { name: "Budget SUV Suzuki Ertiga (6+1)", price: "₹10,000/-", image: ertiga },
            { name: "Luxury SUV Kia Carens (6+1)", price: "₹12,500/-", image: kiacerens },
            { name: "Luxury SUV Innova Crysta (6+1)", price: "₹12,500/-", image: innova },
            { name: "Tempo Traveller (12+1 / 17+1)", price: "₹15,000", image: forcetempo }
        ]
    };

    return <TourDetailLayout {...tourData} />;
};

export default DelhiJaipurTour;

