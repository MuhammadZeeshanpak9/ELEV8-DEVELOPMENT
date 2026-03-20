import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ParticleField } from '@/components/backgrounds';
import { Target, Cpu, Building2 } from 'lucide-react';

const missions = [
  {
    num: '01',
    title: 'Redefine Sustainable Luxury',
    description: 'Creating spaces that harmonize opulence with environmental responsibility, setting new standards for eco-conscious development.',
    icon: Target,
  },
  {
    num: '02',
    title: 'Integrate Life with Technology',
    description: 'Seamlessly blending smart systems and innovative solutions to enhance daily living experiences.',
    icon: Cpu,
  },
  {
    num: '03',
    title: 'Architect the Future Skyline',
    description: 'Designing iconic structures that reshape cityscapes and become landmarks for generations to come.',
    icon: Building2,
  },
];

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState('00');

  useEffect(() => {
    if (!inView) return;

    const num = parseInt(value);
    let current = 0;
    const duration = 1500;
    const steps = 60;
    const increment = num / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toString().padStart(2, '0'));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  return <span>{displayValue}</span>;
}

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="mission"
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/30 to-white" />
      <ParticleField particleCount={30} color="rgba(159, 129, 185, 0.2)" connectParticles={false} />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl" />

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
              Vision
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mt-4">
              OUR VISION
            </h2>
          </motion.div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.num}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative glass rounded-2xl p-8 lg:p-10 h-full border border-gray-100 hover:border-brand-500/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg">
                  {/* Background Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-500" />

                  {/* Number */}
                  <div className="relative mb-6">
                    <span className="text-6xl lg:text-7xl font-display font-bold text-brand-500/20">
                      <AnimatedNumber value={mission.num} inView={isInView} />
                    </span>
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 text-brand-500 text-sm tracking-wider">
                      {mission.num}.
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <mission.icon className="w-8 h-8 text-brand-500" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-display font-semibold text-gray-900 mb-4 group-hover:text-brand-500 transition-colors duration-300">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-brand-500 to-transparent group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
