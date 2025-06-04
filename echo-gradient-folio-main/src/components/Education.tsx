
import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

export const Education = () => {
  const educationData = [
    {
      level: "Bachelor's Degree",
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "Cloud Computing & Artificial Intelligence",
      institution: "Integral University",
      location: "Lucknow, Uttar Pradesh",
      duration: "2023 - Present",
      icon: GraduationCap,
      stats: [
        { label: "CGPA", value: "10.0", color: "text-cyan-400" },
        { label: "Semester", value: "3rd", color: "text-purple-400" }
      ]
    },
    {
      level: "Intermediate",
      title: "10+2 (Higher Secondary)",
      subtitle: "Science Stream (PCM)",
      institution: "Mount Carmel College",
      location: "Lucknow, Uttar Pradesh",
      duration: "Passed 2022",
      icon: BookOpen,
      stats: [
        { label: "Percentage", value: "96.4%", color: "text-green-400" },
        { label: "Board", value: "ICSE", color: "text-blue-400" }
      ]
    },
    {
      level: "School",
      title: "10th Grade (Secondary)",
      subtitle: "All Subjects",
      institution: "Mount Carmel College",
      location: "Lucknow, Uttar Pradesh",
      duration: "Passed 2020",
      icon: Award,
      stats: [
        { label: "Percentage", value: "97.8%", color: "text-yellow-400" },
        { label: "Board", value: "ICSE", color: "text-blue-400" }
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="text-sm text-cyan-400 font-semibold mb-2">{edu.level}</p>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {edu.title}
                      </h3>
                      <h4 className="text-lg text-purple-400 font-semibold mb-4">
                        {edu.subtitle}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span>{edu.institution}, {edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {edu.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="bg-gray-700/30 rounded-lg p-4 text-center transform group-hover:scale-105 transition-all duration-300 hover:bg-gray-600/30"
                        >
                          <div className={`text-xl font-bold ${stat.color} mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
