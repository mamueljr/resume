import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

interface SectionProps {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 md:px-8 ${dark ? 'bg-secondary text-white' : 'bg-white text-slate-800'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className={`text-3xl md:text-4xl font-bold uppercase tracking-wider ${dark ? 'text-white' : 'text-primary'}`}>
              {title}
            </h2>
            <div className={`h-1 w-20 mx-auto mt-4 ${dark ? 'bg-accent' : 'bg-accent'}`}></div>
          </MotionDiv>
        )}
        {children}
      </div>
    </section>
  );
};