
import { ExperienceItem, Skill, Project, Certification, SocialLink } from './types';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const PROFILE = {
  name: "Ing. Adalberto Emmanuel Rojas",
  title: "Ingeniero en Computación & Data Specialist",
  about: "Ingeniero en Computación con amplia experiencia en desarrollo de software e implementación de soluciones basadas en ciencia de datos e inteligencia artificial. Maestría en Ingeniería en Computación (en proceso de titulación), con enfoque en machine learning aplicado. Más de una década de experiencia como docente universitario, combinando la teoría con la práctica en proyectos reales de análisis de datos, automatización y soporte tecnológico.",
  photoUrl: "assets/18875.jpg", 
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Universidad Tecmilenio",
    role: "Profesor de Tiempo Parcial",
    period: "Junio 2024 - Actualidad",
    description: "Impartiendo materias como: Ingeniería de Software, Bases de Datos, DevOps y Big Data. Miembro del Proyecto Maestro Insignia.",
    current: true
  },
  {
    company: "Facultad de Ciencias de la Cultura Física UACH",
    role: "Profesor de Tecnologías de Información",
    period: "2012 - Actualidad",
    description: "Profesor a medio tiempo en Tecnologías de Información y Cultura Digital.",
    current: true
  },
  {
    company: "Facultad de Ciencias de la Cultura Física - UACH",
    role: "Jefe de Unidad de Sistemas",
    period: "2012 - 2024",
    description: "Encargado del desarrollo de software a medida, soporte técnico integral, gestión de sistemas de videovigilancia e implementación de sistemas de control de acceso."
  },
  {
    company: "UNIDEP",
    role: "Profesor de Tecnologías de Información",
    period: "2021",
    description: "Reestructuración del programa de estudios, incorporación de temas tecnológicos actuales y desarrollo de proyectos prácticos."
  },
  {
    company: "Grupo Cimarron Chihuahua",
    role: "Ingeniero de Soporte Técnico",
    period: "2018 - 2020",
    description: "Planificación e instalación de infraestructuras de redes y videovigilancia. Soporte Microsip y desarrollo de herramientas de gestión."
  },
  {
    company: "COBACH PLANTEL 8",
    role: "Maestro de Matemáticas",
    period: "2017",
    description: "Maestro de Matemáticas 3 y Geometría Analítica."
  },
  {
    company: "Centro Infantil Montessori",
    role: "Titular de Computación",
    period: "2008 - 2019",
    description: "Diseño e implementación de currículo adaptativo para preescolar, primaria y secundaria."
  },
  {
    company: "XNET",
    role: "Ingeniero de Soporte Técnico",
    period: "2009 - 2012",
    description: "Liderazgo en planificación e instalación de redes, migración de sitios web y desarrollo de software."
  }
];

export const SKILLS: Skill[] = [
  // Development
  { name: "HTML5", level: 95, category: "development" },
  { name: "CSS", level: 85, category: "development" },
  { name: "JavaScript / TypeScript", level: 80, category: "development" },
  { name: "PHP", level: 65, category: "development" },
  { name: "Node.js", level: 70, category: "development" },
  { name: "Git", level: 75, category: "development" },
  
  // Data
  { name: "Python", level: 85, category: "data" },
  { name: "R", level: 70, category: "data" },
  { name: "Excel / Google Sheets", level: 95, category: "data" },
  { name: "SQL", level: 85, category: "data" },

  // Hardware/Support
  { name: "Linux / Windows / Mac OS", level: 95, category: "hardware" },
  { name: "Cableado Estructurado", level: 85, category: "hardware" },
  { name: "Videovigilancia", level: 80, category: "hardware" },
  { name: "Telefonía IP", level: 65, category: "hardware" },
];

export const WEB_PORTFOLIO: Project[] = [
  {
    title: "Doctorado FCCF UACH",
    description: "Plataforma web para el programa de investigación educativa.",
    link: "https://investigacioneducativafccf.net/met_avanzada/v2/",
    imageUrl: "assets/web-doctorado.jpg",
    tags: ["Web", "Academic", "Portal"]
  },
  {
    title: "ESISCOM",
    description: "Sitio web corporativo para servicios de cómputo.",
    link: "https://mamueljr.github.io/esiscom/",
    imageUrl: "assets/web-esiscom.jpg",
    tags: ["Services", "Landing Page"]
  },
  {
    title: "Calculadora de Calificación",
    description: "Herramienta para estudiantes de la FCCF para proyectar calificaciones.",
    link: "https://mamueljr.github.io/que-necesito-para-pasar/",
    imageUrl: "assets/web-calc-fccf.jpg",
    tags: ["Tool", "Utility", "Education"]
  },
  {
    title: "Calculadora Promedio UACH",
    description: "Aplicación para el cálculo de promedio ponderado universitario.",
    link: "https://mamueljr.github.io/calcula-promedio-uach/",
    imageUrl: "assets/web-calc-uach.jpg",
    tags: ["Tool", "Utility", "React"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Diplomado de Inglés",
    issuer: "Facultad de Filosofía y Letras UACH",
    imageUrl: "assets/ingles.png"
  },
  {
    title: "Cableado Estructurado",
    issuer: "CONDUNET",
    imageUrl: "assets/condunet.png"
  },
  {
    title: "Seguridad Informática HAURI",
    issuer: "HAURI Antivirus",
    imageUrl: "assets/hauri.png"
  },
  {
    title: "Java Intermedio",
    issuer: "Museo Semilla",
    imageUrl: "assets/java.png"
  },
  {
    title: "Seguridad Informática",
    issuer: "UACH",
    imageUrl: "assets/seguridad_informatica.png"
  },
  {
    title: "Constancia Semana Investigación",
    issuer: "Secretaría de Posgrado FCCF",
    imageUrl: "assets/semana_investigacion20.png"
  }
];

// Badge IDs from Credly
export const BADGE_IDS = [
  "5a1e5fce-3fdf-4003-b298-815c7eeb7754",
  "f8bd63a4-f641-4c16-b9c1-16f3f2259e89",
  "c6880e13-40cd-4ef0-bb95-fe67b6c6e577",
  "246910c7-9012-42aa-ac6d-6753f545f5b2",
  "065a4912-6909-4e00-9427-82048d62a974"
];

export const SOCIALS = [
  { name: "Email", url: "mailto:mamueljr@gmail.com", icon: Mail },
  { name: "GitHub", url: "https://github.com/mamueljr", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/adalberto-emmanuel-rojas/", icon: Linkedin },
  { name: "WhatsApp", url: "https://wa.me/526142541066", icon: Phone },
];
