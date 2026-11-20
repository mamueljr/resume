import React, { useState } from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../i18n';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'development' | 'data' | 'hardware'>('all');
  const { t } = useLang();

  const tabs = [
    { id: 'all', label: t('skillsTabAll') },
    { id: 'development', label: t('skillsTabDev') },
    { id: 'data', label: t('skillsTabData') },
    { id: 'hardware', label: t('skillsTabHardware') },
  ] as const;

  const filteredSkills = activeTab === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeTab);

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'development': return t('skillsTabDev');
      case 'data': return t('skillsTabData');
      case 'hardware': return t('skillsTabHardware');
      default: return '';
    }
  };

  return (
    <Section id="skills" kicker={t('skillsKicker')} title={t('skillsTitle')}>
      {/* Tab Filter Buttons */}
      <div className="flex flex-wrap justify-start gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`h-9 px-4 rounded-lg font-medium text-sm transition-colors duration-150 ${
              activeTab === tab.id
                ? 'bg-[#111827] text-white'
                : 'bg-white hover:bg-[#eceff4] text-[#4b5565] hover:text-[#111827] border border-[#111827]/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto min-h-[280px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 bg-white border border-[#111827]/10 rounded-xl"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-sm text-[#111827]">{skill.name}</span>
                <div className="flex items-center gap-2">
                  {activeTab === 'all' && (
                    <span className="text-xs px-2 py-0.5 bg-[#eceff4] text-[#4b5565] rounded font-normal">
                      {getCategoryTitle(skill.category)}
                    </span>
                  )}
                  <span className="text-xs font-medium text-accent font-mono tabular-nums">{skill.level}%</span>
                </div>
              </div>
              {/* Segmented meter: 10 blocks */}
              <div className="flex gap-1" role="img" aria-label={`${t('skillsLevel')}: ${skill.level}/100`}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-sm ${
                      i < Math.round(skill.level / 10) ? 'bg-accent' : 'bg-[#eceff4]'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Tools */}
      <div className="mt-14 max-w-6xl mx-auto border-t border-[#111827]/10 pt-8">
        <h3 className="text-lg font-medium mb-4 text-[#111827] font-display">{t('skillsTools')}</h3>
        <div className="flex flex-wrap gap-2">
          {['Visual Studio Code', 'Jupyter Notebook', 'Google Colab', 'RStudio', 'Git / GitHub', 'Docker', 'MySQL Workbench', 'DBeaver', 'Postman', 'Tableau', 'PowerBI', 'Jira / Confluence', 'Linux CLI / Bash', 'Windows Server', 'Microsip ERP', 'Anaconda'].map((tool, i) => (
             <span key={i} className="px-3 py-1.5 bg-white text-[#4b5565] text-xs font-mono rounded-md border border-[#111827]/10">
               {tool}
             </span>
          ))}
        </div>
      </div>
    </Section>
  );
};