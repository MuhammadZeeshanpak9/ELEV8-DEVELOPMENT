export type PropertyType = 'RENT' | 'BUY' | 'INVEST';

export interface Project {
  id: string;
  title: string;
  type: PropertyType;
  price: string;
  stats: string;
  image: string;
  description: string;
  regionId: string;
  continentId: string;
}

export interface Region {
  id: string;
  name: string;
  image: string;
  description: string;
  continentId: string;
}

export interface Continent {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const continentsData: Continent[] = [
  {
    id: 'europe',
    name: 'Europe',
    image: 'https://images.unsplash.com/photo-1564501049559-0738c2c20c0b?auto=format&fit=crop&q=80&w=1200',
    description: 'Discover luxury properties across Europe\'s most iconic cities and coastlines.'
  },
  {
    id: 'asia',
    name: 'Asia',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    description: 'Experience unparalleled elegance in vibrant, modern, and traditional Asian landscapes.'
  },
  {
    id: 'americas',
    name: 'Americas',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200',
    description: 'Explore premier estates and modern developments across North and South America.'
  },
  {
    id: 'africa',
    name: 'Africa',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Discover rare ultra-luxury estates across Africa\'s most breathtaking landscapes.'
  },
  {
    id: 'australia',
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
    description: 'World-class contemporary villas and penthouses along Australia\'s iconic coastlines.'
  },
  {
    id: 'north-america',
    name: 'North America',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'Premium glass-and-steel residences across the USA and Canada\'s most coveted addresses.'
  }
];

export const regionsData: Region[] = [
  // Europe
  {
    id: 'uk',
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'Historic estates and modern luxury in the heart of the UK.',
    continentId: 'europe'
  },
  {
    id: 'france',
    name: 'France',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1200',
    description: 'Villas in the French Riviera and classic Parisian apartments.',
    continentId: 'europe'
  },
  // Asia
  {
    id: 'indonesia',
    name: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    description: 'Tropical paradises and serene retreats in Bali and beyond.',
    continentId: 'asia'
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    description: 'Futuristic penthouses and opulent villas in Dubai.',
    continentId: 'asia'
  },
  // Americas
  {
    id: 'mexico',
    name: 'Mexico',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200',
    description: 'Stunning beachfront properties and jungle sanctuaries in Tulum.',
    continentId: 'americas'
  },
  // Africa
  {
    id: 'africa-east',
    name: 'East Africa',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Ultra-luxury safari lodges and glass villas across Kenya, Tanzania and beyond.',
    continentId: 'africa'
  },
  {
    id: 'africa-south',
    name: 'South Africa',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=1200',
    description: 'Clifftop mansions and contemporary estates in Cape Town and the Winelands.',
    continentId: 'africa'
  },
  {
    id: 'africa-north',
    name: 'North Africa',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=1200',
    description: 'Minimalist luxury riads and modern penthouses in Marrakech and Casablanca.',
    continentId: 'africa'
  },
  {
    id: 'africa-west',
    name: 'West Africa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'Emerging luxury market with oceanfront residences in Lagos and Accra.',
    continentId: 'africa'
  },
  {
    id: 'africa-central',
    name: 'Central Africa',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    description: 'Exclusive eco-luxury lodges and modern retreats in Central Africa.',
    continentId: 'africa'
  },
  // Australia
  {
    id: 'australia-sydney',
    name: 'Sydney',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
    description: 'Harbour-view penthouses and glass architecture on Sydney\'s most prized shores.',
    continentId: 'australia'
  },
  {
    id: 'australia-melbourne',
    name: 'Melbourne',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1200',
    description: 'Contemporary designer residences in one of the world\'s most liveable cities.',
    continentId: 'australia'
  },
  {
    id: 'australia-gold-coast',
    name: 'Gold Coast',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Beachfront ultra-modern villas and high-rise luxury on Queensland\'s golden strip.',
    continentId: 'australia'
  },
  // North America
  {
    id: 'na-miami',
    name: 'Miami',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=1200',
    description: 'Glass waterfront penthouses and modern mansions on Miami\'s most exclusive islands.',
    continentId: 'north-america'
  },
  {
    id: 'na-la',
    name: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    description: 'Hollywood Hills contemporary estates with infinity pools and canyon views.',
    continentId: 'north-america'
  },
  {
    id: 'na-new-york',
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
    description: 'Sky-high luxury condos and full-floor penthouses in Manhattan\'s iconic skyline.',
    continentId: 'north-america'
  }
];

export const projectsData: Project[] = [
  // UK
  {
    id: 'london-penthouse',
    title: 'The Skyline Penthouse',
    type: 'BUY',
    price: '£12,500,000',
    stats: '4 Bed • 5 Bath • 4,500 sqft',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=1200',
    description: 'A breathtaking penthouse in central London featuring panoramic city views.',
    regionId: 'uk',
    continentId: 'europe'
  },
  {
    id: 'london-apartment',
    title: 'Mayfair Boutique Apartment',
    type: 'RENT',
    price: '£15,000 / month',
    stats: '2 Bed • 2 Bath • 1,800 sqft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'An exquisitely furnished apartment in the heart of Mayfair, ready for immediate move-in.',
    regionId: 'uk',
    continentId: 'europe'
  },
  // France
  {
    id: 'riviera-villa',
    title: 'Villa Azure',
    type: 'BUY',
    price: '€18,000,000',
    stats: '6 Bed • 7 Bath • 8,200 sqft',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1200',
    description: 'Extravagant waterfront villa on the French Riviera with private dock.',
    regionId: 'france',
    continentId: 'europe'
  },
  // Indonesia (Bali)
  {
    id: 'bali-jungle-retreat',
    title: 'Ubud Serenity Retreat',
    type: 'INVEST',
    price: '$2,500,000',
    stats: '15% Projected ROI',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    description: 'A high-yield investment opportunity in an eco-luxury jungle resort in Bali.',
    regionId: 'indonesia',
    continentId: 'asia'
  },
  {
    id: 'bali-beach-villa',
    title: 'Uluwatu Cliff Villa',
    type: 'RENT',
    price: '$8,000 / month',
    stats: '3 Bed • 3 Bath • Panoramic Ocean View',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1200',
    description: 'Breathtaking cliffside villa perfect for long-term luxury living in Bali.',
    regionId: 'indonesia',
    continentId: 'asia'
  },
  // UAE (Dubai)
  {
    id: 'dubai-palm-villa',
    title: 'Palm Jumeirah Masterpiece',
    type: 'BUY',
    price: 'AED 85,000,000',
    stats: '7 Bed • 8 Bath • Private Beach',
    image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1200',
    description: 'An iconic signature villa on the Palm Jumeirah with a private pristine beach.',
    regionId: 'uae',
    continentId: 'asia'
  },
  // Mexico (Tulum)
  {
    id: 'tulum-eco-residences',
    title: 'Sian Ka\'an Eco Residences',
    type: 'INVEST',
    price: '$4,200,000',
    stats: 'Developer Equity • 20% ROI target',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200',
    description: 'Invest in the next generation of sustainable luxury living in the heart of Tulum.',
    regionId: 'mexico',
    continentId: 'americas'
  },

  // ─── AFRICA ───────────────────────────────────────────────────────────────
  // East Africa
  {
    id: 'ke-nairobi-penthouse',
    title: 'Nairobi Sky Penthouse',
    type: 'BUY',
    price: '$4,800,000',
    stats: '4 Bed • 4 Bath • 5,200 sqft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A full-floor glass penthouse above Nairobi\'s skyline with wrap-around terrace and infinity pool.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'ke-karen-villa',
    title: 'Karen Heights Glass Villa',
    type: 'BUY',
    price: '$3,200,000',
    stats: '5 Bed • 5 Bath • 7,000 sqft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'An architect-designed glass and concrete villa set in 2 acres of landscaped gardens in Karen.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'ke-mombasa-villa',
    title: 'Diani Beachfront Villa',
    type: 'RENT',
    price: '$12,000 / month',
    stats: '4 Bed • 4 Bath • Direct Beach Access',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
    description: 'A stunning contemporary villa on Diani Beach, Kenya, with open-plan glass architecture.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'tz-zanzibar-resort',
    title: 'Zanzibar Luxury Retreat',
    type: 'INVEST',
    price: '$6,500,000',
    stats: '18% Projected ROI • Boutique Resort',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    description: 'A 12-villa ultra-luxury resort development on Zanzibar\'s north coast, open for investment.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'tz-arusha-lodge',
    title: 'Arusha Eco Glass Lodge',
    type: 'BUY',
    price: '$2,900,000',
    stats: '8 Suites • Mountain View • 4,500 sqft',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    description: 'A modern glass lodge with panoramic Kilimanjaro views, designed by a Pritzker award winner.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'et-addis-penthouse',
    title: 'Addis Ababa Sky Suite',
    type: 'RENT',
    price: '$7,500 / month',
    stats: '3 Bed • 3 Bath • 3,200 sqft',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1200',
    description: 'A fully-furnished luxury suite on the 38th floor of Addis Ababa\'s premier tower.',
    regionId: 'africa-east',
    continentId: 'africa'
  },

  // South Africa
  {
    id: 'sa-clifton-villa',
    title: 'Clifton Clifftop Mansion',
    type: 'BUY',
    price: 'R 185,000,000',
    stats: '6 Bed • 7 Bath • Panoramic Ocean Views',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    description: 'A world-class glass and steel mansion perched over Clifton\'s First Beach, Cape Town.',
    regionId: 'africa-south',
    continentId: 'africa'
  },
  {
    id: 'sa-camps-bay',
    title: 'Camps Bay Glass Residence',
    type: 'RENT',
    price: 'R 280,000 / month',
    stats: '4 Bed • 4 Bath • Private Pool',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=1200',
    description: 'Sleek modernist villa in Camps Bay with floor-to-ceiling glass walls and Atlantic views.',
    regionId: 'africa-south',
    continentId: 'africa'
  },
  {
    id: 'sa-franschhoek-estate',
    title: 'Franschhoek Wine Estate',
    type: 'BUY',
    price: 'R 95,000,000',
    stats: '5 Bed • 6 Bath • 12 Acres',
    image: 'https://images.unsplash.com/photo-1564501049559-0738c2c20c0b?auto=format&fit=crop&q=80&w=1200',
    description: 'An ultra-modern Winelands estate with a working vineyard, spa, and glass pavilion living spaces.',
    regionId: 'africa-south',
    continentId: 'africa'
  },
  {
    id: 'sa-sandton-penthouse',
    title: 'Sandton Apex Penthouse',
    type: 'BUY',
    price: 'R 42,000,000',
    stats: '3 Bed • 3 Bath • 3,800 sqft',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=1200',
    description: 'The crown jewel of Sandton\'s premier tower — a duplex penthouse with panoramic Joburg views.',
    regionId: 'africa-south',
    continentId: 'africa'
  },
  {
    id: 'sa-v-and-a',
    title: 'V&A Waterfront Apartment',
    type: 'RENT',
    price: 'R 95,000 / month',
    stats: '2 Bed • 2 Bath • Marina View',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'Contemporary apartment in the iconic V&A Waterfront with direct marina access.',
    regionId: 'africa-south',
    continentId: 'africa'
  },
  {
    id: 'sa-invest-precinct',
    title: 'Cape Town Luxury Precinct Fund',
    type: 'INVEST',
    price: 'R 50,000,000',
    stats: '14% Projected ROI • Mixed-Use',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200',
    description: 'Co-invest in Cape Town\'s fastest-growing luxury mixed-use precinct development.',
    regionId: 'africa-south',
    continentId: 'africa'
  },

  // North Africa
  {
    id: 'ma-marrakech-riad',
    title: 'Marrakech Luxury Riad',
    type: 'BUY',
    price: '€3,500,000',
    stats: '6 Suites • Private Pool • 6,000 sqft',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    description: 'A meticulously restored grand riad fused with minimalist glass extensions in the Medina.',
    regionId: 'africa-north',
    continentId: 'africa'
  },
  {
    id: 'ma-casablanca-penthouse',
    title: 'Casablanca Marina Tower Penthouse',
    type: 'BUY',
    price: '€4,200,000',
    stats: '4 Bed • 4 Bath • Full-Floor',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'A full-floor penthouse in Casablanca\'s Marina with Atlantic panoramas and private rooftop.',
    regionId: 'africa-north',
    continentId: 'africa'
  },
  {
    id: 'eg-cairo-penthouse',
    title: 'Cairo Nile View Penthouse',
    type: 'RENT',
    price: '$9,000 / month',
    stats: '3 Bed • 3 Bath • Nile Views',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A sophisticated duplex penthouse with sweeping views over the Nile in New Cairo.',
    regionId: 'africa-north',
    continentId: 'africa'
  },
  {
    id: 'tn-tunis-villa',
    title: 'Sidi Bou Saïd Glass Villa',
    type: 'BUY',
    price: '€2,800,000',
    stats: '4 Bed • 4 Bath • Sea Views',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    description: 'A stunning glass villa in the clifftop village of Sidi Bou Saïd, overlooking the Mediterranean.',
    regionId: 'africa-north',
    continentId: 'africa'
  },
  {
    id: 'ma-atlas-lodge',
    title: 'Atlas Mountain Retreat',
    type: 'INVEST',
    price: '€5,000,000',
    stats: '12% ROI • Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    description: 'Invest in a high-end boutique lodge development in the High Atlas Mountains near Marrakech.',
    regionId: 'africa-north',
    continentId: 'africa'
  },
  {
    id: 'eg-gouna-villa',
    title: 'El Gouna Lagoon Villa',
    type: 'RENT',
    price: '$6,500 / month',
    stats: '3 Bed • 3 Bath • Lagoon Access',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1200',
    description: 'Contemporary villa with private lagoon mooring in the luxury Red Sea resort town of El Gouna.',
    regionId: 'africa-north',
    continentId: 'africa'
  },

  // West Africa
  {
    id: 'ng-lagos-penthouse',
    title: 'Lagos Oceanview Penthouse',
    type: 'BUY',
    price: '₦2,500,000,000',
    stats: '4 Bed • 5 Bath • 5,000 sqft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'A statement penthouse atop Lagos Island\'s tallest tower with floor-to-ceiling glass and ocean views.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'gh-accra-villa',
    title: 'Accra Cantonments Villa',
    type: 'BUY',
    price: '$1,800,000',
    stats: '5 Bed • 5 Bath • Private Pool',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'A glass-fronted contemporary villa in Cantonments, Accra\'s most prestigious residential enclave.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'ng-lagos-invest',
    title: 'Eko Atlantic Residences',
    type: 'INVEST',
    price: '$8,000,000',
    stats: '20% ROI Target • Pre-Launch',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200',
    description: 'Early-stage investment in Eko Atlantic\'s premium branded residences — Africa\'s most ambitious urban project.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'sn-dakar-apartment',
    title: 'Dakar Corniche Apartment',
    type: 'RENT',
    price: '$4,000 / month',
    stats: '2 Bed • 2 Bath • Ocean Views',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1200',
    description: 'A sleek modern apartment along Dakar\'s scenic Corniche with sweeping Atlantic views.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'ci-abidjan-penthouse',
    title: 'Abidjan Plateau Penthouse',
    type: 'BUY',
    price: 'XOF 3,500,000,000',
    stats: '3 Bed • 3 Bath • Lagune Views',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'A cutting-edge penthouse in Abidjan\'s business district with panoramic lagune views.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'gh-accra-invest',
    title: 'Airport Hills Luxury Towers',
    type: 'INVEST',
    price: '$3,200,000',
    stats: '16% ROI • Mixed Residential',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=1200',
    description: 'Premium off-plan investment in Accra\'s Airport Hills luxury tower complex, launching 2025.',
    regionId: 'africa-west',
    continentId: 'africa'
  },

  // Central Africa
  {
    id: 'rw-kigali-villa',
    title: 'Kigali Hilltop Glass Villa',
    type: 'BUY',
    price: '$2,200,000',
    stats: '4 Bed • 4 Bath • Valley Views',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'An award-winning glass and timber villa on Kigali\'s most exclusive ridge with valley panoramas.',
    regionId: 'africa-central',
    continentId: 'africa'
  },
  {
    id: 'rw-akagera-lodge',
    title: 'Akagera Eco-Luxury Lodge',
    type: 'INVEST',
    price: '$4,500,000',
    stats: '17% ROI • Safari & Wellness',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    description: 'Invest in Rwanda\'s highest-rated eco-luxury lodge on the shores of Lake Ihema.',
    regionId: 'africa-central',
    continentId: 'africa'
  },
  {
    id: 'cm-yaounde-penthouse',
    title: 'Yaoundé Sky Residence',
    type: 'BUY',
    price: 'XAF 1,200,000,000',
    stats: '3 Bed • 3 Bath • City Views',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'A modern penthouse in Yaoundé\'s premier high-rise with 270° views over the capital.',
    regionId: 'africa-central',
    continentId: 'africa'
  },
  {
    id: 'rw-kigali-rent',
    title: 'Kigali Kimihurura Apartment',
    type: 'RENT',
    price: '$3,500 / month',
    stats: '2 Bed • 2 Bath • Furnished',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1f5523a585?auto=format&fit=crop&q=80&w=1200',
    description: 'Fully furnished contemporary apartment in Kimihurura, Kigali\'s diplomatic quarter.',
    regionId: 'africa-central',
    continentId: 'africa'
  },
  {
    id: 'ga-libreville-villa',
    title: 'Libreville Oceanfront Villa',
    type: 'BUY',
    price: '$1,900,000',
    stats: '4 Bed • 3 Bath • Private Pool',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'A minimalist oceanfront villa in Libreville with glass living spaces opening to the Atlantic.',
    regionId: 'africa-central',
    continentId: 'africa'
  },
  {
    id: 'cd-kinshasa-invest',
    title: 'Kinshasa Prestige Tower',
    type: 'INVEST',
    price: '$5,000,000',
    stats: '15% ROI • Commercial & Residential',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200',
    description: 'First-mover investment opportunity in Kinshasa\'s upcoming mixed-use luxury tower.',
    regionId: 'africa-central',
    continentId: 'africa'
  },

  // ─── AUSTRALIA ────────────────────────────────────────────────────────────
  // Sydney
  {
    id: 'au-syd-harbour-penthouse',
    title: 'Sydney Harbour Glass Penthouse',
    type: 'BUY',
    price: 'AUD 18,500,000',
    stats: '4 Bed • 4 Bath • 360° Harbour Views',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
    description: 'A spectacular full-floor penthouse above Kirribilli with uninterrupted views of the Sydney Opera House and Harbour Bridge.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },
  {
    id: 'au-syd-mosman-villa',
    title: 'Mosman Cliffside Villa',
    type: 'BUY',
    price: 'AUD 12,000,000',
    stats: '5 Bed • 5 Bath • Private Jetty',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    description: 'An architecturally designed glass villa on Mosman Bay with a private jetty and ocean pool.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },
  {
    id: 'au-syd-bondi-apartment',
    title: 'Bondi Beachfront Apartment',
    type: 'RENT',
    price: 'AUD 18,000 / month',
    stats: '3 Bed • 2 Bath • Direct Beach Views',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'A contemporary beachfront apartment at Bondi with full-length glass facades and ocean terraces.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },
  {
    id: 'au-syd-darling-penthouse',
    title: 'Darling Point Penthouse',
    type: 'BUY',
    price: 'AUD 22,000,000',
    stats: '5 Bed • 5 Bath • Private Rooftop Pool',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'One of Sydney\'s finest full-floor penthouses in the prestigious Darling Point enclave.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },
  {
    id: 'au-syd-barangaroo',
    title: 'Barangaroo Crown Residence',
    type: 'RENT',
    price: 'AUD 25,000 / month',
    stats: '3 Bed • 3 Bath • Harbour View',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=1200',
    description: 'A hotel-branded super-prime apartment in the iconic Crown Residences at Barangaroo.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },
  {
    id: 'au-syd-invest-precinct',
    title: 'Sydney Waterfront REIT',
    type: 'INVEST',
    price: 'AUD 5,000,000',
    stats: '11% ROI • Managed Fund',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1200',
    description: 'Join Australia\'s highest-performing waterfront luxury residential fund with quarterly distributions.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },

  // Melbourne
  {
    id: 'au-mel-toorak-mansion',
    title: 'Toorak Contemporary Mansion',
    type: 'BUY',
    price: 'AUD 14,500,000',
    stats: '6 Bed • 6 Bath • Tennis Court',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    description: 'A statement glass-and-concrete mansion in Toorak — Melbourne\'s most exclusive street address.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },
  {
    id: 'au-mel-southbank-penthouse',
    title: 'Southbank Sky Penthouse',
    type: 'BUY',
    price: 'AUD 9,800,000',
    stats: '4 Bed • 4 Bath • Yarra River Views',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'A breathtaking penthouse above Southbank with panoramic views of the Yarra River and CBD.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },
  {
    id: 'au-mel-brighton-villa',
    title: 'Brighton Beachside Villa',
    type: 'BUY',
    price: 'AUD 7,200,000',
    stats: '4 Bed • 3 Bath • Pool & Beach',
    image: 'https://images.unsplash.com/photo-1564501049559-0738c2c20c0b?auto=format&fit=crop&q=80&w=1200',
    description: 'A modernist glass villa steps from Brighton\'s famous bathing boxes and Port Phillip Bay.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },
  {
    id: 'au-mel-cbd-rent',
    title: 'Collins Street Sky Apartment',
    type: 'RENT',
    price: 'AUD 12,000 / month',
    stats: '2 Bed • 2 Bath • CBD Skyline Views',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Ultra-modern furnished apartment on prestigious Collins Street with soaring city views.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },
  {
    id: 'au-mel-docklands',
    title: 'Docklands Marina Residence',
    type: 'RENT',
    price: 'AUD 9,500 / month',
    stats: '2 Bed • 2 Bath • Marina Views',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'A sleek contemporary apartment in Melbourne Docklands with direct marina and bay views.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },
  {
    id: 'au-mel-invest',
    title: 'Melbourne Luxury Tower Fund',
    type: 'INVEST',
    price: 'AUD 3,500,000',
    stats: '13% ROI • Premium Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'Invest in Melbourne\'s next landmark luxury tower — pre-launch units with guaranteed yield.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },

  // Gold Coast
  {
    id: 'au-gc-surfers-penthouse',
    title: 'Surfers Paradise Sky Penthouse',
    type: 'BUY',
    price: 'AUD 11,000,000',
    stats: '4 Bed • 4 Bath • Ocean & Canal Views',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
    description: 'A triple-aspect penthouse crowning the Gold Coast\'s tallest residential tower with 270° ocean views.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  },
  {
    id: 'au-gc-broadbeach-villa',
    title: 'Broadbeach Beachfront Villa',
    type: 'BUY',
    price: 'AUD 8,500,000',
    stats: '5 Bed • 5 Bath • Absolute Beachfront',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1200',
    description: 'An ultra-modern glass villa directly on Broadbeach with a rooftop pool and private beach access.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  },
  {
    id: 'au-gc-hope-island',
    title: 'Hope Island Waterfront Estate',
    type: 'BUY',
    price: 'AUD 6,800,000',
    stats: '5 Bed • 5 Bath • Private Pontoon',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'A stunning canal-front estate in Hope Island with a private pontoon, pool and glass pavilion.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  },
  {
    id: 'au-gc-main-beach-rent',
    title: 'Main Beach Luxury Apartment',
    type: 'RENT',
    price: 'AUD 8,000 / month',
    stats: '3 Bed • 2 Bath • Beachfront Complex',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    description: 'A premium top-floor apartment in Main Beach\'s finest boutique complex with pool and gym.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  },
  {
    id: 'au-gc-sanctuary-cove',
    title: 'Sanctuary Cove Retreat',
    type: 'RENT',
    price: 'AUD 10,500 / month',
    stats: '4 Bed • 3 Bath • Golf Course Views',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1200',
    description: 'A beautifully appointed villa inside the prestigious Sanctuary Cove gated community.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  },
  {
    id: 'au-gc-invest',
    title: 'Gold Coast Resort Investment',
    type: 'INVEST',
    price: 'AUD 4,200,000',
    stats: '15% ROI • Tourism-Backed',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
    description: 'High-yield investment in a luxury managed resort pool on Queensland\'s famous Gold Coast.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  },

  // ─── NORTH AMERICA ────────────────────────────────────────────────────────
  // Miami
  {
    id: 'na-miami-brickell',
    title: 'Brickell Skyline Penthouse',
    type: 'BUY',
    price: '$18,500,000',
    stats: '5 Bed • 6 Bath • Full-Floor Private Pool',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=1200',
    description: 'A landmark full-floor penthouse in Brickell\'s most prestigious tower with a private rooftop pool.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-starIsland',
    title: 'Star Island Glass Mansion',
    type: 'BUY',
    price: '$45,000,000',
    stats: '8 Bed • 9 Bath • Private Dock',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'An iconic ultra-modern mansion on Miami\'s most exclusive island with sweeping Biscayne Bay views.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-edgewater',
    title: 'Edgewater Waterfront Condo',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '3 Bed • 3 Bath • Bay Views',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'A furnished ultra-luxury condo in Edgewater with floor-to-ceiling glass and Biscayne Bay access.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-surfside',
    title: 'Surfside Oceanfront Penthouse',
    type: 'BUY',
    price: '$22,000,000',
    stats: '4 Bed • 5 Bath • Oceanfront',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    description: 'A direct oceanfront penthouse in the boutique Surfside Residences with private beach club.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-bal-harbour',
    title: 'Bal Harbour Glass Villa',
    type: 'RENT',
    price: '$32,000 / month',
    stats: '5 Bed • 5 Bath • Beach Access',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=1200',
    description: 'A bespoke glass villa in Bal Harbour with a private pool, ocean views and concierge service.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-invest',
    title: 'Miami Ultra-Luxury Fund',
    type: 'INVEST',
    price: '$10,000,000',
    stats: '16% ROI • Branded Residences',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200',
    description: 'Invest in Miami\'s highest-performing branded residence portfolio across five trophy towers.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },

  // Los Angeles
  {
    id: 'na-la-holmby-hills',
    title: 'Holmby Hills Glass Estate',
    type: 'BUY',
    price: '$55,000,000',
    stats: '8 Bed • 10 Bath • 2 Acres',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A breathtaking modernist estate in Holmby Hills with a resort-style pool and 270° canyon views.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-malibu-villa',
    title: 'Malibu Oceanfront Villa',
    type: 'BUY',
    price: '$38,000,000',
    stats: '6 Bed • 7 Bath • Private Beach',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'An architect-designed glass villa directly on Malibu\'s Carbon Beach, the most coveted stretch in California.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-bird-streets',
    title: 'Bird Streets Contemporary Villa',
    type: 'RENT',
    price: '$85,000 / month',
    stats: '5 Bed • 6 Bath • Infinity Pool',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1200',
    description: 'A meticulously designed villa in the exclusive Bird Streets, with panoramic views over Los Angeles.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-bel-air',
    title: 'Bel Air Glass Compound',
    type: 'BUY',
    price: '$62,000,000',
    stats: '7 Bed • 8 Bath • Guesthouse & Spa',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
    description: 'An extraordinary glass-and-steel compound in Bel Air with city-to-ocean views and full spa.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-venice-rent',
    title: 'Venice Beach Designer Home',
    type: 'RENT',
    price: '$28,000 / month',
    stats: '3 Bed • 3 Bath • Rooftop Deck',
    image: 'https://images.unsplash.com/photo-1564501049559-0738c2c20c0b?auto=format&fit=crop&q=80&w=1200',
    description: 'A striking new-build home in Venice Beach with glass walls, rooftop terrace and ocean breezes.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-invest',
    title: 'LA Luxury Residential Fund',
    type: 'INVEST',
    price: '$15,000,000',
    stats: '14% ROI • Trophy Portfolio',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=1200',
    description: 'Gain exposure to a curated portfolio of Los Angeles trophy homes with institutional-grade management.',
    regionId: 'na-la',
    continentId: 'north-america'
  },

  // New York
  {
    id: 'na-ny-central-park',
    title: 'Central Park Tower Penthouse',
    type: 'BUY',
    price: '$95,000,000',
    stats: '5 Bed • 6 Bath • Central Park Views',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    description: 'A full-floor penthouse at the top of the world\'s tallest residential tower above Central Park.',
    regionId: 'na-new-york',
    continentId: 'north-america'
  },
  {
    id: 'na-ny-tribeca-loft',
    title: 'Tribeca Glass Loft',
    type: 'BUY',
    price: '$28,000,000',
    stats: '4 Bed • 4 Bath • Hudson River Views',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'A converted industrial landmark in Tribeca with soaring glass ceilings and Hudson River panoramas.',
    regionId: 'na-new-york',
    continentId: 'north-america'
  },
  {
    id: 'na-ny-soho-rent',
    title: 'SoHo Luxury Loft',
    type: 'RENT',
    price: '$45,000 / month',
    stats: '3 Bed • 3 Bath • Cast-Iron Architecture',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'A sprawling, fully furnished luxury loft in SoHo\'s most historics cast iron building, reimagined for modern living.',
    regionId: 'na-new-york',
    continentId: 'north-america'
  },
  {
    id: 'na-ny-upper-east',
    title: 'Upper East Side Duplex Penthouse',
    type: 'BUY',
    price: '$42,000,000',
    stats: '5 Bed • 5 Bath • Private Rooftop',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'An extraordinary duplex penthouse on the UES with a private rooftop garden and full Central Park views.',
    regionId: 'na-new-york',
    continentId: 'north-america'
  },
  {
    id: 'na-ny-downtown-rent',
    title: 'One World Trade Luxury Condo',
    type: 'RENT',
    price: '$38,000 / month',
    stats: '3 Bed • 3 Bath • Downtown Skyline',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
    description: 'A furnished super-prime condo adjacent to One World Trade with sweeping Lower Manhattan views.',
    regionId: 'na-new-york',
    continentId: 'north-america'
  },
  {
    id: 'na-ny-invest',
    title: 'Manhattan Trophy REIT',
    type: 'INVEST',
    price: '$20,000,000',
    stats: '13% ROI • Class-A Residential',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200',
    description: 'Institutional-quality exposure to Manhattan\'s most coveted luxury residential towers.',
    regionId: 'na-new-york',
    continentId: 'north-america'
  }
];
