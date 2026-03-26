import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Continent } from '@/data/portfolio';

interface ContinentCardProps {
  continent: Continent;
}

export function ContinentCard({ continent }: ContinentCardProps) {
  return (
    <Link to={`/portfolio/${continent.id}`}>
      <motion.div
        whileHover={{ y: -10 }}
        className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0">
          <img
            src={continent.image}
            alt={continent.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-3xl font-display font-bold text-white mb-2">
            {continent.name}
          </h3>
          <p className="text-brand-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {continent.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
