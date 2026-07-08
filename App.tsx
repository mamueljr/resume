import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { AIAssistant } from './components/AIAssistant';
import { ArrowUp } from 'lucide-react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollTop(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Certifications />
      <Contact />

      {/* AIAssistant floating chatbot */}
      <AIAssistant />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-8 p-3 bg-accent text-white rounded-full shadow-lg z-50 transition-all duration-300 hover:bg-teal-600 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;