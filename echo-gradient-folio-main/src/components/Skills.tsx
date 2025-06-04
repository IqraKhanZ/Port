
import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
        { name: "C/C++", level: 70 },
        { name: "JavaScript", level: 60 }
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "Google Cloud", level: 60 },
        { name: "IBM Cloud", level: 60 }
      ]
    },
    {
      title: "AI/ML Technologies",
      skills: [
        { name: "NumPy", level: 60 },
        { name: "Pandas", level: 60 },
        { name: "Scikit-learn", level: 60 },
        { name: "Matplotlib", level: 60 },
        { name: "Seaborn", level: 60 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 60 },
        { name: "HTML", level: 70 },
        { name: "CSS", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern AI and Cloud solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transform origin-left transition-all duration-1000 ease-out hover:scale-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
