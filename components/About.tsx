import React from 'react';
import { Section } from './Section';
import { Code2, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';

export const About: React.FC = () => {
  const { t, profile } = useLang();

  return (
    <Section id="about" kicker={t('aboutKicker')} title={t('aboutTitle')}>
      <p className="text-lg md:text-xl font-normal leading-relaxed text-[#4b5565] max-w-3xl mb-12 text-pretty">
        {profile.about}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Featured tile: wide, dark, sets the anchor */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 bg-primary text-[#eef0f5] p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="w-11 h-11 bg-raised border border-white/10 rounded-xl text-accent-soft flex items-center justify-center shrink-0">
            <Code2 size={18} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1.5 font-display">{t('aboutCard1Title')}</h4>
            <p className="text-[#a3a9b8] text-sm leading-relaxed max-w-xl">{t('aboutCard1Text')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-6 rounded-2xl border border-[#111827]/10"
        >
          <div className="w-10 h-10 bg-[#eceff4] rounded-xl text-[#4b5565] flex items-center justify-center mb-4">
            <Brain size={18} strokeWidth={1.5} />
          </div>
          <h4 className="text-lg font-medium text-[#111827] mb-1.5 font-display">{t('aboutCard2Title')}</h4>
          <p className="text-[#4b5565] text-sm leading-relaxed">{t('aboutCard2Text')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-6 rounded-2xl border border-[#111827]/10"
        >
          <div className="w-10 h-10 bg-[#eceff4] rounded-xl text-[#4b5565] flex items-center justify-center mb-4">
            <Users size={18} strokeWidth={1.5} />
          </div>
          <h4 className="text-lg font-medium text-[#111827] mb-1.5 font-display">{t('aboutCard3Title')}</h4>
          <p className="text-[#4b5565] text-sm leading-relaxed">{t('aboutCard3Text')}</p>
        </motion.div>
      </div>
    </Section>
  );
};
