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
  title: "Ingeniero en Sistemas & Data Specialist",
  about:
    "Ingeniero en Sistemas con amplia experiencia en desarrollo de software e implementación de soluciones basadas en ciencia de datos e inteligencia artificial. Maestría en Ingeniería en Ciencias Computacionales (en proceso de titulación), con enfoque en machine learning aplicado. Más de una década de experiencia como docente universitario, combinando la teoría con la práctica en proyectos reales de análisis de datos, automatización y soporte tecnológico.",
  photoUrl: "assets/18875.webp",
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
    title: "PitchPredictor AI (Tesis & World Cup)",
    description: "Aplicación web interactiva que lleva a producción el modelo de mi tesis. Predice resultados (Victoria/Empate/Derrota) para la Premier League y la Copa del Mundo 2026 (con lógica de localía para co-anfitriones y sedes neutrales).",
    link: "https://mamueljr.github.io/premier-predictor/",
    imageUrl: "assets/premier_predictor.jpg",
    tags: ["React", "TypeScript", "Machine Learning", "Data Science"],
  },
  {
    title: "SportMetrics AI",
    description: "Dashboard clínico de evaluación física e inferencia fisiológica para atletas. Calcula IMC, VO2Max y potencia anaeróbica generando recomendaciones automatizadas.",
    link: "https://mamueljr.github.io/sport-metrics/",
    imageUrl: "assets/sport_metrics.jpg",
    tags: ["React", "TypeScript", "Sports Science", "Dashboard"],
  },
  {
    title: "EduPlan CoPilot",
    description: "Asistente inteligente de planeación didáctica y rúbricas estructuradas para docentes universitarios utilizando la API de Gemini y modelado estructurado JSON.",
    link: "https://mamueljr.github.io/edu-plan-copilot/",
    imageUrl: "assets/edu_plan_copilot.jpg",
    tags: ["React", "TypeScript", "Generative AI", "Gemini API"],
  },
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
    title: "App de Clima",
    description: "Aplicación móvil y web del clima básica, sencilla de entender, ideal para consulta meteorológica en tiempo real.",
    link: "https://mamueljr.github.io/App_Clima/",
    imageUrl: "assets/weather_app.webp",
    tags: ["JavaScript", "Weather API", "HTML5 / CSS3"],
  },
  {
    title: "Aura Inventory",
    description: "App de inventario personal offline-first del ecosistema Aura. Organiza y consulta tus objetos desde cualquier lugar, sin depender de conexión a internet.",
    link: "https://mamueljr.github.io/AuraInventory/",
    imageUrl: "assets/aura_inventory.webp",
    tags: ["React", "PWA", "Offline-First"],
  },
  {
    title: "Aura Home",
    description: "Dashboard de administración del hogar del ecosistema Aura: pagos y servicios, tareas pendientes, calendario de eventos, compras, mantenimiento, contactos, mascotas y vehículos en un solo lugar.",
    link: "https://mamueljr.github.io/AuraHome/",
    imageUrl: "assets/aura_home.webp",
    tags: ["React", "PWA", "Dashboard"],
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
    degree: "Maestría en Ingeniería en Ciencias Computacionales",
    period: "2023 - En proceso de titulación",
    description: "Enfoque y especialización en Machine Learning aplicado, ciencia de datos y redes neuronales.",
    current: true,
  },
  {
    institution: "Universidad Autónoma de Chihuahua",
    degree: "Ingeniería en Sistemas",
    period: "Titulado",
    description: "Formación sólida en desarrollo de software, administración de bases de datos, redes de computadoras y sistemas embebidos.",
  },
];
