import React, { useState } from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'development' | 'data' | 'hardware'>('all');

  const tabs = [
    { id: 'all', label: 'Todas' },
    { id: 'development', label: 'Desarrollo de Software' },
    { id: 'data', label: 'Ciencia de Datos & IA' },
    { id: 'hardware', label: 'Infraestructura & Hardware' },
  ] as const;

  const filteredSkills = activeTab === 'all' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeTab);

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'development': return 'Desarrollo de Software';
      case 'data': return 'Ciencia de Datos & IA';
      case 'hardware': return 'Infraestructura & Hardware';
      default: return '';
    }
  };

  return (
    <Section id="skills" title="Habilidades Técnicas">
      {/* Tab Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 relative ${
              activeTab === tab.id
                ? 'bg-accent text-white shadow-lg shadow-accent/25'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <MotionDiv 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto min-h-[300px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <MotionDiv
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-800">{skill.name}</span>
                <div className="flex items-center gap-2">
                  {activeTab === 'all' && (
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded font-medium">
                      {getCategoryTitle(skill.category)}
                    </span>
                  )}
                  <span className="text-sm font-bold text-accent">{skill.level}%</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <MotionDiv
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-accent h-2.5 rounded-full"
                />
              </div>
            </MotionDiv>
          ))}
        </AnimatePresence>
      </MotionDiv>
      
      {/* Tools Pills */}
      <div className="mt-16 max-w-6xl mx-auto border-t border-slate-200 pt-10">
        <h3 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Herramientas & Entornos</h3>
        <div className="flex flex-wrap gap-3">
          {['Visual Studio Code', 'Git/GitHub', 'Jira', 'Postman', 'Docker', 'Tableau', 'PowerBI', 'Paquetería Office'].map((tool, i) => (
             <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg font-medium border border-slate-200 hover:border-accent hover:text-accent transition-all duration-300 cursor-default shadow-sm">
               {tool}
             </span>
          ))}
        </div>
      </div>
    </Section>
  );
};