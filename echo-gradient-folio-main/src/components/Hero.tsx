
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const taglines = [
    "Building the future with AI & Cloud Technologies",
    "Transforming ideas into intelligent solutions",
    "Passionate about Machine Learning & Cloud Architecture",
    "Creating innovative applications with cutting-edge tech"
  ];

  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Profile Picture - Left Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Tilted Grid Background Rectangle */}
              <div className="absolute inset-0 transform rotate-12 translate-x-8 translate-y-4 scale-110">
                <div className="w-80 h-96 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl border border-cyan-400/30 shadow-2xl backdrop-blur-sm">
                  {/* Grid Pattern */}
                  <div className="w-full h-full opacity-30" style={{
                    backgroundImage: `
                      linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>
              
              {/* Main Profile Picture Container */}
              <div className="relative w-80 h-96 bg-gray-800 rounded-2xl border-4 border-gray-700 overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 z-10">
                {/* Profile Picture */}
                <div className="w-full h-full relative">
                  <img 
                    src="/lovable-uploads/42721034-9c65-4236-94dd-6a04844789ea.png" 
                    alt="Iqra Khan" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Animated overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  {/* Subtle bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Enhanced Glow Effect with Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-purple-600/30 to-pink-400/30 rounded-2xl blur-xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-700 -z-10 animate-pulse"></div>
              
              {/* Floating particles effect */}
              <div className="absolute -inset-4 opacity-30">
                <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
                <div className="absolute top-32 right-8 w-1 h-1 bg-purple-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 right-12 w-1 h-1 bg-cyan-300 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-scale-in hover:scale-105 transition-transform duration-300 cursor-default">
                Iqra Khan
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6 animate-fade-in hover:text-purple-400 transition-colors duration-300">
                Aspiring Cloud & AI Engineer
              </h2>
              
              {/* Animated Taglines with enhanced effects */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in transition-all duration-1000 transform hover:scale-105 hover:text-white">
                  {taglines[currentTagline]}
                </p>
              </div>

              <p className="text-lg text-gray-400 mb-8 max-w-2xl hover:text-gray-300 transition-colors duration-300">
                B.Tech Student in Computer Science & Engineering
                <br />
                <span className="text-purple-400 hover:text-pink-400 transition-colors duration-300">Specializing in Cloud Computing & Artificial Intelligence</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/40 hover:shadow-2xl">
                <span className="group-hover:animate-pulse">View My Work</span>
              </button>
              <button className="group px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/50 hover:border-purple-400">
                <span className="group-hover:animate-pulse">Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300">
        <ArrowDown className="w-6 h-6 text-cyan-400 hover:text-purple-400 transition-colors duration-300" />
      </div>
    </section>
  );
};
