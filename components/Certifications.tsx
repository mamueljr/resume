import React, { useEffect, useState } from 'react';
import { Section } from './Section';
import { CERTIFICATIONS, BADGE_IDS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <Section id="certifications" title="Certificaciones y Educación" dark>
      {/* Diplomas Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
        {CERTIFICATIONS.map((cert, idx) => (
          <MotionDiv
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-700 rounded-lg p-3 text-center hover:bg-slate-600 transition-colors cursor-pointer"
            onClick={() => handleImageClick(cert.imageUrl)}
          >
            <div className="h-32 mb-3 overflow-hidden rounded bg-slate-800 flex items-center justify-center">
              <img 
                src={cert.imageUrl} 
                alt={cert.title} 
                className="max-w-full max-h-full object-contain select-none" 
                onContextMenu={handleContextMenu}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h4 className="text-sm font-bold text-white leading-tight mb-1 select-none">{cert.title}</h4>
            <p className="text-xs text-gray-400 select-none">{cert.issuer}</p>
          </MotionDiv>
        ))}
      </div>

      {/* Credly Badges */}
      <h3 className="text-2xl font-bold text-center text-white mb-10">Credly Digital Badges</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {BADGE_IDS.map((id, idx) => (
          <div 
            key={idx}
            data-iframe-width="150" 
            data-iframe-height="270" 
            data-share-badge-id={id} 
            data-share-badge-host="https://www.credly.com"
            className="bg-white rounded-lg"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate Fullscreen"
              className="max-w-full max-h-full object-contain select-none shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              onContextMenu={handleContextMenu}
              onDragStart={(e) => e.preventDefault()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
