import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
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
import { Header } from '@/components/Header';
import { useLocation } from 'react-router-dom';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    // If we have a hash in the URL, try to scroll to it
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
