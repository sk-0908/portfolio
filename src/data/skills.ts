import { Skill } from '@/types';

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'frontend' },
  { name: 'HTML5', level: 85, category: 'frontend' },
  { name: 'CSS3', level: 80, category: 'frontend' },
  { name: 'JavaScript', level: 75, category: 'frontend' },
  { name: 'Jupyter Notebook', level: 85, category: 'tools' },
  { name: 'Git', level: 80, category: 'tools' },
  { name: 'GitHub', level: 85, category: 'tools' },
  { name: 'GitHub Pages', level: 80, category: 'tools' },
  { name: 'Machine Learning', level: 70, category: 'backend' },
  { name: 'AI Development', level: 70, category: 'backend' },
  { name: 'Game Development', level: 75, category: 'backend' },
  { name: 'Object-Oriented Programming', level: 85, category: 'backend' },
  { name: 'Web Development', level: 75, category: 'frontend' },
  { name: 'Version Control', level: 80, category: 'tools' },
  { name: 'Data Analysis', level: 70, category: 'backend' },
  { name: 'Algorithm Design', level: 75, category: 'backend' },
];

export const skillCategories = ['frontend', 'backend', 'tools', 'design'];

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'frontend':
      return 'bg-blue-500';
    case 'backend':
      return 'bg-green-500';
    case 'tools':
      return 'bg-purple-500';
    case 'design':
      return 'bg-pink-500';
    default:
      return 'bg-gray-500';
  }
};

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'frontend':
      return 'プログラミング言語 & Web開発';
    case 'backend':
      return 'AI & アルゴリズム';
    case 'tools':
      return '開発ツール';
    case 'design':
      return 'デザイン';
    default:
      return 'その他';
  }
};
