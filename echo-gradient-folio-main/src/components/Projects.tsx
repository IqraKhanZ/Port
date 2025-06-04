
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      description: "A classic two-player Tic Tac Toe game built for browser play with clean UI and smart win-draw logic. Built using React and Vite for optimal performance.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
      category: "Web Dev",
      status: "Completed",
      github: "https://github.com/IqraKhanZ/Tic-Tac-Toe",
      liveUrl: "https://IqraKhanZ.github.io/Tic-Tac-Toe",
      videoUrl: "https://www.loom.com/embed/4d687fde6dad43098eeb065b88f12513?sid=7ada0b01-c8bb-4daa-b777-49f0e0416e32&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=true&loop=true&muted=true"
    },
    {
      title: "React Calculator",
      description: "A responsive and fully functional calculator web app with real-time expression evaluation, error handling, and elegant animations.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
      category: "Web Dev",
      status: "Completed",
      github: "https://github.com/IqraKhanZ/Calculator",
      liveUrl: "https://iqrakhanz.github.io/Calculator/",
      videoUrl: "https://www.loom.com/embed/61338fd89fdc406a81e2080c50e01790?sid=4a1d9287-48e3-4bd1-8c59-0f3e9a8812ed&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=true&loop=true&muted=true"
    },
    {
      title: "To-Do List App",
      description: "A dynamic to-do list application with features like task adding, deletion, local storage persistence, and status toggling.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
      category: "Web Dev",
      status: "Completed",
      github: "https://github.com/IqraKhanZ/ToDoListApp",
      liveUrl: "https://iqrakhanz.github.io/ToDoListApp/",
      videoUrl: "https://www.loom.com/embed/54cd605a6cdc48f3ad5bd9de85a177aa?sid=5c88b48f-3e44-4bc0-9350-c0866729f829&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=true&loop=true&muted=true"
    },
    {
      title: "Weather Forecast App",
      description: "A real-time weather forecasting app that displays temperature, humidity, wind speed, and icons for any city using a public API.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
      category: "Web Dev",
      status: "In Progress",
      github: "https://github.com/IqraKhanZ/WeatherApp",
      liveUrl: "https://iqrakhanz.github.io/WeatherApp/",
      videoUrl: "https://www.loom.com/embed/a0964ad5b47e44bd9a408d680e27f374?sid=c87363fb-cf58-4b1c-a40b-2631b470cd65&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=true&loop=true&muted=true"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of web development projects showcasing my skills in React and modern web technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/25 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Banner Section */}
              <div className="relative h-48 overflow-hidden">
                <iframe
                  src={project.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                  style={{ pointerEvents: 'none' }}
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 to-transparent"></div>
              </div>

              {/* Project Content Section */}
              <div className="p-6">
                {/* Status and Category Tags */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs font-medium hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
