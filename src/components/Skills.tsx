'use client';

import { useEffect, useState } from 'react';
import { Skill } from '@/types';
import { 
  skills, 
  skillCategories, 
  getCategoryColor, 
  getCategoryLabel 
} from '@/data/skills';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, skill]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              スキル
              <span className="gradient-text ml-2">& 技術</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              継続的な学習と実践を通じて習得した技術スキルをご紹介します。
            </p>
          </div>

          {/* Skills by Category */}
          <div className="max-w-5xl mx-auto space-y-12">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              return (
                <div key={category} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                    {getCategoryLabel(category)}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
                    {categorySkills.map((skill) => {
                      const isAnimated = animatedSkills.some(s => s.name === skill.name);
                      return (
                        <div
                          key={skill.name}
                          className="card p-6 hover:shadow-xl transition-all duration-300 w-full max-w-xs"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getCategoryColor(category)} transition-all duration-1000 ease-out`}
                              style={{
                                width: isAnimated ? `${skill.level}%` : '0%',
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                継続的な学習
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
                テクノロジーの世界は常に進化しています。私は新しい技術やフレームワークを
                積極的に学習し、プロジェクトに適用することで、常に最新のスキルを維持しています。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['新しいフレームワーク', 'パフォーマンス最適化', 'アクセシビリティ', 'セキュリティ'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
