import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { Code2, Database, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';

const TOOL_GROUPS = [
  {
    labelEs: 'Entornos & Datos',
    labelEn: 'Environments & Data',
    items: ['Visual Studio Code', 'Jupyter Notebook', 'Google Colab', 'RStudio', 'MySQL Workbench', 'DBeaver'],
  },
  {
    labelEs: 'Infraestructura & Operación',
    labelEn: 'Infrastructure & Ops',
    items: ['Docker', 'Postman', 'Linux CLI / Bash', 'Microsip ERP'],
  },
];

const DepthDots: React.FC<{ depth?: 1 | 2 | 3; dark?: boolean }> = ({ depth = 2, dark = false }) => (
  <span className="inline-flex items-center gap-1" aria-hidden="true">
    {[1, 2, 3].map((step) => (
      <span
        key={step}
        className={`w-1.5 h-1.5 rounded-full ${
          step <= depth
            ? dark
              ? 'bg-accent-soft'
              : 'bg-accent'
            : dark
            ? 'bg-white/15'
            : 'bg-[#111827]/15'
        }`}
      />
    ))}
  </span>
);

export const Skills: React.FC = () => {
  const { t, lang } = useLang();

  const domains = [
    {
      id: 'data' as const,
      index: '01',
      title: t('skillsTabData'),
      icon: Database,
      anchor: true,
    },
    {
      id: 'development' as const,
      index: '02',
      title: t('skillsTabDev'),
      icon: Code2,
      anchor: false,
    },
    {
      id: 'hardware' as const,
      index: '03',
      title: t('skillsTabHardware'),
      icon: Server,
      anchor: false,
    },
  ];

  return (
    <Section id="skills" kicker={t('skillsKicker')} title={t('skillsTitle')}>
      {/* Asymmetric Matrix: 1 dark anchor spanning 2 columns + 2 light cards below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {domains.map((domain, colIdx) => {
          const Icon = domain.icon;
          const items = SKILLS.filter((s) => s.category === domain.id);
          const isDark = domain.anchor;

          return (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIdx * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl p-6 md:p-7 flex flex-col border ${
                isDark
                  ? 'md:col-span-2 bg-primary text-[#eef0f5] border-white/10'
                  : 'bg-white text-[#111827] border-[#111827]/10'
              }`}
            >
              <div
                className={`flex items-center justify-between pb-4 mb-2 border-b ${
                  isDark ? 'border-white/10' : 'border-[#111827]/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isDark
                        ? 'bg-raised border border-white/10 text-accent-soft'
                        : 'bg-[#eceff4] text-[#4b5565]'
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-medium font-display">
                    {domain.title}
                  </h3>
                </div>
                <span
                  className={`font-mono text-xs tabular-nums ${
                    isDark ? 'text-[#7a8296]' : 'text-[#6b7487]'
                  }`}
                >
                  {domain.index}
                </span>
              </div>

              <ul
                className={
                  isDark
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-x-10 divide-y divide-white/10 md:divide-y-0'
                    : 'divide-y divide-[#111827]/8'
                }
              >
                {items.map((skill) => {
                  const ctx = lang === 'en' ? skill.contextEn || skill.context : skill.context;
                  return (
                    <li
                      key={skill.name}
                      className={`py-3 flex items-center justify-between gap-4 ${
                        isDark ? 'md:border-b md:border-white/10' : ''
                      }`}
                    >
                      <span className="text-sm font-medium flex items-center gap-2">
                        {skill.featured && (
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isDark ? 'bg-accent-soft' : 'bg-accent'
                            }`}
                          />
                        )}
                        <span
                          className={
                            skill.featured
                              ? isDark
                                ? 'text-white'
                                : 'text-[#111827]'
                              : isDark
                              ? 'text-[#d4d8e2]'
                              : 'text-[#111827]'
                          }
                        >
                          {skill.name}
                        </span>
                      </span>

                      <div className="flex items-center gap-3 shrink-0">
                        {ctx && (
                          <span
                            className={`font-mono text-xs text-right ${
                              isDark ? 'text-[#7a8296]' : 'text-[#6b7487]'
                            }`}
                          >
                            {ctx}
                          </span>
                        )}
                        <DepthDots depth={skill.depth} dark={isDark} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Tools in structured 2-column bar */}
      <div className="mt-6 max-w-6xl mx-auto bg-white border border-[#111827]/10 rounded-2xl p-6">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#111827]/10">
          <h3 className="text-base font-medium text-[#111827] font-display">{t('skillsTools')}</h3>
          <span className="font-mono text-xs text-[#6b7487] tabular-nums">04</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOOL_GROUPS.map((group) => (
            <div key={group.labelEn}>
              <p className="font-mono text-xs text-[#6b7487] mb-3">
                {lang === 'en' ? group.labelEn : group.labelEs}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 bg-[#eceff4] text-[#4b5565] text-xs font-mono rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};