export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'development' | 'data' | 'hardware' | 'tools';
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string; // Placeholder or path
  link?: string;
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  imageUrl: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
}