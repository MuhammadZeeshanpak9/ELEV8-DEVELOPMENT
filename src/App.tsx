import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { ContinentsPage } from '@/pages/portfolio/ContinentsPage';
import { RegionsPage } from '@/pages/portfolio/RegionsPage';
import { ProjectsPage } from '@/pages/portfolio/ProjectsPage';
import { ProjectDetails } from '@/pages/portfolio/ProjectDetails';
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <BrowserRouter>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<ContinentsPage />} />
        <Route path="/portfolio/:continent" element={<RegionsPage />} />
        <Route path="/portfolio/:continent/:region" element={<ProjectsPage />} />
        <Route path="/portfolio/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
