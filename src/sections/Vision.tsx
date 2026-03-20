import { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { GridLines } from '@/components/backgrounds';

export function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    if (!textRef.current || !isInView) return;

    const words = textRef.current.querySelectorAll('.word');
    
    gsap.fromTo(
      words,
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

  const visionText = "Designing the blueprint of human evolution.";
  const words = visionText.split(' ');

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative py-40 lg:py-60 overflow-hidden bg-white"
    >
      {/* Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent" />
      </motion.div>
      
      <GridLines lineCount={20} color="rgba(159, 129, 185, 0.08)" direction="both" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-px h-40 bg-gradient-to-b from-brand-500/30 to-transparent" />
      <div className="absolute bottom-20 right-1/4 w-px h-40 bg-gradient-to-b from-transparent to-brand-500/30" />
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-brand-500/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-10 w-2 h-2 bg-brand-500/60 rounded-full animate-pulse delay-700" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-brand-500 text-sm tracking-[0.3em] uppercase font-medium">
              Vision
            </span>
          </motion.div>

          {/* Main Vision Text */}
          <h2
            ref={textRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                className={`word inline-block mr-[0.3em] ${
                  word === 'blueprint' || word === 'evolution.'
                    ? 'text-gradient glow-text'
                    : 'text-gray-900'
                }`}
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We envision a world where architecture transcends mere shelter — 
            where every building tells a story of innovation, sustainability, and 
            human aspiration. Our vision is to create spaces that don't just exist 
            in the future, but actively shape it.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex flex-wrap justify-center gap-12 lg:gap-20"
          >
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-display font-bold text-brand-500">2030</div>
              <div className="text-sm text-gray-500 mt-2">Net Zero Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-display font-bold text-brand-500">100%</div>
              <div className="text-sm text-gray-500 mt-2">Sustainable Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-display font-bold text-brand-500">∞</div>
              <div className="text-sm text-gray-500 mt-2">Innovation Boundless</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
