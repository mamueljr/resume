import React from 'react';
import { Section } from './Section';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experiencia Profesional" dark>
      <div className="relative border-l-4 border-accent ml-4 md:ml-12 space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <MotionDiv 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Dot on timeline */}
            <div className={`absolute -left-[14px] top-1 w-6 h-6 rounded-full border-4 border-secondary ${exp.current ? 'bg-green-500' : 'bg-accent'}`}></div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg shadow-xl hover:bg-slate-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase size={20} className="text-accent" />
                  {exp.company}
                </h3>
                <span className="text-sm font-semibold px-3 py-1 bg-accent/20 text-accent rounded-full w-fit mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg text-gray-300 font-medium mb-3">{exp.role}</h4>
              <p className="text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
};