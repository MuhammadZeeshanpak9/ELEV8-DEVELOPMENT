import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GridLines } from '@/components/backgrounds';
import { ArrowUpRight, Home, Key, TrendingUp, type LucideIcon } from 'lucide-react';

interface ActionCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  index: number;
  gradient: string;
}

function ActionCard({ title, subtitle, description, icon: Icon, index, gradient }: ActionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className="group relative"
    >
      <div className={`relative h-full rounded-2xl p-8 lg:p-10 overflow-hidden border border-gray-100 hover:border-brand-500/30 transition-all duration-500 shadow-sm hover:shadow-lg ${gradient}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(159,129,185,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]" />
        </div>

        {/* Glow Effect */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-px bg-gradient-to-r from-brand-500/20 via-transparent to-brand-500/20 rounded-2xl blur-xl"
        />

        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
          {/* Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-brand-500/10 transition-colors duration-300 shadow-sm">
              <Icon className="w-8 h-8 text-brand-500" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <span className="text-gray-500 text-sm tracking-wider uppercase">
              {subtitle}
            </span>
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mt-1">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            {description}
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-brand-500 font-medium group/btn"
          >
            Learn More
            <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <div className="absolute top-4 right-4 w-px h-16 bg-gradient-to-b from-brand-500 to-transparent" />
          <div className="absolute top-4 right-4 w-16 h-px bg-gradient-to-r from-transparent to-brand-500" />
        </div>
      </div>
    </motion.div>
  );
}

export function Actions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const actions = [
    {
      title: 'RENT',
      subtitle: 'Flexible Living',
      description: 'Explore our portfolio of rental properties designed for modern lifestyles. Short-term or long-term, we have options for you.',
      icon: Key,
      gradient: 'bg-gradient-to-br from-pink-50/80 to-rose-50/80',
    },
    {
      title: 'BUY',
      subtitle: 'Own Your Future',
      description: 'Discover premium properties available for purchase. From luxury residences to commercial spaces, find your perfect investment.',
      icon: Home,
      gradient: 'bg-gradient-to-br from-brand-50/80 to-purple-50/80',
    },
    {
      title: 'INVEST',
      subtitle: 'Grow With Us',
      description: 'Partner with ELEV8 Development in groundbreaking developments. Access exclusive investment opportunities with competitive returns.',
      icon: TrendingUp,
      gradient: 'bg-gradient-to-br from-emerald-50/80 to-teal-50/80',
    },
  ];

  return (
    <section
      id="actions"
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden bg-white"
    >
      {/* Background */}
      <GridLines lineCount={20} color="rgba(159, 129, 185, 0.05)" direction="both" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-brand-500 text-sm tracking-[0.2em] uppercase font-medium">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mt-4 mb-6">
              Your Next <span className="text-gradient">Move</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you're looking to buy, rent, or invest, we have the perfect
              opportunity waiting for you.
            </p>
          </motion.div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            {actions.map((action, index) => (
              <ActionCard key={action.title} {...action} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
