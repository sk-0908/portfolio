'use client';

import { useEffect, useState } from 'react';
import { personalInfo } from '@/data/personal';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
              こんにちは、私は
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light">
            <span className="inline-block mr-2">Python</span>
            <span className="inline-block mr-2 text-blue-600 dark:text-blue-400 font-semibold">デベロッパー</span>
            <span className="inline-block">&</span>
            <span className="inline-block ml-2 text-yellow-600 dark:text-yellow-400 font-semibold">AI研究者</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 btn-primary shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              プロジェクトを見る
            </a>
            <a
              href="#contact"
              className="px-8 py-4 btn-outline hover:bg-blue-600 hover:text-white font-semibold transition-all duration-300"
            >
              お問い合わせ
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
