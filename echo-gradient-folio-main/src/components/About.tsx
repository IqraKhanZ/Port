
import React from 'react';
import { Download } from 'lucide-react';

export const About = () => {
  const handleDownloadResume = () => {
    console.log('Download resume clicked');
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-xl leading-relaxed mb-8">
            I'm a passionate Computer Science student with a deep interest in cloud technologies and artificial intelligence. 
            I love building innovative solutions that bridge the gap between cutting-edge AI research and practical cloud implementations.
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Currently pursuing my B.Tech degree while actively participating in hackathons, contributing to open-source projects, 
            and continuously expanding my knowledge in emerging technologies.
          </p>

          <button
            onClick={handleDownloadResume}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span className="group-hover:animate-pulse">Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};
