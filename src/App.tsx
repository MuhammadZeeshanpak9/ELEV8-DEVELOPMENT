import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/Header';
import {
  Hero,
  Story,
  Mission,
  Vision,
  Creations,
  Philosophy,
  Actions,
  Contact,
  Footer
} from '@/sections';
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize ScrollTrigger refresh on load
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Story />
        <Mission />
        <Vision />
        <Creations />
        <Philosophy />
        <Actions />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.008]">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}

export default App;
