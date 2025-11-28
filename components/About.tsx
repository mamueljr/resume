import React from 'react';
import { Section } from './Section';
import { PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Perfil Profesional</h3>
        <p className="text-lg md:text-xl leading-relaxed text-slate-600">
          {PROFILE.about}
        </p>
      </div>
    </Section>
  );
};