import React, { useEffect, useState } from 'react';
import { motion, animate, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLang, UIKey } from '../i18n';

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS: { value: number; suffix: string; labelKey: UIKey }[] = [
  { value: 15, suffix: '+', labelKey: 'statYears' },
  { value: 3, suffix: '', labelKey: 'statUniversities' },
  { value: 12, suffix: '', labelKey: 'statCerts' },
];

const CountUp: React.FC<{ value: number; suffix: string; reduce: boolean }> = ({ value, suffix, reduce }) => {
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.2,
      delay: 0.2,
      ease: EASE,
      onUpdate: (v: number) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, reduce]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
};

const STACK = [
  'Python', 'Machine Learning', 'React', 'TypeScript', 'SQL',
  'Docker', 'TensorFlow', 'CI/CD', 'PHP',
];

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const { t, lang, profile } = useLang();

  const cvHref = lang === 'es' ? 'assets/cvSP.pdf' : 'assets/cvEN.pdf';
  const cvFilename =
    lang === 'es'
      ? 'CV_Adalberto_Emmanuel_Rojas_ES.pdf'
      : 'CV_Adalberto_Emmanuel_Rojas_EN.pdf';

  return (
    <div id="home" className="relative min-h-[100dvh] flex flex-col bg-primary overflow-hidden">
      {/* Subtle engineering grid */}
      <div className="bg-grid absolute inset-0 pointer-events-none z-0" />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center max-w-6xl w-full mx-auto px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-12 items-center w-full">
          {/* Text column */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="font-mono text-xs md:text-sm text-accent-soft mb-6 flex items-center justify-center md:justify-start gap-3">
              <span className="hidden md:inline-block w-8 h-px bg-accent-soft/50" />
              {t('heroEyebrow')}
            </p>

            <h1 className="font-display font-medium tracking-[-0.03em] leading-[1.02] text-[#eef0f5] mb-6">
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)]">Adalberto</span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)]">Emmanuel</span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-accent-soft">Rojas</span>
            </h1>

            <p className="text-lg md:text-xl text-[#a3a9b8] font-normal max-w-md mx-auto md:mx-0 mb-8 text-pretty leading-relaxed">
              {profile.title}. {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#about"
                className="h-12 px-6 bg-[#eef0f5] hover:bg-white text-primary font-medium text-sm rounded-lg transition-colors duration-150 inline-flex items-center justify-center"
              >
                {t('heroCtaAbout')}
              </a>
              <a
                href={cvHref}
                download={cvFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 bg-raised hover:bg-white/10 border border-white/10 text-[#eef0f5] font-medium text-sm rounded-lg transition-colors duration-150 inline-flex items-center justify-center gap-2"
              >
                <Download size={16} strokeWidth={1.5} className="text-[#a3a9b8]" />
                {t('heroCtaCV')}
              </a>
            </div>
          </div>

          {/* Portrait card */}
          <div className="order-1 md:order-2 relative w-56 sm:w-64 md:w-full max-w-[19rem] mx-auto md:justify-self-end">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-secondary">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                fetchPriority="high"
                decoding="async"
                width={304}
                height={380}
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="inset-x-0 bottom-0 bg-secondary/95 border-t border-white/10 p-4">
                <p className="font-mono text-xs text-accent-soft">
                  {t('heroCardCredential')}
                </p>
                <p className="font-mono text-xs text-[#7a8296] mt-1">
                  {t('heroCardLocation')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-3 gap-4">
          {STATS.map((stat) => (
            <div key={stat.labelKey} className="text-center md:text-left md:flex md:items-baseline md:gap-3">
              <span className="block font-display font-medium text-2xl md:text-3xl text-[#eef0f5] tabular-nums">
                <CountUp value={stat.value} suffix={stat.suffix} reduce={!!reduce} />
              </span>
              <span className="block font-mono text-xs text-[#7a8296] mt-1 md:mt-0">
                {t(stat.labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech-stack strip */}
      <div className="relative z-10 border-t border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-6 md:pr-44 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 font-mono text-xs text-[#7a8296]">
          {STACK.map((item, i) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {i < STACK.length - 1 && <span className="text-accent" aria-hidden="true">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
