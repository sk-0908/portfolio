export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  iconType: string;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  iconType: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  about: {
    intro: string;
    details: string;
    mainSkills: string[];
    philosophy: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
  contact: {
    github: string;
    website: string;
    location: string;
  };
}
