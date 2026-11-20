import React, { useState } from 'react';
import { Section } from './Section';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Globe, Eye } from 'lucide-react';
import { useLang } from '../i18n';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, portfolio } = useLang();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedProject(null);
    }
  };

  return (
    <Section id="portfolio" kicker={t('portfolioKicker')} title={t('portfolioTitle')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {portfolio.map((project, index) => {
          const featured = index === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedProject(project)}
              className={`group bg-white rounded-2xl overflow-hidden hover:border-[#111827]/25 transition-colors duration-150 cursor-pointer border border-[#111827]/10 flex flex-col ${
                featured ? 'md:col-span-2 md:grid md:grid-cols-[3fr_2fr]' : ''
              }`}
            >
              <div className={`relative overflow-hidden bg-secondary ${featured ? 'h-56 md:h-full md:min-h-[300px]' : 'h-56'}`}>
                <div className="absolute inset-0 bg-[#0b0d14]/35 group-hover:bg-[#0b0d14]/15 transition-colors duration-150 z-10 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-white text-[#111827] px-3.5 py-2 rounded-lg font-medium text-xs flex items-center gap-1.5 border border-[#111827]/10">
                    <Eye size={14} strokeWidth={1.5} /> {t('portfolioView')}
                  </span>
                </div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`p-6 flex flex-col flex-1 ${featured ? 'md:p-8 md:justify-center' : ''}`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-[#6b7487] tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {featured && (
                    <span className="font-mono text-xs text-accent">
                      {t('portfolioFeatured')}
                    </span>
                  )}
                </div>
                <h3 className={`font-medium text-[#111827] group-hover:text-accent transition-colors duration-150 mb-2 font-display ${featured ? 'text-2xl' : 'text-lg'}`}>
                  {project.title}
                </h3>
                <p className={`text-[#4b5565] mb-6 text-sm leading-relaxed ${featured ? '' : 'line-clamp-2'}`}>
                  {project.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${featured ? '' : 'mt-auto'}`}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono font-normal px-2 py-0.5 bg-[#eceff4] text-[#4b5565] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0b0d14]/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] border border-[#111827]/10"
            >
              {/* Image Column */}
              <div className="md:w-1/2 relative bg-secondary h-64 md:h-auto min-h-[240px]">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Column */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-[#111827] font-display">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-1.5 text-[#6b7487] hover:text-[#111827] hover:bg-[#eceff4] rounded-lg transition-colors duration-150"
                      aria-label={t('portfolioClose')}
                    >
                      <X size={18} strokeWidth={1.5} />
                    </button>
                  </div>

                  <p className="text-[#4b5565] text-sm leading-relaxed mb-6 whitespace-pre-line">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono font-normal px-2 py-0.5 bg-[#eceff4] text-[#4b5565] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#111827]/10">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-10 px-4 bg-[#111827] hover:bg-[#1f2937] text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors duration-150"
                    >
                      <Globe size={16} strokeWidth={1.5} />
                      {t('portfolioVisit')}
                      <ExternalLink size={14} strokeWidth={1.5} />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 h-10 px-4 bg-[#eceff4] hover:bg-[#e2e8f0] text-[#111827] text-sm font-medium rounded-lg transition-colors duration-150"
                  >
                    {t('portfolioClose')}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};