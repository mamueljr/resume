import React from 'react';
import { Section } from './Section';
import { WEB_PORTFOLIO } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const MotionA = motion.a as any;

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" title="Portafolio Web" className="bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {WEB_PORTFOLIO.map((project, index) => (
          <MotionA
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-accent" />
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
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
          </MotionA>
        ))}
      </div>
    </Section>
  );
};