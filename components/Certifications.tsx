import React, { useEffect, useState } from 'react';
import { Section } from './Section';
import { BADGE_IDS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLang } from '../i18n';

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t, certifications } = useLang();

  // Load Credly script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <Section id="certifications" kicker={t('certsKicker')} title={t('certsTitle')} dark>
      {/* Diplomas Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary border border-white/10 rounded-xl p-3 text-center hover:bg-raised transition-colors duration-150 cursor-pointer"
            onClick={() => handleImageClick(cert.imageUrl)}
          >
            <div className="h-28 mb-3 overflow-hidden rounded-lg bg-secondary flex items-center justify-center p-2">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain select-none"
                onContextMenu={handleContextMenu}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h4 className="text-sm font-medium text-[#eef0f5] leading-tight mb-1 select-none">{cert.title}</h4>
            <p className="text-xs text-[#7a8296] select-none">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>

      {/* Credly Badges */}
      <h3 className="text-xl font-medium text-center text-[#eef0f5] mb-8 font-display">{t('certsBadges')}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {BADGE_IDS.map((id, idx) => (
          <div
            key={idx}
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id={id}
            data-share-badge-host="https://www.credly.com"
            className="bg-white rounded-xl overflow-hidden"
          ></div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0d14]/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-[#a3a9b8] hover:text-[#eef0f5] rounded-lg focus:outline-none"
              aria-label="Close"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate Fullscreen"
              className="max-w-full max-h-full object-contain select-none rounded-lg"
              onClick={(e) => e.stopPropagation()}
              onContextMenu={handleContextMenu}
              onDragStart={(e) => e.preventDefault()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
