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
    id: 'thailand',
    name: 'Thailand',
    image: '/PORTFOLIO/thailand-6m/1000086984.jpg',
    description: 'Exquisite villas in Phuket and Koh Samui, and modern stays in Bangkok.',
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
    name: 'East Africa (Tanzania)',
    image: '/PORTFOLIO/africa-tanzania/1000086976.jpg',
    description: 'Ultra-luxury safari lodges and glass villas across the breathtaking landscapes of Tanzania.',
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
    name: 'Miami Florida',
    image: '/PORTFOLIO/na-miami/1000086972.jpg',
    description: 'Glass waterfront penthouses and modern mansions on Miami\'s most exclusive islands.',
    continentId: 'north-america'
  },
  {
    id: 'na-la',
    name: 'L.A. California',
    image: '/PORTFOLIO/na-la-14m/1000086967.jpg',
    description: 'Ultra-modern glass estates and sprawling compounds in Los Angeles\' most exclusive neighborhoods.',
    continentId: 'north-america'
  },

  {
    id: 'na-orlando',
    name: 'Orlando Florida',
    image: '/PORTFOLIO/na-orlando-ph1/1000085825.jpg',
    description: 'Expansive private estates and golf club luxury residences in Orlando.',
    continentId: 'north-america'
  },
];

export const projectsData: Project[] = [
  // UK

// France

  // Indonesia (Bali)

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
  // Thailand
  {
    id: 'th-rent-1',
    title: 'Thailand Luxury Retreat I',
    type: 'RENT',
    price: '$45k / month',
    stats: '5 Bed • 6 Bath • Full Service',
    image: '/PORTFOLIO/thailand-6m/1000086981.jpg',
    description: 'Bespoke luxury living in a fully serviced villa with breathtaking views.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-rent-2',
    title: 'Thailand Luxury Retreat II',
    type: 'RENT',
    price: '$45k / month',
    stats: '4 Bed • 5 Bath • Infinity Pool',
    image: '/PORTFOLIO/thailand-6m/1000086982.jpg',
    description: 'Modern rental with floor-to-ceiling glass and panoramic sea views.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-rent-3',
    title: 'Thailand Luxury Retreat III',
    type: 'RENT',
    price: '$45k / month',
    stats: '5 Bed • 5 Bath • Direct Beach Access',
    image: '/PORTFOLIO/thailand-6m/1000086983.jpg',
    description: 'Premium beachfront living with all the comforts of a five-star resort.',
    regionId: 'thailand',
    continentId: 'asia'
  },

  {
    id: 'th-buy-2',
    title: 'Thailand Modern Estate II',
    type: 'BUY',
    price: '$9,000,000',
    stats: '5 Bed • 6 Bath • 7,500 sqft',
    image: '/PORTFOLIO/thailand-6m/1000086985.jpg',
    description: 'Contemporary villa designed for the most discerning luxury buyers.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-buy-3',
    title: 'Thailand Modern Estate III',
    type: 'BUY',
    price: '$9,000,000',
    stats: '7 Bed • 8 Bath • Designer Finishes',
    image: '/PORTFOLIO/thailand-6m/1000086986.jpg',
    description: 'Exclusive estate offering unparalleled privacy and sophistication.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-invest-1',
    title: 'Thailand Investment Opportunity I',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'High Yield • Strategic Location',
    image: '/PORTFOLIO/thailand-6m/1000086987.jpg',
    description: 'Prime investment opportunity in a developing luxury resort market.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-invest-2',
    title: 'Thailand Investment Opportunity II',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Developer Equity • 18% Target ROI',
    image: '/PORTFOLIO/thailand-6m/1000086988.jpg',
    description: 'Join a high-performing luxury residential fund in one of Thailand\'s top locations.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-invest-3',
    title: 'Thailand Investment Opportunity III',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Pre-Launch • Premium Branded',
    image: '/PORTFOLIO/thailand-6m/1000086989.jpg',
    description: 'Early-stage investment in a branded residence project by an award-winning developer.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-rent-1',
    title: 'Phuket Signature Villa I',
    type: 'RENT',
    price: '$75k / month',
    stats: '6 Bed • 7 Bath • Oceanfront',
    image: '/PORTFOLIO/thailand-15m/1000086953.jpg',
    description: 'Ultra-luxury palatial villa with resort-style amenities and panoramic ocean views.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-rent-2',
    title: 'Phuket Signature Villa II',
    type: 'RENT',
    price: '$75k / month',
    stats: '5 Bed • 6 Bath • Private Chef',
    image: '/PORTFOLIO/thailand-15m/1000086954.jpg',
    description: 'Exclusive clifftop retreat featuring an infinity pool and dedicated staff.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-rent-3',
    title: 'Phuket Signature Villa III',
    type: 'RENT',
    price: '$75k / month',
    stats: '7 Bed • 8 Bath • Beach Access',
    image: '/PORTFOLIO/thailand-15m/1000086955.jpg',
    description: 'Sprawling estate offering direct beach access and uncompromised privacy.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-buy-1',
    title: 'Thailand Super Prime Estate I',
    type: 'BUY',
    price: '$15,000,000',
    stats: '8 Bed • 9 Bath • 12,000 sqft',
    image: '/PORTFOLIO/thailand-15m/1000086956.jpg',
    description: 'A masterpiece of contemporary Thai architecture designed for the global elite.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-buy-2',
    title: 'Thailand Super Prime Estate II',
    type: 'BUY',
    price: '$15,000,000',
    stats: '6 Bed • 7 Bath • Heli-pad',
    image: '/PORTFOLIO/thailand-15m/1000086957.jpg',
    description: 'Unrivaled luxury estate with helicopter access and private deep-water dock.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-buy-3',
    title: 'Thailand Super Prime Estate III',
    type: 'BUY',
    price: '$15,000,000',
    stats: '7 Bed • 8 Bath • Spa & Gym',
    image: '/PORTFOLIO/thailand-15m/1000086958.jpg',
    description: 'Trophy property featuring a private wellness center and multi-tiered pools.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-invest-1',
    title: 'Phuket Resort Development I',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High Yield',
    image: '/PORTFOLIO/thailand-15m/1000086959.jpg',
    description: 'Rare opportunity to co-invest in a landmark ultra-luxury branded resort.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-invest-2',
    title: 'Phuket Resort Development II',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Pre-Construction • Tier 1 Location',
    image: '/PORTFOLIO/thailand-15m/1000086960.jpg',
    description: 'Early-stage equity investment in Thailand\'s most anticipated ultra-prime development.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  // Mexico (Tulum)

// ─── AFRICA ───────────────────────────────────────────────────────────────
  // East Africa (Tanzania)

  {
    id: 'tz-rent-2',
    title: 'Zanzibar Oceanfront Retreat',
    type: 'RENT',
    price: '$15k / month',
    stats: '5 Bed • 6 Bath • Private Beach',
    image: '/PORTFOLIO/africa-tanzania/1000086977.jpg',
    description: 'Ultra-luxury contemporary villa on the pristine white sands of Zanzibar.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'tz-buy-1',
    title: 'Ngorongoro Reserve Estate',
    type: 'BUY',
    price: '$3,000,000',
    stats: '6 Bed • 7 Bath • Off-Grid Luxury',
    image: '/PORTFOLIO/africa-tanzania/1000086978.jpg',
    description: 'An architectural masterpiece blending perfectly into the dramatic crater landscape.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'tz-buy-2',
    title: 'Dar es Salaam Modern Penthouse',
    type: 'BUY',
    price: '$3,000,000',
    stats: '4 Bed • 5 Bath • Indian Ocean Views',
    image: '/PORTFOLIO/africa-tanzania/1000086979.jpg',
    description: 'A striking penthouse soaring above Dar es Salaam with an expansive private terrace.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'tz-invest-1',
    title: 'Tanzania Luxury Eco-Resort',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • 18% ROI Target',
    image: '/PORTFOLIO/africa-tanzania/1000086980.jpg',
    description: 'Co-invest in the premier sustainable luxury resort currently under development in Tanzania.',
    regionId: 'africa-east',
    continentId: 'africa'
  },

  // South Africa

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

// West Africa

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

// ─── AUSTRALIA ────────────────────────────────────────────────────────────
  // Sydney

// Melbourne

// Gold Coast

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
  // Miami Florida

  {
    id: 'na-miami-buy-1',
    title: 'Star Island Modern Estate',
    type: 'BUY',
    price: '$13,000,000',
    stats: '6 Bed • 7 Bath • Private Dock',
    image: '/PORTFOLIO/na-miami/1000086973.jpg',
    description: 'Ultra-modern waterfront mansion on Miami\'s iconic Star Island.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-buy-2',
    title: 'Brickell Skyline Penthouse',
    type: 'BUY',
    price: '$13,000,000',
    stats: '5 Bed • 6 Bath • Rooftop Pool',
    image: '/PORTFOLIO/na-miami/1000086974.jpg',
    description: 'A landmark full-floor penthouse in Brickell with sweeping panoramic views.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-invest-1',
    title: 'Miami Ultra-Luxury Branded Fund',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: '15% ROI Target • Pre-Development',
    image: '/PORTFOLIO/na-miami/1000086975.jpg',
    description: 'Exclusive early access to co-invest in a high-end Miami Beach hotel residence.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },

  // L.A. California

  {
    id: 'na-la-rent-2',
    title: 'Hollywood Hills Minimalist Retreat',
    type: 'RENT',
    price: '$65k / month',
    stats: '5 Bed • 6 Bath • Wraparound Terraces',
    image: '/PORTFOLIO/na-la-14m/1000086968.jpg',
    description: 'Ultra-luxurious minimalist retreat perched high in the Hollywood Hills featuring striking architectural elements.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-buy-1',
    title: 'L.A. Super Prime Glass Estate I',
    type: 'BUY',
    price: '$14,000,000',
    stats: '6 Bed • 7 Bath • Museum-quality Finishes',
    image: '/PORTFOLIO/na-la-14m/1000086969.jpg',
    description: 'Flawless contemporary design blending indoor and outdoor spaces effortlessly in this architectural triumph.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-buy-2',
    title: 'Beverly Hills Modern Classic',
    type: 'BUY',
    price: '$14,000,000',
    stats: '7 Bed • 9 Bath • Private Cinema',
    image: '/PORTFOLIO/na-la-14m/1000086970.jpg',
    description: 'A completely reimagined modern compound offering the pinnacle of privacy in the heart of Beverly Hills 90210.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-invest-1',
    title: 'L.A. Mansion Renovation Fund',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'High Yield • Value-Add',
    image: '/PORTFOLIO/na-la-14m/1000086971.jpg',
    description: 'Strategic deployment of capital into acquiring, remodeling, and flipping ultra-prime Los Angeles estates.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-rent-3',
    title: 'Malibu Oceanfront Masterpiece',
    type: 'RENT',
    price: '$75k / month',
    stats: '5 Bed • 6 Bath • Private Beach Access',
    image: '/PORTFOLIO/na-la-15m/1000086961.jpg',
    description: 'Iconic oceanfront living with floor-to-ceiling glass framing unobstructed Pacific Ocean views on Carbon Beach.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-rent-4',
    title: 'Bird Streets Contemporary Villa',
    type: 'RENT',
    price: '$75k / month',
    stats: '4 Bed • 5 Bath • Infinity Edge',
    image: '/PORTFOLIO/na-la-15m/1000086962.jpg',
    description: 'A meticulously designed villa in the exclusive Bird Streets, with panoramic views over Los Angeles.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-buy-3',
    title: 'L.A. Super Prime Glass Estate II',
    type: 'BUY',
    price: '$15,000,000',
    stats: '7 Bed • 8 Bath • Auto Gallery',
    image: '/PORTFOLIO/na-la-15m/1000086963.jpg',
    description: 'Commanding views meet unparalleled luxury in this sprawling estate tailored for the ultimate collector.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-buy-4',
    title: 'L.A. Super Prime Glass Estate III',
    type: 'BUY',
    price: '$15,000,000',
    stats: '5 Bed • 7 Bath • Multi-level Infinity Pool',
    image: '/PORTFOLIO/na-la-15m/1000086964.jpg',
    description: 'Dramatic architectural angles and cascading water features define this one-of-a-kind trophy property.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-invest-2',
    title: 'West Hollywood Boutique Development',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • Mixed Use',
    image: '/PORTFOLIO/na-la-15m/1000086965.jpg',
    description: 'Rare opportunity to co-invest in a landmark ultra-luxury branded hotel and residence project in WeHo.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-invest-3',
    title: 'Sunset Strip Branded Residences',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Developer Equity • 18% ROI',
    image: '/PORTFOLIO/na-la-15m/1000086966.jpg',
    description: 'Early-stage equity access to one of the most highly anticipated residential developments on the Sunset Strip.',
    regionId: 'na-la',
    continentId: 'north-america'
  }
,
  {
    id: 'na-orlando-na-orlando-ph1-item-0',
    title: 'Orlando Signature Estate 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph1/1000085825.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-1',
    title: 'Orlando Signature Estate 2',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085827.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-2',
    title: 'Orlando Signature Estate 3',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085829.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-3',
    title: 'Orlando Signature Estate 4',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085831.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-4',
    title: 'Orlando Signature Estate 5',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085833.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-5',
    title: 'Orlando Signature Estate 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph1/1000085835.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-6',
    title: 'Orlando Signature Estate 7',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085837.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-7',
    title: 'Orlando Signature Estate 8',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085839.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-8',
    title: 'Orlando Signature Estate 9',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085841.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-9',
    title: 'Orlando Signature Estate 10',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085843.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-10',
    title: 'Orlando Signature Estate 11',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph1/1000085845.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-11',
    title: 'Orlando Signature Estate 12',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085847.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-12',
    title: 'Orlando Signature Estate 13',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085849.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-13',
    title: 'Orlando Signature Estate 14',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085851.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-14',
    title: 'Orlando Signature Estate 15',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085853.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-15',
    title: 'Orlando Signature Estate 16',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph1/1000085855.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-16',
    title: 'Orlando Signature Estate 17',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085857.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-17',
    title: 'Orlando Signature Estate 18',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085859.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-18',
    title: 'Orlando Signature Estate 19',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph1/1000085861.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-0',
    title: 'Orlando Signature Estate 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph2/1000085869.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-1',
    title: 'Orlando Signature Estate 2',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085873.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-2',
    title: 'Orlando Signature Estate 3',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085875.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-3',
    title: 'Orlando Signature Estate 4',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085879.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-4',
    title: 'Orlando Signature Estate 5',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085881.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-5',
    title: 'Orlando Signature Estate 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph2/1000085883.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-6',
    title: 'Orlando Signature Estate 7',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085885.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-7',
    title: 'Orlando Signature Estate 8',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085887.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-8',
    title: 'Orlando Signature Estate 9',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085889.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-9',
    title: 'Orlando Signature Estate 10',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085891.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-10',
    title: 'Orlando Signature Estate 11',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph2/1000085893.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-11',
    title: 'Orlando Signature Estate 12',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085895.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-12',
    title: 'Orlando Signature Estate 13',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085897.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-13',
    title: 'Orlando Signature Estate 14',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085899.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-14',
    title: 'Orlando Signature Estate 15',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085907.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-15',
    title: 'Orlando Signature Estate 16',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph2/1000085909.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-16',
    title: 'Orlando Signature Estate 17',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085911.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-17',
    title: 'Orlando Signature Estate 18',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085917.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-18',
    title: 'Orlando Signature Estate 19',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085919.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-19',
    title: 'Orlando Signature Estate 20',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph2/1000085921.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-0',
    title: 'Orlando Signature Estate 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph3/1000085923.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-1',
    title: 'Orlando Signature Estate 2',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph3/1000085925.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-2',
    title: 'Orlando Signature Estate 3',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph3/1000085927.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-3',
    title: 'Orlando Signature Estate 4',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph3/1000085929.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-4',
    title: 'Orlando Signature Estate 5',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph3/1000085931.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-5',
    title: 'Orlando Signature Estate 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph3/1000085933.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-6',
    title: 'Orlando Signature Estate 7',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph3/1000085935.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-7',
    title: 'Orlando Signature Estate 8',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph3/1000085937.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-8',
    title: 'Orlando Signature Estate 9',
    type: 'BUY',
    price: '$5,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph3/1000085939.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-9',
    title: 'Orlando Signature Estate 10',
    type: 'RENT',
    price: '$25,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-orlando-ph3/1000085941.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-10',
    title: 'Orlando Signature Estate 11',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-orlando-ph3/1000085943.jpg',
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-0',
    title: 'Miami Vice Penthouse 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-miami-ph1/1000085967.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-1',
    title: 'Miami Vice Penthouse 2',
    type: 'RENT',
    price: '$40,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000085969.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-2',
    title: 'Miami Vice Penthouse 3',
    type: 'BUY',
    price: '$10,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000085987.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-3',
    title: 'Miami Vice Penthouse 4',
    type: 'RENT',
    price: '$40,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000085989.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-4',
    title: 'Miami Vice Penthouse 5',
    type: 'BUY',
    price: '$10,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000085991.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-5',
    title: 'Miami Vice Penthouse 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-miami-ph1/1000085993.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-6',
    title: 'Miami Vice Penthouse 7',
    type: 'BUY',
    price: '$10,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000086040.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-7',
    title: 'Miami Vice Penthouse 8',
    type: 'RENT',
    price: '$40,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000086042.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-8',
    title: 'Miami Vice Penthouse 9',
    type: 'BUY',
    price: '$10,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000086044.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-9',
    title: 'Miami Vice Penthouse 10',
    type: 'RENT',
    price: '$40,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000086046.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-10',
    title: 'Miami Vice Penthouse 11',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/na-miami-ph1/1000086048.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-11',
    title: 'Miami Vice Penthouse 12',
    type: 'RENT',
    price: '$40,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000086050.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-12',
    title: 'Miami Vice Penthouse 13',
    type: 'BUY',
    price: '$10,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000086052.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-13',
    title: 'Miami Vice Penthouse 14',
    type: 'RENT',
    price: '$40,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/na-miami-ph1/1000086054.jpg',
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'africa-west-wa-1111-item-0',
    title: 'West Africa Luxury Estate 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1111/1000085763.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-1',
    title: 'West Africa Luxury Estate 2',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085764.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-2',
    title: 'West Africa Luxury Estate 3',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085765.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-3',
    title: 'West Africa Luxury Estate 4',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085766.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-4',
    title: 'West Africa Luxury Estate 5',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085767.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-5',
    title: 'West Africa Luxury Estate 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1111/1000085768.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-6',
    title: 'West Africa Luxury Estate 7',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085769.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-7',
    title: 'West Africa Luxury Estate 8',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085770.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-8',
    title: 'West Africa Luxury Estate 9',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085772.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-9',
    title: 'West Africa Luxury Estate 10',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085773.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-10',
    title: 'West Africa Luxury Estate 11',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1111/1000085774.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-11',
    title: 'West Africa Luxury Estate 12',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085775.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-12',
    title: 'West Africa Luxury Estate 13',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085778.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-13',
    title: 'West Africa Luxury Estate 14',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085780.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-14',
    title: 'West Africa Luxury Estate 15',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1111/1000085781.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1111-item-15',
    title: 'West Africa Luxury Estate 16',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1111/1000085782.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-0',
    title: 'West Africa Luxury Estate 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1112/1000023590.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-1',
    title: 'West Africa Luxury Estate 2',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000023591.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-2',
    title: 'West Africa Luxury Estate 3',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000023592.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-3',
    title: 'West Africa Luxury Estate 4',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000023593.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-4',
    title: 'West Africa Luxury Estate 5',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000023594.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-5',
    title: 'West Africa Luxury Estate 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1112/1000023595.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-6',
    title: 'West Africa Luxury Estate 7',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000023596.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-7',
    title: 'West Africa Luxury Estate 8',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000023597.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-8',
    title: 'West Africa Luxury Estate 9',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000023598.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-9',
    title: 'West Africa Luxury Estate 10',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000023599.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-10',
    title: 'West Africa Luxury Estate 11',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1112/1000023600.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-11',
    title: 'West Africa Luxury Estate 12',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1112/1000085783.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-0',
    title: 'West Africa Luxury Estate 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1116/1000011099.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-1',
    title: 'West Africa Luxury Estate 2',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011111.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-2',
    title: 'West Africa Luxury Estate 3',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011118.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-3',
    title: 'West Africa Luxury Estate 4',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011125.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-4',
    title: 'West Africa Luxury Estate 5',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011126.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-5',
    title: 'West Africa Luxury Estate 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1116/1000011127.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-6',
    title: 'West Africa Luxury Estate 7',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011129.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-7',
    title: 'West Africa Luxury Estate 8',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011131.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-8',
    title: 'West Africa Luxury Estate 9',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011202.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-9',
    title: 'West Africa Luxury Estate 10',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011284.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-10',
    title: 'West Africa Luxury Estate 11',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1116/1000011491.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-11',
    title: 'West Africa Luxury Estate 12',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011492.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-12',
    title: 'West Africa Luxury Estate 13',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011771.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-13',
    title: 'West Africa Luxury Estate 14',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011772.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-14',
    title: 'West Africa Luxury Estate 15',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000011773.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-15',
    title: 'West Africa Luxury Estate 16',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/wa-1116/1000013958.png',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-16',
    title: 'West Africa Luxury Estate 17',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000013959.png',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-17',
    title: 'West Africa Luxury Estate 18',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000013961.png',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-18',
    title: 'West Africa Luxury Estate 19',
    type: 'BUY',
    price: '$8,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000013962.png',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-19',
    title: 'West Africa Luxury Estate 20',
    type: 'RENT',
    price: '$30,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/wa-1116/1000063466.jpg',
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-0',
    title: 'Tanzania Safari Lodge 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/africa-east-new/1000047534.png',
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-1',
    title: 'Tanzania Safari Lodge 2',
    type: 'RENT',
    price: '$12,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/africa-east-new/1000047535.png',
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-2',
    title: 'Tanzania Safari Lodge 3',
    type: 'BUY',
    price: '$2,500,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/africa-east-new/1000047536.png',
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-3',
    title: 'Tanzania Safari Lodge 4',
    type: 'RENT',
    price: '$12,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/africa-east-new/1000047565.png',
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-4',
    title: 'Tanzania Safari Lodge 5',
    type: 'BUY',
    price: '$2,500,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/africa-east-new/1000047700.png',
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-5',
    title: 'Tanzania Safari Lodge 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/africa-east-new/1000047701.png',
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-6',
    title: 'Tanzania Safari Lodge 7',
    type: 'BUY',
    price: '$2,500,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/africa-east-new/1000048467.png',
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-7',
    title: 'Tanzania Safari Lodge 8',
    type: 'RENT',
    price: '$12,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/africa-east-new/1000048469.png',
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'thailand-thailand-9m-item-0',
    title: 'Koh Samui Beachfront 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/thailand-9m/1000086952.jpg',
    description: 'A spectacular luxury property joining the Koh Samui Beachfront collection, offering unparalleled design.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'thailand-thailand-9m-item-1',
    title: 'Koh Samui Beachfront 2',
    type: 'RENT',
    price: '$60,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/thailand-9m/1000086953.jpg',
    description: 'A spectacular luxury property joining the Koh Samui Beachfront collection, offering unparalleled design.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'france-more-images-item-0',
    title: 'European Grand Reserve 1',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/more-images/1000013963.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-1',
    title: 'European Grand Reserve 2',
    type: 'RENT',
    price: '€35,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013965.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-2',
    title: 'European Grand Reserve 3',
    type: 'BUY',
    price: '€15,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013967.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-3',
    title: 'European Grand Reserve 4',
    type: 'RENT',
    price: '€35,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013968.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-4',
    title: 'European Grand Reserve 5',
    type: 'BUY',
    price: '€15,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013969.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-5',
    title: 'European Grand Reserve 6',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/more-images/1000013970.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-6',
    title: 'European Grand Reserve 7',
    type: 'BUY',
    price: '€15,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013971.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-7',
    title: 'European Grand Reserve 8',
    type: 'RENT',
    price: '€35,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013972.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-8',
    title: 'European Grand Reserve 9',
    type: 'BUY',
    price: '€15,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013973.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-9',
    title: 'European Grand Reserve 10',
    type: 'RENT',
    price: '€35,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013974.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-10',
    title: 'European Grand Reserve 11',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/more-images/1000013976.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-11',
    title: 'European Grand Reserve 12',
    type: 'RENT',
    price: '€35,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013979.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-12',
    title: 'European Grand Reserve 13',
    type: 'BUY',
    price: '€15,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013980.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-13',
    title: 'European Grand Reserve 14',
    type: 'RENT',
    price: '€35,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013983.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-14',
    title: 'European Grand Reserve 15',
    type: 'BUY',
    price: '€15,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013985.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-15',
    title: 'European Grand Reserve 16',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    image: '/PORTFOLIO/more-images/1000013986.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-16',
    title: 'European Grand Reserve 17',
    type: 'BUY',
    price: '€15,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013988.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-17',
    title: 'European Grand Reserve 18',
    type: 'RENT',
    price: '€35,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013990.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-18',
    title: 'European Grand Reserve 19',
    type: 'BUY',
    price: '€15,000,000',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013997.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'france-more-images-item-19',
    title: 'European Grand Reserve 20',
    type: 'RENT',
    price: '€35,000 / month',
    stats: '5 Bed • 6 Bath • Luxury Finishes',
    image: '/PORTFOLIO/more-images/1000013998.png',
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  }
];
