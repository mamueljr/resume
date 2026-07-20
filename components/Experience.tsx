import React from 'react';
import { Section } from './Section';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';

const MotionDiv = motion.div as any;

export const Experience: React.FC = () => {
  const { t, experiences } = useLang();

  return (
    <Section id="experience" kicker={t('experienceKicker')} title={t('experienceTitle')} dark>
      <div className="max-w-4xl mx-auto divide-y divide-white/10">
        {experiences.map((exp, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 4 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group py-8 md:px-5 md:-mx-5 rounded-2xl hover:bg-white/[0.03] transition-colors duration-300 grid grid-cols-1 md:grid-cols-[3rem_1fr] gap-3 md:gap-8"
          >
            <div className="flex md:flex-col items-center md:items-start gap-3">
              <span className="font-mono text-sm text-slate-500 group-hover:text-accent transition-colors">{String(index + 1).padStart(2, '0')}</span>
              {exp.current && (
                <span className="text-[10px] font-mono uppercase tracking-wide text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  {t('experienceCurrent')}
                </span>
              )}
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-display">
                  <Briefcase size={18} className="text-accent shrink-0" />
                  {exp.company}
                </h3>
                <span className="text-xs font-mono text-slate-400">{exp.period}</span>
              </div>
              <h4 className="text-base text-slate-300 font-medium mb-3">{exp.role}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
};