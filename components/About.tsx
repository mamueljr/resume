import React from 'react';
import { Section } from './Section';
import { PROFILE } from '../constants';
import { Code2, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const About: React.FC = () => {
  return (
    <Section id="about" kicker="Quién soy" title="Perfil Profesional">
      <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-600 max-w-3xl mb-14 text-pretty">
        {PROFILE.about}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {/* Featured tile: wide, dark, sets the anchor for the bento */}
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 bg-primary text-white p-8 md:p-10 rounded-3xl shadow-xl shadow-primary/20 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="p-4 bg-accent/20 rounded-2xl text-accent-soft w-fit shrink-0">
            <Code2 size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2 font-display">Desarrollo de Software</h4>
            <p className="text-slate-300 leading-relaxed max-w-xl">
              Más de una década diseñando sistemas a medida, automatizaciones avanzadas y plataformas web robustas.
            </p>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-white p-7 rounded-2xl border border-slate-200/80 hover:border-accent/40 shadow-sm hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
        >
          <div className="p-3 bg-accent/10 rounded-full text-accent w-fit mb-5">
            <Brain size={26} />
          </div>
          <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">Ciencia de Datos e IA</h4>
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
          className="bg-white p-7 rounded-2xl border border-slate-200/80 hover:border-accent/40 shadow-sm hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
        >
          <div className="p-3 bg-accent/10 rounded-full text-accent w-fit mb-5">
            <Users size={26} />
          </div>
          <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">Docencia Universitaria</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Profesor en asignaturas críticas como Big Data, DevOps, Ingeniería de Software y Bases de Datos.
          </p>
        </MotionDiv>
      </div>
    </Section>
  );
};