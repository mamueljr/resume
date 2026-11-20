import React from 'react';
import { SOCIALS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '../i18n';

export const Contact: React.FC = () => {
  const { t } = useLang();

  return (
    <footer id="contact" className="relative bg-primary text-[#eef0f5] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-10">
        <span className="block font-mono text-xs text-accent-soft mb-4">
          {t('contactKicker')}
        </span>

        <h2 className="font-display font-medium tracking-[-0.03em] leading-none text-[clamp(2.5rem,8vw,5.5rem)] mb-8 text-balance">
          {t('contactTitle')}<span className="text-accent-soft">.</span>
        </h2>

        <a
          href="mailto:mamueljr@gmail.com"
          className="group inline-flex items-center gap-3 text-xl md:text-2xl font-normal text-[#a3a9b8] hover:text-[#eef0f5] transition-colors duration-150"
        >
          <span className="border-b border-white/15 group-hover:border-accent-soft transition-colors duration-150 pb-1">
            mamueljr@gmail.com
          </span>
          <ArrowUpRight
            size={24}
            strokeWidth={1.5}
            className="text-accent-soft shrink-0"
          />
        </a>

        <div className="flex flex-wrap gap-3 mt-10">
          {SOCIALS.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 h-10 px-4 bg-secondary border border-white/10 rounded-lg hover:bg-raised transition-colors duration-150"
                aria-label={social.name}
              >
                <Icon size={16} strokeWidth={1.5} className="text-[#7a8296] group-hover:text-[#eef0f5] transition-colors duration-150" />
                <span className="text-sm font-normal text-[#a3a9b8] group-hover:text-[#eef0f5] transition-colors duration-150">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-2 font-mono text-xs text-[#7a8296]">
          <p>&copy; {new Date().getFullYear()} {t('contactRights')}</p>
          <p>React &middot; TypeScript &middot; Tailwind &middot; Gemini AI</p>
        </div>
      </div>
    </footer>
  );
};
