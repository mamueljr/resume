
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
    <div className="relative min-h-[100dvh] flex items-center bg-primary overflow-hidden">
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
        {/* Portrait: modest size, animated gradient ring for a premium touch */}
        <MotionDiv
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 mx-auto md:mx-0"
        >
          <MotionDiv
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px]"
            style={{
              background: "conic-gradient(from 0deg, var(--color-accent), transparent 40%, var(--color-accent-soft), transparent 80%, var(--color-accent))",
            }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <MotionDiv
              className="w-full h-full rounded-full overflow-hidden bg-primary"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={PROFILE.photoUrl}
                alt={PROFILE.name}
                className="w-full h-full object-cover rounded-full border-2 border-primary"
              />
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>

        {/* Text column */}
        <MotionDiv
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight leading-[1.1]">
            {PROFILE.name}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light mb-8 max-w-lg mx-auto md:mx-0">
            {PROFILE.title}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#about"
              className="px-8 py-3 bg-accent hover:bg-teal-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-accent/30"
            >
              Conóceme
            </a>
            <a
              href="assets/Curriculum_Adalberto_Rojas.pdf"
              target="_blank"
              className="px-8 py-3 bg-transparent border-2 border-white/80 hover:bg-white hover:text-primary text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Descargar CV
            </a>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};
