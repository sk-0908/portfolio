'use client';

import { useEffect, useState } from 'react';
import { personalInfo } from '@/data/personal';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              アバウト
              <span className="gradient-text ml-2">私</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              情熱的なデベロッパーとして、常に新しい技術を学び、創造的なソリューションを提供しています。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="text-center space-y-8 mb-12">
              <div className="prose prose-lg dark:prose-invert max-w-none mx-auto card p-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  {personalInfo.about.intro}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  {personalInfo.about.details}
                </p>
              </div>

              {/* Skills Preview */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                  主な専門分野
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {personalInfo.about.mainSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {personalInfo.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card p-6 hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Touch */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                私の哲学
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic text-center">
                "{personalInfo.about.philosophy}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
