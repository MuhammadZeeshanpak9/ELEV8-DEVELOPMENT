import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { continentsData, regionsData, projectsData } from '@/data/portfolio';
import type { PropertyType } from '@/data/portfolio';
import { ProjectCard } from '@/components/portfolio/ProjectCard';

const FILTERS: { label: string; value: PropertyType | 'ALL' }[] = [
  { label: 'All', value: 'ALL' },
  { label: 'Rent', value: 'RENT' },
  { label: 'Buy', value: 'BUY' },
  { label: 'Invest', value: 'INVEST' },
];

export function ProjectsPage() {
  const { continent: continentId, region: regionId } = useParams<{
    continent: string;
    region: string;
  }>();

  const [activeFilter, setActiveFilter] = useState<PropertyType | 'ALL'>('ALL');

  const continent = continentsData.find((c) => c.id === continentId);
  const region = regionsData.find((r) => r.id === regionId && r.continentId === continentId);

  if (!continent || !region) {
    return <Navigate to="/portfolio" replace />;
  }

  const allProjects = projectsData.filter(
    (p) => p.continentId === continentId && p.regionId === regionId
  );

  const filteredProjects =
    activeFilter === 'ALL'
      ? allProjects
      : allProjects.filter((p) => p.type === activeFilter);

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to={`/portfolio/${continentId}`}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            {continent.name}
          </Link>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-12 h-60"
        >
          <img
            src={region.image}
            alt={region.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-10">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {continent.name} / {region.name}
            </p>
            <h1 className="text-4xl font-display font-bold text-white">
              {region.name}
            </h1>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-10 flex-wrap"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.value
                  ? filter.value === 'RENT'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : filter.value === 'BUY'
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : filter.value === 'INVEST'
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white text-zinc-900'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-500">
            {filteredProjects.length} propert{filteredProjects.length === 1 ? 'y' : 'ies'}
          </span>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-gray-500"
          >
            No {activeFilter.toLowerCase()} properties found in this region.
          </motion.div>
        )}
      </div>
    </div>
  );
}
