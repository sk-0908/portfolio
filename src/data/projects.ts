import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Website',
    description: 'GitHub Pagesを使用した個人ウェブサイト。HTMLとCSSで構築されたシンプルで美しいデザイン。',
    image: '/api/placeholder/600/400',
    technologies: ['HTML', 'CSS', 'GitHub Pages', 'JavaScript'],
    liveUrl: 'https://sk-0908.github.io/website/',
    githubUrl: 'https://github.com/sk-0908/website',
    featured: true,
  },
  {
    id: '2',
    title: 'Python Mahjong Game',
    description: 'Jupyter Notebookで開発された麻雀ゲーム。Pythonを使用したゲームロジックの実装。',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'Jupyter Notebook', 'Game Development'],
    githubUrl: 'https://github.com/sk-0908/Python_Mahjong',
    featured: true,
  },
  {
    id: '3',
    title: 'AI Flashcard System',
    description: 'AI技術を活用したフラッシュカードシステム。効率的な学習をサポートするアプリケーション。',
    image: '/api/placeholder/600/400',
    technologies: ['AI', 'Machine Learning', 'Python'],
    githubUrl: 'https://github.com/sk-0908/AI_flashcard',
    featured: true,
  },
  {
    id: '4',
    title: 'Reusable Chess Game',
    description: '再利用可能なチェスゲームの実装。Pythonで開発されたオブジェクト指向プログラミングの実例。',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'OOP', 'Game Development'],
    githubUrl: 'https://github.com/sk-0908/reuseable_chess',
    featured: false,
  },
  {
    id: '5',
    title: 'Interactive Web Application',
    description: 'ユーザーインタラクションを重視したWebアプリケーション。モダンなUI/UXデザインを実装。',
    image: '/api/placeholder/600/400',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Web Development'],
    githubUrl: 'https://github.com/sk-0908/you-are-an-idiot',
    featured: false,
  },
  {
    id: '6',
    title: 'GitHub Test Repository',
    description: 'GitHubの機能テストとバージョン管理の学習用リポジトリ。Gitの基本操作を習得。',
    image: '/api/placeholder/600/400',
    technologies: ['Git', 'GitHub', 'Version Control'],
    githubUrl: 'https://github.com/sk-0908/Github-Test',
    featured: false,
  },
];

export const projectFilters = [
  { key: 'all', label: 'すべて' },
  { key: 'featured', label: '注目' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'モバイル' },
];
