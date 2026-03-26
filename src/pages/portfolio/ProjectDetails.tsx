import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Tag, BarChart3 } from 'lucide-react';
import { projectsData, regionsData, continentsData } from '@/data/portfolio';

export function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();

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

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] mb-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto h-full">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-6 lg:left-16 z-10"
          >
            {region && continent && (
              <Link
                to={`/portfolio/${project.continentId}/${project.regionId}`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={16} />
                {region.name}
              </Link>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="h-full rounded-3xl overflow-hidden relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span
                  className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full border mb-5 ${getTypeColor(project.type)}`}
                >
                  {project.type}
                </span>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
                    <MapPin size={20} className="text-brand-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-sm text-gray-900 font-medium">
                        {region?.name}, {continent?.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
                    <Tag size={20} className="text-brand-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price</p>
                      <p className="text-sm text-gray-900 font-medium">{project.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
                    <BarChart3 size={20} className="text-brand-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Details</p>
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
              className="bg-gray-50 rounded-2xl border border-gray-200 p-8 h-fit sticky top-28"
            >
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-2">
                Interested?
              </p>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Get in Touch
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Our team is ready to provide you with all the details about this property and guide you through the next steps.
              </p>
              <Link
                to="/#contact"
                className="block w-full text-center py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-colors duration-300"
              >
                Enquire Now
              </Link>
              <Link
                to="/portfolio"
                className="block w-full text-center py-3 rounded-xl border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 text-sm mt-3 transition-colors duration-300"
              >
                Browse More Properties
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
