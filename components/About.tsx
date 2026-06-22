import React from 'react';
import { Section } from './Section';
import { PROFILE } from '../constants';
import { Code2, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const About: React.FC = () => {
  const cards = [
    {
      icon: Code2,
      title: "Desarrollo de Software",
      description: "Más de una década diseñando sistemas a medida, automatizaciones avanzadas y plataformas web robustas utilizando frameworks modernos.",
    },
    {
      icon: Brain,
      title: "Ciencia de Datos e IA",
      description: "Especializado en análisis predictivo, modelos de Machine Learning y la integración práctica de APIs de Inteligencia Artificial.",
    },
    {
      icon: Users,
      title: "Docencia Universitaria",
      description: "Profesor universitario en asignaturas críticas como Big Data, DevOps, Ingeniería de Software y Bases de Datos.",
    },
  ];

  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Perfil Profesional</h3>
        <p className="text-lg md:text-xl leading-relaxed text-slate-600">
          {PROFILE.about}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-accent/10 rounded-full text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
            </MotionDiv>
          );
        })}
      </div>
    </Section>
  );
};