import React from 'react';
import { SOCIALS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-primary text-white overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-[480px] h-[480px] bg-accent/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="grain-overlay absolute inset-0 opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 md:pt-28 pb-10">
        <span className="block font-mono text-xs tracking-[0.2em] uppercase text-accent-soft mb-5">
          ¿Un proyecto, una vacante, una colaboración?
        </span>

        <h2 className="font-display font-bold tracking-tight leading-none text-[clamp(3rem,10vw,7rem)] mb-10 text-balance">
          Hablemos<span className="text-accent">.</span>
        </h2>

        <a
          href="mailto:mamueljr@gmail.com"
          className="group inline-flex items-center gap-3 text-xl md:text-3xl font-light text-slate-300 hover:text-white transition-colors"
        >
          <span className="border-b border-slate-600 group-hover:border-accent transition-colors pb-1">
            mamueljr@gmail.com
          </span>
          <ArrowUpRight
            size={28}
            className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
          />
        </a>

        <div className="flex flex-wrap gap-3 mt-12">
          {SOCIALS.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-3 bg-secondary border border-white/10 rounded-xl hover:border-accent/60 hover:bg-accent/10 transition-all duration-300"
                aria-label={social.name}
              >
                <Icon size={18} className="text-slate-400 group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-2 font-mono text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Emmanuel Rojas &middot; ESISCOM</p>
          <p>React &middot; TypeScript &middot; Tailwind &middot; Gemini AI</p>
        </div>
      </div>
    </footer>
  );
};
