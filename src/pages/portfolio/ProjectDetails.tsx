import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, MapPin, Tag, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData, regionsData, continentsData } from '@/data/portfolio';

export function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const region = regionsData.find((r) => r.id === project.regionId);
  const continent = continentsData.find((c) => c.id === project.continentId);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'RENT':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'BUY':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'INVEST':
        return 'bg-purple-50 text-purple-600 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      {/* Hero Image Carousel */}
      <div className="relative h-[65vh] mb-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto h-full">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-6 lg:left-16 z-20"
          >
            {region && continent && (
              <Link
                to={`/portfolio/${project.continentId}/${project.regionId}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-sm text-sm text-white hover:text-brand-300 transition-colors border border-white/20"
              >
                <ArrowLeft size={16} />
                Return to {region.name}
              </Link>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="h-full rounded-3xl overflow-hidden relative group shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                src={project.images[currentIndex]}
                alt={`${project.title} - View ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Carousel Controls */}
            {project.images && project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/70 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 border border-white/10"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/70 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 border border-white/10"
                >
                  <ChevronRight size={32} />
                </button>
                
                {/* Image Counter & Pagination */}
                <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3">
                  <div className="flex gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentIndex ? 'w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm font-medium tracking-widest uppercase">
                    {currentIndex + 1} / {project.images.length}
                  </span>
                </div>
              </>
            )}
            
            {/* Title Overlay on Hero */}
            <div className="absolute bottom-10 inset-x-0 px-12 pointer-events-none flex justify-between items-end">
                <div>
                   <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full border mb-4 backdrop-blur-md ${getTypeColor(project.type)}`}>
                        {project.type}
                   </span>
                   <h1 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight drop-shadow-md">
                        {project.title}
                   </h1>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 lg:px-16 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl font-display font-semibold text-gray-900">Property Overview</h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                  <div className="flex items-start gap-4 bg-gray-50/50 hover:bg-gray-50 transition-colors rounded-2xl p-6 border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Location</p>
                      <p className="text-sm text-gray-900 font-medium">
                        {region?.name}, {continent?.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-50/50 hover:bg-gray-50 transition-colors rounded-2xl p-6 border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                        <Tag size={20} className="text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Price</p>
                      <p className="text-sm text-gray-900 font-medium">{project.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-50/50 hover:bg-gray-50 transition-colors rounded-2xl p-6 border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                        <BarChart3 size={20} className="text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Details</p>
                      <p className="text-sm text-gray-900 font-medium">{project.stats}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: CTA Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white rounded-3xl border border-gray-200 p-8 h-fit lg:sticky top-32 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mb-6">
                <Tag size={24} className="text-brand-500" />
              </div>
              <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">
                Interested?
              </p>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Inquire About Property
              </h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Connect directly with our luxury real estate specialists to schedule a private viewing or request comprehensive property documentation.
              </p>
              <Link
                to="/#contact"
                className="block w-full text-center py-4 rounded-xl bg-gray-900 hover:bg-brand-500 text-white font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Contact Specialist
              </Link>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  to="/portfolio"
                  className="block w-full text-center py-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium text-sm transition-colors duration-300"
                >
                  Browse Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
