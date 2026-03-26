import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Region } from '@/data/portfolio';

interface RegionCardProps {
  region: Region;
}

export function RegionCard({ region }: RegionCardProps) {
  return (
    <Link to={`/portfolio/${region.continentId}/${region.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0">
          <img
            src={region.image}
            alt={region.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-display font-semibold text-white mb-2">
            {region.name}
          </h3>
          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {region.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
