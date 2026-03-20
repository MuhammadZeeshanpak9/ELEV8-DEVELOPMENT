import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import logo from '@/assets/Logo/1000077563.jpg';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#story' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  projects: [
    { label: 'Residential', href: '#creations' },
    { label: 'Commercial', href: '#creations' },
    { label: 'Hospitality', href: '#creations' },
    { label: 'Mixed Use', href: '#creations' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Sustainability', href: '#philosophy' },
    { label: 'FAQ', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={containerRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : {}}
          transition={{ duration: 1 }}
          className="text-[20vw] font-display font-bold text-brand-500 whitespace-nowrap select-none"
        >
          ELEV8 Development
        </motion.span>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/80" />

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16 mb-16">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="col-span-2 md:col-span-4 lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 overflow-hidden rounded-lg">
                  <img
                    src={logo}
                    alt="ELEV8 Development Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-900 font-display font-semibold text-xl tracking-wider">
                  ELEV8 Development
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                Architecting the future of global development.
                Innovation, sustainability, and excellence in every structure.
              </p>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-brand-500/10 hover:border-brand-500/30 hover:text-brand-500 transition-all duration-300 shadow-sm"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </motion.button>
            </motion.div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.05 }}
              >
                <h4 className="text-gray-900 font-medium mb-4 capitalize">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-gray-500 text-sm hover:text-brand-500 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6 pt-8 border-t border-gray-100"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} ELEV8 Development. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
                  <span className="text-brand-500 text-sm">Live</span>
                </div>
              </div>
            </div>
            <div className="w-full text-center pb-4">
              <span className="text-gray-500/80 text-xs sm:text-sm font-medium tracking-widest uppercase">
                POWERED BY : THE WORLD'S GREATEST COIN + ELEV8 INCORPORATION
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
