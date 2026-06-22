import React from 'react';
import { Section } from './Section';
import { EDUCATIONS } from '../constants';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Formación Académica" className="bg-slate-50">
      <div className="relative border-l-4 border-accent ml-4 md:ml-12 space-y-12">
        {EDUCATIONS.map((edu, index) => (
          <MotionDiv 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Dot on timeline */}
            <div className={`absolute -left-[14px] top-1 w-6 h-6 rounded-full border-4 border-slate-50 ${edu.current ? 'bg-green-500' : 'bg-accent'}`}></div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <GraduationCap size={22} className="text-accent animate-pulse" />
                  {edu.degree}
                </h3>
                <span className="text-sm font-semibold px-3 py-1 bg-accent/15 text-accent rounded-full w-fit mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <h4 className="text-lg text-slate-600 font-medium mb-3">{edu.institution}</h4>
              {edu.description && (
                <p className="text-slate-500 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
};
