import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

interface SectionProps {
  id?: string;
  title?: string;
  kicker?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, kicker, className = "", children, dark = false }) => {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 md:py-28 px-4 md:px-8 ${dark ? 'bg-secondary text-white' : 'bg-paper text-slate-800'} ${className}`}
    >
      {dark && (
        <>
          <div className="absolute -top-32 -right-16 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[130px] pointer-events-none z-0" />
          <div className="grain-overlay absolute inset-0 opacity-60 pointer-events-none z-0" />
        </>
      )}
      <div className="relative z-10 max-w-6xl mx-auto">
        {title && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16 max-w-2xl"
          >
            {kicker && (
              <span className={`block font-mono text-xs tracking-[0.2em] uppercase mb-3 ${dark ? 'text-accent-soft' : 'text-accent'}`}>
                {kicker}
              </span>
            )}
            <h2 className={`text-3xl md:text-5xl font-bold font-display tracking-tight leading-[1.05] text-balance ${dark ? 'text-white' : 'text-primary'}`}>
              {title}
            </h2>
          </MotionDiv>
        )}
        {children}
      </div>
    </section>
  );
};
