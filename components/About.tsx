import React from 'react';
import { Section } from './Section';
import { PROFILE } from '../constants';
import { Code2, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-display">Perfil Profesional</h3>
        <p className="text-lg md:text-xl leading-relaxed text-slate-600">
          {PROFILE.about}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Same footprint for all three; the first pops through color, not size */}
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary text-white p-7 rounded-2xl shadow-md"
        >
          <div className="p-3 bg-accent/20 rounded-full text-accent-soft w-fit mb-5">
            <Code2 size={26} />
          </div>
          <h4 className="text-lg font-bold mb-2 font-display">Desarrollo de Software</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            Más de una década diseñando sistemas a medida, automatizaciones avanzadas y plataformas web robustas.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-accent/30 transition-colors duration-300"
        >
          <div className="p-3 bg-accent/10 rounded-full text-accent w-fit mb-5">
            <Brain size={26} />
          </div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">Ciencia de Datos e IA</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Análisis predictivo, modelos de Machine Learning e integración práctica de APIs de Inteligencia Artificial.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-accent/30 transition-colors duration-300"
        >
          <div className="p-3 bg-accent/10 rounded-full text-accent w-fit mb-5">
            <Users size={26} />
          </div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">Docencia Universitaria</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Profesor en asignaturas críticas como Big Data, DevOps, Ingeniería de Software y Bases de Datos.
          </p>
        </MotionDiv>
      </div>
    </Section>
  );
};