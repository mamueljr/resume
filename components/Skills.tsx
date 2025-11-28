import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const SkillGroup: React.FC<{ title: string; skills: typeof SKILLS }> = ({ title, skills }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-slate-700 border-b pb-2">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {skills.map((skill, idx) => (
        <div key={idx} className="mb-2">
          <div className="flex justify-between mb-1">
            <span className="font-semibold text-slate-700">{skill.name}</span>
            <span className="text-sm text-slate-500">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <MotionDiv 
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-accent h-2.5 rounded-full"
            ></MotionDiv>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const devSkills = SKILLS.filter(s => s.category === 'development');
  const dataSkills = SKILLS.filter(s => s.category === 'data');
  const hardwareSkills = SKILLS.filter(s => s.category === 'hardware');

  return (
    <Section id="skills" title="Habilidades Técnicas">
      <SkillGroup title="Desarrollo de Software" skills={devSkills} />
      <SkillGroup title="Ciencia de Datos & Análisis" skills={dataSkills} />
      <SkillGroup title="Infraestructura & Hardware" skills={hardwareSkills} />
      
      {/* Tools Pills */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-6 text-slate-700 border-b pb-2">Herramientas</h3>
        <div className="flex flex-wrap gap-3">
          {['Visual Studio Code', 'Git/GitHub', 'Jira', 'Postman', 'Docker', 'Tableau', 'PowerBI', 'Paquetería Office'].map((tool, i) => (
             <span key={i} className="px-4 py-2 bg-gray-100 text-slate-700 rounded-lg font-medium border hover:border-accent hover:text-accent transition-colors cursor-default">
               {tool}
             </span>
          ))}
        </div>
      </div>
    </Section>
  );
};