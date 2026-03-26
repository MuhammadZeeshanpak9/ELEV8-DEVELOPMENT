import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { continentsData, regionsData } from '@/data/portfolio';
import { RegionCard } from '@/components/portfolio/RegionCard';

export function RegionsPage() {
  const { continent: continentId } = useParams<{ continent: string }>();

  const continent = continentsData.find((c) => c.id === continentId);
  const regions = regionsData.filter((r) => r.continentId === continentId);

  if (!continent) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            All Continents
          </Link>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-72"
        >
          <img
            src={continent.image}
            alt={continent.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-10">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Portfolio / {continent.name}
            </p>
            <h1 className="text-5xl font-display font-bold text-white mb-3">
              {continent.name}
            </h1>
            <p className="text-gray-300 max-w-xl">{continent.description}</p>
          </div>
        </motion.div>

        {/* Regions heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-display font-semibold text-white mb-8"
        >
          Select a Region
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <RegionCard region={region} />
            </motion.div>
          ))}
        </div>

        {regions.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            No regions found for this continent.
          </div>
        )}
      </div>
    </div>
  );
}
