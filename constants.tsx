import {
  ExperienceItem,
  EducationItem,
  Skill,
  Project,
  Certification,
  SocialLink,
} from "./types";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const PROFILE = {
  name: "Ing. Adalberto Emmanuel Rojas",
  title: "Ingeniero en Computación & Data Specialist",
  about:
    "Ingeniero en Computación con amplia experiencia en desarrollo de software e implementación de soluciones basadas en ciencia de datos e inteligencia artificial. Maestría en Ingeniería en Computación (en proceso de titulación), con enfoque en machine learning aplicado. Más de una década de experiencia como docente universitario, combinando la teoría con la práctica en proyectos reales de análisis de datos, automatización y soporte tecnológico.",
  photoUrl: "assets/18875.jpg",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Universidad Tecmilenio",
    role: "Profesor de Tiempo Parcial",
    period: "Junio 2024 - Actualidad",
    description:
      "Docente universitario enfocado en guiar a los alumnos en el diseño e implementación de proyectos de software complejos utilizando arquitecturas en la nube, metodologías ágiles (Scrum), integración continua (CI/CD) y análisis de grandes volúmenes de datos (Big Data). Integrante activo del Proyecto Maestro Insignia.",
    current: true,
  },
  {
    company: "Facultad de Ciencias de la Cultura Física UACH",
    role: "Profesor de Tecnologías de Información",
    period: "2012 - Actualidad",
    description:
      "Profesor de medio tiempo impartiendo materias de Tecnologías de Información y Cultura Digital, integrando metodologías de aprendizaje basado en proyectos y el uso de herramientas tecnológicas modernas para el desarrollo académico.",
    current: true,
  },
  {
    company: "Facultad de Ciencias de la Cultura Física - UACH",
    role: "Jefe de Unidad de Sistemas",
    period: "2012 - 2024",
    description:
      "Lideré el diseño, desarrollo e implementación de sistemas web institucionales a la medida utilizando PHP, MySQL y arquitecturas modernas de red. Responsable del soporte técnico integral, administración de servidores locales, seguridad informática y sistemas de videovigilancia y control de accesos IP para toda la facultad.",
  },
  {
    company: "UNIDEP",
    role: "Profesor de Tecnologías de Información",
    period: "2021",
    description:
      "Reestructuración del programa de estudios, incorporación de temas tecnológicos actuales y desarrollo de proyectos prácticos orientados a bases de datos y desarrollo web.",
  },
  {
    company: "Grupo Cimarron Chihuahua",
    role: "Ingeniero de Soporte Técnico",
    period: "2018 - 2020",
    description:
      "Planificación e instalación de infraestructuras de redes cableadas/inalámbricas y videovigilancia corporativa. Soporte del ERP Microsip y desarrollo de herramientas de automatización y gestión interna.",
  },
  {
    company: "COBACH PLANTEL 8",
    role: "Maestro de Matemáticas",
    period: "2017",
    description: "Impartición de cátedra para Matemáticas 3 y Geometría Analítica.",
  },
  {
    company: "Centro Infantil Montessori",
    role: "Titular de Computación",
    period: "2008 - 2019",
    description:
      "Diseño e implementación de currículo tecnológico adaptativo enfocado en cultura digital, programación básica y robótica para preescolar, primaria y secundaria.",
  },
  {
    company: "XNET",
    role: "Ingeniero de Soporte Técnico",
    period: "2009 - 2012",
    description:
      "Liderazgo en planificación e instalación de redes, administración y migración de sitios web de clientes y desarrollo de software a medida.",
  },
];

export const SKILLS: Skill[] = [
  // Development
  { name: "HTML5 / CSS3", level: 95, category: "development" },
  { name: "JavaScript / TypeScript", level: 80, category: "development" },
  { name: "PHP", level: 75, category: "development" },
  { name: "Node.js & React", level: 75, category: "development" },
  { name: "Docker & CI/CD", level: 70, category: "development" },
  { name: "Git & GitHub", level: 85, category: "development" },

  // Data
  { name: "Python", level: 85, category: "data" },
  { name: "R", level: 70, category: "data" },
  { name: "SQL (MySQL / PostgreSQL)", level: 85, category: "data" },
  { name: "Pandas & NumPy", level: 85, category: "data" },
  { name: "Scikit-Learn & TensorFlow", level: 75, category: "data" },
  { name: "APIs de IA (Gemini / OpenAI)", level: 80, category: "data" },
  { name: "Excel / Google Sheets Avanzado", level: 95, category: "data" },

  // Hardware/Support
  { name: "Linux / Windows / macOS", level: 95, category: "hardware" },
  { name: "Cableado Estructurado", level: 85, category: "hardware" },
  { name: "Videovigilancia IP", level: 80, category: "hardware" },
  { name: "Telefonía IP (Asterisk)", level: 65, category: "hardware" },
];

export const WEB_PORTFOLIO: Project[] = [
  {
    title: "SciDifusión UACH",
    description: "Plataforma de divulgación científica y académica para la FCCF UACH, con sistema de publicaciones, panel de administración y diseño interactivo.",
    link: "https://investigacioneducativafccf.net/scidifusion/",
    imageUrl: "assets/scidifusion.png",
    tags: ["React", "Tailwind CSS", "PHP / MySQL", "Academic"],
  },
  {
    title: "Doctorado FCCF UACH",
    description: "Plataforma web para el programa de investigación educativa.",
    link: "https://investigacioneducativafccf.net/met_avanzada/v2/",
    imageUrl: "assets/pagina_doctorado.png",
    tags: ["Web", "Academic", "Portal"],
  },
  {
    title: "ESISCOM",
    description: "Sitio web corporativo para servicios de cómputo.",
    link: "https://mamueljr.github.io/esiscom/",
    imageUrl: "assets/esiscom.png",
    tags: ["Services", "Landing Page"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Diplomado de Inglés",
    issuer: "Facultad de Filosofía y Letras UACH",
    imageUrl: "assets/ingles.png",
  },
  {
    title: "Cableado Estructurado",
    issuer: "CONDUNET",
    imageUrl: "assets/condunet.png",
  },
  {
    title: "Seguridad Informática HAURI",
    issuer: "HAURI Antivirus",
    imageUrl: "assets/hauri.png",
  },
  {
    title: "Java Intermedio",
    issuer: "Museo Semilla",
    imageUrl: "assets/java.png",
  },
  {
    title: "Seguridad Informática",
    issuer: "UACH",
    imageUrl: "assets/seguridad_informatica.png",
  },
  {
    title: "Constancia Semana Investigación",
    issuer: "Secretaría de Posgrado FCCF",
    imageUrl: "assets/semana_investigacion20.png",
  },
];

// Badge IDs from Credly
export const BADGE_IDS = [
  "5a1e5fce-3fdf-4003-b298-815c7eeb7754",
  "f8bd63a4-f641-4c16-b9c1-16f3f2259e89",
  "c6880e13-40cd-4ef0-bb95-fe67b6c6e577",
  "246910c7-9012-42aa-ac6d-6753f545f5b2",
  "065a4912-6909-4e00-9427-82048d62a974",
];

export const SOCIALS = [
  { name: "Email", url: "mailto:mamueljr@gmail.com", icon: Mail },
  { name: "GitHub", url: "https://github.com/mamueljr", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adalberto-emmanuel-rojas/",
    icon: Linkedin,
  },
  { name: "WhatsApp", url: "https://wa.me/526142541066", icon: Phone },
];

export const EDUCATIONS: EducationItem[] = [
  {
    institution: "Universidad Autónoma de Chihuahua",
    degree: "Maestría en Ingeniería en Computación",
    period: "2023 - En proceso de titulación",
    description: "Enfoque y especialización en Machine Learning aplicado, ciencia de datos y redes neuronales.",
    current: true,
  },
  {
    institution: "Universidad Autónoma de Chihuahua",
    degree: "Ingeniería en Computación",
    period: "Graduado",
    description: "Formación sólida en desarrollo de software, administración de bases de datos, redes de computadoras y sistemas embebidos.",
  },
];
