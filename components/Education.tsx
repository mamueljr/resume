import React from 'react';
import { Section } from './Section';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';

const MotionDiv = motion.div as any;

export const Education: React.FC = () => {
  const { t, educations } = useLang();

  return (
    <Section id="education" kicker={t('educationKicker')} title={t('educationTitle')}>
      <div className="relative border-l-4 border-accent ml-4 md:ml-12 space-y-12">
        {educations.map((edu, index) => (
          <MotionDiv 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Dot on timeline */}
            <div className={`absolute -left-[14px] top-1 w-6 h-6 rounded-full border-4 border-paper ${edu.current ? 'bg-emerald-500' : 'bg-accent'}`}></div>

            <MotionDiv whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-accent/5 transition-shadow border border-slate-200/80">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 font-display">
                  <GraduationCap size={22} className="text-accent" />
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono font-semibold px-3 py-1 bg-accent/15 text-accent rounded-full w-fit mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <h4 className="text-lg text-slate-600 font-medium mb-3">{edu.institution}</h4>
              {edu.description && (
                <p className="text-slate-500 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </MotionDiv>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
};
