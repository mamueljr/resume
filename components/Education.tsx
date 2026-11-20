import React from 'react';
import { Section } from './Section';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';

export const Education: React.FC = () => {
  const { t, educations } = useLang();

  return (
    <Section id="education" kicker={t('educationKicker')} title={t('educationTitle')}>
      <div className="relative border-l-2 border-[#111827]/15 ml-3 md:ml-8 space-y-8">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-6 md:pl-10"
          >
            {/* Dot on timeline */}
            <div className={`absolute -left-2 top-6 w-3.5 h-3.5 rounded-full border-2 border-paper ${edu.current ? 'bg-[#16a34a]' : 'bg-accent'}`} />

            <div className="bg-white p-6 rounded-2xl border border-[#111827]/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-medium text-[#111827] flex items-center gap-2.5 font-display">
                  <GraduationCap size={18} strokeWidth={1.5} className="text-[#4b5565] shrink-0" />
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono font-normal px-2.5 py-1 bg-[#eceff4] text-[#4b5565] rounded-md w-fit">
                  {edu.period}
                </span>
              </div>
              <h4 className="text-sm text-[#4b5565] font-medium mb-2">{edu.institution}</h4>
              {edu.description && (
                <p className="text-sm text-[#6b7487] leading-relaxed">
                  {edu.description}
                </p>
              )}
              {edu.thesisTitle && edu.thesisUrl && (
                <a
                  href={edu.thesisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
                >
                  <span>{edu.thesisTitle}</span>
                  <ExternalLink size={12} strokeWidth={1.5} className="shrink-0" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
