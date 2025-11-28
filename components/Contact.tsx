import React from 'react';
import { SOCIALS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        
        <div className="flex justify-center gap-8 mb-12">
          {SOCIALS.map((social, idx) => {
             const Icon = social.icon;
             return (
              <a 
                key={idx} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group"
                aria-label={social.name}
              >
                <Icon size={24} className="text-gray-300 group-hover:text-white" />
              </a>
             )
          })}
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ESISCOM. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Desarrollado con React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};