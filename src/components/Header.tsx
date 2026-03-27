import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, BookOpen, Target, Eye, Gem, Compass, TrendingUp, Send, Globe } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '@/assets/Logo/1000077563.jpg';

const hashLinks = [
  { label: 'Hi YOU', href: '#hero', icon: Sparkles },
  { label: 'Our Story', href: '#story', icon: BookOpen },
  { label: 'Mission', href: '#mission', icon: Target },
  { label: 'Vision', href: '#vision', icon: Eye },
  { label: 'Creations', href: '#creations', icon: Gem },
  { label: 'Portfolio', href: '#philosophy', icon: Compass },
  { label: 'Invest', href: '#actions', icon: TrendingUp },
  { label: 'Contact', href: '#contact', icon: Send },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isPortfolioPage = location.pathname.startsWith('/portfolio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashNav = (hash: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      // Already on home, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate home and let Home component handle the scroll
      navigate('/' + hash);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isPortfolioPage
            ? 'glass-strong py-3 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/"
                className="flex items-center gap-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                  <img
                    src={logo}
                    alt="ELEV8 Development Logo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="hidden sm:block text-gray-900 font-display font-semibold tracking-wider">
                  ELEV8 Development
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {hashLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleHashNav(link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className="relative px-4 py-2 text-sm text-gray-600 hover:text-brand-500 transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-brand-500 group-hover:w-3/4 transition-all duration-300" />
                </motion.button>
              ))}

              {/* Portfolio link */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  to="/portfolio"
                  className={`relative flex items-center gap-1.5 px-4 py-2 text-sm transition-colors duration-300 group ${
                    isPortfolioPage ? 'text-brand-500' : 'text-gray-600 hover:text-brand-500'
                  }`}
                >
                  <Globe size={14} />
                  Philosophy
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-brand-500 transition-all duration-300 ${isPortfolioPage ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`} />
                </Link>
              </motion.div>
            </nav>

            {/* CTA Button */}
            <motion.button
              onClick={() => handleHashNav('#contact')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 border border-brand-500/50 text-brand-500 text-sm font-medium rounded-full hover:bg-brand-500 hover:text-white transition-all duration-300"
            >
              Say Hello
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.nav
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.1 }}
              className="absolute top-24 left-6 right-6 glass-strong rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col gap-2">
                {hashLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleHashNav(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:text-brand-500 hover:bg-brand-500/10 rounded-lg transition-all duration-300 w-full text-left"
                  >
                    <link.icon size={18} strokeWidth={1.5} className="opacity-70" />
                    <span className="font-medium tracking-wide">{link.label}</span>
                  </motion.button>
                ))}

                {/* Mobile Portfolio link */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <Link
                    to="/portfolio"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:text-brand-500 hover:bg-brand-500/10 rounded-lg transition-all duration-300"
                  >
                    <Globe size={18} strokeWidth={1.5} className="opacity-70" />
                    <span className="font-medium tracking-wide">Philosophy</span>
                  </Link>
                </motion.div>

                <motion.button
                  onClick={() => handleHashNav('#contact')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 px-4 py-3 bg-brand-500 text-white text-center rounded-lg hover:bg-brand-600 transition-colors duration-300"
                >
                  Say Hello
                </motion.button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
