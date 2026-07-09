
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Download } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();

  const stars = React.useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 3 + 2.5,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div id="home" className="relative min-h-[100dvh] flex items-center bg-primary overflow-hidden">
      {/* Ambient teal glow, breathing gently, no purple */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <MotionDiv
          className="absolute top-[8%] right-[10%] w-[560px] h-[560px] bg-accent/20 rounded-full blur-[140px]"
          animate={reduce ? undefined : {
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Twinkling stars, subtle and premium, teal/white mix */}
        {!reduce && stars.map((star) => (
          <MotionDiv
            key={star.id}
            className={`absolute rounded-full ${star.id % 4 === 0 ? 'bg-accent-soft' : 'bg-white'}`}
            style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.6, 1.3, 0.6],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Fixed grain, decorative only, never on a scrolling container */}
      <div className="grain-overlay fixed inset-0 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center py-28 md:py-0">
        {/* Portrait: modest size, static ring, no spin, just a calm entrance */}
        <MotionDiv
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 mx-auto md:mx-0"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full ring-2 ring-accent/50 shadow-[0_0_40px_rgba(20,184,166,0.25)] overflow-hidden">
            <img
              src={PROFILE.photoUrl}
              alt={PROFILE.name}
              className="w-full h-full object-cover"
            />
          </div>
        </MotionDiv>

        {/* Text column */}
        <MotionDiv
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 text-center md:text-left"
        >
          <span className="block font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-accent-soft mb-4">
            Ingeniería &middot; Datos &middot; IA
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display tracking-tight leading-[1.05] text-balance">
            {PROFILE.name}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light mb-8 max-w-lg mx-auto md:mx-0">
            {PROFILE.title}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#about"
              className="px-8 py-3 bg-accent hover:bg-teal-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-accent/30"
            >
              Conóceme
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="assets/Curriculum_Adalberto_Rojas.pdf"
              target="_blank"
              className="px-8 py-3 bg-transparent border-2 border-white/80 hover:bg-white hover:text-primary text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Descargar CV
            </motion.a>
          </div>
        </MotionDiv>
      </div>

      {/* Scroll cue */}
      <MotionDiv
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent-soft to-transparent" />
      </MotionDiv>
    </div>
  );
};
