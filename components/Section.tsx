import React from 'react';
import { motion } from 'framer-motion';

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
      className={`relative py-20 md:py-24 px-6 ${dark ? 'bg-secondary text-[#eef0f5]' : 'bg-paper text-[#111827]'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-2xl"
          >
            {kicker && (
              <span className={`block font-mono text-xs mb-3 ${dark ? 'text-accent-soft' : 'text-accent'}`}>
                {kicker}
              </span>
            )}
            <h2 className={`text-3xl md:text-4xl font-medium font-display tracking-[-0.02em] leading-[1.12] text-balance ${dark ? 'text-[#eef0f5]' : 'text-[#111827]'}`}>
              {title}
            </h2>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
