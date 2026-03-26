import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BlueprintGrid, ParticleField } from '@/components/backgrounds';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubRegion {
  name: string;
  image: string;
  projects: number;
}

interface Region {
  name: string;
  subtitle: string;
  image: string;
  description: string;
  subRegions?: SubRegion[];
}

const regions: Region[] = [
  {
    name: 'Africa',
    subtitle: 'Continental Portfolio',
    image: '/images/africa-main.jpg',
    description: 'Pioneering sustainable development across the African continent, blending modern innovation with cultural heritage.',
    subRegions: [
      { name: 'East Africa', image: '/images/africa-main.jpg', projects: 12 },
      { name: 'West Africa', image: '/images/africa-main.jpg', projects: 8 },
      { name: 'North Africa', image: '/images/middle-east.jpg', projects: 15 },
      { name: 'South Africa', image: '/images/africa-main.jpg', projects: 10 },
      { name: 'Central Africa', image: '/images/africa-main.jpg', projects: 6 },
    ],
  },
  {
    name: 'North America',
    subtitle: 'Luxury Communities',
    image: '/images/usa-main.jpg',
    description: 'Redefining urban living with cutting-edge residential and commercial developments.',
    subRegions: [
      { name: 'United States', image: '/images/usa-main.jpg', projects: 45 },
      { name: 'Canada', image: '/images/canada.jpg', projects: 18 },
      { name: 'Mexico', image: '/images/mexico.jpg', projects: 12 },
    ],
  },
  {
    name: 'Europe',
    subtitle: 'Heritage Reimagined',
    image: '/images/europe-main.jpg',
    description: 'Where centuries of architectural excellence meet contemporary innovation.',
    subRegions: [
      { name: 'Western Europe', image: '/images/europe-main.jpg', projects: 32 },
      { name: 'Northern Europe', image: '/images/northern-europe.jpg', projects: 22 },
      { name: 'Southern Europe', image: '/images/southern-europe.jpg', projects: 28 },
      { name: 'Eastern Europe', image: '/images/europe-main.jpg', projects: 15 },
    ],
  },
  {
    name: 'Asia',
    subtitle: 'Signature Residences',
    image: '/images/asia-main.jpg',
    description: 'Asia\'s most ambitious developments, from smart cities to luxury resorts.',
    subRegions: [
      { name: 'Middle East', image: '/images/middle-east.jpg', projects: 25 },
      { name: 'Southeast Asia', image: '/images/southeast-asia.jpg', projects: 20 },
      { name: 'East Asia', image: '/images/east-asia.jpg', projects: 35 },
      { name: 'South Asia', image: '/images/south-asia.jpg', projects: 14 },
    ],
  },
  {
    name: 'Australia',
    subtitle: 'Coastal Futures',
    image: '/images/australia-main.jpg',
    description: 'Sustainable coastal living meets contemporary Australian design.',
  },
  {
    name: 'South America',
    subtitle: 'Emerging Horizons',
    image: '/images/south-america-main.jpg',
    description: 'Transforming landscapes with innovative developments across the continent.',
  },
];

function RegionCard({ region, index }: { region: Region; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <div
        className="relative glass rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-500/30 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-lg"
        onClick={() => region.subRegions && setIsExpanded(!isExpanded)}
      >
        {/* Image */}
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <motion.img
            src={region.image}
            alt={region.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Region Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-brand-500/20 backdrop-blur-sm text-brand-500 text-xs font-medium rounded-full border border-brand-500/30">
              {region.subRegions ? `${region.subRegions.length} Regions` : 'Direct Access'}
            </span>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-brand-500 text-sm tracking-wider uppercase mb-2">
              {region.subtitle}
            </p>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2">
              {region.name}
            </h3>
            <p className="text-white/60 text-sm line-clamp-2">
              {region.description}
            </p>
          </div>

          {/* Expand Indicator */}
          {region.subRegions && (
            <motion.div
              className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </div>

        {/* Sub-regions */}
        <AnimatePresence>
          {isExpanded && region.subRegions && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 border-t border-gray-100">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {region.subRegions.map((sub, subIndex) => (
                    <motion.div
                      key={sub.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: subIndex * 0.05 }}
                      className="group/sub relative rounded-xl overflow-hidden cursor-pointer"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={sub.image}
                          alt={sub.name}
                          className="w-full h-full object-cover group-hover/sub:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium">{sub.name}</span>
                          <span className="text-brand-500 text-xs">{sub.projects} projects</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 border border-brand-500/0 group-hover/sub:border-brand-500/50 rounded-xl transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-500/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export function Creations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="creations"
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden bg-white"
    >
      {/* Background */}
      <BlueprintGrid density={80} animated />
      <ParticleField particleCount={25} color="rgba(159, 129, 185, 0.15)" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-brand-500 text-sm tracking-[0.2em] uppercase font-medium">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mt-4 mb-6">
              Global <span className="text-gradient">Creations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our portfolio of transformative developments spanning six continents,
              each project a testament to innovation and excellence.
            </p>
          </motion.div>

          {/* Regions Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <RegionCard key={region.name} region={region} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link to="/portfolio">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 border border-brand-500/50 text-brand-500 font-medium rounded-full hover:bg-brand-500 hover:text-white transition-all duration-300 cursor-pointer"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
