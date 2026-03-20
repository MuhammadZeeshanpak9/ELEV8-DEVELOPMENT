import { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { WireframeCube, GridLines } from '@/components/backgrounds';
import { Lightbulb, Layers, Sparkles } from 'lucide-react';
import philosophyImage from '@/assets/Design Philosophy.jpg';

const principles = [
  {
    title: 'Form Follows Function',
    description: 'Every curve, every angle serves a purpose. Beauty emerges from utility.',
    icon: Layers,
  },
  {
    title: 'Innovation Serves Life',
    description: 'Technology enhances human experience, never complicates it.',
    icon: Lightbulb,
  },
  {
    title: 'The Future is an Aesthetic',
    description: 'Tomorrow\'s architecture begins with today\'s vision.',
    icon: Sparkles,
  },
];

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  useEffect(() => {
    if (!textRef.current || !isInView) return;

    const lines = textRef.current.querySelectorAll('.philosophy-line');

    gsap.fromTo(
      lines,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      }
    );
  }, [isInView]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden bg-white"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/philosophy-form.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
      </motion.div>

      {/* Animated Elements */}
      <GridLines lineCount={15} color="rgba(159, 129, 185, 0.1)" direction="both" />

      {/* Floating Wireframe Cubes */}
      <div className="absolute top-20 right-20 opacity-30 hidden lg:block">
        <WireframeCube size={150} color="rgba(159, 129, 185, 0.4)" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-20 hidden lg:block">
        <WireframeCube size={100} color="rgba(159, 129, 185, 0.3)" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content Column */}
            <div ref={textRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="philosophy-line"
              >
                <span className="text-brand-500 text-sm tracking-[0.2em] uppercase font-medium">
                  Design Philosophy
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="philosophy-line text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mt-4 mb-8 leading-tight"
              >
                THREE PRINCIPLES GUIDE{' '}
                <span className="text-gradient">OUR CREATIONS.</span>
              </motion.h2>

              {/* Principles */}
              <div className="space-y-8 mt-12">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="philosophy-line group flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors duration-300">
                        <principle.icon className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-gray-900 mb-2 group-hover:text-brand-500 transition-colors duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src={philosophyImage}
                  alt="Design Philosophy Visual"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-transparent to-brand-500/10 group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 border border-white/20 rounded-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
