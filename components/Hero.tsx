
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Download } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Hero: React.FC = () => {
  const stars = React.useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Image using inline CSS for robust cover behavior */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('assets/teclado-min.jpg')` }}
      ></div>
      
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Animated Light Effects */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <MotionDiv
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <MotionDiv
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <MotionDiv
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px]"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Twinkling Stars */}
        {stars.map((star) => (
          <MotionDiv
            key={star.id}
            className="absolute bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
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
              href="assets/CURRICULUM ER.pdf" 
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
