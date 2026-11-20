import React from 'react';
import { Section } from './Section';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';

export const Experience: React.FC = () => {
  const { t, experiences } = useLang();

  return (
    <Section id="experience" kicker={t('experienceKicker')} title={t('experienceTitle')} dark>
      <div className="max-w-4xl mx-auto divide-y divide-white/10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index, 5) * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="group py-6 md:px-4 md:-mx-4 rounded-xl hover:bg-white/[0.03] transition-colors duration-150 grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-3 md:gap-8"
          >
            <div className="flex md:flex-col items-center md:items-start gap-2">
              <span className="font-mono text-xs text-[#7a8296] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
              {exp.current && (
                <span className="text-xs font-mono text-[#4cc38a] bg-[#4cc38a]/10 px-2 py-0.5 rounded-md">
                  {t('experienceCurrent')}
                </span>
              )}
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1.5">
                <h3 className="text-lg font-medium text-[#eef0f5] flex items-center gap-2.5 font-display">
                  <Briefcase size={16} strokeWidth={1.5} className="text-[#7a8296] shrink-0" />
                  {exp.company}
                </h3>
                <span className="text-xs font-mono text-[#7a8296] tabular-nums">{exp.period}</span>
              </div>
              <h4 className="text-sm text-[#a3a9b8] font-medium mb-2">{exp.role}</h4>
              <p className="text-[#7a8296] leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};