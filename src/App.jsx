import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import PainSection from './components/PainSection.jsx';
import PracticeAreas from './components/PracticeAreas.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import ConversionQuiz from './components/ConversionQuiz.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton.jsx';
import { Events } from './lib/analytics.js';

export default function App() {
  // Evento de conversao: scroll de 75% da pagina (uma unica vez).
  useEffect(() => {
    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= 0.75) {
        fired = true;
        Events.scroll75();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // reducedMotion="user" respeita prefers-reduced-motion: mantem fades de
    // opacidade e desativa movimento, garantindo que nada fique invisivel.
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh bg-ivory bg-grain">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <PainSection />
          <PracticeAreas />
          <Process />
          <About />
          <Education />
          <ConversionQuiz />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </MotionConfig>
  );
}
