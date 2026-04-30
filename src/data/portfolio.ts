export type PropertyType = 'RENT' | 'BUY' | 'INVEST';

export interface Project {
  id: string;
  title: string;
  type: PropertyType;
  price: string;
  stats: string;
  images: string[];
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
    image: '/images/Europ.png',
    description: 'Discover luxury properties across Europe\'s most iconic cities and coastlines.'
  },
  {
    id: 'asia',
    name: 'Asia',
    image: '/images/Asia.png',
    description: 'Experience unparalleled elegance in vibrant, modern, and traditional Asian landscapes.'
  },
  {
    id: 'americas',
    name: 'South America',
    image: '/images/South America.png',
    description: 'Explore premier estates and modern developments across North and South America.'
  },
  {
    id: 'africa',
    name: 'Africa',
    image: '/images/Africa.png',
    description: 'Discover rare ultra-luxury estates across Africa\'s most breathtaking landscapes.'
  },
  {
    id: 'australia',
    name: 'Australia',
    image: '/images/AusTralia (2).png',
    description: 'World-class contemporary villas and penthouses along Australia\'s iconic coastlines.'
  },
  {
    id: 'north-america',
    name: 'North America',
    image: '/images/North America.png',
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
    name: 'BALI, INDONESIA',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    description: 'Tropical paradises and serene retreats in Bali and beyond.',
    continentId: 'asia'
  },
  {
    id: 'thailand',
    name: 'PHUKET, THAILAND',
    image: '/PORTFOLIO/thailand-6m/1000086984.jpg',
    description: 'Exquisite villas in Phuket and Koh Samui, and modern stays in Bangkok.',
    continentId: 'asia'
  },
  {
    id: 'uae',
    name: 'DUBAI, UAE',
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
  {
    id: 'brazil',
    name: 'Brazil',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1200',
    description: 'Ultra-modern eco-villas and beachfront luxury in Rio de Janeiro and Trancoso.',
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
    image: '/images/north-africa.png',
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
  {
    id: 'bali-beach-villa',
    title: 'Uluwatu Cliff Villa',
    type: 'RENT',
    price: '$8,000 / month',
    stats: '3 Bed • 3 Bath • Panoramic Ocean View',
    images: ['https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1200'],
    description: 'Breathtaking cliffside villa perfect for long-term luxury living in Bali.',
    regionId: 'indonesia',
    continentId: 'asia'
  },
  {
    id: 'dubai-palm-villa',
    title: 'Palm Jumeirah Masterpiece',
    type: 'BUY',
    price: 'AED 85,000,000',
    stats: '7 Bed • 8 Bath • Private Beach',
    images: ['https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1200'],
    description: 'An iconic signature villa on the Palm Jumeirah with a private pristine beach.',
    regionId: 'uae',
    continentId: 'asia'
  },
  {
    id: 'ma-marrakech-riad',
    title: 'Marrakech Luxury Riad',
    type: 'BUY',
    price: '€3,500,000',
    stats: '6 Suites • Private Pool • 6,000 sqft',
    images: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'],
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
    images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200'],
    description: 'Invest in a high-end boutique lodge development in the High Atlas Mountains near Marrakech.',
    regionId: 'africa-north',
    continentId: 'africa'
  },
  {
    id: 'th-rent-1',
    title: 'Thailand Luxury Retreat I',
    type: 'RENT',
    price: '$45k / month',
    stats: '5 Bed • 6 Bath • Full Service',
    images: [
      '/PORTFOLIO/thailand-6m/1000086981.jpg',
      '/PORTFOLIO/thailand-6m/1000086982.jpg',
      '/PORTFOLIO/thailand-6m/1000086983.jpg',
      '/PORTFOLIO/thailand-6m/1000086985.jpg',
      '/PORTFOLIO/thailand-6m/1000086986.jpg',
      '/PORTFOLIO/thailand-6m/1000086987.jpg',
      '/PORTFOLIO/thailand-6m/1000086988.jpg',
      '/PORTFOLIO/thailand-6m/1000086989.jpg'
    ],
    description: 'Bespoke luxury living in a fully serviced villa with breathtaking views.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'th-15m-rent-1',
    title: 'Phuket Signature Villa I',
    type: 'RENT',
    price: '$75k / month',
    stats: '6 Bed • 7 Bath • Oceanfront',
    images: [
      '/PORTFOLIO/thailand-15m/1000086953.jpg',
      '/PORTFOLIO/thailand-15m/1000086954.jpg',
      '/PORTFOLIO/thailand-15m/1000086955.jpg',
      '/PORTFOLIO/thailand-15m/1000086956.jpg',
      '/PORTFOLIO/thailand-15m/1000086957.jpg',
      '/PORTFOLIO/thailand-15m/1000086958.jpg',
      '/PORTFOLIO/thailand-15m/1000086959.jpg',
      '/PORTFOLIO/thailand-15m/1000086960.jpg'
    ],
    description: 'Ultra-luxury palatial villa with resort-style amenities and panoramic ocean views.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'tz-rent-2',
    title: 'Zanzibar Oceanfront Retreat',
    type: 'RENT',
    price: '$15k / month',
    stats: '5 Bed • 6 Bath • Private Beach',
    images: [
      '/PORTFOLIO/africa-tanzania/1000086977.jpg',
      '/PORTFOLIO/africa-tanzania/1000086978.jpg',
      '/PORTFOLIO/africa-tanzania/1000086979.jpg',
      '/PORTFOLIO/africa-tanzania/1000086980.jpg'
    ],
    description: 'Ultra-luxury contemporary villa on the pristine white sands of Zanzibar.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'na-miami-buy-1',
    title: 'Star Island Modern Estate',
    type: 'BUY',
    price: '$13,000,000',
    stats: '6 Bed • 7 Bath • Private Dock',
    images: [
      '/PORTFOLIO/na-miami/1000086973.jpg',
      '/PORTFOLIO/na-miami/1000086974.jpg',
      '/PORTFOLIO/na-miami/1000086975.jpg'
    ],
    description: 'Ultra-modern waterfront mansion on Miami\'s iconic Star Island.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'na-la-rent-2',
    title: 'Hollywood Hills Minimalist Retreat',
    type: 'RENT',
    price: '$65k / month',
    stats: '5 Bed • 6 Bath • Wraparound Terraces',
    images: [
      '/PORTFOLIO/na-la-14m/1000086968.jpg',
      '/PORTFOLIO/na-la-14m/1000086969.jpg',
      '/PORTFOLIO/na-la-14m/1000086970.jpg',
      '/PORTFOLIO/na-la-14m/1000086971.jpg'
    ],
    description: 'Ultra-luxurious minimalist retreat perched high in the Hollywood Hills featuring striking architectural elements.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-la-rent-3',
    title: 'Malibu Oceanfront Masterpiece',
    type: 'RENT',
    price: '$75k / month',
    stats: '5 Bed • 6 Bath • Private Beach Access',
    images: [
      '/PORTFOLIO/na-la-15m/1000086961.jpg',
      '/PORTFOLIO/na-la-15m/1000086962.jpg',
      '/PORTFOLIO/na-la-15m/1000086963.jpg',
      '/PORTFOLIO/na-la-15m/1000086964.jpg',
      '/PORTFOLIO/na-la-15m/1000086965.jpg',
      '/PORTFOLIO/na-la-15m/1000086966.jpg'
    ],
    description: 'Iconic oceanfront living with floor-to-ceiling glass framing unobstructed Pacific Ocean views on Carbon Beach.',
    regionId: 'na-la',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph1-item-0',
    title: 'Orlando Signature Estate',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/na-orlando-ph1/1000085825.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085835.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085845.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085855.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085827.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085831.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085839.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085843.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085847.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085851.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085859.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085829.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085833.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085837.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085841.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085849.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085853.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085857.jpg',
      '/PORTFOLIO/na-orlando-ph1/1000085861.jpg'
    ],
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph2-item-0',
    title: 'Orlando Signature Estate',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/na-orlando-ph2/1000085869.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085883.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085893.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085909.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085873.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085879.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085887.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085891.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085895.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085899.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085917.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085921.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085875.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085881.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085885.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085889.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085897.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085907.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085911.jpg',
      '/PORTFOLIO/na-orlando-ph2/1000085919.jpg'
    ],
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-orlando-na-orlando-ph3-item-0',
    title: 'Orlando Signature Estate',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/na-orlando-ph3/1000085923.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085933.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085943.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085925.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085929.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085937.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085941.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085927.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085931.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085935.jpg',
      '/PORTFOLIO/na-orlando-ph3/1000085939.jpg'
    ],
    description: 'A spectacular luxury property joining the Orlando Signature Estate collection, offering unparalleled design.',
    regionId: 'na-orlando',
    continentId: 'north-america'
  },
  {
    id: 'na-miami-na-miami-ph1-item-0',
    title: 'Miami Vice Penthouse',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/na-miami-ph1/1000085967.jpg',
      '/PORTFOLIO/na-miami-ph1/1000085993.jpg',
      '/PORTFOLIO/na-miami-ph1/1000086048.jpg',
      '/PORTFOLIO/na-miami-ph1/1000085969.jpg',
      '/PORTFOLIO/na-miami-ph1/1000085989.jpg',
      '/PORTFOLIO/na-miami-ph1/1000086042.jpg',
      '/PORTFOLIO/na-miami-ph1/1000086046.jpg',
      '/PORTFOLIO/na-miami-ph1/1000086050.jpg',
      '/PORTFOLIO/na-miami-ph1/1000086054.jpg',
      '/PORTFOLIO/na-miami-ph1/1000085987.jpg',
      '/PORTFOLIO/na-miami-ph1/1000085991.jpg',
      '/PORTFOLIO/na-miami-ph1/1000086040.jpg',
      '/PORTFOLIO/na-miami-ph1/1000086044.jpg',
      '/PORTFOLIO/na-miami-ph1/1000086052.jpg'
    ],
    description: 'A spectacular luxury property joining the Miami Vice Penthouse collection, offering unparalleled design.',
    regionId: 'na-miami',
    continentId: 'north-america'
  },
  {
    id: 'africa-west-wa-1111-item-0',
    title: 'West Africa Luxury Estate',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/wa-1111/1000085763.jpg',
      '/PORTFOLIO/wa-1111/1000085768.jpg',
      '/PORTFOLIO/wa-1111/1000085774.jpg',
      '/PORTFOLIO/wa-1111/1000085782.jpg',
      '/PORTFOLIO/wa-1111/1000085764.jpg',
      '/PORTFOLIO/wa-1111/1000085766.jpg',
      '/PORTFOLIO/wa-1111/1000085770.jpg',
      '/PORTFOLIO/wa-1111/1000085773.jpg',
      '/PORTFOLIO/wa-1111/1000085775.jpg',
      '/PORTFOLIO/wa-1111/1000085780.jpg',
      '/PORTFOLIO/wa-1111/1000085765.jpg',
      '/PORTFOLIO/wa-1111/1000085767.jpg',
      '/PORTFOLIO/wa-1111/1000085769.jpg',
      '/PORTFOLIO/wa-1111/1000085772.jpg',
      '/PORTFOLIO/wa-1111/1000085778.jpg',
      '/PORTFOLIO/wa-1111/1000085781.jpg'
    ],
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1112-item-0',
    title: 'West Africa Luxury Estate',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/wa-1112/1000023590.jpg',
      '/PORTFOLIO/wa-1112/1000023595.jpg',
      '/PORTFOLIO/wa-1112/1000023600.jpg',
      '/PORTFOLIO/wa-1112/1000023591.jpg',
      '/PORTFOLIO/wa-1112/1000023593.jpg',
      '/PORTFOLIO/wa-1112/1000023597.jpg',
      '/PORTFOLIO/wa-1112/1000023599.jpg',
      '/PORTFOLIO/wa-1112/1000085783.jpg',
      '/PORTFOLIO/wa-1112/1000023592.jpg',
      '/PORTFOLIO/wa-1112/1000023594.jpg',
      '/PORTFOLIO/wa-1112/1000023596.jpg',
      '/PORTFOLIO/wa-1112/1000023598.jpg'
    ],
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-west-wa-1116-item-0',
    title: 'West Africa Luxury Estate',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/wa-1116/1000011099.jpg',
      '/PORTFOLIO/wa-1116/1000011127.jpg',
      '/PORTFOLIO/wa-1116/1000011491.jpg',
      '/PORTFOLIO/wa-1116/1000013958.png',
      '/PORTFOLIO/wa-1116/1000011111.jpg',
      '/PORTFOLIO/wa-1116/1000011125.jpg',
      '/PORTFOLIO/wa-1116/1000011131.jpg',
      '/PORTFOLIO/wa-1116/1000011284.jpg',
      '/PORTFOLIO/wa-1116/1000011492.jpg',
      '/PORTFOLIO/wa-1116/1000011772.jpg',
      '/PORTFOLIO/wa-1116/1000013961.png',
      '/PORTFOLIO/wa-1116/1000063466.jpg',
      '/PORTFOLIO/wa-1116/1000011118.jpg',
      '/PORTFOLIO/wa-1116/1000011126.jpg',
      '/PORTFOLIO/wa-1116/1000011129.jpg',
      '/PORTFOLIO/wa-1116/1000011202.jpg',
      '/PORTFOLIO/wa-1116/1000011771.jpg',
      '/PORTFOLIO/wa-1116/1000011773.jpg',
      '/PORTFOLIO/wa-1116/1000013959.png',
      '/PORTFOLIO/wa-1116/1000013962.png'
    ],
    description: 'A spectacular luxury property joining the West Africa Luxury Estate collection, offering unparalleled design.',
    regionId: 'africa-west',
    continentId: 'africa'
  },
  {
    id: 'africa-east-africa-east-new-item-0',
    title: 'Tanzania Safari Lodge',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/africa-east-new/1000047534.png',
      '/PORTFOLIO/africa-east-new/1000047701.png',
      '/PORTFOLIO/africa-east-new/1000047535.png',
      '/PORTFOLIO/africa-east-new/1000047565.png',
      '/PORTFOLIO/africa-east-new/1000048469.png',
      '/PORTFOLIO/africa-east-new/1000047536.png',
      '/PORTFOLIO/africa-east-new/1000047700.png',
      '/PORTFOLIO/africa-east-new/1000048467.png'
    ],
    description: 'A spectacular luxury property joining the Tanzania Safari Lodge collection, offering unparalleled design.',
    regionId: 'africa-east',
    continentId: 'africa'
  },
  {
    id: 'thailand-thailand-9m-item-0',
    title: 'Koh Samui Beachfront',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/thailand-9m/1000086952.jpg',
      '/PORTFOLIO/thailand-9m/1000086953.jpg'
    ],
    description: 'A spectacular luxury property joining the Koh Samui Beachfront collection, offering unparalleled design.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'france-more-images-item-0',
    title: 'European Grand Reserve',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'Institutional Grade • High ROI Target',
    images: [
      '/PORTFOLIO/more-images/1000013963.png',
      '/PORTFOLIO/more-images/1000013970.png',
      '/PORTFOLIO/more-images/1000013976.png',
      '/PORTFOLIO/more-images/1000013986.png',
      '/PORTFOLIO/more-images/1000013965.png',
      '/PORTFOLIO/more-images/1000013968.png',
      '/PORTFOLIO/more-images/1000013972.png',
      '/PORTFOLIO/more-images/1000013974.png',
      '/PORTFOLIO/more-images/1000013979.png',
      '/PORTFOLIO/more-images/1000013983.png',
      '/PORTFOLIO/more-images/1000013990.png',
      '/PORTFOLIO/more-images/1000013998.png',
      '/PORTFOLIO/more-images/1000013967.png',
      '/PORTFOLIO/more-images/1000013969.png',
      '/PORTFOLIO/more-images/1000013971.png',
      '/PORTFOLIO/more-images/1000013973.png',
      '/PORTFOLIO/more-images/1000013980.png',
      '/PORTFOLIO/more-images/1000013985.png',
      '/PORTFOLIO/more-images/1000013988.png',
      '/PORTFOLIO/more-images/1000013997.png'
    ],
    description: 'A spectacular luxury property joining the European Grand Reserve collection, offering unparalleled design.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'uk-mock-1',
    title: 'London Historic Glass Estate',
    type: 'BUY',
    price: '£18,500,000',
    stats: '8 Bed • 9 Bath • 12,000 sqft',
    images: ['/images/uk-estate.png'],
    description: 'An ultra-luxurious historic countryside estate seamlessly blended with contemporary glass extensions.',
    regionId: 'uk',
    continentId: 'europe'
  },
  {
    id: 'france-mock-1',
    title: 'Riviera Glass Chateau',
    type: 'BUY',
    price: '€22,000,000',
    stats: '7 Bed • 8 Bath • Infinity Pool',
    images: ['/images/france-chateau.png'],
    description: 'A modern, ultra-luxurious reimagined French Chateau in the French Riviera with expansive glass windows overlooking the Mediterranean.',
    regionId: 'france',
    continentId: 'europe'
  },
  {
    id: 'bali-mock-1',
    title: 'Ubud Jungle Sanctuary',
    type: 'RENT',
    price: '$12,000 / month',
    stats: '4 Bed • 5 Bath • Cascading Pools',
    images: ['/images/bali-villa.png'],
    description: 'An ultra-luxurious tropical modern villa featuring cascading infinity pools integrated into a lush green jungle cliff side.',
    regionId: 'indonesia',
    continentId: 'asia'
  },
  {
    id: 'phuket-mock-1',
    title: 'Phuket Ocean Glass',
    type: 'BUY',
    price: '$6,500,000',
    stats: '5 Bed • 6 Bath • Beachfront',
    images: ['/images/phuket-villa.png'],
    description: 'A minimalist glass and steel villa situated on a pristine white sand beach with wrap-around pools and ocean reflections.',
    regionId: 'thailand',
    continentId: 'asia'
  },
  {
    id: 'dubai-mock-1',
    title: 'Palm Jumeirah Sky Villa',
    type: 'BUY',
    price: 'AED 45,000,000',
    stats: '6 Bed • 7 Bath • Sky Pool',
    images: ['/images/dubai-penthouse.png'],
    description: 'An ultra-luxurious futuristic penthouse featuring floor-to-ceiling smart glass and an incredible infinity pool overlooking the Palm Jumeirah.',
    regionId: 'uae',
    continentId: 'asia'
  },
  {
    id: 'mexico-mock-1',
    title: 'Tulum Jungle Retreat',
    type: 'RENT',
    price: '$8,000 / month',
    stats: '4 Bed • 4 Bath • Private Cenote',
    images: ['/images/mexico-mock-1.png'],
    description: 'An ultra-luxurious eco-modern beachfront estate blending organic bamboo and stone with sleek modern lines.',
    regionId: 'mexico',
    continentId: 'americas'
  },
  {
    id: 'mexico-mock-2',
    title: 'Cancun Oceanfront Villa',
    type: 'BUY',
    price: '$4,200,000',
    stats: '5 Bed • 6 Bath • Infinity Edge',
    images: ['/images/mexico-mock-2.png'],
    description: 'A spectacular contemporary glass villa overlooking the turquoise Caribbean sea at sunset.',
    regionId: 'mexico',
    continentId: 'americas'
  },
  {
    id: 'brazil-mock-1',
    title: 'Rio Coastal Penthouse',
    type: 'BUY',
    price: '$3,800,000',
    stats: '3 Bed • 4 Bath • Panoramic Views',
    images: ['/images/brazil-mock-1.png'],
    description: 'Iconic beachfront penthouse featuring floor-to-ceiling windows overlooking Copacabana beach.',
    regionId: 'brazil',
    continentId: 'americas'
  },
  {
    id: 'brazil-mock-2',
    title: 'Trancoso Eco-Resort Villa',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: 'High ROI Target • Resort Amenities',
    images: ['/images/brazil-mock-2.png'],
    description: 'Invest in an ultra-luxurious tropical sanctuary nestled within Brazil\'s most exclusive eco-resort.',
    regionId: 'brazil',
    continentId: 'americas'
  },

  // ─── South Africa ───
  {
    id: 'africa-south-mock-1',
    title: 'Cape Town Clifftop Mansion',
    type: 'BUY',
    price: '$9,500,000',
    stats: '6 Bed • 7 Bath • Ocean Views',
    images: ['/images/africa-south-mock-1.png'],
    description: 'A breathtaking clifftop mansion in Cape Town with unobstructed ocean panoramas and glass-wrapped living spaces.',
    regionId: 'africa-south',
    continentId: 'africa'
  },
  {
    id: 'africa-south-mock-2',
    title: 'Winelands Estate & Spa',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: '10 Suites • Private Vineyard • 14% ROI',
    images: ['/images/africa-south-mock-2.png'],
    description: 'An extraordinary boutique estate set among award-winning vineyards in the Cape Winelands.',
    regionId: 'africa-south',
    continentId: 'africa'
  },

  // ─── Central Africa ───
  {
    id: 'africa-central-mock-1',
    title: 'Kigali Hilltop Sanctuary',
    type: 'RENT',
    price: '$4,800 / month',
    stats: '4 Bed • 4 Bath • City Panorama',
    images: ['https://images.unsplash.com/photo-1542314831-c6a4d14faaf2?auto=format&fit=crop&q=80&w=1200'],
    description: 'An ultra-modern hilltop villa in Kigali featuring panoramic views and contemporary African design.',
    regionId: 'africa-central',
    continentId: 'africa'
  },
  {
    id: 'africa-central-mock-2',
    title: 'Congo Basin Eco Lodge',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: '8 Suites • Eco-Resort • High ROI',
    images: ['https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200'],
    description: 'A high-end boutique eco-lodge development deep in the heart of the pristine Central African rainforest.',
    regionId: 'africa-central',
    continentId: 'africa'
  },
  {
    id: 'africa-central-mock-3',
    title: 'Kinshasa Riverfront Estate',
    type: 'BUY',
    price: '$2,100,000',
    stats: '5 Bed • 6 Bath • River Views',
    images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'],
    description: 'An expansive luxury estate situated on the banks of the Congo River with floor-to-ceiling glass and exotic gardens.',
    regionId: 'africa-central',
    continentId: 'africa'
  },

  // ─── Sydney ───
  {
    id: 'aus-sydney-mock-1',
    title: 'Bondi Glass Penthouse',
    type: 'BUY',
    price: 'AUD 14,000,000',
    stats: '4 Bed • 5 Bath • Harbour Views',
    images: ['https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200'],
    description: 'An iconic glass penthouse above Bondi Beach with sweeping Sydney Harbour panoramas.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },
  {
    id: 'aus-sydney-mock-2',
    title: 'Northern Beaches Estate',
    type: 'RENT',
    price: 'AUD 15,000 / month',
    stats: '5 Bed • 5 Bath • Beachfront',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'],
    description: 'A sprawling beachfront estate on Sydney\'s Northern Beaches blending natural textures with modern glass luxury.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },
  {
    id: 'aus-sydney-mock-3',
    title: 'Sydney Cove Skyline Apartment',
    type: 'BUY',
    price: 'AUD 8,500,000',
    stats: '3 Bed • 4 Bath • Skyline Views',
    images: ['https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1200'],
    description: 'A sleek, designer skyline apartment offering unimpeded views of the Opera House with full glass walls.',
    regionId: 'australia-sydney',
    continentId: 'australia'
  },

  // ─── Melbourne ───
  {
    id: 'aus-melb-mock-1',
    title: 'Brighton Bay Residence',
    type: 'BUY',
    price: 'AUD 8,500,000',
    stats: '5 Bed • 4 Bath • Bay Views',
    images: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200'],
    description: 'A stunning contemporary residence in Melbourne\'s most sought-after bayside suburb with floor-to-ceiling glass.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },
  {
    id: 'aus-melb-mock-2',
    title: 'South Yarra City Tower Penthouse',
    type: 'RENT',
    price: 'AUD 12,000 / month',
    stats: '3 Bed • 3 Bath • City Views',
    images: ['https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&fit=crop&q=80&w=1200'],
    description: 'A sky-high designer penthouse in the heart of South Yarra with bespoke glass interiors and panoramic city views.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },
  {
    id: 'aus-melb-mock-3',
    title: 'Toorak Prestige Villa',
    type: 'INVEST',
    price: 'Contact for Pricing',
    stats: '6 Bed • 7 Bath • Tennis Court',
    images: ['https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1200'],
    description: 'An unparalleled prestige investment in Toorak featuring expansive grounds and cutting-edge architectural glass design.',
    regionId: 'australia-melbourne',
    continentId: 'australia'
  },

  // ─── Gold Coast ───
  {
    id: 'aus-gc-mock-1',
    title: 'Main Beach Glass Tower',
    type: 'BUY',
    price: 'AUD 6,200,000',
    stats: '3 Bed • 3 Bath • Oceanfront',
    images: ['https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=1200'],
    description: 'A premium glass tower penthouse on the Gold Coast beachfront with uninterrupted ocean views.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  },
  {
    id: 'aus-gc-mock-2',
    title: 'Surfers Paradise Sky Villa',
    type: 'RENT',
    price: 'AUD 9,500 / month',
    stats: '4 Bed • 4 Bath • Private Rooftop',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200'],
    description: 'A lavish sky villa in Surfers Paradise featuring a private rooftop terrace and towering glass windows.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  },
  {
    id: 'aus-gc-mock-3',
    title: 'Broadbeach Luxury Estate',
    type: 'BUY',
    price: 'AUD 11,500,000',
    stats: '5 Bed • 6 Bath • Private Marina',
    images: ['https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200'],
    description: 'A spectacular waterfront compound in Broadbeach boasting its own private marina and expansive glass walls.',
    regionId: 'australia-gold-coast',
    continentId: 'australia'
  }
];
