import React, { useEffect, useState } from 'react';
import { motion, animate, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLang, UIKey } from '../i18n';

const MotionDiv = motion.div as any;

const STATS: { value: number; suffix: string; pad: number; labelKey: UIKey }[] = [
  { value: 15, suffix: '+', pad: 0, labelKey: 'statYears' },
  { value: 3, suffix: '', pad: 2, labelKey: 'statUniversities' },
  { value: 11, suffix: '', pad: 0, labelKey: 'statCerts' },
];

const CountUp: React.FC<{ value: number; pad: number; suffix: string; reduce: boolean }> = ({ value, pad, suffix, reduce }) => {
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v: number) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, reduce]);

  return (
    <>
      {String(display).padStart(pad, '0')}
      {suffix}
    </>
  );
};

const STACK = [
  'Python', 'Machine Learning', 'React', 'TypeScript', 'SQL', 'Docker',
  'TensorFlow', 'Big Data', 'DevOps', 'APIs de IA', 'Ciencia de Datos', 'PHP', 'R',
];

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const { t, profile } = useLang();

  return (
    <div id="home" className="relative min-h-[100dvh] flex flex-col bg-primary overflow-hidden">
      {/* Backdrop: blueprint grid + breathing teal glow */}
      <div className="bg-grid absolute inset-0 pointer-events-none z-0" />
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <MotionDiv
          className="absolute top-[8%] right-[6%] w-[560px] h-[560px] bg-accent/15 rounded-full blur-[140px]"
          animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[120px]" />
      </div>
      <div className="grain-overlay fixed inset-0 z-0 pointer-events-none" />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center max-w-6xl w-full mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-14 md:gap-10 items-center w-full">
          {/* Text column */}
          <MotionDiv
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="font-mono text-xs md:text-sm text-accent-soft tracking-[0.18em] uppercase mb-6 flex items-center justify-center md:justify-start gap-3">
              <span className="hidden md:inline-block w-8 h-px bg-accent-soft/60" />
              {t('heroEyebrow')}
            </p>

            <h1 className="font-display font-bold tracking-tight leading-[0.95] text-white mb-6">
              <span className="block text-[clamp(2.6rem,6.5vw,4.9rem)]">Adalberto</span>
              <span className="block text-[clamp(2.6rem,6.5vw,4.9rem)]">Emmanuel</span>
              <span className="block text-[clamp(2.6rem,6.5vw,4.9rem)] text-outline">Rojas</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light max-w-md mx-auto md:mx-0 mb-10 text-pretty">
              {profile.title}. {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="#about"
                className="px-8 py-3 bg-accent hover:bg-teal-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-accent/30"
              >
                {t('heroCtaAbout')}
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="assets/Curriculum_Adalberto_Rojas.pdf"
                target="_blank"
                className="px-8 py-3 bg-transparent border-2 border-white/70 hover:bg-white hover:text-primary text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2"
              >
                <Download size={20} />
                {t('heroCtaCV')}
              </motion.a>
            </div>
          </MotionDiv>

          {/* Portrait card */}
          <MotionDiv
            initial={{ opacity: 0, y: 24, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 relative w-56 sm:w-64 md:w-full max-w-[19rem] mx-auto md:justify-self-end"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-secondary shadow-2xl shadow-black/50">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                fetchPriority="high"
                decoding="async"
                width={304}
                height={380}
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-4 pt-12">
                <p className="font-mono text-[11px] text-accent-soft tracking-wider">
                  {t('heroCardCredential')}
                </p>
                <p className="font-mono text-[11px] text-slate-400 tracking-wider mt-1">
                  {t('heroCardLocation')}
                </p>
              </div>
            </div>
            {/* Corner accent, like a technical drawing callout */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent rounded-tr-3xl pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl pointer-events-none" />
          </MotionDiv>
        </div>
      </div>

      {/* Stats bar */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-3 gap-4">
          {STATS.map((stat) => (
            <div key={stat.labelKey} className="text-center md:text-left md:flex md:items-baseline md:gap-3">
              <span className="block font-display font-bold text-2xl md:text-3xl text-white tabular-nums">
                <CountUp value={stat.value} pad={stat.pad} suffix={stat.suffix} reduce={!!reduce} />
              </span>
              <span className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] text-slate-500 mt-1 md:mt-0">
                {t(stat.labelKey)}
              </span>
            </div>
          ))}
        </div>
      </MotionDiv>

      {/* Tech-stack marquee */}
      <div className="relative z-10 border-t border-white/10 overflow-hidden py-3.5">
        <div className="flex w-max animate-marquee">
          {[...STACK, ...STACK].map((item, i) => (
            <span
              key={i}
              className="flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap"
            >
              <span className="px-5">{item}</span>
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
