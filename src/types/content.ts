export type Localized = { ja: string; en: string };

export type Profile = {
  site: { title: string; description: Localized };
  name: Localized;
  title: Localized;
  bio: Localized;
  email: string;
  social: { github?: string; x?: string; linkedin?: string; website?: string };
  avatar: string;
};

export type Project = {
  id: string;
  title: Localized;
  summary: Localized;
  tech: string[];
  period: string;
  role: Localized;
  links: { github?: string; demo?: string };
  images?: string[];
};

export type SkillCategory = {
  category: Localized;
  items: string[];
};

export type Experience = {
  company: string;
  role: Localized;
  period: string;
  description: Localized;
};

export type Certification = {
  name: Localized;
  issuer: string;
  year: string;
};

