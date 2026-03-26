import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { continentsData } from '@/data/portfolio';
import { ContinentCard } from '@/components/portfolio/ContinentCard';

export function ContinentsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Global Portfolio
          </p>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              Continent
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            ELEV8's portfolio spans the globe. Select a region that speaks to your ambition.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {continentsData.map((continent, index) => (
            <motion.div
              key={continent.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <ContinentCard continent={continent} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
