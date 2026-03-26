import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
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
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${getTypeColor(
                project.type
              )}`}
            >
              {project.type}
            </span>
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
