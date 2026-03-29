import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

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
    <Link to={`/portfolio/project/${project.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 cursor-pointer flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={project.images[currentIndex]}
              alt={`${project.title} - View ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Carousel Controls */}
          {project.images && project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={18} />
              </button>
              
              {/* Pagination Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute top-4 right-4 text-right">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${getTypeColor(
                project.type
              )}`}
            >
              {project.type}
            </span>
            {project.images && project.images.length > 1 && (
              <div className="mt-2 text-[10px] font-medium text-white bg-black/40 px-2 py-0.5 rounded-full inline-block backdrop-blur-md">
                {project.images.length} Photos
              </div>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-display font-semibold text-gray-900 mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-brand-400 font-medium mb-4">{project.price}</p>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <span>{project.stats}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
