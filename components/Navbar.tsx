import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Database, GraduationCap, Briefcase, Award, Home, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionNav = motion.nav as any;
const MotionDiv = motion.div as any;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#', icon: Home },
    { name: 'Perfil', href: '#about', icon: User },
    { name: 'Educación', href: '#education', icon: GraduationCap },
    { name: 'Experiencia', href: '#experience', icon: Briefcase },
    { name: 'Habilidades', href: '#skills', icon: Code },
    { name: 'Portafolio', href: '#portfolio', icon: Database },
    { name: 'Certificaciones', href: '#certifications', icon: Award },
  ];

  return (
    <>
      <MotionNav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 py-3 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#" className="text-xl font-bold text-white tracking-wider font-serif hover:text-accent transition-colors">
            ER<span className="text-accent font-sans">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </MotionNav>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 z-40 md:hidden overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                  >
                    <Icon size={20} className="text-accent" />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};
