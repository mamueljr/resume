import React, { useState } from 'react';
import { Menu, X, Code, Database, GraduationCap, Briefcase, Award, Home, User, Mail } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLang, Lang } from '../i18n';

const LangToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex items-center gap-0.5 font-mono text-xs border border-white/10 rounded-lg p-0.5 bg-secondary ${className}`}>
      {(['es', 'en'] as Lang[]).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 rounded-md transition-colors duration-150 ${
            lang === code ? 'bg-raised text-[#eef0f5]' : 'text-[#7a8296] hover:text-[#eef0f5]'
          }`}
        >
          {code.toUpperCase()}
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
    setIsScrolled(latest > 40);
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-colors duration-200 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl w-full mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#home" className="text-lg font-medium text-[#eef0f5] font-display hover:text-accent-soft transition-colors duration-150">
            ER<span className="text-accent-soft">.</span>
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
                  className={`text-sm font-normal relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-soft after:transition-transform after:duration-150 ${
                    isActive ? 'text-[#eef0f5] after:scale-x-100' : 'text-[#a3a9b8] hover:text-[#eef0f5] after:scale-x-0 hover:after:scale-x-100'
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
              className="p-2 text-[#a3a9b8] hover:text-[#eef0f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg transition-colors duration-150"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 bg-primary border-b border-white/10 z-40 md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-3 text-sm font-normal h-10 px-3 rounded-lg transition-colors duration-150 ${
                      isActive ? 'text-[#eef0f5] bg-raised' : 'text-[#a3a9b8] hover:text-[#eef0f5] hover:bg-secondary'
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.5} className="text-[#7a8296] shrink-0" />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
