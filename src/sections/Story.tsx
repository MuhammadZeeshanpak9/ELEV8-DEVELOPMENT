import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { GridLines } from '@/components/backgrounds';
import storyImage from '@/assets/our story.jpg';

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden bg-white"
    >
      {/* Background */}
      <GridLines lineCount={15} color="rgba(159, 129, 185, 0.05)" direction="horizontal" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      <div className="absolute top-20 right-20 w-32 h-32 border border-brand-500/10 rounded-full" />
      <div className="absolute bottom-40 left-10 w-20 h-20 border border-brand-500/10 rotate-45" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Column */}
            <motion.div
              style={{ y: imageY }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={storyImage}
                    alt="ELEV8 Development Story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 glass rounded-xl p-6 shadow-lg"
                >
                  <div className="text-4xl font-display font-bold text-brand-500">15+</div>
                  <div className="text-sm text-gray-500 mt-1">Years of Excellence</div>
                </motion.div>

                {/* Decorative Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-brand-500/20 rounded-2xl -z-10" />
              </motion.div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              style={{ y: contentY }}
              className="lg:pl-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="text-brand-500 text-sm tracking-[0.2em] uppercase font-medium">
                  Our Story
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mt-4 mb-8 leading-tight"
              >
                We don't build for today. We{' '}
                <span className="text-gradient">architect</span> the possibilities of tomorrow.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-gray-600 text-lg leading-relaxed"
              >
                <p>
                  ELEV8 Development was born from the conviction that the future is not something to be waited for —
                  it is something to be designed. Every structure we create is a promise of evolution,
                  a harmony of nature and technology.
                </p>
                <p>
                  From the soaring skyscrapers of metropolitan centers to the sustainable eco-communities
                  in remote landscapes, our portfolio spans the globe and defies convention. We believe
                  that architecture should inspire, elevate, and transform the human experience.
                </p>
                <p>
                  Welcome to the future we are building together.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-8"
              >
                <div>
                  <div className="text-3xl font-display font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-500 mt-1">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gray-900">45</div>
                  <div className="text-sm text-gray-500 mt-1">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gray-900">50M+</div>
                  <div className="text-sm text-gray-500 mt-1">Sq Ft Developed</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
