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
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1200',
    description: 'Discover luxury properties across Europe\'s most iconic cities and coastlines.'
  },
  {
    id: 'asia',
    name: 'Asia',
    image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&q=80&w=1200',
    description: 'Experience unparalleled elegance in vibrant, modern, and traditional Asian landscapes.'
  },
  {
    id: 'americas',
    name: 'Americas',
    image: 'https://images.unsplash.com/photo-1580659328892-db13aed366ef?auto=format&fit=crop&q=80&w=1200',
    description: 'Explore premier estates and modern developments across North and South America.'
  }
];

export const regionsData: Region[] = [
  // Europe
  {
    id: 'uk',
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200',
    description: 'Historic estates and modern luxury in the heart of the UK.',
    continentId: 'europe'
  },
  {
    id: 'france',
    name: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200',
    description: 'Villas in the French Riviera and classic Parisian apartments.',
    continentId: 'europe'
  },
  // Asia
  {
    id: 'indonesia',
    name: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=1200',
    description: 'Stunning beachfront properties and jungle sanctuaries in Tulum.',
    continentId: 'americas'
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
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1502672260266-1c1f5523a585?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1523531294919-4bab31602356?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&q=80&w=1200',
    description: 'Invest in the next generation of sustainable luxury living in the heart of Tulum.',
    regionId: 'mexico',
    continentId: 'americas'
  }
];
