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
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'BUY':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'INVEST':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30';
    }
  };

  return (
    <Link to={`/portfolio/project/${project.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 cursor-pointer flex flex-col h-full"
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
          <h3 className="text-xl font-display font-semibold text-white mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-brand-400 font-medium mb-4">{project.price}</p>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
            <span>{project.stats}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
