import React, { useState } from 'react';
import { Menu, X, Code, Database, GraduationCap, Briefcase, Award, Home, User, Mail } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLang, Lang } from '../i18n';

const MotionNav = motion.nav as any;
const MotionDiv = motion.div as any;

const LangToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex items-center gap-0.5 font-mono text-xs border border-white/15 rounded-full p-0.5 ${className}`}>
      {(['es', 'en'] as Lang[]).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors ${
            lang === code ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLang();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: t('navHome'), href: '#home', id: 'home', icon: Home },
    { name: t('navAbout'), href: '#about', id: 'about', icon: User },
    { name: t('navEducation'), href: '#education', id: 'education', icon: GraduationCap },
    { name: t('navExperience'), href: '#experience', id: 'experience', icon: Briefcase },
    { name: t('navSkills'), href: '#skills', id: 'skills', icon: Code },
    { name: t('navPortfolio'), href: '#portfolio', id: 'portfolio', icon: Database },
    { name: t('navCertifications'), href: '#certifications', id: 'certifications', icon: Award },
    { name: t('navContact'), href: '#contact', id: 'contact', icon: Mail },
  ];

  React.useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MotionNav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#home" className="text-xl font-bold text-white tracking-wider font-display hover:text-accent transition-colors">
            ER<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={idx}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-accent after:transition-transform after:duration-300 ${
                    isActive ? 'text-white after:scale-x-100' : 'text-gray-300 hover:text-white after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <LangToggle />
          </div>

          {/* Mobile: language toggle + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </MotionNav>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 bg-primary/95 backdrop-blur-lg border-b border-white/10 z-40 md:hidden overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-3 text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
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
