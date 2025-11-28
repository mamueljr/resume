
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Download } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Image using inline CSS for robust cover behavior */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('assets/teclado-min.jpg')` }}
      ></div>
      
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <MotionDiv
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden mx-auto">
            <img 
              src={PROFILE.photoUrl} 
              alt={PROFILE.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif shadow-sm">
            {PROFILE.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 shadow-sm">
            {PROFILE.title}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#about"
              className="px-8 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Conóceme
            </a>
            <a 
              href="assets/CURRICULUM.pdf" 
              target="_blank"
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2"
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
