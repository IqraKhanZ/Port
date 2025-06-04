
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Extracurriculars } from '@/components/Extracurriculars';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50 animate-pulse" />
      <div className="fixed inset-0 bg-gradient-to-tr from-transparent via-cyan-900/20 to-transparent animate-[spin_20s_linear_infinite]" />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Extracurriculars />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
