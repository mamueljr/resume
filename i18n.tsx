import React, { createContext, useContext, useEffect, useState } from 'react';
import { PROFILE, EXPERIENCES, EDUCATIONS, WEB_PORTFOLIO } from './constants';
import { ExperienceItem, EducationItem, Project } from './types';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'site_lang';

/* ------------------------------------------------------------------ */
/* Cadenas de interfaz                                                 */
/* ------------------------------------------------------------------ */

const UI = {
  es: {
    // Navbar
    navHome: 'Inicio',
    navAbout: 'Perfil',
    navEducation: 'Educación',
    navExperience: 'Experiencia',
    navSkills: 'Habilidades',
    navPortfolio: 'Portafolio',
    navCertifications: 'Certificaciones',
    navContact: 'Contacto',
    // Hero
    heroEyebrow: 'Ingeniería · Datos · Inteligencia Artificial',
    heroSubtitle: 'Docente universitario y constructor de soluciones con datos, código e IA.',
    heroCtaAbout: 'Conóceme',
    heroCtaCV: 'Descargar CV',
    heroCardCredential: 'MIC · Ingeniero en Sistemas',
    heroCardLocation: 'Chihuahua, México',
    statYears: 'Años en tecnología',
    statUniversities: 'Universidades',
    statCerts: 'Certificaciones y badges',
    // About
    aboutKicker: 'Quién soy',
    aboutTitle: 'Perfil Profesional',
    aboutCard1Title: 'Desarrollo de Software',
    aboutCard1Text: 'Más de una década diseñando sistemas a medida, automatizaciones avanzadas y plataformas web robustas.',
    aboutCard2Title: 'Ciencia de Datos e IA',
    aboutCard2Text: 'Análisis predictivo, modelos de Machine Learning e integración práctica de APIs de Inteligencia Artificial.',
    aboutCard3Title: 'Docencia Universitaria',
    aboutCard3Text: 'Profesor en asignaturas críticas como Big Data, DevOps, Ingeniería de Software y Bases de Datos.',
    // Education
    educationKicker: 'Trayectoria académica',
    educationTitle: 'Formación Académica',
    // Experience
    experienceKicker: 'Recorrido profesional',
    experienceTitle: 'Experiencia Profesional',
    experienceCurrent: 'Actual',
    // Skills
    skillsKicker: 'Caja de herramientas',
    skillsTitle: 'Habilidades Técnicas',
    skillsTabAll: 'Todas',
    skillsTabDev: 'Desarrollo de Software',
    skillsTabData: 'Ciencia de Datos & IA',
    skillsTabHardware: 'Infraestructura & Hardware',
    skillsLevel: 'Nivel',
    skillsTools: 'Herramientas & Entornos',
    // Portfolio
    portfolioKicker: 'Trabajo seleccionado',
    portfolioTitle: 'Portafolio Web',
    portfolioFeatured: 'Proyecto destacado',
    portfolioView: 'Ver detalles',
    portfolioVisit: 'Visitar Sitio',
    portfolioClose: 'Cerrar',
    // Certifications
    certsKicker: 'Validación y reconocimiento',
    certsTitle: 'Certificaciones y Educación',
    certsBadges: 'Credly Digital Badges',
    // Contact
    contactKicker: '¿Un proyecto, una vacante, una colaboración?',
    contactTitle: 'Hablemos',
    contactRights: 'Emmanuel Rojas · ESISCOM',
    // App
    skipToContent: 'Saltar al contenido principal',
    backToTop: 'Volver arriba',
  },
  en: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About',
    navEducation: 'Education',
    navExperience: 'Experience',
    navSkills: 'Skills',
    navPortfolio: 'Portfolio',
    navCertifications: 'Certifications',
    navContact: 'Contact',
    // Hero
    heroEyebrow: 'Engineering · Data · Artificial Intelligence',
    heroSubtitle: 'University lecturer building solutions with data, code, and AI.',
    heroCtaAbout: 'About me',
    heroCtaCV: 'Download résumé',
    heroCardCredential: 'MIC · Systems Engineer',
    heroCardLocation: 'Chihuahua, Mexico',
    statYears: 'Years in tech',
    statUniversities: 'Universities',
    statCerts: 'Certifications & badges',
    // About
    aboutKicker: 'Who I am',
    aboutTitle: 'Professional Profile',
    aboutCard1Title: 'Software Development',
    aboutCard1Text: 'More than a decade designing custom systems, advanced automations, and robust web platforms.',
    aboutCard2Title: 'Data Science & AI',
    aboutCard2Text: 'Predictive analytics, machine learning models, and hands-on integration of AI APIs.',
    aboutCard3Title: 'University Teaching',
    aboutCard3Text: 'Professor of key courses such as Big Data, DevOps, Software Engineering, and Databases.',
    // Education
    educationKicker: 'Academic background',
    educationTitle: 'Education',
    // Experience
    experienceKicker: 'Career path',
    experienceTitle: 'Professional Experience',
    experienceCurrent: 'Current',
    // Skills
    skillsKicker: 'Toolbox',
    skillsTitle: 'Technical Skills',
    skillsTabAll: 'All',
    skillsTabDev: 'Software Development',
    skillsTabData: 'Data Science & AI',
    skillsTabHardware: 'Infrastructure & Hardware',
    skillsLevel: 'Level',
    skillsTools: 'Tools & Environments',
    // Portfolio
    portfolioKicker: 'Selected work',
    portfolioTitle: 'Web Portfolio',
    portfolioFeatured: 'Featured project',
    portfolioView: 'View details',
    portfolioVisit: 'Visit site',
    portfolioClose: 'Close',
    // Certifications
    certsKicker: 'Credentials & recognition',
    certsTitle: 'Certifications & Education',
    certsBadges: 'Credly Digital Badges',
    // Contact
    contactKicker: 'A project, a role, a collaboration?',
    contactTitle: "Let's talk",
    contactRights: 'Emmanuel Rojas · ESISCOM',
    // App
    skipToContent: 'Skip to main content',
    backToTop: 'Back to top',
  },
} as const;

export type UIKey = keyof (typeof UI)['es'];

/* ------------------------------------------------------------------ */
/* Espejos en inglés de los datos de constants.tsx                     */
/* (constants.tsx queda intacto en español: el AIAssistant lo usa)     */
/* ------------------------------------------------------------------ */

const PROFILE_EN = {
  ...PROFILE,
  title: 'Systems Engineer & Data Specialist',
  about:
    "Systems Engineer with extensive experience in software development and in implementing solutions based on data science and artificial intelligence. Master's degree in Computer Science Engineering (degree in progress), focused on applied machine learning. More than a decade of experience as a university lecturer, combining theory and practice in real-world projects involving data analysis, automation, and technology support.",
};

const EXPERIENCES_EN: ExperienceItem[] = [
  {
    company: 'Universidad Tecmilenio',
    role: 'Part-Time Professor',
    period: 'June 2024 - Present',
    description:
      'University lecturer guiding students through the design and implementation of complex software projects using cloud architectures, agile methodologies (Scrum), continuous integration (CI/CD), and Big Data analysis. Active member of the Proyecto Maestro Insignia.',
    current: true,
  },
  {
    company: 'Facultad de Ciencias de la Cultura Física UACH',
    role: 'Information Technology Professor',
    period: '2012 - Present',
    description:
      'Part-time professor teaching Information Technology and Digital Culture courses, integrating project-based learning methodologies and modern technology tools for academic development.',
    current: true,
  },
  {
    company: 'Facultad de Ciencias de la Cultura Física - UACH',
    role: 'Head of IT Systems Unit',
    period: '2012 - 2024',
    description:
      'Led the design, development, and implementation of custom institutional web systems using PHP, MySQL, and modern network architectures. Responsible for comprehensive technical support, local server administration, information security, and IP video surveillance and access control systems for the entire faculty.',
  },
  {
    company: 'UNIDEP',
    role: 'Information Technology Professor',
    period: '2021',
    description:
      'Restructured the study program, incorporated current technology topics, and developed practical projects focused on databases and web development.',
  },
  {
    company: 'Grupo Cimarron Chihuahua',
    role: 'Technical Support Engineer',
    period: '2018 - 2020',
    description:
      'Planned and installed wired/wireless network infrastructure and corporate video surveillance. Supported the Microsip ERP and developed automation and internal management tools.',
  },
  {
    company: 'COBACH PLANTEL 8',
    role: 'Mathematics Teacher',
    period: '2017',
    description: 'Taught Mathematics 3 and Analytic Geometry.',
  },
  {
    company: 'Centro Infantil Montessori',
    role: 'Head of Computer Science',
    period: '2008 - 2019',
    description:
      'Designed and implemented an adaptive technology curriculum focused on digital culture, basic programming, and robotics for preschool, elementary, and middle school.',
  },
  {
    company: 'XNET',
    role: 'Technical Support Engineer',
    period: '2009 - 2012',
    description:
      'Led network planning and installation, managed and migrated client websites, and developed custom software.',
  },
];

const EDUCATIONS_EN: EducationItem[] = [
  {
    institution: 'Universidad Autónoma de Chihuahua',
    degree: "Master's in Computer Science Engineering (MIC)",
    period: '2023 - Degree in progress',
    description: 'Specialization in applied Machine Learning, data science, and neural networks.',
    current: true,
  },
  {
    institution: 'Universidad Autónoma de Chihuahua',
    degree: 'Systems Engineering',
    period: 'Graduated',
    description:
      'Solid foundation in software development, database administration, computer networks, and embedded systems.',
  },
];

const PORTFOLIO_EN: Project[] = [
  {
    ...WEB_PORTFOLIO[0],
    description:
      'Scientific and academic outreach platform for FCCF UACH, with a publishing system, admin panel, and interactive design.',
  },
  {
    ...WEB_PORTFOLIO[1],
    description: 'Web platform for the educational research doctoral program.',
  },
  {
    ...WEB_PORTFOLIO[2],
    description: 'Corporate website for computer services.',
  },
  {
    ...WEB_PORTFOLIO[3],
    description:
      'Music player from the Aura ecosystem. Enjoy your music with a modern, fluid interface on any device.',
  },
  {
    ...WEB_PORTFOLIO[4],
    title: 'Weather App',
    description:
      'Simple, easy-to-understand web and mobile weather app, ideal for real-time weather checks.',
  },
  {
    ...WEB_PORTFOLIO[5],
    description:
      'Offline-first personal inventory app from the Aura ecosystem. Organize and check your belongings from anywhere, no internet connection required.',
  },
  {
    ...WEB_PORTFOLIO[6],
    description:
      'Home management dashboard from the Aura ecosystem: bills and services, pending tasks, upcoming events, shopping, maintenance, contacts, pets, and vehicles in one place.',
  },
  {
    ...WEB_PORTFOLIO[7],
    description:
      "Interactive web app bringing my thesis model to production. Predicts outcomes (Win/Draw/Loss) for the Premier League and the 2026 World Cup (with home-advantage logic for co-hosts and neutral venues).",
  },
  {
    ...WEB_PORTFOLIO[8],
    description:
      'Clinical dashboard for physical assessment and physiological inference for athletes. Calculates BMI, VO2Max, and anaerobic power, generating automated recommendations.',
  },
  {
    ...WEB_PORTFOLIO[9],
    description:
      'Intelligent lesson-planning assistant and structured rubric builder for university instructors, powered by the Gemini API and structured JSON modeling.',
  },
];

/* ------------------------------------------------------------------ */
/* Contexto                                                            */
/* ------------------------------------------------------------------ */

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: UIKey) => string;
  profile: typeof PROFILE;
  experiences: ExperienceItem[];
  educations: EducationItem[];
  portfolio: Project[];
}

const LangContext = createContext<LangContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'en' ? 'en' : 'es';
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LangContextValue = {
    lang,
    setLang,
    t: (key) => UI[lang][key],
    profile: lang === 'es' ? PROFILE : PROFILE_EN,
    experiences: lang === 'es' ? EXPERIENCES : EXPERIENCES_EN,
    educations: lang === 'es' ? EDUCATIONS : EDUCATIONS_EN,
    portfolio: lang === 'es' ? WEB_PORTFOLIO : PORTFOLIO_EN,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = (): LangContextValue => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};
