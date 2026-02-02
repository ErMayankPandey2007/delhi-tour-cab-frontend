import {
    agra, drizer, innova, ertiga, forcetempo, wagonr, kiacerens, forceurbano,
    haridwar, mathura, vrindavan, rishikesh, jaipur, delhiBannerNew,
    albertHallMuseum, amberFort, cityPalace, jalMahal, jantarMantar, nahargarhFort,
    qutubMinar, lotustemple, humayuntomb, indiagate, parliamenthouse, rashtrapati, redfort, rajghat, akshardham,
    delhi, chandigarh, dehradun, ajmer,
    varanasi,
    ayodhya,
    prayagraj,
    rumidarvaja,
    amritsar
} from '../utils/images';
import {
    FaGem, FaFortAwesome, FaHistory, FaLeaf, FaShoppingBag, FaFileInvoiceDollar, FaUserTie,
    FaOm, FaWater, FaMountain, FaCheckCircle, FaStar, FaWind, FaSun, FaCrown, FaPalette,
    FaPray, FaHeart, FaUtensils,
    FaRoute,
    FaUsers,
    FaMapMarkerAlt,
    FaCar,
    FaMap,
    FaCloud,
    FaBinoculars,
    FaBuilding,
    FaSnowflake
} from 'react-icons/fa';

import { GiByzantinTemple } from "react-icons/gi";

export const toursData = {
    // delhi-to-agra-tour page

    'delhi-to-agra-tour': {
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
                image: agra,
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
        carss: [
            { name: "Hatchback WagonR (4+1)", price: "₹6,500/-", image: wagonr },
            { name: "Sedan Swift Dzire (4+1)", price: "₹7,000/-", image: drizer },
            { name: "Budget SUV Suzuki Ertiga (6+1)", price: "₹8,000/-", image: ertiga },
            { name: "Luxury SUV Kia carens (6+1)", price: "₹10,500/-", image: kiacerens },
            { name: "Luxury SUV Innova Crysta (6+1)", price: "₹12,500/-", image: innova },
            { name: "Tempo Traveller (12+1 / 17+1)", price: "₹7,500/", image: forcetempo }
        ]
    },

    // delhi-to-haridwar-tour page

    'delhi-to-haridwar-tour': {
        title: "Delhi to Haridwar Same Day Tour",
        bannerImage: haridwar,
        description: "Begin a soul-cleansing spiritual journey to the 'Gateway to God' with Delhi Tour Cab. Our Delhi to Haridwar Same Day Tour is designed to immerse you in the sacred atmosphere of one of India's seven holiest places. From the moment you leave Delhi in our premium AC fleet, you're on a path to peace. Witness the majestic Ganges, participate in the powerful evening Aarti at Har Ki Pauri, and explore ancient temples perched on the hills. Our professional chauffeurs, experienced in highway and interstate travel, ensure your pilgrimage is smooth, safe, and deeply revitalizing, allowing you to return to Delhi the same night with a heart full of blessings.",
        whatToExpect: "Your sacred day starts with an early morning pickup from your doorstep in Delhi/NCR. As we head towards the foothills of the Himalayas, relax in the comfort of our well-maintained vehicles. In Haridwar, expect a day of divine experiences—from a holy dip at Har Ki Pauri to a panoramic cable car ride to Mansa Devi Temple. Navigate through the vibrant local spiritual markets and find peace at the various holy ghats. The highlight of your trip will be the mesmerizing Ganga Aarti, a spectacle of faith and fire. With Delhi Tour Cab, every detail of your transport is managed with care, so your only focus is your spiritual connection.",
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
            { name: "Luxury SUV Kia carens (6+1)", price: "₹12,500/-", image: kiacerens },
            { name: "Luxury SUV Innova Crysta (6+1)", price: "₹13,500/-", image: innova },
            { name: "Tempo Traveller (12+1 / 17+1)", price: "₹7500", image: forcetempo }
        ]

    },

    // delhi-to-jaipur-tour page

    'delhi-to-jaipur-tour': {
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
            { name: "Luxury SUV Kia carens (6+1)", price: "₹12,500/-", image: kiacerens },
            { name: "Luxury SUV Innova Crysta (6+1)", price: "₹12,500/-", image: innova },
            { name: "Tempo Traveller (12+1 / 17+1)", price: "₹15,000", image: forcetempo }
        ]
    },
    'delhi-local-sightseeing': {
        title: "Delhi Sightseeing Tour by car",
        bannerImage: delhiBannerNew,
        description: `Explore India's capital in comfort with our Delhi Sightseeing Tour by car, the most convenient and flexible way to experience the city's rich history, iconic monuments, spiritual landmarks, and modern attractions in one well-planned trip. This private Delhi city tour is ideal for all tourists, families, couples, and corporate travelers who prefer a relaxed, hassle-free Delhi sightseeing experience.
        With Delhi Tour Cab, you travel in a clean, air-conditioned car driven by an experienced local chauffeur, allowing you to explore Delhi at your own pace. Unlike crowded public transport or fixed group tours, our customizable sightseeing itinerary gives you complete freedom to spend more time at the places you enjoy most, ensuring a smooth, comfortable, and memorable Delhi sightseeing experience. Our Delhi Sightseeing by car packages are designed to offer transparent pricing and excellent value for money. The tour cost depends on the type of vehicle selected, total tour duration (usually 8 hours), and the number of passengers. We provide flexible options to suit solo travelers, families, and groups looking for a comfortable Delhi city tour.`,
        highlights: [
            { title: "Private AC Taxi with an experienced and courteous driver", icon: FaUserTie },
            { title: "Flexible itinerary covering Old Delhi & New Delhi", icon: FaRoute },
            { title: "Ideal for families, couples, corporate travelers, and groups", icon: FaUsers },
            { title: "Convenient hotel/home/airport pickup and drop-off", icon: FaCar },
            { title: "Easy booking | Affordable pricing | 100% safe and comfortable ride", icon: FaCheckCircle },
            { title: "Places Covered: Qutub Minar, Lotus Temple, Humayun's Tomb, India Gate, Rashtrapati Bhavan, Parliament House, Red Fort, and Akshardham Temple", icon: FaMapMarkerAlt }
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
    },
    'delhi-to-mathura-vrindavan': {
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
    },
    'delhi-to-rishikesh-tour': {
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
    },
    'delhi-mathura-vrindavan-agra-tour': {
        title: "Delhi to Mathura, Vrindavan & Agra One Day Return Tour",
        bannerImage: agra,
        description: "Experience the ultimate spiritual and historical journey with Delhi Tour Cab's exclusive Mathura, Vrindavan, and Agra Same Day Tour. This meticulously planned itinerary allows you to witness the architectural brilliance of the Taj Mahal and the divine aura of Brij Bhoomi's most sacred temples, all in a single day. Our professional chauffeurs ensure a smooth, time-efficient travel experience, allowing you to focus on your darshan and sightseeing without any stress. Perfect for families, pilgrims, and history enthusiasts alike.",
        whatToExpect: "Your day begins with an early morning pickup from Delhi/NCR, heading straight to Agra via the Yamuna Expressway. After witnessing the morning glory of the Taj Mahal and exploring Agra Fort, we'll drive towards the sacred towns of Mathura and Vrindavan. Expect a soul-stirring visit to the Krishna Janmabhoomi in Mathura and the mesmerizing Bankey Bihari Temple and Prem Mandir in Vrindavan. With our reliable AC fleet and expert drivers, you'll cover these iconic landmarks comfortably and return to Delhi by night with a heart full of memories and blessings.",
        highlights: [
            { title: "Taj Mahal — The iconic symbol of love", icon: FaGem },
            { title: "Agra Fort — Majestic Mughal fortress", icon: FaFortAwesome },
            { title: "Krishna Janmabhoomi — Birthplace of Lord Krishna", icon: FaPray },
            { title: "Bankey Bihari Temple — Heart of Vrindavan devotion", icon: FaHeart },
            { title: "Prem Mandir — Stunning marble temple architecture", icon: FaStar },
            { title: "Yamuna Expressway — Fast and smooth travel", icon: FaRoute },
            { title: "All-Inclusive — Fuel, Driver, Toll & Parking", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Taj Mahal",
                image: agra,
                description: "The crown jewel of Mughal architecture and one of the Seven Wonders of the World. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.",
                timings: "06:00 AM – 06:30 PM (Closed on Fridays)"
            },
            {
                name: "Agra Fort",
                image: agra,
                description: "A UNESCO World Heritage site, this massive red sandstone fort was the main residence of the Mughal Emperors.",
                timings: "06:00 AM – 06:00 PM"
            },
            {
                name: "Krishna Janmabhoomi",
                image: mathura,
                description: "The sacred birthplace of Lord Krishna in Mathura, featuring a beautiful temple complex that radiates divine energy.",
                timings: "05:00 AM – 12:00 PM, 04:00 PM – 09:30 PM"
            },
            {
                name: "Bankey Bihari Temple",
                image: vrindavan,
                description: "One of the most famous and holiest temples in Vrindavan, dedicated to Lord Krishna. The deity is worshipped as a child.",
                timings: "07:30 AM – 01:00 PM, 05:30 PM – 09:30 PM"
            },
            {
                name: "Prem Mandir",
                image: vrindavan,
                description: "The 'Temple of Divine Love', a massive marble structure known for its intricate carvings and breathtaking evening light show.",
                timings: "08:30 AM – 12:30 PM, 04:30 PM – 10:00 PM"
            }
        ],
        itinerary: [
            {
                title: "5:00 AM: Departure from Delhi",
                content: "Early morning pickup from your location in Delhi/NCR to begin the journey to Agra."
            },
            {
                title: "8:30 AM: Taj Mahal Visit",
                content: "Explore the magnificent Taj Mahal with the morning light reflecting off its white marble."
            },
            {
                title: "11:00 AM: Agra Fort Exploration",
                content: "Visit the historic Agra Fort and learn about its rich Mughal history."
            },
            {
                title: "1:00 PM: Lunch Break",
                content: "Enjoy lunch at a local restaurant in Agra."
            },
            {
                title: "2:00 PM: Drive to Mathura",
                content: "Proceed towards Mathura, the land of Lord Krishna."
            },
            {
                title: "3:30 PM: Mathura Janmabhoomi",
                content: "Darshan at the Krishna Janmabhoomi temple complex."
            },
            {
                title: "5:30 PM: Vrindavan Temples",
                content: "Visit the Bankey Bihari Temple and the grand Prem Mandir to see its evening lighting."
            },
            {
                title: "8:00 PM: Return Journey",
                content: "Start the drive back to Delhi."
            },
            {
                title: "11:30 PM: Drop at Delhi",
                content: "Arrive back in Delhi and get dropped off at your location."
            }
        ],
        includes: [
            "AC Private car with Professional Driver",
            "Fuel, Tolls, Parking and State Taxes",
            "Multiple Pickup and Drop Points",
            "All-Inclusive Pricing"
        ],
        exclusions: [
            "Monument Entry Tickets",
            "Meals and Refreshments",
            "Guide Services",
            "Personal Expenses"
        ],
        importantNotes: [
            "Taj Mahal is closed on Fridays.",
            "Temples in Brij Bhoomi usually remain closed between 1:00 PM and 4:00 PM.",
            "Total duration: 16-18 hours.",
            "Advance Booking: ₹1000 required."
        ],
        faqs: [
            {
                question: "Is it possible to visit all three places in one day?",
                answer: "Yes, with an early start and efficient driving, we can comfortably cover the Taj Mahal, Agra Fort, and the major temples in Mathura and Vrindavan."
            },
            {
                question: "What is the best time to start this tour?",
                answer: "We recommend starting by 5:00 AM to avoid traffic and have enough time for all attractions."
            }
        ],
        tourTypes: [
            {
                title: "Spiritual & Heritage Combo",
                description: "A perfect mix of India's royal history and divine spirituality for families and groups."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹7,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹8,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹9,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹11,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹13,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹16,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹18,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹24,500/-", image: forceurbano }
        ]
    },
    'faridabad-to-agra-tour': {
        title: "Faridabad to Agra Same Day Return Tour",
        bannerImage: agra,
        description: "Experience the majestic beauty of the Taj Mahal with Delhi Tour Cab's premium Faridabad to Agra Same Day Tour. Starting from Faridabad, this tour is designed for those who want a quick yet comprehensive visit to India's most iconic city. Travel in comfort along the Yamuna Expressway and witness the ivory-white marble masterpiece, the Taj Mahal, and the grand Agra Fort. Our professional drivers ensure a safe and timely journey, making your day trip from Faridabad truly memorable.",
        whatToExpect: "Your journey begins with a morning pickup from your doorstep in Faridabad. Enjoy a fast and smooth drive on the Yamuna Expressway. In Agra, you'll visit the Taj Mahal, a symbol of eternal love, followed by the formidable Agra Fort. We also offer optional stops for local Mughlai cuisine and shopping for Agra's famous handicrafts and petha. After a fulfilling day of exploration, sit back and relax as we drive you back to Faridabad by night.",
        highlights: [
            { title: "Taj Mahal — The iconic seven wonder of the world", icon: FaGem },
            { title: "Agra Fort — UNESCO World Heritage Mughal site", icon: FaFortAwesome },
            { title: "Yamuna Expressway — Fast and seamless travel from Faridabad", icon: FaRoute },
            { title: "Local Shopping — Traditional marble art and Agra sweets", icon: FaShoppingBag },
            { title: "All-Inclusive — Fuel, Driver, Toll & Parking included", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Taj Mahal",
                image: agra,
                description: "Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, the Taj Mahal is a masterpiece of Mughal architecture and a UNESCO World Heritage site. Its white marble reflects beauty in every corner.",
                timings: "06:00 AM – 06:30 PM (Closed on Fridays)"
            },
            {
                name: "Agra Fort",
                image: agra,
                description: "Also known as the Red Fort of Agra, this massive structure was the main residence of the Mughal dynasty. It houses magnificent palaces and offers a great view of the Taj Mahal.",
                timings: "06:00 AM – 06:00 PM"
            }
        ],
        itinerary: [
            {
                title: "6:00 AM: Pickup from Faridabad",
                content: "Our professional driver will pick you up from your location in Faridabad to start the journey via Yamuna Expressway."
            },
            {
                title: "9:00 AM: Arrival in Agra & Taj Mahal Visit",
                content: "Reach Agra and proceed to the magnificent Taj Mahal for a guided or self-guided exploration."
            },
            {
                title: "12:00 PM: Agra Fort Exploration",
                content: "Visit the grand Agra Fort, exploring its beautiful courtyards and historical structures."
            },
            {
                title: "1:30 PM: Lunch & Local Market",
                content: "Enjoy a traditional lunch and explore local Agra markets for marble handicrafts and Petha."
            },
            {
                title: "4:00 PM: Departure for Faridabad",
                content: "Begin the return journey along the Yamuna Expressway."
            },
            {
                title: "7:00 PM: Drop at Faridabad",
                content: "Arrive back in Faridabad and get dropped off at your preferred location."
            }
        ],
        includes: [
            "AC Private car with Professional Driver",
            "Fuel, Tolls, Parking and State Taxes",
            "Doorstep Pickup and Drop in Faridabad",
            "No Hidden Charges"
        ],
        exclusions: [
            "Monument Entry Tickets",
            "Meals and Refreshments",
            "Guide Services",
            "Personal Expenses"
        ],
        importantNotes: [
            "Taj Mahal is closed on all Fridays.",
            "Total duration: 12-14 hours approx.",
            "Advance Booking: ₹1000 required to confirm.",
            "Pricing is all-inclusive for the specified vehicle type."
        ],
        faqs: [
            {
                question: "Is the Taj Mahal open on Fridays?",
                answer: "No, the Taj Mahal remains closed for general visitors on Fridays."
            },
            {
                question: "How long is the drive from Faridabad to Agra?",
                answer: "The drive usually takes about 2.5 to 3 hours via the Yamuna Expressway, depending on traffic."
            }
        ],
        tourTypes: [
            {
                title: "Comfortable Day Tour",
                description: "Relaxed and private tour from Faridabad focusing on the best of Agra's heritage."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹6,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹6,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹7,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹9,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹11,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹13,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹15,00/-", image: forcetempo },
            { name: "Force Urbania", price: "₹22,00/-", image: forceurbano }
        ]
    },
    'delhi-to-agra-fatehpur-sikri-tour': {
        title: "Delhi to Agra & Fatehpur Sikri Same Day Return Tour",
        bannerImage: agra,
        description: "Embark on a grand historical journey with Delhi Tour Cab's exclusive Delhi to Agra and Fatehpur Sikri Same Day Tour. This tour is perfectly crafted for heritage lovers, combining the eternal beauty of the Taj Mahal with the abandoned but perfectly preserved Mughal city of Fatehpur Sikri. Travel comfortably along the Yamuna Expressway in our premium AC car and explore the architectural wonders that defined the Mughal era. Our expert drivers and well-maintained fleet ensure you have a seamless and enriching experience.",
        whatToExpect: "Your day begins with an early morning pickup from Delhi/NCR. We'll head straight to Agra to witness the breathtaking Taj Mahal. After exploring the grand Agra Fort, we'll take a short drive to the historic city of Fatehpur Sikri, founded by Emperor Akbar. Witness the majestic Buland Darwaza and the serene tomb of Salim Chishti. This comprehensive tour allows you to cover two UNESCO World Heritage sites in a single day, returning to Delhi by night with unforgettable memories of India's royal past.",
        highlights: [
            { title: "Taj Mahal — The timeless monument of love", icon: FaGem },
            { title: "Agra Fort — Magnificent red sandstone fortress", icon: FaFortAwesome },
            { title: "Fatehpur Sikri — The legendary 'Ghost City' of Akbar", icon: FaMapMarkerAlt },
            { title: "Buland Darwaza — The highest gateway in the world", icon: FaCrown },
            { title: "Yamuna Expressway — Fast and smooth travel experience", icon: FaRoute },
            { title: "Doorstep Pickup — Convenient Delhi/NCR pickup and drop", icon: FaCar },
            { title: "All-Inclusive — Fuel, Driver, Toll & Parking included", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Taj Mahal",
                image: agra,
                description: "The crown jewel of Mughal architecture and one of the Seven Wonders of the World. Built by Emperor Shah Jahan for his wife Mumtaz Mahal.",
                timings: "06:00 AM – 06:30 PM (Closed on Fridays)"
            },
            {
                name: "Agra Fort",
                image: agra,
                description: "A UNESCO World Heritage site, this massive fort was the main residence of the Mughal Emperors before the capital shifted to Delhi.",
                timings: "06:00 AM – 06:00 PM"
            },
            {
                name: "Fatehpur Sikri",
                image: agra,
                description: "Founded by Akbar in 1571, this city served as the Mughal capital for 14 years. It is famous for its distinct blend of Indian and Persian architecture.",
                timings: "06:00 AM – 06:00 PM"
            },
            {
                name: "Buland Darwaza",
                image: agra,
                description: "The 'Gate of Victory', built by Akbar to commemorate his victory over Gujarat. It serves as the main entrance to the Jama Masjid at Fatehpur Sikri.",
                timings: "06:00 AM – 06:00 PM"
            }
        ],
        itinerary: [
            {
                title: "5:30 AM: Pickup from Delhi",
                content: "Early morning pickup from your home/hotel in Delhi/NCR to maximize your sightseeing time."
            },
            {
                title: "9:00 AM: Taj Mahal Exploration",
                content: "Arrival in Agra and visit to the magnificent Taj Mahal."
            },
            {
                title: "11:30 AM: Agra Fort Visit",
                content: "Explore the historic Agra Fort and its royal chambers."
            },
            {
                title: "1:30 PM: Lunch Break",
                content: "Enjoy a delicious lunch at one of Agra's renowned Mughlai restaurants."
            },
            {
                title: "2:30 PM: Drive to Fatehpur Sikri",
                content: "A short 1-hour drive (approx. 40km) to the historic city of Fatehpur Sikri."
            },
            {
                title: "3:30 PM: Fatehpur Sikri Sightseeing",
                content: "Visit Buland Darwaza, Jama Masjid, Jodha Bai's Palace, and the Tomb of Salim Chishti."
            },
            {
                title: "6:00 PM: Return Journey",
                content: "Start the drive back to Delhi via Yamuna Expressway."
            },
            {
                title: "10:00 PM: Drop at Delhi",
                content: "Arrive back in Delhi and get dropped off at your location."
            }
        ],
        includes: [
            "Private AC car with Professional Driver",
            "Doorstep Pickup and Drop-off",
            "Fuel, Toll Taxes, and Parking Fees",
            "All State Taxes and Driver Allowance"
        ],
        exclusions: [
            "Monument Entrance Fees",
            "Personal Expenses & Tips",
            "Meals and Drinks",
            "Professional Guide Fees"
        ],
        importantNotes: [
            "Taj Mahal is closed on Fridays.",
            "Fatehpur Sikri is approximately 40km from Agra city.",
            "Total duration: 16-17 hours approx.",
            "Advance booking of ₹1000 is required."
        ],
        faqs: [
            {
                question: "How far is Fatehpur Sikri from Agra?",
                answer: "Fatehpur Sikri is about 40 km from Agra, which takes approximately 1 hour by road."
            },
            {
                question: "Is this tour suitable for senior citizens?",
                answer: "Yes, we provide comfortable AC car and the itinerary can be adjusted to a slower pace if needed."
            }
        ],
        tourTypes: [
            {
                title: "Grand Mughal Heritage",
                description: "A comprehensive tour covering the best of Mughal architecture in Agra and its surroundings."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹7,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹8,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹9,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹11,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹13,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹16,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹18,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹24,500/-", image: forceurbano }
        ]
    },
    "noida-greater-noida-to-agra-same-day-return-tour": {
        title: "Noida/Greater Noida to Agra Same Day Return Tour by Cab",
        bannerImage: agra,
        description: "Embark on an unforgettable same-day journey from Noida or Greater Noida to the historic city of Agra. Experience the timeless beauty of the Taj Mahal, the grandeur of Agra Fort, and the charming markets of the city, all in the comfort of a private premium cab.",
        highlights: [
            "Taj Mahal - The Symbol of Love",
            "Agra Fort - A UNESCO World Heritage Site",
            "Itmad-ud-Daulah (Baby Taj)",
            "Local Handicraft and Marble Markets",
            "Mehtab Bagh for Sunset Views"
        ],
        placesCovered: ["Taj Mahal", "Agra Fort", "Itmad-ud-Daulah", "Mehtab Bagh"],
        placesWithDetails: [
            {
                name: "Taj Mahal",
                image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
                description: "An architectural masterpiece and one of the Seven Wonders of the World, built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.",
                timings: "06:00 AM – 06:30 PM (Closed on Fridays)"
            },
            {
                name: "Agra Fort",
                image: agra,
                description: "A massive 16th-century red sandstone fortress that served as the main residence of the emperors of the Mughal Dynasty.",
                timings: "06:00 AM – 06:00 PM"
            }
        ],
        itinerary: [
            {
                title: "6:00 AM: Pickup from Noida/Greater Noida",
                content: "Our driver will pick you up from your doorstep in Noida or Greater Noida for a comfortable drive via Yamuna Expressway."
            },
            {
                title: "9:30 AM: Arrival in Agra & Taj Mahal Visit",
                content: "Reach Agra and meet your guide (optional). Direct visit to the breathtaking Taj Mahal."
            },
            {
                title: "12:00 PM: Agra Fort Exploration",
                content: "Visit the historic Agra Fort and explore its stunning palaces and mosques."
            },
            {
                title: "1:30 PM: Lunch Break",
                content: "Enjoy a traditional Mughal lunch at a local restaurant."
            },
            {
                title: "2:30 PM: Itmad-ud-Daulah (Baby Taj)",
                content: "Visit the tomb of Itmad-ud-Daulah, often referred to as the 'Draft of the Taj Mahal'."
            },
            {
                title: "4:00 PM: Local Shopping & Mehtab Bagh",
                content: "Explore Agra's famous marble inlay work and enjoy sunset views of the Taj Mahal from Mehtab Bagh."
            },
            {
                title: "6:00 PM: Return Drive",
                content: "Begin your return journey to Noida/Greater Noida."
            },
            {
                title: "9:30 PM: Drop at Location",
                content: "Arrive back in Noida/Greater Noida and get dropped off at your residence."
            }
        ],
        includes: [
            "Private AC Cab with Professional Driver",
            "Doorstep Pickup and Drop-off",
            "All-inclusive Tolls, Fuel, and Parking",
            "No Hidden Charges"
        ],
        exclusions: [
            "Monument Entrance Tickets",
            "Meals and Drinks",
            "Professional Guide Fees",
            "Personal Expenses"
        ],
        importantNotes: [
            "Taj Mahal is closed on every Friday.",
            "Please carry a valid government ID proof.",
            "Comfortable walking shoes are recommended.",
            "Tour duration: Approx 14-16 hours."
        ],
        faqs: [
            {
                question: "Can the pickup location be changed within Noida?",
                answer: "Yes, we provide door-to-door pickup from any location within Noida and Greater Noida at no extra cost."
            },
            {
                question: "Do you provide guides in Agra?",
                answer: "Yes, we can arrange a professional licensed guide on request at an additional cost."
            }
        ],
        tourTypes: [
            {
                title: "Heritage Tour",
                description: "Focuses on the rich history and architecture of the Mughal era."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹6,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹7,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹8,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹10,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹12,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹13,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹15,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹22,500/-", image: forceurbano }
        ]
    },
    "ghaziabad-to-agra-same-day-return-tour": {
        title: "Ghaziabad to Agra Same Day Return Tour by Cab",
        bannerImage: agra,
        description: "Experience the magic of Agra with a same-day return tour from Ghaziabad. Witness the grandeur of the Taj Mahal and Agra Fort with our premium cab services, ensuring a comfortable and memorable day trip.",
        highlights: [
            "Taj Mahal - The Majestic Symbol of Love",
            "Agra Fort - Historic Mughal Fortress",
            "Itmad-ud-Daulah (Baby Taj)",
            "Local Artisans & Marble Work Shops",
            "Yamuna Expressway Scenic Drive"
        ],
        placesCovered: ["Taj Mahal", "Agra Fort", "Itmad-ud-Daulah", "Mehtab Bagh"],
        placesWithDetails: [
            {
                name: "Taj Mahal",
                image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
                description: "The world-renowned white marble mausoleum, a testament to eternal love and one of the finest examples of Mughal architecture.",
                timings: "06:00 AM – 06:30 PM (Closed on Fridays)"
            },
            {
                name: "Agra Fort",
                image: agra,
                description: "A historic fort in the city of Agra in India. It was the main residence of the emperors of the Mughal Dynasty until 1638.",
                timings: "06:00 AM – 06:00 PM"
            }
        ],
        itinerary: [
            {
                title: "6:00 AM: Pickup from Ghaziabad",
                content: "Professional driver will pick you up from your location in Ghaziabad (Indirapuram, Vaishali, Vasundhara, etc.)."
            },
            {
                title: "9:30 AM: Reach Agra & Visit Taj Mahal",
                content: "Arrival in Agra and direct entry to the Taj Mahal to avoid long queues."
            },
            {
                title: "12:00 PM: Agra Fort Sightseeing",
                content: "Explore the vast courtyards and intricate carvings of the Agra Fort."
            },
            {
                title: "1:30 PM: Traditional Lunch",
                content: "Break for a delicious lunch at a top-rated local restaurant."
            },
            {
                title: "2:30 PM: Itmad-ud-Daulah & Shopping",
                content: "Visit the delicate Baby Taj and explore local markets for leather and marble crafts."
            },
            {
                title: "5:30 PM: Departure from Agra",
                content: "Begin the return journey via the smooth Yamuna Expressway."
            },
            {
                title: "9:00 PM: Drop at Ghaziabad",
                content: "Safely arrive back at your destination in Ghaziabad."
            }
        ],
        includes: [
            "Private AC Cab with Professional Driver",
            "Doorstep Pickup and Drop-off",
            "Fuel, Toll Taxes, and Parking Charges",
            "All State Taxes"
        ],
        exclusions: [
            "Monument Entry Tickets",
            "Meals and Personal Expenses",
            "Guide Fees (Optional)",
            "Tips for Driver"
        ],
        importantNotes: [
            "Taj Mahal is closed on Fridays.",
            "Suggested start time is 6:00 AM for maximum sightseeing.",
            "Distance: Approx 200 km (one way).",
            "Carry a valid ID proof."
        ],
        faqs: [
            {
                question: "Do you pick up from Indirapuram and Vaishali?",
                answer: "Yes, we provide door-to-door pickup from all areas in Ghaziabad including Indirapuram, Vaishali, and Vasundhara."
            },
            {
                question: "Is the Expressway toll included in the price?",
                answer: "Yes, the price is all-inclusive of toll taxes, parking, and fuel."
            }
        ],
        tourTypes: [
            {
                title: "Day Trip",
                description: "Perfect for those looking for a quick yet comprehensive visit to Agra."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹6,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹7,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹8,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹10,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹12,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹13,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹15,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹22,500/-", image: forceurbano }
        ]
    },
    "gurgaon-to-agra-same-day-return-tour": {
        title: "Gurgaon to Agra Same Day Return Tour by Cab",
        bannerImage: agra,
        description: "Enjoy a premium day trip from Gurgaon to Agra. Travel in comfort through the Peripheral or Yamuna Expressway to witness the iconic Taj Mahal, Agra Fort, and more. Perfect for a quick family getaway or business break.",
        highlights: [
            "Taj Mahal - The World's Finest Symbol of Love",
            "Agra Fort - A UNESCO Heritage Site",
            "Mehtab Bagh - Spectacular River Views",
            "Itmad-ud-Daulah (Baby Taj)",
            "Hassle-free Drive via KMP/Expressway"
        ],
        placesCovered: ["Taj Mahal", "Agra Fort", "Itmad-ud-Daulah", "Mehtab Bagh"],
        placesWithDetails: [
            {
                name: "Taj Mahal",
                image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
                description: "The white marble mausoleum, a masterpiece of architectural brilliance and a symbol of everlasting love.",
                timings: "06:00 AM – 06:30 PM (Closed on Fridays)"
            },
            {
                name: "Agra Fort",
                image: agra,
                description: "Built by Emperor Akbar, this fort is an architectural wonder and was once the center of the Mughal Empire.",
                timings: "06:00 AM – 06:00 PM"
            }
        ],
        itinerary: [
            {
                title: "6:00 AM: Pickup from Gurgaon",
                content: "Our driver will pick you up from your residence or hotel in Gurgaon (Cyber City, Golf Course Road, Sohna Road, etc.)."
            },
            {
                title: "9:30 AM: Arrival in Agra & Taj Mahal Tour",
                content: "Arrive in Agra and head straight to the Taj Mahal for a guided sightseeing session."
            },
            {
                title: "12:00 PM: Agra Fort Sightseeing",
                content: "Visit the massive Agra Fort and discover its fascinating history."
            },
            {
                title: "1:30 PM: Lunch at Agra",
                content: "Time for a delicious lunch at a popular Mughlai restaurant."
            },
            {
                title: "2:30 PM: Baby Taj Visit",
                content: "Explore the beautiful tomb of Itmad-ud-Daulah, often called the 'Baby Taj'."
            },
            {
                title: "4:00 PM: Evening Views & Shopping",
                content: "Sunset views from Mehtab Bagh and a visit to local shops for unique Agra souvenirs."
            },
            {
                title: "6:00 PM: Return Drive to Gurgaon",
                content: "Relax in your private cab as we drive you back to Gurgaon."
            },
            {
                title: "9:30 PM: Drop at Gurgaon",
                content: "Reach your location in Gurgaon safely."
            }
        ],
        includes: [
            "Private AC Cab with Professional Driver",
            "Doorstep Pickup and Drop-off",
            "All-inclusive Tolls, Fuel, and Parking",
            "No Hidden Charges"
        ],
        exclusions: [
            "Monument Entrance Fees",
            "Personal Expenses and Meals",
            "Guide Charges (Available on request)",
            "Driver Tips"
        ],
        importantNotes: [
            "Taj Mahal is closed on all Fridays.",
            "Distance: Approx 200-220 km (one way).",
            "Total tour duration: 15-16 hours.",
            "Please keep a photo ID ."
        ],
        faqs: [
            {
                question: "Do you pick up from Manesar or Sohna Road?",
                answer: "Yes, we provide pickup from all parts of Gurgaon, including Manesar and Sohna Road."
            },
            {
                question: "Can we customize the tour start time?",
                answer: "Yes, you can choose your preferred start time between 5:00 AM and 8:00 AM."
            }
        ],
        tourTypes: [
            {
                title: "City Break",
                description: "A well-planned day trip to refresh yourself with a dose of Indian history."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹6,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹7,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹8,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹10,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹12,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹13,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹15,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹22,500/-", image: forceurbano }
        ]
    },
    "gurgaon-to-mathura-same-day-return-tour": {
        title: "Gurgaon to Mathura Same Day Return Tour by Cab",
        bannerImage: mathura,
        description: "Experience the spiritual bliss of Brij Bhoomi with our same-day return tour from Gurgaon to Mathura and Vrindavan. Journey through the expressways to reach the holy land where Lord Krishna was born and raised. Ideal for families seeking a peaceful and divine pilgrimage.",
        highlights: [
            "Shri Krishna Janmabhoomi - The Birthplace of Lord Krishna",
            "Bankey Bihari Temple - Experience Divine Devotion",
            "Prem Mandir - Stunning Marble Architecture & Lighting",
            "ISKCON Temple Vrindavan - Spiritual Harmony",
            "Dwarkadhish Temple & Vishram Ghat Mathura"
        ],
        placesCovered: ["Mathura", "Vrindavan", "Gokul", "Barsana"],
        placesWithDetails: [
            {
                name: "Shri Krishna Janmabhoomi",
                image: mathura,
                description: "The most sacred site in Mathura, where Lord Krishna was born. The complex includes the prison cell and a magnificent temple.",
                timings: "05:00 AM – 12:00 PM, 04:00 PM – 09:00 PM"
            },
            {
                name: "Prem Mandir",
                image: vrindavan,
                description: "A colossal temple complex dedicated to Radha Krishna and Sita Ram, famous for its intricate marble carvings and musical fountains.",
                timings: "05:30 AM – 12:00 PM, 04:30 PM – 08:30 PM"
            }
        ],
        itinerary: [
            {
                title: "6:00 AM: Pickup from Gurgaon",
                content: "Early morning pickup from your doorstep in Gurgaon for a comfortable drive towards Mathura."
            },
            {
                title: "9:00 AM: Mathura Sightseeing",
                content: "Visit Krishna Janmabhoomi temple and spend time at the holy Ghats of Mathura."
            },
            {
                title: "11:30 AM: Drive to Vrindavan",
                content: "A short drive to the land of temples, Vrindavan."
            },
            {
                title: "12:00 PM: Bankey Bihari Darshan",
                content: "Visit the world-famous Bankey Bihari Temple for a spiritual experience."
            },
            {
                title: "1:30 PM: Traditional Brij Lunch",
                content: "Enjoy authentic local food and famous Mathura Pedas."
            },
            {
                title: "3:00 PM: Nidhivan & ISKCON Temple",
                content: "Explore the mysterious Nidhivan and the serene ISKCON temple complex."
            },
            {
                title: "5:30 PM: Prem Mandir Evening View",
                content: "Witness the magical lighting and carvings of Prem Mandir as evening sets in."
            },
            {
                title: "7:00 PM: Return Drive",
                content: "Start your return journey back to Gurgaon."
            },
            {
                title: "10:00 PM: Drop at Gurgaon",
                content: "Arrive back at your residence in Gurgaon."
            }
        ],
        includes: [
            "Private AC Cab with Experienced Driver",
            "Doorstep Pickup and Drop-off",
            "All State Tolls, Parking, and Fuel",
            "Transparent Fixed Pricing"
        ],
        exclusions: [
            "Temple Entry Donation/Tickets",
            "Personal Expenses & Meals",
            "Special Pooja Booking Fees",
            "Driver Tips"
        ],
        importantNotes: [
            "Temples are usually closed between 12:00 PM and 4:00 PM.",
            "Distance: Approx 180 km (one way).",
            "Comfortable footwear is recommended for temple visits.",
            "Carry a valid government ID."
        ],
        faqs: [
            {
                question: "Do you provide pickup from Gurgaon Sectors?",
                answer: "Yes, we provide pickup from all sectors of Gurgaon and nearby areas like Sohna and Manesar."
            },
            {
                question: "Can we visit Gokul along with Mathura?",
                answer: "Yes, we can customize the itinerary to include Gokul or Barsana on request."
            }
        ],
        tourTypes: [
            {
                title: "Spiritual Path",
                description: "A tour designed for devotees wanting to visit all major temples in a single day."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹5,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹5,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹7,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹8,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹9,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹12,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹13,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹18,500/-", image: forceurbano }
        ]
    },
    "noida-greater-noida-to-mathura-one-day-tour": {
        title: "Noida/Greater Noida to Mathura Vrindavan One Day Tour by car",
        bannerImage: mathura,
        description: "Embark on a soul-stirring one-day pilgrimage from Noida or Greater Noida to the holy cities of Mathura and Vrindavan. Known as Brij Bhoomi, these twin cities are the heart of Krishna devotion. Our premium car service ensures a comfortable and timely journey, allowing you to immerse yourself in the divine energy of the temples and the holy Yamuna river.",
        highlights: [
            "Shri Krishna Janmabhoomi (Mathura) - The Birthplace of Lord Krishna",
            "Bankey Bihari Temple (Vrindavan) - Experience Deep Spiritual Bliss",
            "Prem Mandir - A Breathtaking Marble Architecture with Evening Lights",
            "ISKCON Temple - Serene Spiritual Harmony and Chanting",
            "Dwarkadhish Temple & Vishram Ghat - Iconic Sights of Mathura"
        ],
        placesCovered: ["Mathura Janmabhoomi", "Dwarkadhish Temple", "Bankey Bihari Temple", "Prem Mandir", "ISKCON Temple", "Nidhivan"],
        placesWithDetails: [
            {
                name: "Krishna Janmabhoomi",
                image: mathura,
                description: "The most sacred site in Mathura, where Lord Krishna was born. The prison cell and the grand temple complex attract millions of devotees.",
                timings: "05:00 AM – 12:00 PM, 04:00 PM – 09:30 PM"
            },
            {
                name: "Prem Mandir",
                image: vrindavan,
                description: "Maintained by Jagadguru Kripalu Parishat, this temple is famous for its intricate marble carvings, musical gardens, and spectacular evening lighting.",
                timings: "08:30 AM – 12:00 PM, 04:30 PM – 08:30 PM"
            }
        ],
        itinerary: [
            {
                title: "6:30 AM: Pickup from Noida/Greater Noida",
                content: "Our professional driver will pick you up from your location in Noida or Greater Noida (Sector 18, 62, Gaur City, etc.)."
            },
            {
                title: "9:00 AM: Entry to Mathura",
                content: "Reach Mathura and visit the Shri Krishna Janmabhoomi Temple and Dwarkadhish Temple."
            },
            {
                title: "11:30 AM: Drive to Vrindavan",
                content: "Proceed to Vrindavan, the land of Radha-Krishna's eternal love."
            },
            {
                title: "12:00 PM: Bankey Bihari Darshan",
                content: "Visit the famous Bankey Bihari Temple (Note: Please check temple slot timings as they vary)."
            },
            {
                title: "1:30 PM: Lunch Break",
                content: "Enjoy a delicious vegetarian meal at a recommended restaurant in Vrindavan."
            },
            {
                title: "2:30 PM: Nidhivan & ISKCON Temple",
                content: "Explore the mysterious Nidhivan and the peaceful ISKCON temple complex."
            },
            {
                title: "5:30 PM: Prem Mandir Spectacular",
                content: "Admire the beauty of Prem Mandir as it lights up in the evening. Experience the musical fountain."
            },
            {
                title: "7:00 PM: Departure for Noida",
                content: "Begin the return journey with stops for snacks if needed."
            },
            {
                title: "9:30 PM: Drop at Noida/Greater Noida",
                content: "Safely arrive back at your destination."
            }
        ],
        includes: [
            "Private AC car for the Entire Day",
            "Doorstep Pickup and Drop-off",
            "All-inclusive: Fuel, Tolls, and Parking",
            "Dedicated Professional Driver"
        ],
        exclusions: [
            "Temple Donation/Pooja Charges",
            "Entrance Tickets (if any)",
            "Personal Meals and Shopping",
            "Tips for Driver and Guides"
        ],
        importantNotes: [
            "Vrindavan temples often close between 1:00 PM and 4:30 PM.",
            "Suggested start time: 6:00 AM to 7:00 AM.",
            "Total journey time: Approx 140 km from Noida (2.5 - 3 hours).",
            "Respect local temple dress codes and photography rules."
        ],
        faqs: [
            {
                question: "Do you pick up from Greater Noida West/Gaur City?",
                answer: "Yes, we provide pickup and drop-off across all sectors of Noida and Greater Noida, including Greater Noida West."
            },
            {
                question: "Is the Yamuna Expressway toll included?",
                answer: "Yes, the price is fully inclusive of all toll taxes and expressway charges."
            }
        ],
        tourTypes: [
            {
                title: "Devotional One-Day",
                description: "A fast-paced yet fulfilling day trip covering all the major spiritual highlights of Mathura and Vrindavan."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹5,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹5,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹7,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹8,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹9,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹12,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹13,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹18,500/-", image: forceurbano }
        ]
    },
    "gurgaon-to-delhi-local-sightseeing-tour": {
        title: "Gurgaon to Delhi Local Sightseeing Tour by car",
        bannerImage: delhiBannerNew,
        description: "Explore the historic and modern heart of India with our exclusive Gurgaon to Delhi local sightseeing tour. From majestic Mughal monuments to colonial landmarks and spiritual centers, experience the best of Delhi with a private premium cab. We provide doorstep pickup from anywhere in Gurgaon for a hassle-free day trip.",
        highlights: [
            "Visit Qutub Minar - A UNESCO World Heritage Site",
            "Lotus Temple - Famous for its flower-like architecture",
            "India Gate & Rashtrapati Bhavan - Colonial Icons",
            "Akshardham Temple - A spiritual & cultural marvel",
            "Explore the bustling streets and history of Old Delhi"
        ],
        placesCovered: ["Qutub Minar", "Lotus Temple", "India Gate", "Akshardham Temple", "Humayun's Tomb", "Red Fort"],
        placesWithDetails: [
            {
                name: "Qutub Minar",
                image: qutubMinar,
                description: "The tallest brick minaret in the world, standing at 72.5 meters. It is an incredible example of Indo-Islamic architecture.",
                timings: "07:00 AM – 07:00 PM"
            },
            {
                name: "India Gate",
                image: indiagate,
                description: "A war memorial dedicated to the soldiers of the Indian Army who died in the First World War.",
                timings: "Open 24/7"
            }
        ],
        itinerary: [
            {
                title: "8:30 AM: Pickup from Gurgaon",
                content: "Our driver will pick you up from your location in Gurgaon (DLF, Cyber City, MG Road, etc.)."
            },
            {
                title: "10:00 AM: Visit Qutub Minar",
                content: "Start your tour with the historic Qutub Minar complex."
            },
            {
                title: "11:30 AM: Lotus Temple",
                content: "Head to the serene Lotus Temple for peaceful contemplation."
            },
            {
                title: "1:00 PM: Lunch Break",
                content: "Lunch at a top-rated restaurant in Chanakyapuri or Connaught Place."
            },
            {
                title: "2:00 PM: India Gate & Rashtrapati Bhavan",
                content: "Drive past the magnificent President's House and stop for photos at India Gate."
            },
            {
                title: "3:30 PM: Humayun's Tomb",
                content: "Explore the precursor to the Taj Mahal, the majestic Humayun's Tomb."
            },
            {
                title: "5:30 PM: Akshardham Temple",
                content: "End your day at the stunning Akshardham Temple complex (Closed on Mondays)."
            },
            {
                title: "7:00 PM: Return Drive to Gurgaon",
                content: "Head back to your destination in Gurgaon."
            }
        ],
        includes: [
            "Private AC Cab with Professional Driver",
            "Door-to-door Pickup and Drop-off",
            "Fuel, Parking, and Toll Taxes",
            "8 Hours / 80 KM Local Usage (Extendable)"
        ],
        exclusions: [
            "Monument Entry Tickets",
            "Meals and Personal Expenses",
            "Guide Fee",
            "Driver Tips"
        ],
        importantNotes: [
            "Most museums and some temples are closed on Mondays.",
            "Suggested start time is between 8:00 AM and 9:00 AM.",
            "Plan for traffic during peak hours.",
            "Respect dress codes at religious sites."
        ],
        faqs: [
            {
                question: "Do you pick up from Gurgaon corporate offices?",
                answer: "Yes, we provide pickup from all office complexes including Cyber City, Two Horizon, and DLF Cyber Hub."
            },
            {
                question: "Can we extend the tour beyond 8 hours?",
                answer: "Yes, extra hours and kilometers are available at nominal additional charges."
            }
        ],
        tourTypes: [
            {
                title: "City Explorer",
                description: "The ideal way to see Delhi's major highlights in a single day from Gurgaon."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹2,800/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹3,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹5,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹8,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹9,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹12,500/-", image: forceurbano }
        ]
    },
    "noida-to-delhi-local-sightseeing-tour": {
        title: "Noida to Delhi Local Sightseeing Tour by car",
        bannerImage: delhiBannerNew,
        description: "Explore the vibrant capital of India with a personalized Noida to Delhi local sightseeing tour. From the historical charm of Old Delhi to the architectural brilliance of New Delhi, our private cab service offers a comfortable and flexible way to visit all major monuments and attractions. We provide doorstep pickup from all sectors of Noida and Greater Noida.",
        highlights: [
            "Qutub Minar - Explore the world's tallest brick minaret",
            "Lotus Temple - Witness the architectural beauty of the Baha'i House of Worship",
            "India Gate & Kartavya Path - Iconic symbols of the nation's pride",
            "Red Fort & Jama Masjid - Dive into the rich Mughal history of Old Delhi",
            "Akshardham Temple - Experience a spiritual and cultural extravaganza"
        ],
        placesCovered: ["Qutub Minar", "Lotus Temple", "India Gate", "Red Fort", "Humayun's Tomb", "Akshardham Temple"],
        placesWithDetails: [
            {
                name: "Qutub Minar",
                image: qutubMinar,
                description: "A UNESCO World Heritage Site and an architectural masterpiece reflecting the Indo-Islamic style.",
                timings: "07:00 AM – 08:30 PM"
            },
            {
                name: "Lotus Temple",
                image: lotustemple,
                description: "Famous for its flowerlike shape, this temple serves as the Mother Temple of the Indian subcontinent.",
                timings: "08:30 AM – 06:00 PM (Closed on Mondays)"
            }
        ],
        itinerary: [
            {
                title: "9:00 AM: Pickup from Noida",
                content: "Our driver will pick you up from your home or office in Noida (Sector 18, 62, 137, etc.) or Greater Noida."
            },
            {
                title: "10:30 AM: Qutub Minar Visit",
                content: "Begin your sightseeing with the ancient Qutub Minar complex."
            },
            {
                title: "12:00 PM: Lotus Temple",
                content: "Visit the serene Lotus Temple for a peaceful atmosphere."
            },
            {
                title: "1:30 PM: Authentic Delhi Lunch",
                content: "Lunch break at a popular local restaurant or food court in Connaught Place."
            },
            {
                title: "2:30 PM: India Gate & Rashtrapati Bhavan",
                content: "Stop for photos at India Gate and drive through the majestic Rajpath (Kartavya Path)."
            },
            {
                title: "4:00 PM: Humayun's Tomb",
                content: "Explore the beautiful gardens and architecture of this Mughal-era masterpiece."
            },
            {
                title: "5:30 PM: Akshardham Temple",
                content: "Visit the grand Akshardham Temple for its evening cultural appeal (Note: Closed on Mondays)."
            },
            {
                title: "7:30 PM: Return Drive to Noida",
                content: "Safe and comfortable return to your destination."
            }
        ],
        includes: [
            "Private AC Cab for the Full Day",
            "Doorstep Pickup and Drop across Noida",
            "All State Tolls, Fuel, and Parking Charges",
            "Experienced and Polite Local Driver"
        ],
        exclusions: [
            "Monument Entrance Tickets",
            "Lunches and Personal Food",
            "Guide Fees (Optional)",
            "Driver Tips"
        ],
        importantNotes: [
            "Monuments like Red Fort and Lotus Temple are closed on Mondays.",
            "Normal tour duration is 8 hours / 80 KM.",
            "Extra hours and kilometers are charged at standard rates.",
            "Carry a valid ID and comfortable walking shoes."
        ],
        faqs: [
            {
                question: "Do you pick up from Greater Noida sectors?",
                answer: "Yes, we provide door-to-door pickup from all sectors of Noida and Greater Noida."
            },
            {
                question: "Can we visit Chandni Chowk during the tour?",
                answer: "Yes, we can customize the itinerary to include Old Delhi areas on request."
            }
        ],
        tourTypes: [
            {
                title: "Capital Discovery",
                description: "The perfect way to cover all major tourist icons of Delhi in a single day starting from Noida."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹3,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,400/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹3,900/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹5,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹8,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹9,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹12,500/-", image: forceurbano }
        ]
    },
    "ghaziabad-to-delhi-local-sightseeing-tour": {
        title: "Ghaziabad to Delhi Local Sightseeing Tour by car",
        bannerImage: delhiBannerNew,
        description: "Discover the heritage and culture of India's capital with our personalized Ghaziabad to Delhi local sightseeing tour. From the historic landmarks of Old Delhi to the majestic architecture of New Delhi, our private cab service offers a comfortable and flexible way to explore the city. We provide doorstep pickup from all areas of Ghaziabad including Indirapuram, Vaishali, and Kaushambi.",
        highlights: [
            "Qutub Minar - The world's tallest brick minaret and a UNESCO site",
            "Lotus Temple - A peaceful architectural masterpiece",
            "India Gate & Kartavya Path - The heart of India's capital",
            "Red Fort - Iconic symbol of Mughal power and history",
            "Akshardham Temple - A stunning blend of spirituality and art"
        ],
        placesCovered: ["Qutub Minar", "Lotus Temple", "India Gate", "Red Fort", "Humayun's Tomb", "Akshardham Temple"],
        placesWithDetails: [
            {
                name: "Qutub Minar",
                image: qutubMinar,
                description: "An ancient Victory Tower that is a masterpiece of Mughal architecture.",
                timings: "07:00 AM – 08:00 PM"
            },
            {
                name: "India Gate",
                image: indiagate,
                description: "A memorial dedicated to the soldiers of the Indian Army who died in World War I.",
                timings: "Open 24/7"
            }
        ],
        itinerary: [
            {
                title: "9:00 AM: Pickup from Ghaziabad",
                content: "Our driver will pick you up from your home or hotel in Ghaziabad (Indirapuram, Vaishali, Raj Nagar, etc.)."
            },
            {
                title: "10:30 AM: Explore Qutub Minar",
                content: "Begin your day with a visit to the historic Qutub Minar complex."
            },
            {
                title: "12:00 PM: Lotus Temple",
                content: "Visit the serene Lotus Temple (Closed on Mondays)."
            },
            {
                title: "1:30 PM: Lunch Break",
                content: "Enjoy lunch at a local restaurant or cafe in Central Delhi."
            },
            {
                title: "2:30 PM: India Gate & Memorials",
                content: "Stop for photos at India Gate and drive past Rashtrapati Bhavan."
            },
            {
                title: "4:00 PM: Red Fort / Humayun's Tomb",
                content: "Visit the grand Red Fort or the beautiful Humayun's Tomb."
            },
            {
                title: "5:30 PM: Akshardham Temple",
                content: "Spend the evening at the magnificent Akshardham Temple complex (Closed on Mondays)."
            },
            {
                title: "7:30 PM: Return Drive to Ghaziabad",
                content: "Comfortable drive back to your location in Ghaziabad."
            }
        ],
        includes: [
            "Private AC Cab for the Full Day",
            "Doorstep Pickup and Drop across Ghaziabad",
            "All State Tolls, Fuel, and Parking Charges",
            "Experienced Local Driver"
        ],
        exclusions: [
            "Monument Entry Tickets",
            "Meals and Personal Expenses",
            "Guide Fee",
            "Driver Tips"
        ],
        importantNotes: [
            "Several monuments (Red Fort, Lotus Temple) are closed on Mondays.",
            "Normal tour duration is 8 hours / 80 KM.",
            "Suggested start time: 9:00 AM.",
            "Respect local traffic and security protocols."
        ],
        faqs: [
            {
                question: "Do you pick up from Indirapuram?",
                answer: "Yes, we provide pickup from all parts of Ghaziabad, including Indirapuram, Vaishali, and Vasundhara."
            },
            {
                question: "Can we visit Old Delhi Chandni Chowk?",
                answer: "Yes, we can customize the tour to include Old Delhi on request."
            }
        ],
        tourTypes: [
            {
                title: "City Cultural Tour",
                description: "A perfectly organized day trip covering the best of Delhi's icons for Ghaziabad residents."
            }
        ],
        cars: [
            { name: "WagonR (4+1)", price: "₹3,200/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,400/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹3,900/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹5,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹8,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹9,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹12,500/-", image: forceurbano }
        ]
    },
    "faridabad-to-delhi-local-sightseeing-tour": {
        title: "Faridabad to Delhi Local Sightseeing Tour by car",
        bannerImage: delhiBannerNew,
        description: "Experience the grand history and vibrant culture of Delhi with our specialized Faridabad to Delhi local sightseeing tour. We offer a seamless door-to-door private cab service, taking you through the most iconic monuments, spiritual sites, and shopping hubs of the capital city. Whether you're a family seeking a day out or a solo traveler, our professional drivers ensure a comfortable and personalized experience.",
        highlights: [
            "Qutub Minar - Discover the brilliance of Indo-Islamic architecture",
            "Lotus Temple - A serene flower-shaped oasis of peace",
            "India Gate & Kartavya Path - Witness the historical heart of New Delhi",
            "Humayun's Tomb - The garden-wrapped precursor to the Taj Mahal",
            "Akshardham Temple - A modern architectural and spiritual marvel"
        ],
        placesCovered: ["Qutub Minar", "Lotus Temple", "India Gate", "Akshardham Temple", "Humayun's Tomb", "Red Fort"],
        placesWithDetails: [
            {
                name: "Qutub Minar",
                image: qutubMinar,
                description: "A UNESCO World Heritage Site, this 73-meter tall minaret is a masterpiece of early Mughal architecture.",
                timings: "07:00 AM – 08:30 PM"
            },
            {
                name: "Lotus Temple",
                image: lotustemple,
                description: "Famous for its unique flower-like design, it is a Bahá'í House of Worship open to all.",
                timings: "08:30 AM – 06:00 PM (Closed on Mondays)"
            }
        ],
        itinerary: [
            {
                title: "8:30 AM: Pickup from Faridabad",
                content: "Our driver will pick you up from your doorstep in Faridabad (Sector 15, 21, NIT, Greater Faridabad, etc.)."
            },
            {
                title: "10:30 AM: Qutub Minar Sightseeing",
                content: "First stop at the historic Qutub Minar complex."
            },
            {
                title: "12:00 PM: Lotus Temple Visit",
                content: "Head to the peaceful Lotus Temple for a spiritual break."
            },
            {
                title: "1:30 PM: Lunch at Central Delhi",
                content: "Break for lunch at a top-rated restaurant in Connaught Place or nearby."
            },
            {
                title: "2:30 PM: India Gate & Rashtrapati Bhavan",
                content: "Stop for photos at India Gate and a scenic drive past the President's House."
            },
            {
                title: "4:00 PM: Humayun's Tomb Exploration",
                content: "Visit the stunning gardens and architecture of Humayun's Tomb."
            },
            {
                title: "5:30 PM: Akshardham Temple",
                content: "Conclude your sightseeing with the magnificent Akshardham Temple complex (Closed on Mondays)."
            },
            {
                title: "7:30 PM: Departure for Faridabad",
                content: "Relax in your private cab as we drive you back safely."
            }
        ],
        includes: [
            "Private AC Cab for the Full Day",
            "Pickup and Drop across all Faridabad areas",
            "Inclusive of Fuel, Parking, and Tolls",
            "Courteous and Experienced Professional Driver"
        ],
        exclusions: [
            "Monument Entry Tickets",
            "Food and Personal Expenses",
            "Guide Fee",
            "Driver Tips"
        ],
        importantNotes: [
            "Certain monuments (Red Fort, Lotus Temple) are closed on Mondays.",
            "Standard tour duration is 8 hours / 80 KM.",
            "Extra charges apply for additional time or distance.",
            "Wear comfortable walking shoes for sightseeing."
        ],
        faqs: [
            {
                question: "Do you pick up from Greater Faridabad (Neharpar)?",
                answer: "Yes, we provide door-to-door pickup from all sectors of Greater Faridabad as well."
            },
            {
                question: "Can we book a tour for early morning?",
                answer: "Yes, you can customize your pickup time. We recommend starting around 8:30 AM for best coverage."
            }
        ],
        tourTypes: [
            {
                title: "Capital Discovery",
                description: "A well-planned day trip covering Delhi's top structural and spiritual landmarks for Faridabad residents."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹3,200/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,400/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹3,900/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹5,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹8,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹9,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹12,500/-", image: forceurbano }
        ]
    },

    // delhi-to-khatu-shyam-one-day-tour page
    "delhi-to-khatu-shyam-one-day-tour": {
        title: "Delhi to Khatu Shyam One Day Tour by Cab",
        bannerImage: "https://images.unsplash.com/photo-1524492459413-23f57bad9965?w=1600&h=900&fit=crop",
        description: "Embark on a divine journey from Delhi to the holy shrine of Khatu Shyam Ji in Rajasthan. Experience the powerful spiritual energy and seek blessings at one of India's most revered temples. Our premium one-day cab tour ensures a comfortable and hassle-free pilgrimage for you and your family.",
        highlights: [
            "Baba Khatu Shyam Ji Darshan - Seek blessings of Barbarika",
            "Shyam Kund - The holy pond where the head was found",
            "Shyam Bagichi - Beautiful garden near the temple",
            "Gourishankar Temple - A peaceful spiritual stop",
            "Smooth Drive via Rajasthan Highways"
        ],
        placesCovered: ["Khatu Shyam Temple", "Shyam Kund", "Shyam Bagichi", "Gourishankar Temple"],
        placesWithDetails: [
            {
                name: "Khatu Shyam Temple",
                image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&h=600&fit=crop",
                description: "The main temple dedicated to Baba Khatu Shyam, known as the God of the Kaliyuga. Millions of devotees visit to seek his blessings.",
                timings: "05:30 AM – 01:00 PM, 04:30 PM – 09:00 PM"
            },
            {
                name: "Shyam Kund",
                image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&h=600&fit=crop",
                description: "A sacred pond near the temple where it is believed the head of Barbarika appeared. Devotees take a holy dip here.",
                timings: "Open All Day"
            }
        ],
        itinerary: [
            {
                title: "4:00 AM: Pickup from Delhi/NCR",
                content: "Early morning pickup from your home or hotel in Delhi, Noida, Gurgaon, or Ghaziabad to avoid city traffic."
            },
            {
                title: "8:00 AM: Breakfast Stop",
                content: "Short break for breakfast at a popular highway restaurant on the way to Sikar."
            },
            {
                title: "10:30 AM: Reach Khatu Shyam Ji",
                content: "Arrival at Khatu village and proceed for Darshan at the main Shri Khatu Shyam Ji Temple."
            },
            {
                title: "12:30 PM: Visit Shyam Kund & Bagichi",
                content: "Explore the holy Shyam Kund and the beautiful Shyam Bagichi located near the temple complex."
            },
            {
                title: "2:00 PM: Lunch Break",
                content: "Enjoy traditional Rajasthani lunch at a local restaurant or dhaba."
            },
            {
                title: "3:30 PM: Visit Gourishankar Temple",
                content: "Visit the serene Gourishankar Temple before starting the return journey."
            },
            {
                title: "6:00 PM: Departure for Delhi",
                content: "Begin the return journey through the scenic Rajasthan landscape."
            },
            {
                title: "11:00 PM: Drop at Delhi",
                content: "Reach back to your destination in Delhi/NCR safely."
            }
        ],
        includes: [
            "Private AC Cab with Professional Driver",
            "Doorstep Pickup and Drop-off",
            "Fuel, State Taxes, and Toll Charges",
            "Standard Parking Fees"
        ],
        exclusions: [
            "Temple Entry/VIP Darshan Fees",
            "Personal Meals and Snacks",
            "Driver Tips and Gratuities",
            "Laundry or Personal Shopping"
        ],
        importantNotes: [
            "The temple timings may change during festivals like Falgun Mela.",
            "Distance: Approx 300 km (one way) from Delhi.",
            "Total duration: 18-20 hours.",
            "Carry a valid photo ID."
        ],
        faqs: [
            {
                question: "Is the temple closed during afternoon?",
                answer: "Yes, the temple usually closes between 1:00 PM and 4:30 PM for Shringar and Rest."
            },
            {
                question: "Can we visit Salasar Balaji also?",
                answer: "Yes, we can customize the tour to include Salasar Balaji at an additional cost."
            }
        ],
        tourTypes: [
            {
                title: "Religious Pilgrimage",
                description: "A dedicated spiritual tour for devotees wanting to seek blessings from Baba Shyam."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹10,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹11,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹14,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹16,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹18,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹18,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹21,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹28,000/-", image: forceurbano }
        ]
    },

    // delhi-to-mehandipur-balaji-one-day-tour page
    "delhi-to-mehandipur-balaji-one-day-tour": {
        title: "Delhi to Mehandipur Balaji One Day Tour by Cab",
        bannerImage: "https://heritagecabs.in/blog/wp-content/uploads/2025/07/Mehandipur-Balaji-Temple.png",
        description: "Experience the divine power and seek blessings at the Shri Mehandipur Balaji Temple in Rajasthan with our specialized one-day return cab tour. Known for its spiritual significance and healing powers, this pilgrimage is a must-visit for devotees of Lord Hanuman. We provide a comfortable, private, and well-timed journey from Delhi/NCR.",
        highlights: [
            "Shri Mehandipur Balaji Darshan - Powerful Lord Hanuman Shrine",
            "Bhairav Baba & Pretraj Sarkar Darshan",
            "Experience the unique spiritual atmosphere",
            "Comfortable drive via Delhi-Jaipur Highway",
            "Same-day return for a convenient pilgrimage"
        ],
        placesCovered: ["Mehandipur Balaji Temple", "Pretraj Sarkar", "Bhairav Ji Temple"],
        placesWithDetails: [
            {
                name: "Shri Mehandipur Balaji Temple",
                image: "https://mehandipursawamani.com/wp-content/uploads/2022/06/1-min.jpg",
                description: "The main temple dedicated to Lord Hanuman, located in Dausa district. It is famous for ritualistic healing and exorcism spirits.",
                timings: "06:00 AM – 09:00 PM"
            },
            {
                name: "Pretraj Sarkar & Bhairav Ji",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7mTeErpGwsEzRPe6ZaZu8XuTzstH68ClPg&s",
                description: "Devotees also visit the courts of Pretraj Sarkar (King of Spirits) and Bhairav Ji within the temple complex.",
                timings: "06:00 AM – 09:00 PM"
            }
        ],
        itinerary: [
            {
                title: "5:00 AM: Pickup from Delhi/NCR",
                content: "Early morning pickup from your home or hotel to start the spiritual journey towards Rajasthan."
            },
            {
                title: "8:30 AM: Breakfast on the way",
                content: "Stop at a popular midway point for traditional tea and breakfast."
            },
            {
                title: "11:00 AM: Reach Mehandipur Balaji",
                content: "Arrival at the holy town and proceed for Darshan at the main Balaji Temple."
            },
            {
                title: "1:30 PM: Lunch Break",
                content: "Enjoy a simple and pure vegetarian meal at a local restaurant."
            },
            {
                title: "2:30 PM: Visit Pretraj & Bhairav Temples",
                content: "Complete the pilgrimage by seeking blessings from Pretraj Sarkar and Bhairav Ji."
            },
            {
                title: "4:30 PM: Departure for Delhi",
                content: "Begin the return journey with spiritual memories."
            },
            {
                title: "10:30 PM: Drop at Delhi",
                content: "Safe and spiritual arrival back home in Delhi/NCR."
            }
        ],
        includes: [
            "Private AC Cab with Professional Driver",
            "Doorstep Pickup and Drop-off",
            "Fuel, Toll Taxes, and Parking Charges",
            "All State Entry Taxes"
        ],
        exclusions: [
            "Temple Offerings (Prasad/Daan)",
            "Personal Meals and Beverages",
            "Guide Fee (Optional)",
            "Driver Tips"
        ],
        importantNotes: [
            "Follow temple discipline and local customs.",
            "Distance: Approx 260 km (one way) from Delhi.",
            "Total duration: 16-18 hours.",
            "Keep a bottle of water and dry snacks."
        ],
        faqs: [
            {
                question: "What is the best time to reach the temple?",
                answer: "We recommend reaching by 10 or 11 AM to complete Darshan before the afternoon rush."
            },
            {
                question: "Do you provide pickup from Noida or Ghaziabad?",
                answer: "Yes, we provide door-to-door pickup from Delhi, Noida, Gurgaon, and Ghaziabad."
            }
        ],
        tourTypes: [
            {
                title: "Spiritual Path",
                description: "A focused one-day trip for devotees seeking the divine presence of Balaji Maharaj."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹7,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹8,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹9,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹11,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹12,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹13,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹16,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹18,000/-", image: forceurbano }
        ]
    },

    // delhi-to-chandigarh-one-day-tour page
    "delhi-to-chandigarh-one-day-tour": {
        title: "Delhi to Chandigarh One Day Tour by Cab",
        bannerImage: chandigarh,
        description: "Explore the 'City Beautiful' with our premium one-day return tour from Delhi to Chandigarh. Known for its modern architecture, urban planning, and lush gardens, Chandigarh is a perfect day-trip destination. Visit iconic spots like the Rock Garden, Sukhna Lake, and Rose Garden in the comfort of a private AC cab.",
        highlights: [
            "Rock Garden - Unique sculpture garden made of recycled materials",
            "Sukhna Lake - Serene artificial lake at the foothills of Shivalik",
            "Rose Garden - Asia's largest garden featuring over 1600 species",
            "Capitol Complex - Stunning architecture by Le Corbusier",
            "Comfortable drive via the Delhi-Chandigarh Highway"
        ],
        placesCovered: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex", "Pinjore Gardens"],
        placesWithDetails: [
            {
                name: "Rock Garden",
                image: "https://www.shoutlo.com/uploads/articles/header-img-facts-about-rock-garden.jpg",
                description: "Famous for its sculptures made entirely from industrial and home waste and discarded items.",
                timings: "09:00 AM – 06:00 PM"
            },
            {
                name: "Sukhna Lake",
                image: "https://www.trawell.in/admin/images/upload/472763834Chandigarh_Sukhna_Lake_Main.jpg",
                description: "A beautiful reservoir created by damming the Sukhna Choe, popular for boating and evening strolls.",
                timings: "05:00 AM – 09:00 PM"
            }
        ],
        itinerary: [
            {
                title: "6:00 AM: Pickup from Delhi/NCR",
                content: "Early morning pickup from your home or hotel to start the journey towards Chandigarh."
            },
            {
                title: "9:00 AM: Breakfast Stop",
                content: "Break for breakfast at a popular dhaba on the Delhi-Chandigarh highway (Murthal/Ambala)."
            },
            {
                title: "11:30 AM: Reach Rock Garden",
                content: "Arrival in Chandigarh and direct visit to the world-famous Rock Garden."
            },
            {
                title: "1:00 PM: Rose Garden Visit",
                content: "Explore the vast Rose Garden, especially beautiful during the blooming season."
            },
            {
                title: "2:00 PM: Authentic Punjabi Lunch",
                content: "Enjoy a delicious lunch at a popular restaurant in Sector 17 or nearby."
            },
            {
                title: "3:30 PM: Sukhna Lake & Boating",
                content: "Relax by the lake and enjoy an optional boating session with Himalayan foothills in the background."
            },
            {
                title: "5:00 PM: Capitol Complex (Drive Past)",
                content: "View the impressive government buildings and the Open Hand monument."
            },
            {
                title: "6:00 PM: Return Drive to Delhi",
                content: "Begin the return journey with a quick snack stop near Ambala."
            },
            {
                title: "10:30 PM: Drop at Delhi",
                content: "Reach back to your location in Delhi/NCR safely."
            }
        ],
        includes: [
            "Private AC Cab for the Full Day",
            "Doorstep Pickup and Drop-off",
            "Inclusive of Fuel, Toll Taxes, and Parking",
            "Experienced Professional Driver"
        ],
        exclusions: [
            "Entry Tickets for Monuments",
            "Boat Ride Charges at Sukhna Lake",
            "Personal Meals and Beverages",
            "Driver Tips"
        ],
        importantNotes: [
            "Suggested start time: 6:00 AM for maximum coverage.",
            "Distance: Approx 250 km (one way) from Delhi.",
            "Total duration: 16-18 hours.",
            "Wear comfortable clothing and walking shoes."
        ],
        faqs: [
            {
                question: "How long does it take to reach Chandigarh?",
                answer: "With the new highways, it usually takes 4.5 to 5 hours from Delhi depending on traffic."
            },
            {
                question: "Can we customize the places to visit?",
                answer: "Yes, you can modify the sightseeing spots within Chandigarh as per your interest."
            }
        ],
        tourTypes: [
            {
                title: "City Break",
                description: "A perfectly planned day trip for those wanting to see Chandigarh's modern marvels."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹6,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹7,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹8,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹10,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹12,800/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹13,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹16,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹20,000/-", image: forceurbano }
        ]
    },

    // agra-sightseeing-by-car page

    'agra-sightseeing-by-car': {
        title: "Agra Sightseeing by Car",
        bannerImage: agra,
        description: "Explore the magnificent city of Agra with our comfortable and convenient car rental service. Visit the iconic Taj Mahal, Agra Fort, and other historical monuments at your own pace with a professional driver. Our Agra sightseeing tour by car offers flexibility, comfort, and the freedom to customize your itinerary according to your preferences.",
        whatToExpect: "Experience the grandeur of Agra's Mughal heritage with our premium car rental service. Your professional driver will take you to all major attractions including the Taj Mahal, Agra Fort, Itmad-ud-Daulah (Baby Taj), and Mehtab Bagh. Enjoy the convenience of door-to-door service, comfortable AC vehicles, and the flexibility to spend as much time as you want at each location. Perfect for families, couples, and solo travelers who want a personalized sightseeing experience.",
        highlights: [
            { title: "Taj Mahal — World's most beautiful monument", icon: FaGem },
            { title: "Agra Fort — UNESCO World Heritage Site", icon: FaFortAwesome },
            { title: "Itmad-ud-Daulah — Baby Taj with intricate marble work", icon: FaHistory },
            { title: "Mehtab Bagh — Sunset view of Taj Mahal", icon: FaLeaf },
            { title: "Flexible Itinerary — Customize as per your preference", icon: FaRoute },
            { title: "Professional Driver — Local expert with AC car", icon: FaUserTie },
            { title: "All Inclusive Pricing — Fuel, Parking & Tolls included", icon: FaCheckCircle }
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
                image: agra,
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
                title: "Morning: Taj Mahal Visit",
                content: "Start your day with a visit to the magnificent Taj Mahal. Spend quality time exploring the beauty of this marble marvel and capturing memories."
            },
            {
                title: "Mid-Morning: Agra Fort",
                content: "Visit the massive Agra Fort, a UNESCO World Heritage site that tells the stories of the Mughal Empire's power and grandeur."
            },
            {
                title: "Afternoon: Itmad-ud-Daulah",
                content: "Explore the 'Baby Taj' with its intricate marble inlay work and beautiful gardens."
            },
            {
                title: "Evening: Mehtab Bagh",
                content: "End your day with a serene view of the Taj Mahal from across the Yamuna river at Mehtab Bagh, perfect for sunset photography."
            }
        ],
        whyChooseUs: [
            { title: "Flexible Timing", description: "Start and end your tour at your preferred time with complete flexibility." },
            { title: "Professional Service", description: "Experienced local drivers who know the best routes and parking spots." },
            { title: "Comfortable Travel", description: "Well-maintained AC vehicles for a pleasant sightseeing experience." },
            { title: "All-Inclusive Pricing", description: "No hidden charges - fuel, parking, and tolls all included." }
        ],
        includes: [
            "AC car with professional driver",
            "Fuel, parking & toll charges",
            "8 hours / 80 km usage",
            "Pickup and drop within Agra city"
        ],
        exclusions: [
            "Entry tickets to monuments",
            "Meals & refreshments",
            "Tour guide services",
            "Personal expenses"
        ],
        importantNotes: [
            "Taj Mahal is closed on all Fridays.",
            "Duration: 8 hours (can be extended with additional charges).",
            "Entry tickets not included in the package.",
            "Advance booking recommended for better availability."
        ],
        faqs: [
            {
                question: "Is the Taj Mahal open on Fridays?",
                answer: "No, the Taj Mahal is closed for all visitors on Fridays. It is only open for those attending afternoon prayers at the mosque."
            },
            {
                question: "What is included in the car rental price?",
                answer: "The price includes the vehicle with driver, fuel charges, parking fees, and toll taxes for 8 hours / 80 km within Agra city."
            },
            {
                question: "Can I customize the itinerary?",
                answer: "Yes, absolutely! You can visit the places you want and spend as much time as you like at each location within the 8-hour duration."
            },
            {
                question: "Are monument entry tickets included?",
                answer: "No, entry tickets to Taj Mahal, Agra Fort, and other monuments are not included and need to be purchased separately."
            }
        ],
        tourTypes: [
            {
                title: "Half Day Tour",
                description: "4 hours package covering Taj Mahal and Agra Fort, perfect for quick sightseeing."
            },
            {
                title: "Full Day Tour",
                description: "8 hours package covering all major monuments including Taj Mahal, Agra Fort, Baby Taj, and Mehtab Bagh."
            },
            {
                title: "Custom Tour",
                description: "Flexible itinerary based on your preferences with extended hours available."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹2,200/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹2,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹3,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹3,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹4,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹6,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹7,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹10,500/-", image: forceurbano }
        ]
    },
    'agra-to-fatehpur-sikri-one-day-tour': {
        title: "Agra to Fatehpur Sikri One Day Tour by Cab",
        bannerImage: agra,
        description: "Embark on a historical journey from Agra to the majestic ghost city of Fatehpur Sikri with Delhi Tour Cab. Built by Emperor Akbar, this UNESCO World Heritage site is a masterpiece of Mughal architecture. Our one-day tour ensures a comfortable ride in a private AC cab with a professional driver, allowing you to explore the stunning Buland Darwaza, Tomb of Salim Chishti, and Panch Mahal at your leisure.",
        whatToExpect: "Your tour begins with a pickup from your hotel or location in Agra. Enjoy a smooth drive to Fatehpur Sikri (approx. 40km). Explore the grand sandstone palaces, courtyards, and the spiritual atmosphere of the Dargah. Our driver will be at your service throughout the trip, ensuring a hassle-free experience. After sightseeing, we will drop you back at your preferred location in Agra.",
        highlights: [
            { title: "Buland Darwaza — The highest gateway in the world", icon: FaFortAwesome },
            { title: "Tomb of Salim Chishti — Exquisite white marble mausoleum", icon: FaHistory },
            { title: "Panch Mahal — Five-storied palace structure", icon: FaGem },
            { title: "Diwan-i-Khas — Hall of Private Audience", icon: FaCrown },
            { title: "Jama Masjid — One of the largest mosques in India", icon: FaOm },
            { title: "Professional Driver & Comfortable AC Cab", icon: FaUserTie },
            { title: "All Inclusive Pricing (Fuel, Parking, Tolls)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Buland Darwaza",
                image: agra,
                description: "A 54-meter high gateway built by Akbar to commemorate his victory over Gujarat. It is a stunning example of Mughal architecture.",
                timings: "Sunrise to Sunset"
            },
            {
                name: "Tomb of Salim Chishti",
                image: agra,
                description: "A beautiful white marble mausoleum dedicated to the Sufi saint Salim Chishti, known for its intricate jali work.",
                timings: "Sunrise to Sunset"
            },
            {
                name: "Panch Mahal",
                image: agra,
                description: "An extraordinary five-storied structure open on all sides, used for relaxation and entertainment by the royal court.",
                timings: "Sunrise to Sunset"
            },
            {
                name: "Jama Masjid",
                image: agra,
                description: "The congregational mosque of Fatehpur Sikri, showcasing a perfect blend of Persian and Indian architectural styles.",
                timings: "Sunrise to Sunset"
            }
        ],
        itinerary: [
            {
                title: "Morning: Departure from Agra",
                content: "Pickup from your hotel/residence in Agra and drive to Fatehpur Sikri (approx. 1 hour drive)."
            },
            {
                title: "Arrival & Sightseeing",
                content: "Explore the UNESCO World Heritage site. Visit the Buland Darwaza, Jama Masjid, and Tomb of Salim Chishti."
            },
            {
                title: "Palace Exploration",
                content: "Walk through the royal complex visiting Diwan-i-Khas, Diwan-i-Aam, Panch Mahal, and Jodha Bai's Palace."
            },
            {
                title: "Afternoon: Lunch & Return",
                content: "Enjoy lunch at a local restaurant (optional) and begin the return journey to Agra."
            },
            {
                title: "Drop in Agra",
                content: "Drop off at your hotel, railway station, or preferred location in Agra."
            }
        ],
        whyChooseUs: [
            { title: "Private AC Cab", description: "Clean and sanitized vehicles for a comfortable journey." },
            { title: "Experienced Driver", description: "Courteous drivers familiar with the route and history." },
            { title: "Flexible Timing", description: "Start the tour at your convenience." },
            { title: "Transparent Pricing", description: "No hidden charges, all road taxes included." }
        ],
        includes: [
            "Private AC Car with Driver",
            "Fuel, Parking, and Toll Charges",
            "Pickup and Drop within Agra",
            "All Road Taxes"
        ],
        exclusions: [
            "Monument Entry Fees",
            "Meals and Refreshments",
            "Tour Guide Services",
            "Personal Expenses"
        ],
        importantNotes: [
            "Distance: Approx. 40 km one way from Agra.",
            "Duration: 4-5 hours typical tour duration.",
            "Guides available locally at Fatehpur Sikri (hire at own cost/discretion).",
            "Wear comfortable walking shoes."
        ],
        faqs: [
            {
                question: "How far is Fatehpur Sikri from Agra?",
                answer: "It is approximately 40 km from Agra and takes about an hour to reach by car."
            },
            {
                question: "How much time is needed to explore Fatehpur Sikri?",
                answer: "Usually, 2 to 3 hours are sufficient to explore the main complex comfortably."
            },
            {
                question: "Is the guide included in the package?",
                answer: "No, a tour guide is not included but can be hired at the monument entrance if required."
            }
        ],
        tourTypes: [
            {
                title: "Half Day Excursion",
                description: "A quick 4-5 hour trip perfect for those having limited time in Agra."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹3,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹4,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹5,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹6,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹7,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹11,000/-", image: forceurbano }
        ]
    },
    'agra-to-mathura-vrindavan-tour': {
        title: "Agra to Mathura Vrindavan Tour by Cab",
        bannerImage: mathura,
        description: "Experience a divine journey from Agra to the sacred lands of Mathura and Vrindavan with Delhi Tour Cab. Immerse yourself in the spiritual aura of Lord Krishna's birthplace and childhood home. Our comfortable and convenient cab service ensures a peaceful pilgrimage, allowing you to visit iconic temples like Krishna Janmabhoomi, Bankey Bihari, and Prem Mandir with ease.",
        whatToExpect: "Your spiritual day starts with a pickup from Agra in a private, air-conditioned vehicle. Enjoy a comfortable drive to Mathura (approx. 60km). Visit the holy Krishna Janmabhoomi temple and Dwarkadhish temple. Proceed to Vrindavan to experience the devotion at Bankey Bihari Temple, ISKCON, and the stunning Prem Mandir. Our experienced driver will guide you through the narrow lanes and busy streets, ensuring a hassle-free darshan. Return to Agra by evening with a heart full of blessings.",
        highlights: [
            { title: "Krishna Janmabhoomi — Lord Krishna's Birthplace", icon: FaPray },
            { title: "Bankey Bihari Temple — The most revered temple in Vrindavan", icon: FaOm },
            { title: "Prem Mandir — Stunning marble temple with light show", icon: FaStar },
            { title: "ISKCON Temple — Spiritual hub of devotion", icon: FaHeart },
            { title: "Dwarkadhish Temple — Historic temple in Mathura", icon: FaHistory },
            { title: "Comfortable Round Trip from Agra", icon: FaCar },
            { title: "All Inclusive Pricing (Fuel, Tolls, Parking)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Krishna Janmabhoomi (Mathura)",
                image: mathura,
                description: "The main temple in Mathura is built around the prison cell where Lord Krishna is believed to have been born. It is a site of immense spiritual significance.",
                timings: "05:00 AM – 12:00 PM | 04:00 PM – 09:30 PM"
            },
            {
                name: "Bankey Bihari Temple (Vrindavan)",
                image: vrindavan,
                description: "Dedicated to Lord Krishna, the idol here is worshipped as a child. It is one of the holiest and most visited temples in Braj region.",
                timings: "07:45 AM – 12:00 PM | 05:30 PM – 09:30 PM"
            },
            {
                name: "Prem Mandir (Vrindavan)",
                image: vrindavan,
                description: "A massive temple complex built with white Italian marble, known for its intricate carvings and beautiful musical fountain and light show in the evening.",
                timings: "05:30 AM – 12:00 PM | 04:30 PM – 08:30 PM"
            },
            {
                name: "ISKCON Temple (Vrindavan)",
                image: vrindavan,
                description: "Also known as Sri Sri Krishna Balaram Mandir, it is a key center for the International Society for Krishna Consciousness, known for its kirtans and cleanliness.",
                timings: "04:30 AM – 01:00 PM | 04:00 PM – 08:30 PM"
            }
        ],
        itinerary: [
            {
                title: "Morning: Departure from Agra",
                content: "Pickup from your hotel/residence in Agra and drive to Mathura (approx. 1.5 hours)."
            },
            {
                title: "Mathura Sightseeing",
                content: "Visit Shri Krishna Janmabhoomi Temple and Dwarkadhish Temple. Experience the holy vibes of the Yamuna Ghats."
            },
            {
                title: "Proceed to Vrindavan",
                content: "Drive to Vrindavan (approx. 30 mins from Mathura). Visit Nidhivan and Bankey Bihari Temple."
            },
            {
                title: "Afternoon: Lunch",
                content: "Enjoy a traditional vegetarian (Satvik) lunch at a local restaurant."
            },
            {
                title: "Evening Darshan",
                content: "Visit ISKCON Temple and witness the grandeur of Prem Mandir in the evening lights."
            },
            {
                title: "Return to Agra",
                content: "Drive back to Agra and drop at your preferred location."
            }
        ],
        whyChooseUs: [
            { title: "Spiritual Experience", description: "Hassle-free visits to crowded temples with local guidance." },
            { title: "Comfortable AC Cab", description: "Relax in a clean private vehicle after walking in temples." },
            { title: "Flexible Itinerary", description: "Spend more time at the temples you feel connected to." },
            { title: "No Hidden Costs", description: "Pricing includes driver allowance, tolls, and parking." }
        ],
        includes: [
            "Private AC Car with Driver",
            "Fuel, Parking, and Toll Charges",
            "Pickup and Drop within Agra",
            "All Road Taxes"
        ],
        exclusions: [
            "VIP Darshan Tickets",
            "Meals and Refreshments",
            "Temple Donations",
            "Shoe keeping charges"
        ],
        importantNotes: [
            "Temples remain closed in the afternoon (approx. 12 PM to 4 PM).",
            "Dress modestly as these are religious sites.",
            "Beware of monkeys in Vrindavan (avoid carrying food/spectacles openly).",
            "Bankey Bihari Temple can be very crowded."
        ],
        faqs: [
            {
                question: "How far are Mathura & Vrindavan from Agra?",
                answer: "Mathura is about 60 km from Agra, and Vrindavan is another 15 km from Mathura. It takes about 1.5 hours to reach."
            },
            {
                question: "Can we cover both Mathura and Vrindavan in one day?",
                answer: "Yes, easily. Our itinerary is designed to cover the main temples of both cities comfortably in a day trip."
            },
            {
                question: "What is the best time to start the tour?",
                answer: "We recommend starting by 7:00 AM or 8:00 AM to cover Mathura temples before they close for the afternoon break."
            }
        ],
        tourTypes: [
            {
                title: "Same Day Return",
                description: "Complete pilgrimage covering major temples of Mathura and Vrindavan in one day."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹4,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹4,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹5,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹6,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹7,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹7,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹12,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹11,000/-", image: forceurbano }
        ]
    },
    'jaipur-local-sightseeing-by-car': {
        title: "Jaipur Local Sightseeing by Car",
        bannerImage: jaipur,
        description: "Discover the Pink City like never before with Delhi Tour Cab's Jaipur Local Sightseeing tour. Jaipur, a UNESCO World Heritage City, is a treasure trove of royal palaces, vibrant bazaars, and mighty forts. Our private car rental service offers you the freedom to explore the Amber Fort, Hawa Mahal, City Palace, and more at your own pace. With a professional local driver, comfortable AC cab, and flexible itinerary, we ensure your day in Jaipur is nothing short of royal.",
        whatToExpect: "Your royal day begins with a pickup from your hotel or residence in Jaipur. Start with the majestic Amber Fort, followed by a photo stop at the Jal Mahal. Explore the intricate architecture of the City Palace and the astronomical wonders of Jantar Mantar. Don't miss the iconic Hawa Mahal and the panoramic views from Nahargarh Fort. Our detailed itinerary ensures you cover all major attractions comfortably. End your day with some shopping in Jaipur's famous markets before we drop you back.",
        highlights: [
            { title: "Amber Fort — Hilltop fort with elephant rides", icon: FaFortAwesome },
            { title: "Hawa Mahal — The iconic Palace of Winds", icon: FaWind },
            { title: "City Palace — Royal residence & museum", icon: FaCrown },
            { title: "Jantar Mantar — UNESCO Astronomical Observatory", icon: FaSun },
            { title: "Jal Mahal — Water Palace for photo ops", icon: FaWater },
            { title: "Nahargarh Fort — Best sunset views of Jaipur", icon: FaMountain },
            { title: "All Inclusive Pricing (Fuel, Parking, Tolls)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Amber Fort",
                image: jaipur,
                description: "A majestic fort built on a hill, known for its artistic Hindu style elements. The Sheesh Mahal (Mirror Palace) is a must-see.",
                timings: "08:00 AM – 05:30 PM"
            },
            {
                name: "Hawa Mahal",
                image: jaipur,
                description: "Built in 1799, this five-story palace has 953 small windows called Jharokhas, designed to allow royal ladies to observe street festivals without being seen.",
                timings: "09:00 AM – 04:30 PM"
            },
            {
                name: "City Palace",
                image: jaipur,
                description: "A complex of courtyards, gardens, and buildings, offering a fusion of Rajasthani and Mughal architecture. It houses a museum with royal artifacts.",
                timings: "09:30 AM – 05:00 PM"
            },
            {
                name: "Jantar Mantar",
                image: jaipur,
                description: "An astronomical observation site built in the early 18th century. It features the world's largest stone sundial.",
                timings: "09:00 AM – 04:30 PM"
            }
        ],
        itinerary: [
            {
                title: "Morning: Amber Fort",
                content: "Pickup from your location in Jaipur. Proceed to Amber Fort (11km from city). Enjoy the elephant ride or jeep ride up the hill."
            },
            {
                title: "Photo Stop: Jal Mahal",
                content: "Stop at the Man Sagar Lake to admire the beautiful Water Palace (Jal Mahal)."
            },
            {
                title: "Afternoon: City Palace & Jantar Mantar",
                content: "Visit the royal City Palace and the adjacent Jantar Mantar observatory."
            },
            {
                title: "Hawa Mahal & Markets",
                content: "Visit the Hawa Mahal (Wind Palace) and explore the colorful Johari Bazaar and Bapu Bazaar."
            },
            {
                title: "Evening: Nahargarh Fort (Optional)",
                content: "Drive up to Nahargarh Fort for a breathtaking sunset view of the city (time permitting)."
            },
            {
                title: "Drop",
                content: "Drop off at your hotel or preferred location in Jaipur."
            }
        ],
        whyChooseUs: [
            { title: "Local Expert Drivers", description: "Drivers who know the city routes and history well." },
            { title: "Clean AC Cabs", description: "Hygiene and comfort are our top priorities." },
            { title: "Flexible Timing", description: "It's your private tour, start when you want." },
            { title: "Transparent Rates", description: "Fixed pricing with no hidden surprises." }
        ],
        includes: [
            "Private AC Car with Driver",
            "Fuel, Parking, and Driver Allowance",
            "Pickup and Drop within Jaipur City",
            "8 Hours / 80 Km Usage (Standard)"
        ],
        exclusions: [
            "Monument Entry Tickets",
            "Meals and Refreshments",
            "Tour Guide Fee",
            "Camera Charges"
        ],
        importantNotes: [
            "Standard tour duration is 8 hours / 80 km.",
            "Extra km and hours will be charged additionally.",
            "Amber Fort is best visited early morning to avoid crowds.",
            "Entry tickets can be booked online to skip queues."
        ],
        faqs: [
            {
                question: "Is the guide fee included?",
                answer: "No, guide fees are not included. You can hire licensed guides at the monuments."
            },
            {
                question: "Can we customize the places?",
                answer: "Yes, within the 8 hours / 80 km limit, you can choose which places to visit."
            },
            {
                question: "Is pickup from Jaipur Airport included?",
                answer: "Yes, we provide pickup from Jaipur Airport or Railway Station."
            }
        ],
        tourTypes: [
            {
                title: "Full Day Sightseeing",
                description: "Comprehensive tour of Jaipur's main attractions in a private car."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹2,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹3,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹5,000/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹6,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹7,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹10,500/-", image: forceurbano }
        ]
    },
    'chandigarh-local-sightseeing-by-car': {
        title: "Chandigarh Local Sightseeing by Car",
        bannerImage: chandigarh,
        description: "Explore 'The City Beautiful' with our premium car rental service. Chandigarh, known for its modern architecture and urban design by Le Corbusier, offers a perfect blend of nature and concrete. Visit the famous Rock Garden, serene Sukhna Lake, and the vast Rose Garden. Our comfortable cabs and professional drivers ensure you see the best of Chandigarh at your own pace.",
        whatToExpect: "Your day begins with a pickup from your location in Chandigarh. Drive through the well-planned sectors to reach the artistic Rock Garden. Enjoy the calm waters of Sukhna Lake and take a stroll in the Rose Garden. Visit the architectural marvels of the Capitol Complex. Our driver will guide you to local markets for shopping and food. Experience a hassle-free and comfortable sightseeing tour in our AC cabs.",
        highlights: [
            { title: "Rock Garden — Sculptures made from industrial waste", icon: FaGem },
            { title: "Sukhna Lake — Scenic man-made lake at foothills", icon: FaWater },
            { title: "Rose Garden — Asia's largest rose garden", icon: FaLeaf },
            { title: "Capitol Complex — UNESCO World Heritage Site", icon: FaFortAwesome },
            { title: "Elante Mall — Shopping and entertainment hub", icon: FaShoppingBag },
            { title: "Clean & Green City Tour", icon: FaLeaf },
            { title: "All Inclusive Pricing (Fuel, Parking, Tolls)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Rock Garden",
                image: chandigarh,
                description: "A sculpture garden started by Nek Chand, completely built of industrial and home waste and thrown-away items. It's a maze of pottery, waterfalls, and sculptures.",
                timings: "09:00 AM – 07:00 PM"
            },
            {
                name: "Sukhna Lake",
                image: chandigarh,
                description: "A reservoir at the foothills of the Himalayas (Shivalik hills). It is a sanctuary for many migratory birds and offers boating facilities.",
                timings: "05:00 AM – 09:00 PM"
            },
            {
                name: "Zakir Hussain Rose Garden",
                image: chandigarh,
                description: "Spread over 30 acres, this botanical garden has some 50,000 rose-bushes of 1600 different species. It is the largest of its kind in Asia.",
                timings: "06:00 AM – 10:00 PM"
            },
            {
                name: "Capitol Complex",
                image: chandigarh,
                description: "A UNESCO World Heritage site designed by Le Corbusier, comprising the Legislative Assembly, Secretariat, and High Court.",
                timings: "09:00 AM – 05:00 PM"
            }
        ],
        itinerary: [
            {
                title: "Morning: Rock Garden",
                content: "Pickup from your hotel/residence. Start with the Rock Garden to admire the unique sculptures made from waste."
            },
            {
                title: "Mid-Morning: Sukhna Lake",
                content: "Visit Sukhna Lake for a peaceful walk or boating experience with a view of the Shivalik hills."
            },
            {
                title: "Afternoon: Rose Garden & Lunch",
                content: "Visit the Rose Garden to see thousands of blooming roses. Enjoy lunch at a local restaurant in Sector 17 or 35."
            },
            {
                title: "Post-Lunch: Capitol Complex & Museum",
                content: "Drive past the Capitol Complex and visit the Government Museum and Art Gallery if interested."
            },
            {
                title: "Evening: Shopping (Sector 17/Elante)",
                content: "End the day with shopping at Sector 17 Plaza or Elante Mall before dropping you back."
            }
        ],
        whyChooseUs: [
            { title: "Punctual Service", description: "We value your time and ensure timely pickup and drops." },
            { title: "Clean Vehicles", description: "Sanitized and well-maintained AC cars." },
            { title: "Local Knowledge", description: "Drivers who know every sector and shortcut in Chandigarh." },
            { title: "Flat Rates", description: "Affordable pricing with no hidden surcharges." }
        ],
        includes: [
            "Private AC Car for 8 Hours / 80 Kms",
            "Driver Allowance and Fuel",
            "Pickup and Drop within Chandigarh",
            "Parking Charges"
        ],
        exclusions: [
            "Monument Entry Fees",
            "Boating Charges at Sukhna Lake",
            "Meals and Personal Expenses",
            "Extra Km/Hour charges if limit exceeded"
        ],
        importantNotes: [
            "Standard package is for 8 Hours / 80 Kms.",
            "Extra charges applicable for additional usage.",
            "Rock Garden involves some walking.",
            "Boating at Sukhna Lake is subject to weather conditions."
        ],
        faqs: [
            {
                question: "Is boating included in the package?",
                answer: "No, boating charges at Sukhna Lake are to be paid directly at the counter."
            },
            {
                question: "Can we extend the tour beyond 8 hours?",
                answer: "Yes, extra hours and kms will be charged as per actual usage."
            },
            {
                question: "Is pickup from Chandigarh Airport included?",
                answer: "Yes, we can arrange pickup from the airport or railway station."
            }
        ],
        tourTypes: [
            {
                title: "City Tour",
                description: "Full day exploration of Chandigarh's architectural and natural beauty."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹2,200/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹2,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹3,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹3,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹4,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹6,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹7,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹10,500/-", image: forceurbano }
        ]
    },
    'haridwar-rishikesh-local-sightseeing-by-car': {
        title: "Haridwar Rishikesh Local Sightseeing by Car",
        bannerImage: haridwar,
        description: "Experience the spiritual essence of India with our Haridwar and Rishikesh local sightseeing tour. Visit the holy ghats of Haridwar, witness the mesmerizing Ganga Aarti at Har Ki Pauri, and explore the yoga capital of the world, Rishikesh. Our comfortable car rental service ensures a serene and hassle-free journey through these twin holy cities, covering ancient temples, suspension bridges, and ashrams.",
        whatToExpect: "Your spiritual journey begins with a pickup from your location in Haridwar or Rishikesh. We take you to the famous Har Ki Pauri and Mansa Devi Temple in Haridwar. Then, proceed to Rishikesh to walk across the iconic Ram Jhula and Laxman Jhula. Visit the Beatles Ashram and attend the evening Ganga Aarti at Triveni Ghat or Parmarth Niketan. Our experienced driver guides you through the sacred spots for a fulfilling experience.",
        highlights: [
            { title: "Har Ki Pauri — The most sacred ghat in Haridwar", icon: FaOm },
            { title: "Ganga Aarti — Spiritual evening ceremony", }, // Using generic icon if FaAgra not suitable, maybe FaFire or similar, keeping existing for now
            { title: "Laxman Jhula & Ram Jhula — Iconic suspension bridges", icon: FaMountain },
            { title: "Mansa Devi Temple — Hilltop temple via ropeway", icon: GiByzantinTemple }, // Assuming FaTemples or similar exists, else FaOm
            { title: "Triveni Ghat — Confluence of three rivers", icon: FaWater },
            { title: "Comfortable AC Car for Twin City Tour", icon: FaCar },
            { title: "All Inclusive Pricing (Fuel, Parking, Tolls)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Har Ki Pauri (Haridwar)",
                image: haridwar,
                description: "The most famous ghat on the banks of the Ganges. It is believed that Lord Vishnu left his footprint here. The evening Aarti is a spectacular sight.",
                timings: "Open 24 Hours (Aarti at Sunset)"
            },
            {
                name: "Mansa Devi Temple (Haridwar)",
                image: haridwar,
                description: "Located atop the Bilwa Parvat on the Sivalik Hills. You can reach the temple by a ropeway (Udan Khatola) or by trekking.",
                timings: "05:00 AM – 09:00 PM"
            },
            {
                name: "Laxman Jhula (Rishikesh)",
                image: rishikesh,
                description: "An iron suspension bridge across the river Ganges. It is one of the most iconic landmarks of Rishikesh, offering beautiful river views.",
                timings: "Open 24 Hours"
            },
            {
                name: "Ram Jhula (Rishikesh)",
                image: rishikesh,
                description: "A bigger suspension bridge connecting Shivananda Nagar with Swargashram. It is surrounded by many ashrams and temples.",
                timings: "Open 24 Hours"
            }
        ],
        itinerary: [
            {
                title: "Morning: Haridwar Sightseeing",
                content: "Pickup from your hotel. Visit Mansa Devi Temple (via cable car) and Chandi Devi Temple."
            },
            {
                title: "Mid-Day: Har Ki Pauri",
                content: "Visit the sacred Har Ki Pauri ghat and take a holy dip in the Ganges if you wish."
            },
            {
                title: "Afternoon: Proceed to Rishikesh",
                content: "Drive to Rishikesh (approx. 45 mins - 1 hour). Visit Ram Jhula and Laxman Jhula."
            },
            {
                title: "Ashram Visits",
                content: "Explore Swarg Ashram, Geeta Bhawan, or The Beatles Ashram."
            },
            {
                title: "Evening: Ganga Aarti",
                content: "Witness the divine Ganga Aarti at Triveni Ghat (Rishikesh) or return to Har Ki Pauri for the evening ceremony."
            },
            {
                title: "Drop",
                content: "Drop off at your hotel or preferred location."
            }
        ],
        whyChooseUs: [
            { title: "Twin City Coverage", description: "Efficiently cover best of both Haridwar and Rishikesh." },
            { title: "Wait-Free Travel", description: "Avoid waiting for local transport or autos." },
            { title: "Experienced Drivers", description: "Safe driving on the hilly terrains and city traffic." },
            { title: "Transparent Pricing", description: "Includes fuel, driver allowance, and parking." }
        ],
        includes: [
            "Private AC Car for Sightseeing",
            "Fuel, Driver Allowance, Parking",
            "Pickup and Drop within City limits",
            "Toll Taxes & State Tax"
        ],
        exclusions: [
            "Ropeway/Cable Car Tickets",
            "Entry Fees to Monuments/Ashrams",
            "Meals and Personal Expenses",
            "Guide Services"
        ],
        importantNotes: [
            "Start early to cover all points comfortably.",
            "Traffic can be heavy during festival seasons/weekends.",
            "Dress modestly for temple visits.",
            "Ropeway waiting time can be long during peak hours."
        ],
        faqs: [
            {
                question: "Which Aarti should we attend?",
                answer: "Har Ki Pauri Aarti is very famous, but Triveni Ghat in Rishikesh offers a more serene experience."
            },
            {
                question: "Can we customize the places?",
                answer: "Yes, the car is at your disposal for the booked duration/kms."
            },
            {
                question: "Is Rafting included?",
                answer: "No, Rafting is an adventure activity and needs to be booked separately."
            }
        ],
        tourTypes: [
            {
                title: "Spiritual Day Tour",
                description: "A day dedicated to temples, ashrams, and the holy Ganges."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹2,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹3,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹4,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹6,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹7,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹10,500/-", image: forceurbano }
        ]
    },
    'dehradoon-masoorie-local-sightseeing-by-car': {
        title: "Dehradoon Masoorie Local Sightseeing by Car",
        bannerImage: dehradun,
        description: "Escape to the hills with our Dehradun and Mussoorie local sightseeing tour. Explore the scenic beauty of the Doon Valley and the charm of the 'Queen of Hills', Mussoorie. Our comfortable car rental ensures a pleasant journey through winding roads, lush forests, and misty mountains. Visit famous waterfalls, caves, and viewpoints with our experienced drivers.",
        whatToExpect: "Your hill station adventure begins with a pickup from Dehradun. We start by exploring Dehradun's gems like Robber's Cave and Sahastradhara. Then, enjoy a scenic drive up to Mussoorie. Witness the majestic Kempty Falls, take a ropeway ride to Gun Hill, and stroll along the famous Mall Road. Whether you love nature or colonial architecture, this tour covers the best of both towns in a single day.",
        highlights: [
            { title: "Kempty Falls — Mussoorie's most famous waterfall", icon: FaWater },
            { title: "Robber's Cave — Natural river cave formation (Guchhupani)", icon: FaMountain },
            { title: "Sahastradhara — Sulphur water springs and waterfalls", icon: FaLeaf },
            { title: "Gun Hill — Second highest peak in Mussoorie", icon: FaCloud }, // Assuming FaCloud or similar generic
            { title: "Mall Road — Shopping and colonial charm", icon: FaShoppingBag },
            { title: "Scenic Drive — Beautiful mountain roads", icon: FaCar },
            { title: "All Inclusive Pricing (Fuel, Parking, Tolls)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Kempty Falls (Mussoorie)",
                image: dehradun,
                description: "A gigantic fall with somersaulting streams before they hit the bottom, Kempty Falls is the most popular tourist spot in Mussoorie.",
                timings: "08:00 AM – 06:00 PM"
            },
            {
                name: "Robber's Cave (Dehradun)",
                image: dehradun,
                description: "Locally known as Guchhupani, this natural river cave formation offers a unique experience of walking through water inside a cave.",
                timings: "07:00 AM – 07:30 PM"
            },
            {
                name: "Sahastradhara (Dehradun)",
                image: dehradun,
                description: "Meaning 'Thousand Fold Spring', it is famous for its ecotourism, sulphur springs known for medicinal value, and picturesque beauty.",
                timings: "08:00 AM – 07:00 PM"
            },
            {
                name: "Gun Hill (Mussoorie)",
                image: dehradun,
                description: "The second highest point in Mussoorie, offering panoramic views of the Himalayas and the Doon Valley. Accessible by ropeway.",
                timings: "10:00 AM – 06:00 PM"
            }
        ],
        itinerary: [
            {
                title: "Morning: Dehradun Sightseeing",
                content: "Pickup from your hotel in Dehradun. Visit Robber's Cave (Guchhupani) and Sahastradhara."
            },
            {
                title: "Drive to Mussoorie",
                content: "Proceed to Mussoorie (approx. 1 hour scenic drive)."
            },
            {
                title: "Mid-Day: Kempty Falls",
                content: "Visit the famous Kempty Falls. Enjoy the water and take photos."
            },
            {
                title: "Afternoon: Gun Hill & Company Garden",
                content: "Visit Company Garden and take a ropeway ride to Gun Hill for mesmerizing views."
            },
            {
                title: "Evening: Mall Road",
                content: "Leisurely stroll on the Mall Road, Mussoorie. Shopping and snacks."
            },
            {
                title: "Drop",
                content: "Drive back to Dehradun and drop at your preferred location."
            }
        ],
        whyChooseUs: [
            { title: "Expert Hilly Drivers", description: "Drivers experienced in mountain driving for your safety." },
            { title: "Comfortable Vehicles", description: "Well-maintained cars to handle the hilly terrain." },
            { title: "Customizable", description: "Stop for photos or tea whenever you want." },
            { title: "Door-to-Door", description: "Pickup and drop from your Dehradun hotel/home." }
        ],
        includes: [
            "Private AC Car for Sightseeing",
            "Fuel, Driver Allowance, Parking",
            "Pickup and Drop within Dehradun",
            "State Tax & Tolls"
        ],
        exclusions: [
            "Entry Fees to Waterfalls/Caves",
            "Ropeway Tickets",
            "Meals and Personal Expenses",
            "Guide Services"
        ],
        importantNotes: [
            "AC may be switched off during steep hill climbs to prevent engine overheating.",
            "Wear comfortable shoes for walking at Kempty Falls/caves.",
            "Carry light woolens even in summer for Mussoorie.",
            "Traffic on Mall Road can be restricted during peak hours."
        ],
        faqs: [
            {
                question: "Is the ropeway ticket included?",
                answer: "No, tickets for Gun Hill ropeway are to be purchased directly at the counter."
            },
            {
                question: "Can we swim in Kempty Falls?",
                answer: "Yes, there are designated pools, but please be careful and carry extra clothes."
            },
            {
                question: "How long is the drive from Dehradun to Mussoorie?",
                answer: "It takes about 1 to 1.5 hours depending on traffic."
            }
        ],
        tourTypes: [
            {
                title: "Hill Station Day Trip",
                description: "Explore the best of Doon Valley and Queen of Hills in one day."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹3,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹4,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹5,000/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹6,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹7,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹10,500/-", image: forceurbano }
        ]
    },
    'srinagar-sonmarg-gulmarg-local-sightseeing-by-car': {
        title: "Srinagar Sonmarg Gulmarg Local Sightseeing by Car",
        bannerImage: dehradun, // Using dehradun as placeholder for mountains
        description: "Experience the paradise on earth with our premium car rental service in Kashmir. Covering the breathtaking valleys of Srinagar, the meadow of gold 'Sonmarg', and the meadow of flowers 'Gulmarg'. Whether you want to enjoy a Shikara ride on Dal Lake, take a Gondola ride in Gulmarg, or witness the glaciers of Sonmarg, our professional drivers and comfortable heating-equipped cars ensure a memorable and safe journey through the Himalayas.",
        whatToExpect: "Explore the mesmerizing beauty of Kashmir at your own pace. You can choose to spend a day locally in Srinagar visiting Mughal Gardens and Dal Lake, or take a day trip to the snow-capped peaks of Gulmarg for skiing and Gondola rides. Another option is driving to Sonmarg to see the Thajiwas Glacier. Our service is flexible – book for a day or multiple days to cover all these destinations comfortably from Srinagar.",
        highlights: [
            { title: "Dal Lake & Nigeen Lake — Jewel in the crown of Kashmir", icon: FaWater },
            { title: "Gulmarg Gondola — World's second highest cable car", icon: FaMountain },
            { title: "Sonmarg — The Meadow of Gold & Glaciers", icon: FaCloud },
            { title: "Mughal Gardens — Nishat, Shalimar & Chashme Shahi", icon: FaLeaf },
            { title: "Shankaracharya Temple — Hilltop ancient temple", icon: GiByzantinTemple }, // Assuming FaTemples
            { title: "Winter Sports — Skiing & Snowboarding in Gulmarg", icon: FaGem },
            { title: "All Inclusive Pricing (Fuel, Parking, Tolls)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Dal Lake (Srinagar)",
                image: dehradun,
                description: "The most famous lake in Kashmir, known for its houseboats and Shikara rides. The floating market and sunset views are mesmerizing.",
                timings: "Open 24 Hours"
            },
            {
                name: "Gulmarg",
                image: dehradun,
                description: "A premier hill station famously known for skiing and the Gulmarg Gondola. It offers stunning views of snow-clad peaks.",
                timings: "Best visited: 09:00 AM – 05:00 PM"
            },
            {
                name: "Sonmarg",
                image: dehradun,
                description: "Known as the 'Meadow of Gold', it is famous for Thajiwas Glacier and as a base for the Amarnath Yatra.",
                timings: "Best visited: 08:00 AM – 04:00 PM"
            },
            {
                name: "Mughal Gardens (Srinagar)",
                image: dehradun,
                description: "Beautiful terraced gardens built by the Mughals, including Nishat Bagh, Shalimar Bagh, and Chashme Shahi.",
                timings: "09:00 AM – 07:00 PM"
            }
        ],
        itinerary: [
            {
                title: "Option 1: Srinagar Local Sightseeing",
                content: "Visit Dal Lake, Mughal Gardens (Nishat, Shalimar), Shankaracharya Temple, and local handicrafts market."
            },
            {
                title: "Option 2: Day Trip to Gulmarg",
                content: "Drive to Gulmarg (approx. 2 hours). Enjoy the Gondola ride, skiing, and snow activities. Return to Srinagar by evening."
            },
            {
                title: "Option 3: Day Trip to Sonmarg",
                content: "Drive to Sonmarg (approx. 2.5 hours). Visit Thajiwas Glacier (via pony/walk) and enjoy the river Sindh views. Return to Srinagar."
            },
            {
                title: "Departure/Custom Plan",
                content: "We can customize the itinerary based on the number of days you wish to book the car."
            }
        ],
        whyChooseUs: [
            { title: "Heating Equipped Cars", description: "Comfortable warm cars for winter travel." },
            { title: "Local Expert Drivers", description: "Skilled drivers for mountain roads and snow driving." },
            { title: "Flexible Packages", description: "Choose per day or per trip basis." },
            { title: "Safety First", description: "Vehicles equipped with chains for snow driving if required." }
        ],
        includes: [
            "Private AC/Heated Car for Sightseeing",
            "Fuel, Driver Allowance, Parking",
            "Pickup and Drop within Srinagar",
            "Toll Taxes & State Tax"
        ],
        exclusions: [
            "Gondola/Shikara Ride Charges",
            "Pony Rides/Sledge Charges",
            "Entry Fees to Gardens",
            "Guide Services & Meals"
        ],
        importantNotes: [
            "Gondola tickets should be booked in advance online.",
            "Union cabs may be required in Pahalgam/Sonmarg for internal sightseeing (our cab goes up to the stand).",
            "Carry heavy woolens in winter and light woolens in summer.",
            "Prepaid SIM cards from other states do not work in Kashmir."
        ],
        faqs: [
            {
                question: "Do outside cars go everywhere in Gulmarg/Sonmarg?",
                answer: "External vehicles are allowed up to the main parking. For some internal points, you may need local union transport or ponies."
            },
            {
                question: "Is the car heated?",
                answer: "Yes, we provide cars with heater facility for winter travel."
            },
            {
                question: "Is this price for one day?",
                answer: "Yes, the quoted price is for a standard day trip (approx. 8-9 hours) to one of these destinations."
            }
        ],
        tourTypes: [
            {
                title: "Kashmir Valley Tour",
                description: "Explore the heaven on earth with flexible day trips."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹3,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹3,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹4,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹4,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹5,000/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹6,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹7,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹10,500/-", image: forceurbano }
        ]
    },
    'delhi-to-kainchi-dham-neem-karoli-baba-tour': {
        title: "Delhi to Kainchi Dham, Neem Karoli Baba One Night Tour",
        bannerImage: rishikesh, // Placeholder
        description: "Embark on a spiritual journey to the serene Kainchi Dham Ashram, established by the revered Neem Karoli Baba. Located near Nainital, this ashram is a place of immense peace and devotion, attracting followers from across the globe including tech titans like Steve Jobs and Mark Zuckerberg. Our 2-day tour package offers a comfortable round trip from Delhi, allowing you to seek blessings and enjoy the tranquil beauty of the Kumaon hills.",
        whatToExpect: "A peaceful drive from Delhi to the Kumaon hills. Upon reaching Kainchi Dham, experience the divine vibrations of the ashram, attend the aarti, and meditate in the calming surroundings. We arrange for a comfortable overnight stay in designated hotels/homestays near Bhimtal or Bhowali. On the way back, enjoy scenic views or a quick stop at Nainital lake (time permitting).",
        highlights: [
            { title: "Kainchi Dham Ashram — Abode of Neem Karoli Baba", icon: FaOm },
            { title: "Hanuman Temple — Spiritual center causing miracles", icon: FaPray },
            { title: "Peaceful Meditation — Serene riverside location", icon: FaLeaf },
            { title: "Scenic Mountain Drive — Views of Kumaon Himalayas", icon: FaMountain },
            { title: "Golu Devta Temple — Temple of Bells (Chitai)", icon: GiByzantinTemple },
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Tax)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Kainchi Dham",
                image: rishikesh,
                description: "A spiritual ashram settled in the lap of nature. It was established by Neem Karoli Baba in 1964 and is dedicated to Lord Hanuman. The atmosphere here is electrifyingly peaceful.",
                timings: "06:00 AM – 07:00 PM"
            },
            {
                name: "Golu Devta Temple (Chitai)",
                image: rishikesh,
                description: "Famous as the 'God of Justice', this temple is adorned with thousands of bells offered by devotees whose wishes have been fulfilled.",
                timings: "06:00 AM – 08:00 PM"
            },
            {
                name: "Bhimtal Lake",
                image: rishikesh,
                description: "A large scenic lake near the ashram, perfect for a peaceful evening walk or boating. It has an island in the center with an aquarium.",
                timings: "Open 24 Hours"
            }
        ],
        itinerary: [
            {
                title: "Day 1: Delhi to Kainchi Dham & Darshan",
                content: "Morning departure (5-6 AM) from Delhi. Arrival at Kainchi Dham by afternoon. Darshan and meditation at the ashram. Check-in to hotel in Bhimtal/Bhowali. Evening at leisure/Bhimtal Lake."
            },
            {
                title: "Day 2: Morning Darshan & Return",
                content: "Optional morning visit to Golu Devta Temple or quick stop at Nainital. Begin return journey to Delhi. Drop at your location by late evening."
            }
        ],
        whyChooseUs: [
            { title: "Spiritual Connectivity", description: "Drivers who treat pilgrimage tours with respect." },
            { title: "Reliable Service", description: "Well-rested drivers for the long hill drive." },
            { title: "Comfortable Stay Options", description: "We can assist with hotel recommendations." },
            { title: "Transparent Billing", description: "No hidden charges for state entry taxes etc." }
        ],
        includes: [
            "Private AC Car for 2 Days (Delhi - Kainchi Dham - Delhi)",
            "Fuel, Driver Allowance, Tolls, State Taxes",
            "Pickup and Drop from Delhi NCR",
            "Parking Charges"
        ],
        exclusions: [
            "Hotel Accommodation",
            "Meals and Refreshments",
            "Personal Expenses",
            "Entry tickets to any tourist spots"
        ],
        importantNotes: [
            "The drive is approx 7-9 hours one way.",
            "Ashram rules regarding photography and dress code must be strictly followed.",
            "Book accommodation in advance as it gets crowded on weekends.",
            "Carry woolens as evenings can be chilly."
        ],
        faqs: [
            {
                question: "Is accommodation included in this price?",
                answer: "No, this price is for the cab rental only. We can help you find good hotels/homestays."
            },
            {
                question: "Can we visit Nainital also?",
                answer: "Yes, if time permits on Day 2, a quick visit to Nainital can be included."
            },
            {
                question: "Is it safe to drive at night?",
                answer: "We avoid night driving in hills for safety. We recommend starting early morning."
            }
        ],
        tourTypes: [
            {
                title: "Pilgrimage Tour",
                description: "Dedicated spiritual tour to Kainchi Dham."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹9,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹11,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹12,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹14,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹16,000/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹21,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹23,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹25,000/-", image: forceurbano }
        ]
    },
    'delhi-jaipur-fatehpur-sikri-agra-golden-triangle-tour': {
        title: "Delhi to Jaipur, Fatehpur Sikri & Agra Golden Triangle Tour",
        bannerImage: agra, // Placeholder, can be a collage if available, or just Agra
        description: "Experience the rich history and culture of India with our 2 Nights 3 Days Golden Triangle Tour. This tour takes you through the majestic forts of Jaipur, the ghost city of Fatehpur Sikri, and the eternal symbol of love, the Taj Mahal in Agra. Perfect for history buffs and those wanting to see the gems of North India in a short duration. Our comfortable cab service ensures a seamless journey across these iconic cities.",
        whatToExpect: "A well-planned journey covering three historic cities. Day 1 involves driving to Jaipur and exploring its royal heritage. Day 2 takes you en route to Agra via the UNESCO World Heritage site of Fatehpur Sikri. Day 3 is dedicated to the Taj Mahal and Agra Fort before returning to Delhi. Expect professional drivers, comfortable travel, and memories for a lifetime.",
        highlights: [
            { title: "Taj Mahal — The monument of love", icon: FaOm },
            { title: "Amber Fort — Elephant ride & Rajput grandeur", icon: FaFortAwesome },
            { title: "Fatehpur Sikri — The abandoned Mughal capital", icon: GiByzantinTemple },
            { title: "City Palace & Hawa Mahal — Iconic Jaipur landmarks", icon: FaCrown },
            { title: "Agra Fort — A masterpiece of Mughal architecture", icon: FaFortAwesome }, // Reusing Fort icon
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Tax)", icon: FaCheckCircle },
            { title: "3 Days Comprehensive Tour", icon: FaMap }
        ],
        placesWithDetails: [
            {
                name: "Amber Fort (Jaipur)",
                image: jaipur,
                description: "A majestic fort located on a hill in Amer, Rajasthan. Known for its artistic style elements, large ramparts, and series of gates and cobbled paths.",
                timings: "08:00 AM – 05:30 PM"
            },
            {
                name: "Fatehpur Sikri",
                image: agra,
                description: "A small city in northern India, just west of Agra, founded by a 16th-century Mughal emperor. Red sandstone buildings cluster at its center.",
                timings: "06:00 AM – 06:00 PM"
            },
            {
                name: "Taj Mahal (Agra)",
                image: agra,
                description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife.",
                timings: "Sunrise – Sunset (Closed on Fridays)"
            },
            {
                name: "Hawa Mahal (Jaipur)",
                image: jaipur,
                description: "The 'Palace of Winds' is a high screen wall built so the women of the royal household could observe street festivals while unseen from the outside.",
                timings: "09:00 AM – 04:30 PM"
            }
        ],
        itinerary: [
            {
                title: "Day 1: Delhi to Jaipur & Sightseeing",
                content: "Morning drive to Jaipur (5-6 hours). Check-in at hotel. Visit Amber Fort, City Palace, and Hawa Mahal. Evening explores local markets. Overnight stay in Jaipur."
            },
            {
                title: "Day 2: Jaipur to Agra via Fatehpur Sikri",
                content: "Morning drive to Agra. En route visit Fatehpur Sikri (Buland Darwaza, Salim Chishti Tomb). Continue to Agra. Check-in at hotel. Visit Agra Fort. Overnight stay in Agra."
            },
            {
                title: "Day 3: Taj Mahal & Return to Delhi",
                content: "Early morning visit to Taj Mahal at sunrise. Breakfast at hotel. Drive back to Delhi via Yamuna Expressway. Drop at your preferred location in Delhi by evening."
            }
        ],
        whyChooseUs: [
            { title: "Experienced Route Drivers", description: "Drivers familiar with the Golden Triangle route." },
            { title: "Comfortable Long Distance", description: "Well-maintained cars for highway travel." },
            { title: "Time Management", description: "Optimized itinerary to cover maximum spots." },
            { title: "No Hidden Costs", description: "All toll taxes and state taxes included in the package." }
        ],
        includes: [
            "Private AC Car for 3 Days",
            "Fuel, Driver Allowance, Parking",
            "Toll Taxes & State Taxes (UP, RJ, HR)",
            "Pickup and Drop from Delhi NCR"
        ],
        exclusions: [
            "Hotel Accommodation",
            "Meals and Refreshments",
            "Monument Entry Tickets",
            "Guide Services"
        ],
        importantNotes: [
            "Taj Mahal is closed on Fridays.",
            "Start early each day to make the most of the trip.",
            "Guide hiring is recommended at major monuments (authorized guides only).",
            "Hotel booking is not included in this cab fare."
        ],
        faqs: [
            {
                question: "Is the hotel included?",
                answer: "No, the price is for cab service only. You need to book your own hotels in Jaipur and Agra."
            },
            {
                question: "Can we modify the itinerary?",
                answer: "Yes, small adjustments like visiting Mathura on the way back can be discussed."
            },
            {
                question: "Are state taxes included?",
                answer: "Yes, all inter-state taxes for Rajasthan and Uttar Pradesh are included."
            }
        ],
        tourTypes: [
            {
                title: "Golden Triangle Tour",
                description: "The classic introduction to India's heritage."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹16,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹17,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹19,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹20,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹21,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹24,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹26,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹28,500/-", image: forceurbano }
        ]
    },
    'delhi-jaipur-pushkar-ajmer-tour': {
        title: "Delhi to Jaipur, Pushkar & Ajmer Tour (2 Nights 3 Days)",
        bannerImage: ajmer,
        description: "Explore the royal heritage of Rajasthan with our 3-day tour covering Jaipur, Pushkar, and Ajmer. Witness the grandeur of Amber Fort in Jaipur, seek blessings at the holy Ajmer Sharif Dargah, and visit the only Brahma Temple in the world at Pushkar. This tour offers a perfect blend of history, spirituality, and culture. travel in comfort with our private cab service.",
        whatToExpect: "A 3-day journey starting from Delhi. Day 1 is dedicated to the Pink City, Jaipur. Day 2 takes you to the spiritual twin cities of Ajmer and Pushkar. Visit the Dargah and the holy Pushkar Lake. Day 3 involves a calm return to Delhi or further local sightseeing. We provide experienced drivers and well-maintained cars for a hassle-free road trip.",
        highlights: [
            { title: "Ajmer Sharif Dargah — Sufi shrine of Moinuddin Chishti", icon: FaOm }, // Using FaOm as generic spiritual
            { title: "Pushkar Lake & Brahma Temple — Sacred Hindu pilgrimage", icon: FaWater },
            { title: "Amber Fort — Jaipur's hilltop fortress", icon: FaFortAwesome },
            { title: "Hawa Mahal — Palace of Winds", icon: FaWind },
            { title: "Camel Safari — Experience the desert vibes (Optional)", icon: FaSun },
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Tax)", icon: FaCheckCircle },
            { title: "3 Days Cultural Trip", icon: FaMap }
        ],
        placesWithDetails: [
            {
                name: "Ajmer Sharif Dargah",
                image: ajmer,
                description: "A Sufi shrine (Dargah) of the revered sufi saint, Moinuddin Chishti. It is one of the most important pilgrimage sites in India for people of all faiths.",
                timings: "05:00 AM – 10:00 PM"
            },
            {
                name: "Brahma Temple (Pushkar)",
                image: jaipur, // Using Jaipur/Generic image if Pushkar not available
                description: "Jagatpita Brahma Mandir is a Hindu temple situated at Pushkar close to the sacred Pushkar Lake. It is one of the very few existing temples dedicated to the Hindu creator-god Brahma.",
                timings: "06:00 AM – 08:00 PM"
            },
            {
                name: "Amber Fort (Jaipur)",
                image: jaipur,
                description: "A majestic fort located on a hill in Amer, Rajasthan. Known for its artistic style elements, large ramparts, and series of gates.",
                timings: "08:00 AM – 05:30 PM"
            },
            {
                name: "Pushkar Lake",
                image: jaipur,
                description: "A sacred lake where pilgrims take a holy dip. It is surrounded by 52 ghats and offers a mesmerizing sunset view.",
                timings: "Open 24 Hours"
            }
        ],
        itinerary: [
            {
                title: "Day 1: Delhi to Jaipur",
                content: "Morning drive to Jaipur (approx. 5 hours). Check-in to hotel. Visit Amber Fort, Jal Mahal and City Palace. Overnight stay in Jaipur."
            },
            {
                title: "Day 2: Jaipur to Ajmer & Pushkar",
                content: "Drive to Ajmer (approx. 2.5 hours). Visit Ajmer Sharif Dargah. Proceed to Pushkar (30 mins). Visit Brahma Temple and Pushkar Lake. Overnight stay in Pushkar/Ajmer."
            },
            {
                title: "Day 3: Return to Delhi",
                content: "Morning at leisure or optional visit to Ana Sagar Lake (Ajmer). Drive back to Delhi (approx. 7-8 hours). Drop at your location."
            }
        ],
        whyChooseUs: [
            { title: "Spiritual & Royal Mix", description: "Cover both heritage and pilgrimage spots." },
            { title: "Comfortable Travel", description: "AC cars to beat the Rajasthan heat." },
            { title: "Door-to-Door", description: "Pickup and drop from your home/hotel in Delhi." },
            { title: "Experienced Drivers", description: "Safe driving on highway and city traffic." }
        ],
        includes: [
            "Private AC Car for 3 Days",
            "Fuel, Driver Allowance, Parking",
            "Toll Taxes & State Taxes (RJ, HR)",
            "Pickup and Drop from Delhi NCR"
        ],
        exclusions: [
            "Hotel Accommodation",
            "Meals and Refreshments",
            "Camel Safari charges",
            "Entry tickets & Guide fees"
        ],
        importantNotes: [
            "Cover your head while entering the Dargah.",
            "Pushkar is a holy city; respectful dressing is advised.",
            "Alcohol and non-veg food are strictly prohibited in Pushkar.",
            "Toll taxes are included in the package."
        ],
        faqs: [
            {
                question: "Is accommodation included?",
                answer: "No, the package includes car rental only. You need to book hotels separately."
            },
            {
                question: "How far is Ajmer from Jaipur?",
                answer: "Ajmer is about 130 km from Jaipur and takes around 2.5 hours to reach."
            },
            {
                question: "Can we find guides easily?",
                answer: "Yes, authorized guides are available at Amber Fort and Ajmer Dargah."
            }
        ],
        tourTypes: [
            {
                title: "Rajasthan Heritage Tour",
                description: "Explore the culture of Rajasthan."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹12,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹14,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹17,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹21,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹24,000/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹31,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹35,000/-", image: forcetempo }, // Corrected typo from 3500 to 35000
            { name: "Force Urbania", price: "₹45,000/-", image: forceurbano }
        ]
    },
    'delhi-to-jim-corbett-tour': {
        title: "Delhi to Jim Corbett 2 Night 3 Days Tour",
        bannerImage: dehradun, // Placeholder for nature/wildlife
        description: "Escape into the wild with our 3-day tour to Jim Corbett National Park, the oldest national park in India. Home to the majestic Royal Bengal Tiger, elephants, and diverse bird species, Corbett offers a thrilling experience for nature lovers. Enjoy a comfortable drive from Delhi, exciting jeep safaris, and serenity by the Kosi river.",
        whatToExpect: "A thrilling wildlife getaway. The drive takes you from the bustle of Delhi to the tranquil forests of Uttarakhand. Spend 2 nights at a resort near the park. The highlight is the Jeep Safari into the jungle to spot tigers and other wildlife. You will also visit the Garjiya Devi Temple and Corbett Falls. Perfect for a weekend recharge.",
        highlights: [
            { title: "Jeep Safari — Thrilling ride in tiger territory", icon: FaCar }, // Using FaCar or maybe a generic adventure icon if available, reusing FaCar for Jeep
            { title: "Corbett Waterfall — Scenic picnic spot", icon: FaWater },
            { title: "Garjiya Devi Temple — Unique temple on a river rock", icon: FaOm }, // Using FaOm as generic spiritual
            { title: "Kosi River — Peaceful riverside relaxation", icon: FaLeaf },
            { title: "Wildlife Spotting — Tigers, Elephants, Deer", icon: FaBinoculars }, // Assuming FaBinoculars exists or use FaCamera
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Tax)", icon: FaCheckCircle },
            { title: "3 Days Nature Retreat", icon: FaMap }
        ],
        placesWithDetails: [
            {
                name: "Jim Corbett National Park",
                image: dehradun,
                description: "India's first national park, famous for having the highest number of tigers. It spans over 520 sq km and offers hills, riverine belts, and grasslands.",
                timings: "Safari Timings: Morning & Afternoon slots"
            },
            {
                name: "Garjiya Devi Temple",
                image: dehradun,
                description: "A famous temple located on a large rock amidst the Kosi River. It is a major pilgrimage spot for locals.",
                timings: "06:00 AM – 06:00 PM"
            },
            {
                name: "Corbett Waterfall",
                image: dehradun,
                description: "A scenic waterfall surrounded by dense teak forests, dropping from a height of 20 meters. A small trek is required to reach it.",
                timings: "08:00 AM – 05:00 PM"
            }
        ],
        itinerary: [
            {
                title: "Day 1: Delhi to Jim Corbett",
                content: "Morning departure from Delhi (approx. 5-6 hours drive). Arrival at Jim Corbett and check-in to your resort. Post lunch, visit Dhangarhi Museum or relax by the Kosi River. Overnight stay."
            },
            {
                title: "Day 2: Jungle Safari & Sightseeing",
                content: "Early morning Jeep Safari (needs prior booking). Return for breakfast. Visit Garjiya Devi Temple and Corbett Waterfall. Evening enjoying resort activities or nature walk. Overnight stay."
            },
            {
                title: "Day 3: Return to Delhi",
                content: "Breakfast at resort. Check-out and drive back to Delhi. Drop at your preferred location by evening."
            }
        ],
        whyChooseUs: [
            { title: "Wildlife Enthusiasts", description: "Drivers who know the jungle routes well." },
            { title: "Comfortable SUV/Sedans", description: "Best for the slightly rough terrain near forest." },
            { title: "Hassle-Free Booking", description: "Easy cab booking for your wildlife adventure." },
            { title: "Transparent Pricing", description: "Includes driver allowance and all road costs." }
        ],
        includes: [
            "Private AC Car for 3 Days",
            "Fuel, Driver Allowance, Parking",
            "Toll Taxes & State Taxes (UP, UK)",
            "Pickup and Drop from Delhi NCR"
        ],
        exclusions: [
            "Hotel/Resort Accommodation",
            "Meals and Refreshments",
            "Jeep Safari Booking Charges",
            "Entry permits & Guide fees"
        ],
        importantNotes: [
            "Jeep Safari permits must be booked 30-45 days in advance.",
            "Private cars are not allowed inside the safari zones; only registered jeeps.",
            "Carry valid ID proof for safari entry.",
            "Don't wear bright colors in the jungle."
        ],
        faqs: [
            {
                question: "Is the Jeep Safari included?",
                answer: "No, Safari boooking is separate. We can guide you on how to book or connect with agents."
            },
            {
                question: "Can the cab enter the forest?",
                answer: "No, private vehicles are not allowed inside the core zones. You must hire a safari gypsy."
            },
            {
                question: "Is it safe?",
                answer: "Yes, resorts are safe and the safari is conducted by trained professionals."
            }
        ],
        tourTypes: [
            {
                title: "Wildlife Tour",
                description: "Adventure in the wild."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹9,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹10,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹12,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹14,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹16,000/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹20,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹22,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹25,500/-", image: forceurbano }
        ]
    },
    'delhi-to-do-dham-kedarnath-badrinath-tour': {
        title: "Delhi to Do Dham (Kedarnath & Badrinath) 5 Night 6 Days",
        bannerImage: haridwar,
        description: "Embark on a sacred pilgrimage to Kedarnath and Badrinath, two of the most revered shrines in Hindu mythology. Our 6-day tour package from Delhi is designed to provide you with a soulful spiritual experience amidst the majestic Himalayas. With comfortable private cabs and experienced drivers, we ensure your journey through the winding mountain roads is safe and serene.",
        whatToExpect: "A profound spiritual journey covering the 'Kedarnath' (Abode of Lord Shiva) and 'Badrinath' (Abode of Lord Vishnu). You will witness the confluence of holy rivers (Prayags), enjoy the scenic beauty of the Garhwal Himalayas, and participate in the divine aartis. Our professional drivers are well-versed with mountain driving and local routes, prioritizing your safety throughout the trip.",
        highlights: [
            { title: "Kedarnath Temple — One of the 12 Jyotirlingas", icon: FaOm },
            { title: "Badrinath Temple — Part of the Char Dham", icon: FaOm },
            { title: "Panch Prayag — Divine confluences of holy rivers", icon: FaWater },
            { title: "Gaurikund — Base for Kedarnath trek", icon: FaMountain },
            { title: "Mana Village — The last village of India", icon: FaMapMarkerAlt },
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Tax)", icon: FaCheckCircle },
            { title: "Experienced Mountain Drivers", icon: FaUserTie }
        ],
        placesWithDetails: [
            {
                name: "Kedarnath Temple",
                image: haridwar,
                description: "A holy Hindu temple dedicated to Lord Shiva, located near the Mandakini river. It is one of the most sacred pilgrimage centers in the world.",
                timings: "04:00 AM – 09:00 PM (Temple closes during winter)"
            },
            {
                name: "Badrinath Temple",
                image: haridwar,
                description: "Dedicated to Lord Vishnu, this temple is situated in the town of Badrinath. It is one of the four Char Dham pilgrimage sites.",
                timings: "04:30 AM – 09:00 PM (Temple closes during winter)"
            },
            {
                name: "Mana Village",
                image: haridwar,
                description: "Known as the last village of India, located near Badrinath. It has historical significance related to the Mahabharata.",
                timings: "Daylight Hours"
            }
        ],
        itinerary: [
            {
                title: "Day 1: Delhi to Haridwar",
                content: "Pickup from Delhi (Morning). Drive to Haridwar (approx. 5-6 hours). Check-in at hotel. Evening attend Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar."
            },
            {
                title: "Day 2: Haridwar to Sonprayag/Sitapur",
                content: "Morning drive to Sonprayag/Sitapur (base for Kedarnath). En route see Devprayag and Rudraprayag. Check-in at hotel. Overnight stay."
            },
            {
                title: "Day 3: Sonprayag to Kedarnath (Trek/Heli)",
                content: "Early morning proceed to Gaurikund. Start trek to Kedarnath (16km) or take a helicopter. Special Darshan and attend evening Aarti. Overnight stay in Kedarnath (Govt. Camps/Guest House)."
            },
            {
                title: "Day 4: Kedarnath to Sonprayag/Guptkashi",
                content: "Morning Darshan. Trek down to Gaurikund and drive back to Sonprayag/Guptkashi. Evening at leisure. Overnight stay."
            },
            {
                title: "Day 5: Guptkashi to Badrinath",
                content: "Drive to Badrinath via Joshimath. Check-in at hotel. Evening Darshan of Lord Badri Vishal and visit Mana Village. Overnight stay in Badrinath."
            },
            {
                title: "Day 6: Badrinath to Rishikesh/Haridwar & Return",
                content: "Early morning Darshan. Drive back to Delhi via Rishikesh. Drop at your preferred location in Delhi by late night."
            }
        ],
        whyChooseUs: [
            { title: "Safe Mountain Transit", description: "Drivers specialized in Garhwal hill roads." },
            { title: "Flexible Stops", description: "Stop at Prayags and scenic viewpoints for photos." },
            { title: "Comfortable Modern Cars", description: "Cars with good ground clearance and comfort." },
            { title: "Reliability", description: "Punctual service for heli-booking timings." }
        ],
        includes: [
            "Private AC Car for 6 Days (AC will be off in hills)",
            "Fuel, Driver Allowance, Parking",
            "Toll Taxes & State Entry Taxes",
            "Pickup and Drop from Delhi/NCR"
        ],
        exclusions: [
            "Hotel Accommodation & Meals",
            "Kedarnath Helicopter/Pony/Palki charges",
            "Personal Expenses & Guide Fees",
            "Entry tickets to any shrines"
        ],
        importantNotes: [
            "Biometric registration is mandatory for Yatra.",
            "Carry heavy woolens as temperatures can drop significantly.",
            "Book helicopter tickets well in advance from IRCTC portal.",
            "AC will be switched off in mountain areas for safety."
        ],
        faqs: [
            {
                question: "Is the trek very difficult?",
                answer: "The 16km trek is moderately difficult. Alternatives like ponies and helicopters are available."
            },
            {
                question: "Do you provide hotel booking?",
                answer: "This package is for car rental only. However, we can assist with recommendations."
            },
            {
                question: "Is it safe for senior citizens?",
                answer: "Yes, provided they use heli/pony services and consult a doctor for high altitude travel."
            }
        ],
        tourTypes: [
            {
                title: "Religious Pilgrimage",
                description: "A soulful journey to the Himalayan shrines."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹18,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹21,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹25,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹30,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹35,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹45,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹51,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹65,500/-", image: forceurbano }
        ]
    },
    'delhi-shimla-manali-tour': {
        title: "Delhi to Shimla & Manali 5 Night 6 Days Tour",
        bannerImage: dehradun, // Placeholder for mountains
        description: "Experience the magic of the Himalayas with our 6-day tour package covering Shimla and Manali. From the colonial charm of Shimla's Ridge to the snow-covered slopes of Rohtang Pass, this tour offers the perfect escape from the city heat. Enjoy comfortable travel in our private cabs with experienced mountain drivers who ensure your safety and enjoyment throughout the scenic journey.",
        whatToExpect: "A breathtaking journey through the heart of Himachal Pradesh. Explore the 'Queen of Hills' Shimla, visit the adventure capital Manali, and witness the stunning Solang Valley. Our package covers all major sightseeing spots with a flexible itinerary, allowing you to enjoy paragliding, river rafting, or peaceful walks through pine forests at your own pace.",
        highlights: [
            { title: "Shimla Ridge & Mall Road — Colonial charm", icon: FaBuilding },
            { title: "Kufri — Adventure & panoramic views", icon: FaMountain },
            { title: "Rohtang Pass / Solang Valley — Snow & adventure sports", icon: FaSnowflake },
            { title: "Hadimba Devi Temple — Unique wooden architecture", icon: GiByzantinTemple },
            { title: "Vashisht Hot Springs — Natural healing waters", icon: FaWater },
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Tax)", icon: FaCheckCircle },
            { title: "Experienced Hill Drivers", icon: FaUserTie }
        ],
        placesWithDetails: [
            {
                name: "The Ridge (Shimla)",
                image: dehradun,
                description: "The large open space in the heart of Shimla, offering spectacular views of the mountain ranges and houses the famous Christ Church.",
                timings: "Open 24 Hours"
            },
            {
                name: "Solang Valley (Manali)",
                image: dehradun,
                description: "Famous for adventure sports like paragliding, zorbing, and skiing. It offers stunning views of glaciers and snow-capped peaks.",
                timings: "09:00 AM – 06:00 PM"
            },
            {
                name: "Hadimba Devi Temple",
                image: dehradun,
                description: "A 16th-century wooden temple dedicated to Goddess Hadimba, surrounded by cedar forests in Manali.",
                timings: "08:00 AM – 06:00 PM"
            }
        ],
        itinerary: [
            {
                title: "Day 1: Delhi to Shimla",
                content: "Morning pickup from Delhi. Scenic drive to Shimla (approx. 7-8 hours). Check-in at hotel. Evening at leisure on Mall Road. Overnight stay."
            },
            {
                title: "Day 2: Shimla & Kufri Sightseeing",
                content: "Visit Kufri, Jakhoo Temple, and the Ridge. Explore local markets and enjoy the sunset. Overnight stay in Shimla."
            },
            {
                title: "Day 3: Shimla to Manali via Kullu",
                content: "Drive to Manali (approx. 7-8 hours). En route visit Kullu Valley, Pandoh Dam, and Hanogi Mata Temple. Optional river rafting in Kullu. Overnight stay in Manali."
            },
            {
                title: "Day 4: Manali Local Sightseeing",
                content: "Visit Hadimba Devi Temple, Vashisht Hot Springs, Buddhist Monastery, and Club House. Evening free for Mall Road. Overnight stay."
            },
            {
                title: "Day 5: Solang Valley / Rohtang Pass",
                content: "Full day excursion to Solang Valley or Rohtang Pass (subject to availability/permits). Enjoy snow activities and adventure sports. Overnight stay in Manali."
            },
            {
                title: "Day 6: Manali to Delhi Return",
                content: "Check-out and drive back to Delhi (approx. 12-14 hours). Long journey through scenic routes. Drop at your location in Delhi by late night."
            }
        ],
        whyChooseUs: [
            { title: "Expert Mountain Drivers", description: "Safe driving on steep Himalayan curves." },
            { title: "Heated & Comfortable Cars", description: "Cars optimized for mountain travel and cold weather." },
            { title: "Flexible Itinerary", description: "Stop at scenic spots for photos and local food." },
            { title: "All Taxes Included", description: "Transparent pricing including HP state taxes and tolls." }
        ],
        includes: [
            "Private AC Car for 6 Days",
            "Fuel, Driver Allowance, Parking",
            "Toll Taxes & HP State Entry Taxes",
            "Pickup and Drop from Delhi/NCR"
        ],
        exclusions: [
            "Hotel Accommodation & Meals",
            "Adventure Activity Charges (Paragliding, Skiing)",
            "Rohtang Pass Permit & Local Taxi Charges",
            "Entry tickets to any monuments"
        ],
        importantNotes: [
            "Rohtang Pass visit is subject to permit availability and NGT regulations.",
            "Local taxi might be required for Rohtang Pass as per local union rules.",
            "Carry heavy woolens for Manali and Solang valley.",
            "Expect long driving hours on Day 6 for return."
        ],
        faqs: [
            {
                question: "Is Rohtang Pass included in this fare?",
                answer: "The fare includes travel to Solang Valley. Rohtang Pass requires a special permit and may involve extra union taxi charges."
            },
            {
                question: "Can we do river rafting in Kullu?",
                answer: "Yes, we can stop at Kullu on the way to Manali for river rafting sessions."
            },
            {
                question: "How is the road condition?",
                answer: "Major highways are good, but expect some mountain curves and potentially heavy traffic near entry points."
            }
        ],
        tourTypes: [
            {
                title: "Hill Station Tour",
                description: "A perfect escape to the majestic Himalayas."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹18,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹21,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹25,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹30,500/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹35,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹45,500/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹51,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹65,500/-", image: forceurbano }
        ]
    },
    'delhi-to-char-dham-tour': {
        title: "Delhi to Char Dham (Yamunotri, Gangotri, Kedarnath & Badrinath) 11N/12D",
        bannerImage: haridwar,
        description: "Embark on the ultimate spiritual odyssey with our 12-day Char Dham Yatra package from Delhi. Covering the four sacred abodes—Yamunotri, Gangotri, Kedarnath, and Badrinath—this journey takes you through the heart of the Himalayas. Our premium car rental service provides you with experienced mountain drivers and well-maintained vehicles to ensure a safe, comfortable, and soul-stirring pilgrimage.",
        whatToExpect: "A comprehensive 12-day pilgrimage through the 'Devbhoomi' Uttarakhand. You will visit the source of holy rivers Yamuna and Ganga, seek blessings at the majestic Kedarnath and Badrinath temples, and witness the unparalleled natural beauty of the Garhwal Himalayas. The tour is meticulously planned to allow for proper acclimatization and enough time for darshans and rituals at each Dham.",
        highlights: [
            { title: "Yamunotri — Source of the holy river Yamuna", icon: FaWater },
            { title: "Gangotri — Abode of Goddess Ganga", icon: FaWater },
            { title: "Kedarnath — One of the 12 holiest Jyotirlingas", icon: FaOm },
            { title: "Badrinath — The final destination of Char Dham", icon: FaOm },
            { title: "Har Ki Pauri — World famous evening Ganga Aarti", icon: FaPray },
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Tax)", icon: FaCheckCircle },
            { title: "Specialist Hill Drivers for Char Dham Route", icon: FaUserTie }
        ],
        placesWithDetails: [
            {
                name: "Yamunotri Temple",
                image: haridwar,
                description: "The first stop of the Char Dham Yatra, dedicated to Goddess Yamuna. It is situated in the western Garhwal Himalayas.",
                timings: "06:00 AM – 08:00 PM (May to Nov)"
            },
            {
                name: "Gangotri Temple",
                image: haridwar,
                description: "The white granite temple of Goddess Ganga, located on the banks of Bhagirathi River at an altitude of 3,100 meters.",
                timings: "06:15 AM – 09:30 PM (May to Nov)"
            },
            {
                name: "Kedarnath Temple",
                image: haridwar,
                description: "The highest of the 12 Jyotirlingas, dedicated to Lord Shiva and surrounded by snow-clad peaks.",
                timings: "04:00 AM – 09:00 PM (Temple closes in winter)"
            },
            {
                name: "Badrinath Temple",
                image: haridwar,
                description: "A sacred temple of Lord Vishnu, situated between the Nar and Narayan mountain ranges.",
                timings: "04:30 AM – 09:00 PM (Temple closes in winter)"
            }
        ],
        itinerary: [
            {
                title: "Day 1-2: Delhi to Barkot (via Haridwar)",
                content: "Day 1: Drive to Haridwar, attend Aarti. Day 2: Proceed to Barkot (base for Yamunotri). Prepare for the first Dham."
            },
            {
                title: "Day 3-4: Yamunotri Darshan & Uttarkashi",
                content: "Day 3: Trek to Yamunotri, seek blessings, and return. Day 4: Drive to Uttarkashi, visit Vishwanath Temple."
            },
            {
                title: "Day 5-6: Gangotri Darshan & Guptkashi",
                content: "Day 5: Full day excursion to Gangotri. Day 6: Long drive to Guptkashi (base for Kedarnath)."
            },
            {
                title: "Day 7-9: Kedarnath Spiritual Experience",
                content: "Day 7: Proceed to Sonprayag/Gaurikund, trek to Kedarnath. Day 8: Morning Darshan and trek down. Day 9: Relax/Buffer day or proceed to Pipalkoti."
            },
            {
                title: "Day 10-12: Badrinath Darshan & Return",
                content: "Day 10: Reach Badrinath, visit Mana Village. Day 11: Drive to Haridwar/Rishikesh. Day 12: Return journey to Delhi."
            }
        ],
        whyChooseUs: [
            { title: "Specialized Yatra Drivers", description: "Drivers with 10+ years experience on Char Dham routes." },
            { title: "Safety Guaranteed", description: "GPS tracked vehicles with mountain safety kits." },
            { title: "Comfortable Long Haul", description: "Spacious vehicles for a comfortable 12-day journey." },
            { title: "Doorstep Service", description: "Hassle-free pickup and drop-off from your home in Delhi/NCR." }
        ],
        includes: [
            "Private AC Car for 12 Days (AC off in mountains)",
            "Fuel, Driver Allowance, All Tolls",
            "Uttarakhand State Entry Taxes",
            "Inter-state permit charges"
        ],
        exclusions: [
            "Hotel Accommodation & Meals",
            "Pony/Palki/Helicopter Charges",
            "Personal Expenses & VIP Darshan",
            "Mandatory Registration fees"
        ],
        importantNotes: [
            "Online Biometric Registration is compulsory (we can assist).",
            "Yatra usually opens in May and closes in early November.",
            "Expect long driving days through narrow mountain roads.",
            "Health check-up is recommended before embarking on the trip."
        ],
        faqs: [
            {
                question: "How much trekking is involved?",
                answer: "Yamunotri is a 6km trek and Kedarnath is a 16km trek. Ponies and helicopters are widely available."
            },
            {
                question: "Is it safe for kids and seniors?",
                answer: "Yes, but they should avoid trekking and use alternatives. Proper medical advice is recommended."
            },
            {
                question: "What about mobile connectivity?",
                answer: "BSNL has the best network in the mountains. Others may have limited or no coverage."
            }
        ],
        tourTypes: [
            {
                title: "Grand Chardham Yatra",
                description: "The ultimate 12-day spiritual journey."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹36,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹42,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹48,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹60,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹69,000/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹90,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹1,10,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹1,35,000/-", image: forceurbano }
        ]
    },
    'delhi-comprehensive-up-spiritual-tour': {
        title: "Delhi to Mathura, Vrindavan, Agra, Lucknow, Ayodhya, Prayagraj & Varanasi Tour",
        bannerImage: varanasi,
        description: "Experience the ultimate spiritual and cultural journey across Uttar Pradesh with our 7-day comprehensive tour from Delhi. This package covers the most sacred sites of India—from the birthplace of Lord Krishna and Lord Rama to the eternal city of Varanasi and the majestic Taj Mahal. Travel comfortably across these historic cities with our private cab service and expert drivers.",
        whatToExpect: "A deep dive into Indian heritage and spirituality. Visit the sacred temples of Mathura and Vrindavan, the world-famous Taj Mahal in Agra, the royal 'Tehzeeb' of Lucknow, the newly built Ram Mandir in Ayodhya, the holy Sangam in Prayagraj, and the spiritual heart of India, Varanasi. Our tour is meticulously planned to cover all major landmarks with enough time for darshans and exploring local culture.",
        highlights: [
            { title: "Kashi Vishwanath & Ganga Aarti — The soul of Varanasi", icon: FaOm },
            { title: "Shree Ram Janmabhoomi — Divine Darshan in Ayodhya", icon: FaOm },
            { title: "Taj Mahal — The eternal symbol of love", icon: FaStar },
            { title: "Triveni Sangam — Holy confluence in Prayagraj", icon: FaWater },
            { title: "Bara Imambara & Rumi Darwaza — Lucknow's heritage", icon: FaBuilding },
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Tax)", icon: FaCheckCircle },
            { title: "7 Days Comprehensive UP Tour", icon: FaMap }
        ],
        placesWithDetails: [
            {
                name: "Varanasi Ghats",
                image: varanasi,
                description: "The ancient steps leading to the Ganges. Famous for the mesmerizing Ganga Aarti and spiritual vibes that draw seekers from around the world.",
                timings: "Ganga Aarti: 06:30 PM (Daily)"
            },
            {
                name: "Shree Ram Mandir (Ayodhya)",
                image: ayodhya,
                description: "The historic temple at the birthplace of Lord Rama. A masterpiece of Indian temple architecture and a symbol of faith.",
                timings: "06:30 AM – 09:30 PM"
            },
            {
                name: "Triveni Sangam (Prayagraj)",
                image: prayagraj,
                description: "The sacred meeting point of three rivers—Ganga, Yamuna, and the mythical Saraswati. A holy dip here is considered highly auspicious.",
                timings: "Open 24 Hours"
            },
            {
                name: "Rumi Darwaza (Lucknow)",
                image: rumidarvaja,
                description: "An imposing gateway built in the 1780s, showcasing Awadhi architecture. It is the signature landmark of the City of Nawabs.",
                timings: "Open 24 Hours"
            }
        ],
        itinerary: [
            {
                title: "Day 1: Delhi to Agra via Mathura & Vrindavan",
                content: "Morning departure from Delhi. Visit Krishna Janmabhoomi in Mathura and Bankey Bihari in Vrindavan. Proceed to Agra. Overnight stay."
            },
            {
                title: "Day 2: Agra Sightseeing & Lucknow",
                content: "Sunrise visit to Taj Mahal and Agra Fort. Drive to Lucknow via the Expressway (approx. 4-5 hours). Evening explore Hazratganj. Overnight stay."
            },
            {
                title: "Day 3: Lucknow Sightseeing & Ayodhya",
                content: "Visit Bara Imambara, Chota Imambara, and Rumi Darwaza. Afternoon drive to Ayodhya (approx. 2.5 hours). Overnight stay."
            },
            {
                title: "Day 4: Ayodhya Darshan & Prayagraj",
                content: "Spend the day at Ram Janmabhoomi, Hanuman Garhi, and Saryu River. Afternoon drive to Prayagraj (approx. 4 hours). Overnight stay."
            },
            {
                title: "Day 5: Prayagraj to Varanasi",
                content: "Morning holy dip at Triveni Sangam. Visit Anand Bhawan. Drive to Varanasi (approx. 3 hours). Evening enjoy Ganga Aarti. Overnight stay."
            },
            {
                title: "Day 6: Varanasi Local Sightseeing",
                content: "Visit Kashi Vishwanath Temple, Kaal Bhairav, BHU (New Vishwanath Temple), and Sarnath. Boat ride on the Ganges. Overnight stay."
            },
            {
                title: "Day 7: Return to Delhi",
                content: "Morning at leisure/last-minute shopping. Drive back to Delhi via Purvanchal/Yamuna Expressway or drop at Airport/Railway station. (Long journey return)."
            }
        ],
        whyChooseUs: [
            { title: "End-to-End Coverage", description: "Cover 7 major cities in one seamless journey." },
            { title: "Professional Express Highway Drivers", description: "Safety and speed on the new UP expressways." },
            { title: "Well-Maintained AC Cabs", description: "High comfort for a 7-day long trip." },
            { title: "Inclusive Pricing", description: "All UP state taxes, tolls, and inter-city permits included." }
        ],
        includes: [
            "Private AC Car for 7 Days",
            "Fuel, Driver Allowance, Parking",
            "Toll Taxes & UP State Entry Taxes",
            "Pickup and Drop from Delhi/NCR"
        ],
        exclusions: [
            "Hotel Accommodation & Meals",
            "Boat Ride & Guide Charges",
            "Entry tickets to monuments",
            "Personal Expenses"
        ],
        importantNotes: [
            "Start early to maintain the pace across cities.",
            "Dress respectfully for temple visits in Varanasi and Ayodhya.",
            "Taj Mahal is closed on Fridays.",
            "Varanasi boat rides are best during sunrise or for the evening Aarti."
        ],
        faqs: [
            {
                question: "Is hotel booking included in this price?",
                answer: "No, this price is for the professional cab service only. You need to book your own hotels."
            },
            {
                question: "Can we add Chitrakoot to this plan?",
                answer: "Yes, it can be added with an extra day and additional charge. Please discuss with our support."
            },
            {
                question: "Is it a one-way or round trip?",
                answer: "This is a round trip starting and ending in Delhi/NCR."
            }
        ],
        tourTypes: [
            {
                title: "Heritage & Spiritual Tour",
                description: "The complete heartland of India experience."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹27,500/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹31,500/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹38,000/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹46,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹52,000/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹65,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹75,500/-", image: forcetempo },
            { name: "Force Urbania", price: "₹1,01,500/-", image: forceurbano }
        ]
    },
    'delhi-kashmir-vaishnodevi-amritsar-grand-tour': {
        title: "Delhi to Jammu, Pahalgam, Srinagar, Gulmarg, Vaishno Devi & Amritsar Grand Tour (9N/10D)",
        bannerImage: amritsar,
        description: "Experience the ultimate North India expedition with our 10-day grand tour. This epic journey takes you from the national capital to the 'Heaven on Earth' Kashmir, the sacred shrine of Vaishno Devi, and the spiritual Golden Temple in Amritsar. A perfect blend of adventure, spirituality, and breathtaking natural beauty, all in the comfort of our premium private cabs.",
        whatToExpect: "A massive 10-day loop covering 3 states and 1 union territory. Enjoy the scenic valleys of Pahalgam and Gulmarg, stay in a luxury houseboat in Srinagar, seek blessings at Mata Vaishno Devi, and witness the patriotic ceremony at the Wagah Border. Our experienced long-route drivers ensure a smooth transition between the plains and the mighty mountains.",
        highlights: [
            { title: "Srinagar & Dal Lake — Shikara ride & Houseboat stay", icon: FaWater },
            { title: "Gulmarg & Sonmarg — Snow adventure and Glaciers", icon: FaSnowflake },
            { title: "Vaishno Devi — Holy Darshan at Trikuta Hills", icon: FaOm },
            { title: "Golden Temple — Spiritual peace in Amritsar", icon: FaPray },
            { title: "Pahalgam — The Valley of Shepherds", icon: FaMountain },
            { title: "Wagah Border — Patriotic Beating Retreat ceremony", icon: FaStar },
            { title: "All Inclusive Cab Fare (Fuel, Tolls, State Taxes)", icon: FaCheckCircle }
        ],
        placesWithDetails: [
            {
                name: "Dal Lake (Srinagar)",
                image: dehradun,
                description: "The jewel of Srinagar, famous for its houseboats and floating markets. A Shikara ride at sunset is an unforgettable experience.",
                timings: "Best during Day/Sunset"
            },
            {
                name: "Mata Vaishno Devi (Katra)",
                image: dehradun,
                description: "One of the most visited holy shrines in India. Pilgrims trek 12km from Katra to reach the holy cave in Trikuta mountains.",
                timings: "Open 24 Hours (Registration required)"
            },
            {
                name: "Golden Temple (Amritsar)",
                image: amritsar,
                description: "The holiest Gurdwara of Sikhism, known for its stunning golden architecture and peaceful community kitchen (Langar).",
                timings: "Open 24 Hours"
            },
            {
                name: "Gulmarg Gondola",
                image: dehradun,
                description: "One of the highest cable cars in the world, offering breathtaking views of the snow-clad Himalayas.",
                timings: "10:00 AM – 05:00 PM"
            }
        ],
        itinerary: [
            {
                title: "Day 1: Delhi to Jammu",
                content: "Early morning start from Delhi. Long drive to Jammu (approx. 10-11 hours). Check-in at hotel. Overnight stay in Jammu."
            },
            {
                title: "Day 2-3: Jammu to Pahalgam & Sightseeing",
                content: "Day 2: Drive to Pahalgam (Valley of Shepherds). Day 3: Visit Aru Valley, Betaab Valley, and Chandanwari. Overnight in Pahalgam."
            },
            {
                title: "Day 4-5: Srinagar Houseboat & Local Tour",
                content: "Day 4: Drive to Srinagar, check-in to Houseboat. Shikara ride on Dal Lake. Day 5: Visit Shalimar Bagh, Nishat Bagh, and Shankaracharya Temple."
            },
            {
                title: "Day 6-7: Gulmarg & Sonmarg Day Trips",
                content: "Day 6: Full day trip to Gulmarg (Meadow of Flowers), enjoy Gondola ride. Day 7: Trip to Sonmarg (Meadow of Gold) to see Thajiwas Glacier."
            },
            {
                title: "Day 8: Srinagar to Katra",
                content: "Morning drive to Katra (base for Vaishno Devi). Registration for Yatra. Evening start trek or relax for next day. Overnight in Katra."
            },
            {
                title: "Day 9: Vaishno Devi Darshan & Amritsar",
                content: "Early morning Darshan. Return to Katra and drive to Amritsar (approx. 5-6 hours). Late night arrival. Overnight in Amritsar."
            },
            {
                title: "Day 10: Amritsar Sightseeing & Delhi Return",
                content: "Visit Golden Temple and Jallianwala Bagh. Post lunch drive to Wagah Border for ceremony. Start return journey to Delhi. Late night drop."
            }
        ],
        whyChooseUs: [
            { title: "Long Route Specialists", description: "Drivers experienced in inter-state grand tours." },
            { title: "Multilingual Drivers", description: "Easy communication across different states." },
            { title: "Safety & Reliability", description: "GPS enabled tracker and mountain-ready vehicles." },
            { title: "Customizable Stops", description: "Flexible itinerary to suit your group's pace." }
        ],
        includes: [
            "Private AC Car for 10 Days",
            "Fuel, Driver Allowance, Parking",
            "Toll Taxes & All State Taxes (PB, JK, HR, DL)",
            "Pickup and Drop from Delhi/NCR"
        ],
        exclusions: [
            "Hotel/Houseboat Accommodation & Meals",
            "Gondola/Shikara Ride charges",
            "Helicopter/Pony charges for Vaishno Devi",
            "Entry tickets to monuments"
        ],
        importantNotes: [
            "Carry valid ID proof and double-dose vaccine certificate (if required).",
            "Postpaid mobile connection (preferably BSNL/Airtel) works best in J&K.",
            "Heavy woolens required for Gulmarg/Sonmarg regardless of season.",
            "Prepare for long driving hours on Day 1 and Day 10."
        ],
        faqs: [
            {
                question: "Is Katra to Vaishno Devi trek included?",
                answer: "The trek is self-paced. We drop you at Katra and pick you up after Darshan. Pony/Heli/Battery car are extra."
            },
            {
                question: "Do you arrange houseboat bookings?",
                answer: "Our package is for car only, but your driver can assist with local recommendations if needed."
            },
            {
                question: "What about the J&K state tax?",
                answer: "Yes, our 'All-Inclusive' quote covers state entry taxes for Punjab and J&K."
            }
        ],
        tourTypes: [
            {
                title: "Grand North India Expedition",
                description: "The ultimate 10-day adventure."
            }
        ],
        carss: [
            { name: "WagonR (4+1)", price: "₹30,000/-", image: wagonr },
            { name: "Swift Dzire (4+1)", price: "₹35,000/-", image: drizer },
            { name: "Maruti Ertiga (6+1)", price: "₹42,500/-", image: ertiga },
            { name: "Kia Carens (6+1)", price: "₹50,000/-", image: kiacerens },
            { name: "Innova Crysta (6+1)", price: "₹57,500/-", image: innova },
            { name: "Tempo Traveller (12+1)", price: "₹75,000/-", image: forcetempo },
            { name: "Tempo Traveller (17+1)", price: "₹87,000/-", image: forcetempo },
            { name: "Force Urbania", price: "₹1,15,000/-", image: forceurbano }
        ]
    }
};
