import type { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  thesisTitle?: string;
  thesisUrl?: string;
  current?: boolean;
}

export interface Skill {
  name: string;
  level?: number; // deprecated: kept optional for compatibility
  context?: string;
  contextEn?: string;
  depth?: 1 | 2 | 3;
  featured?: boolean;
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
  icon: LucideIcon;
}