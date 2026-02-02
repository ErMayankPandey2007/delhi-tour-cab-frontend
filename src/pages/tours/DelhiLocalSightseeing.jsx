import TourDetailLayout from '../../components/TourDetailLayout';
import { delhiBannerNew, drizer, innova, ertiga, forcetempo, wagonr, kiacerens } from '../../utils/images';
import { qutubMinar, lotustemple, humayuntomb, indiagate, parliamenthouse, rashtrapati, redfort, rajghat, akshardham } from '../../utils/images';

const DelhiLocalSightseeing = () => {
    const tourData = {
        title: "Delhi Sightseeing Tour by car",
        bannerImage: delhiBannerNew,
        description: `Explore India's capital in comfort with our Delhi Sightseeing Tour by car, the most convenient and flexible way to experience the city's rich history, iconic monuments, spiritual landmarks, and modern attractions in one well-planned trip. This private Delhi city tour is ideal for all tourists, families, couples, and corporate travelers who prefer a relaxed, hassle-free Delhi sightseeing experience.
        With Delhi Tour Cab, you travel in a clean, air-conditioned car driven by an experienced local chauffeur, allowing you to explore Delhi at your own pace. Unlike crowded public transport or fixed group tours, our customizable sightseeing itinerary gives you complete freedom to spend more time at the places you enjoy most, ensuring a smooth, comfortable, and memorable Delhi sightseeing experience. Our Delhi Sightseeing by car packages are designed to offer transparent pricing and excellent value for money. The tour cost depends on the type of vehicle selected, total tour duration (usually 8 hours), and the number of passengers. We provide flexible options to suit solo travelers, families, and groups looking for a comfortable Delhi city tour.`,
        highlights: [
            "Private AC Taxi with an experienced and courteous driver",
            "Flexible itinerary covering Old Delhi & New Delhi",
            "Ideal for families, couples, corporate travelers, and groups",
            "Convenient hotel/home/airport pickup and drop-off",
            "Easy booking | Affordable pricing | 100% safe and comfortable ride",
            "Places Covered: Qutub Minar, Lotus Temple, Humayun's Tomb, India Gate, Rashtrapati Bhavan, Parliament House, Red Fort, and Akshardham Temple"
        ],
        placesWithDetails: [
            {
                name: "Qutub Minar",
                image: qutubMinar,
                description: "Qutub Minar is one of the most famous landmarks of Delhi and a UNESCO World Heritage Site. It stands at a height of 72.5 meters and is built using red sandstone and marble. The tower features beautiful carvings and inscriptions from the Holy Quran, showcasing fine Indo-Islamic architecture.",
                timings: "07:00 AM – 07:00 PM"
            },
            {
                name: "Lotus Temple",
                image: lotustemple,
                description: "Lotus Temple is one of the most peaceful and unique landmarks in Delhi. Designed in the shape of a lotus flower, it is open to people of all religions. The temple is known for its calm atmosphere, beautiful architecture, and serene surroundings, making it a must-visit stop during a Delhi sightseeing tour.",
                timings: "08:00 AM – 06:00 PM (Closed on Mondays)"
            },
            {
                name: "Humayun's Tomb",
                image: humayuntomb,
                description: "Humayun's Tomb is a magnificent Mughal-era monument and a UNESCO World Heritage Site. Built in red sandstone with white marble detailing, it is known for its grand gardens and symmetrical architecture. This monument is considered the inspiration for the Taj Mahal and is a highlight of any Delhi sightseeing tour.",
                timings: "07:00 AM – 07:00 PM"
            },
            {
                name: "India Gate",
                image: indiagate,
                description: "India Gate is a historic war memorial dedicated to Indian soldiers who sacrificed their lives during World War I. Located in the heart of New Delhi, it is surrounded by lush lawns and looks especially beautiful in the evening, making it a popular stop during a Delhi city tour.",
                timings: "Open All Day"
            },
            {
                name: "Parliament House",
                image: parliamenthouse,
                description: "Parliament House is one of the most important government buildings in India and a key landmark of New Delhi. Known for its circular design and grand architecture, it is the seat of India's Parliament. Visitors usually view it from outside during a Delhi sightseeing tour by car.",
                timings: "External Viewing Only (As per Security Rules)"
            },
            {
                name: "Rashtrapati Bhavan",
                image: rashtrapati,
                description: "Rashtrapati Bhavan is the official residence of the President of India and one of the most iconic landmarks in New Delhi. Known for its majestic architecture and vast gardens, it reflects India's rich heritage and governance. During a Delhi sightseeing tour by car, visitors usually enjoy a scenic drive-past view of this grand building.",
                timings: "Drive-Past Viewing (As per Security Guidelines)"
            },
            {
                name: "Red Fort",
                image: redfort,
                description: "The Red Fort is a historic Mughal fort and a UNESCO World Heritage Site. Built with red sandstone, it served as the main residence of Mughal emperors. The fort reflects India's rich history and is one of the most visited attractions in Delhi.",
                timings: "07:00 AM – 05:00 PM (Closed on Mondays)"
            },
            {
                name: "Raj Ghat",
                image: rajghat,
                description: "Raj Ghat is a peaceful memorial dedicated to Mahatma Gandhi, the Father of the Nation. Located on the banks of the Yamuna River, it is a place of silence and reflection, surrounded by green gardens.",
                timings: "06:30 AM – 06:00 PM"
            },
            {
                name: "Akshardham Temple",
                image: akshardham,
                description: "Akshardham Temple is a grand Hindu temple complex known for its stunning architecture, spiritual exhibitions, and cultural displays. It beautifully represents India's ancient traditions, art, and values, making it a must-visit attraction.",
                timings: "10:00 AM – 06:30 PM (Closed on Mondays)"
            }
        ],
        itinerary: [
            {
                title: "Morning (9:00 AM – 12:30 PM)",
                content: "Pickup from hotel or home. Visit Qutub Minar, Lotus Temple, and Humayun's Tomb."
            },
            {
                title: "Afternoon (1:00 PM – 3:00 PM)",
                content: "Lunch break at a recommended local restaurant. Visit India Gate, Rashtrapati Bhavan, and Parliament House (Drive Pass)."
            },
            {
                title: "Evening (3:00 PM – 5:00 PM)",
                content: "Visit Red Fort (outside visit), Raj Ghat, and Akshardham Temple. Drop at hotel or preferred location."
            }
        ],
        whyChooseUs: [
            { title: "Comfort", description: "Air-conditioned vehicles, clean interiors, and smooth travel between attractions" },
            { title: "Privacy", description: "Enjoy the tour exclusively with your family, friends, or colleagues" },
            { title: "Flexibility", description: "Stop where you want, spend more time at favorite places, and customize the route" },
            { title: "Time Saving", description: "No waiting, no route confusion, and optimized sightseeing planning" },
            { title: "Professional Driver", description: "Experienced local drivers who know Delhi's roads, traffic patterns, and parking areas" }
        ],
        includes: [
            "AC Private Cab with Professional Driver",
            "Fuel, Parking and Toll Charges",
            "Driver Allowance",
            "8 Hours / 80 KM usage",
            "Pickup and Drop from Central Delhi"
        ],
        exclusions: [
            "Monument Entrance Fees",
            "Lunches and Food Expenses",
            "Guide Services",
            "Any Personal Expenses"
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹2200/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹2400/-", image: drizer },
            { name: "Ertiga (6+1)", price: "₹2900/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹3500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹4500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹7500/-", image: forcetempo }
        ],
        faqs: [
            {
                question: "How long does a full-day Delhi sightseeing tour take?",
                answer: "A typical full-day Delhi sightseeing tour by car takes about 8 to 10 hours. Most tours start around 9:00 AM and end by 6:00 PM or 7:00 PM."
            },
            {
                question: "What is included in a Delhi sightseeing tour by car?",
                answer: "A Delhi sightseeing tour by car usually includes a private vehicle with a driver, fuel charges, and visits to major attractions like India Gate, Qutub Minar, Red Fort, Lotus Temple, and more."
            },
            {
                question: "Which places are covered in the one-day Delhi sightseeing tour?",
                answer: "The tour covers Akshardham Temple, India Gate, Red Fort (Outside view), Jama Masjid, Raj Ghat, Humayun's Tomb, Lotus Temple, Qutub Minar, and Rashtrapati Bhavan (Drive Pass). The itinerary is customizable based on your preferences."
            },
            {
                question: "Can I customize my Delhi car sightseeing itinerary?",
                answer: "Yes! With Delhi Tour Cab, you have the freedom to choose which places you want to visit. You can add or remove spots based on your interests."
            },
            {
                question: "Do you offer Delhi sightseeing tours from NCR like Gurgaon or Noida?",
                answer: "Yes, we offer pick-up from anywhere in Delhi NCR, including Gurgaon, Noida, Ghaziabad, and Faridabad. Popular for weekend getaways."
            },
            {
                question: "Are monument entry tickets included in the package?",
                answer: "No. You can book your tickets in advance by visiting the official ASI portal to avoid long queues at the counter."
            },
            {
                question: "Is the Delhi Day tour available on all days of the week?",
                answer: "Yes, the Delhi Day tour is available throughout the week. However, please note that some popular monuments remain closed on Mondays. In such cases, we suggest suitable alternative attractions to ensure a complete and enjoyable sightseeing experience."
            },
            {
                question: "Is it safe for solo female travelers on a Delhi city tour?",
                answer: "Yes, safety is our biggest priority. All our drivers go through a strict background check. The cars are equipped with GPS tracking, and we stay in touch with our drivers throughout the day to ensure your safety."
            },
            {
                question: "Can the driver act as a tour guide?",
                answer: "Our drivers are local experts who know the routes and history well, but they are not licensed tour guides. They can provide basic information and tips, but they are not permitted to enter the monuments with you. If you need a professional guide, we can arrange one for an extra charge."
            },
            {
                question: "How can I book a Delhi sightseeing tour by car?",
                answer: "You can book by calling us, WhatsApping us, or filling out the inquiry form on our website. We suggest booking at least 24 hours in advance."
            }
        ],
        whatToExpect: "Your Delhi sightseeing tour package by car offers a comfortable, flexible, and well-planned way to explore the capital city. From the moment of pickup at your hotel, airport, or railway station, you will travel in a clean, air-conditioned private vehicle with a professional and experienced local driver. The tour covers the most popular attractions of Old Delhi and New Delhi, allowing ample time for sightseeing, photography, and short breaks. The itinerary is fully customizable, so you can add, skip, or spend more time at specific locations based on your interests and schedule. Expect a smooth and hassle-free experience, with convenient hotel-to-hotel pickup and drop, transparent tour duration, and flexible start times. Our drivers are familiar with Delhi routes and traffic conditions, ensuring efficient travel throughout the city.",
        tourTypes: [
            {
                title: "One Day Delhi Tour",
                description: "Covers major attractions of Old Delhi and New Delhi in a single day, ideal for travelers who want a complete city sightseeing experience."
            },
            {
                title: "2 Day Delhi Tour",
                description: "Allows relaxed sightseeing over two days, perfect for families and first-time visitors who prefer more time at each attraction."
            },
            {
                title: "Custom Delhi Tour",
                description: "Offers a flexible itinerary based on your interests, giving complete freedom and comfort with a private car and driver."
            }
        ],
        importantNotes: [
            "The Delhi sightseeing itinerary is fully customizable.",
            "Total tour duration is 8 hours (pickup to drop); extra hours are charged additionally.",
            "Tour start time is flexible as per your convenience.",
            "Red Fort, Lotus Temple, and Akshardham Temple are closed on Mondays."
        ]
    };

    return <TourDetailLayout {...tourData} />;
};

export default DelhiLocalSightseeing;
