import React, { useState } from 'react';
import { Section } from './Section';
import { WEB_PORTFOLIO } from '../constants';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Globe, Eye } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedProject(null);
    }
  };

  return (
    <Section id="portfolio" title="Portafolio Web" className="bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {WEB_PORTFOLIO.map((project, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col cursor-pointer border border-slate-200/50"
          >
            <div className="relative h-56 overflow-hidden bg-slate-900">
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors z-10 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 text-slate-800 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1.5 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Eye size={16} /> Ver detalles
                </span>
              </div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-accent transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking content
              className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] border border-slate-200"
            >
              {/* Image Column */}
              <div className="md:w-1/2 relative bg-slate-900 h-64 md:h-auto min-h-[250px]">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Column */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-800">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                      aria-label="Cerrar modal"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-5 py-2.5 bg-accent hover:bg-blue-600 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-accent/20 transition-all text-center"
                    >
                      <Globe size={16} />
                      Visitar Sitio
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-colors text-center"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </MotionDiv>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};