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
  title: "Ingeniero en Computación · Full-Stack Developer / Data Specialist",
  about:
    "Ingeniero en Computación con sólida experiencia en desarrollo de software Full-Stack, automatización de infraestructura y modelado de datos. Maestro en Ingeniería en Computación titulado, con especialización en Machine Learning aplicado. Combino el liderazgo de proyectos de software institucionales y productos SaaS propios (ESISCOM) con la docencia universitaria, la implementación de pipelines modernos de CI/CD, arquitecturas Cloud y soluciones basadas en Inteligencia Artificial.",
  photoUrl: "assets/18875.webp",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Universidad Tecmilenio",
    role: "Profesor de Tiempo Parcial (Ingeniería de Software y Nube)",
    period: "Junio 2024 - Actualidad",
    description:
      "Impartición de clases de programación utilizando Python y mentoría en diseño de arquitectura e implementación de proyectos complejos bajo metodologías ágiles (Scrum), arquitecturas Cloud, pipelines CI/CD y análisis de Big Data. Integrante activo del Proyecto Maestro Insignia.",
    current: true,
  },
  {
    company: "Facultad de Ciencias de la Cultura Física UACH",
    role: "Profesor de Tecnologías de Información",
    period: "2012 - Actualidad",
    description:
      "Cátedra universitaria en bases de datos, desarrollo web y cultura digital, integrando aprendizaje basado en proyectos y herramientas tecnológicas actuales para el desarrollo académico.",
    current: true,
  },
  {
    company: "Facultad de Ciencias de la Cultura Física - UACH",
    role: "Jefe de Unidad de Sistemas / Desarrollador de Software Principal",
    period: "2012 - 2024",
    description:
      "Lideré el ciclo completo de vida del software en el diseño, desarrollo e implementación de sistemas web institucionales a la medida con PHP, MySQL y arquitecturas modernas. Administré y optimicé servidores locales y entornos de producción, reduciendo tiempos operativos mediante la digitalización y automatización de procesos académicos y administrativos.",
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
    role: "Ingeniero de Soporte Técnico y Automatización",
    period: "2018 - 2020",
    description:
      "Desarrollo e implementación de herramientas internas de software para la automatización de flujos de trabajo y gestión de datos. Soporte avanzado y administración del ERP Microsip, además de planificación e instalación de redes corporativas y seguridad de datos.",
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
      "Diseño de planes curriculares adaptativos en programación estructurada, bases de datos y robótica para preescolar, primaria y secundaria, promoviendo el pensamiento lógico-matemático.",
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
  { name: "JavaScript & TypeScript", context: "React · Node.js", contextEn: "React · Node.js", depth: 3, featured: true, category: "development" },
  { name: "React & Tailwind CSS", context: "UI · SPA", contextEn: "UI · SPA", depth: 3, category: "development" },
  { name: "Node.js", context: "APIs · Backend", contextEn: "APIs · Backend", depth: 2, category: "development" },
  { name: "PHP", context: "Sistemas web", contextEn: "Web systems", depth: 3, category: "development" },
  { name: "Java", context: "POO · Aplicaciones", contextEn: "OOP · Applications", depth: 3, category: "development" },
  { name: "C / C++", context: "Sistemas · Algoritmos", contextEn: "Systems · Algorithms", depth: 3, category: "development" },
  { name: "HTML5 & CSS3", context: "Estándares web", contextEn: "Web standards", depth: 3, category: "development" },

  // Data & AI
  { name: "Python", context: "5 años", contextEn: "5 years", depth: 3, featured: true, category: "data" },
  { name: "SQL (MySQL / PostgreSQL)", context: "Modelado · Consultas", contextEn: "Modeling · Queries", depth: 3, category: "data" },
  { name: "Pandas & NumPy", context: "Análisis de datos", contextEn: "Data analysis", depth: 3, category: "data" },
  { name: "Scikit-Learn & TensorFlow", context: "Machine Learning", contextEn: "Machine Learning", depth: 2, category: "data" },
  { name: "APIs de IA (OpenAI / Gemini)", context: "Integración LLM", contextEn: "LLM integration", depth: 3, category: "data" },
  { name: "R & Excel Avanzado", context: "Estadística · Reportes", contextEn: "Statistics · Reporting", depth: 2, category: "data" },

  // DevOps & Infrastructure
  { name: "Docker", context: "Contenedores", contextEn: "Containers", depth: 3, featured: true, category: "hardware" },
  { name: "Pipelines CI/CD", context: "Automatización", contextEn: "Automation", depth: 2, category: "hardware" },
  { name: "Git & GitHub", context: "Control de versiones", contextEn: "Version control", depth: 3, category: "hardware" },
  { name: "Linux / Windows", context: "SysAdmin", contextEn: "SysAdmin", depth: 3, category: "hardware" },
  { name: "Cloud", context: "Despliegue · Servicios", contextEn: "Deployment · Services", depth: 2, category: "hardware" },
  { name: "Redes e infraestructura IP", context: "Cableado · Seguridad", contextEn: "Cabling · Security", depth: 3, category: "hardware" },
];

export const WEB_PORTFOLIO: Project[] = [
  {
    title: "SciDifusión UACH",
    description: "Plataforma de divulgación científica y académica para la FCCF UACH, con sistema de publicaciones, panel de administración y diseño interactivo.",
    link: "https://investigacioneducativafccf.net/scidifusion/",
    imageUrl: "assets/scidifusion.webp",
    tags: ["React", "Tailwind CSS", "PHP / MySQL", "Academic"],
  },
  {
    title: "Doctorado FCCF UACH",
    description: "Plataforma web para el programa de investigación educativa.",
    link: "https://investigacioneducativafccf.net/met_avanzada/v2/",
    imageUrl: "assets/pagina_doctorado.webp",
    tags: ["Web", "Academic", "Portal"],
  },
  {
    title: "ESISCOM",
    description: "Sitio web corporativo para servicios de cómputo.",
    link: "https://mamueljr.github.io/esiscom/",
    imageUrl: "assets/esiscom.webp",
    tags: ["Services", "Landing Page"],
  },
  {
    title: "ESISCOM Medical",
    description: "Sistema para consultorios médicos: expediente clínico, signos vitales, diagnósticos CIE-10, recetas en PDF, agenda y cobros.",
    link: "https://esiscom.com/medical/",
    imageUrl: "assets/esiscom_medical.webp",
    tags: ["React", "SaaS", "HealthTech", "PDF"],
  },
  {
    title: "ESISCOM Barber",
    description: "Agenda compartida por barbero, reservas en línea sin descargar app, historial de clientes y reportes para barberías.",
    link: "https://esiscom.com/barber/",
    imageUrl: "assets/esiscom_barber.webp",
    tags: ["React", "SaaS", "Booking"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Diplomado de Inglés",
    issuer: "Facultad de Filosofía y Letras UACH",
    imageUrl: "assets/ingles.webp",
  },
  {
    title: "Cableado Estructurado",
    issuer: "CONDUNET",
    imageUrl: "assets/condunet.webp",
  },
  {
    title: "Seguridad Informática HAURI",
    issuer: "HAURI Antivirus",
    imageUrl: "assets/hauri.webp",
  },
  {
    title: "Java Intermedio",
    issuer: "Museo Semilla",
    imageUrl: "assets/java.webp",
  },
  {
    title: "Seguridad Informática",
    issuer: "UACH",
    imageUrl: "assets/seguridad_informatica.webp",
  },
  {
    title: "Constancia Semana Investigación",
    issuer: "Secretaría de Posgrado FCCF",
    imageUrl: "assets/semana_investigacion20.webp",
  },
];

// Badge IDs from Credly
export const BADGE_IDS = [
  "5a1e5fce-3fdf-4003-b298-815c7eeb7754",
  "f8bd63a4-f641-4c16-b9c1-16f3f2259e89",
  "c6880e13-40cd-4ef0-bb95-fe67b6c6e577",
  "246910c7-9012-42aa-ac6d-6753f545f5b2",
  "065a4912-6909-4e00-9427-82048d62a974",
  "26ef9cd6-f40f-46fd-8bc0-4c7783c1643b",
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
    institution: "Universidad Autónoma de Chihuahua (UACH)",
    degree: "Maestría en Ingeniería en Computación",
    period: "2023 – 2026 · Titulado",
    description: "Enfoque en Machine Learning aplicado, Ciencia de Datos y Redes Neuronales artificiales.",
    thesisTitle: "Tesis (2026): Modelos de Machine Learning para la predicción de resultados de fútbol — Repositorio UACH",
    thesisUrl: "http://repositorio.uach.mx/1047/",
  },
  {
    institution: "Universidad Autónoma de Chihuahua (UACH)",
    degree: "Ingeniería en Computación",
    period: "Titulado",
    description: "Formación sólida en desarrollo de software, administración de bases de datos relacionales, redes e infraestructura.",
  },
];
