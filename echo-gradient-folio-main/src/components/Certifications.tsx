
import React, { useState } from 'react';

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      name: "Data Analytics in Python",
      domain: "Data Analysis",
      organizer: "IIT BHU – Mindshare",
      date: "June 23, 2024"
    },
    {
      name: "YBI Foundation – Python Programming Internship",
      domain: "Internship / Python Development",
      organizer: "YBI Foundation",
      date: "July 7, 2024"
    },
    {
      name: "Build Your Own Chatbot",
      domain: "AI / Chatbot Development",
      organizer: "Cognitive Class (IBM Developer Skills Network)",
      date: "August 9, 2024"
    },
    {
      name: "Statistics 101",
      domain: "Data Science Fundamentals",
      organizer: "Cognitive Class (IBM Developer Skills Network)",
      date: "August 22, 2024"
    },
    {
      name: "Machine Learning with Python (ML0101EN)",
      domain: "Machine Learning",
      organizer: "Integral University / IBM Developer Skills Network",
      date: "October 24, 2024"
    },
    {
      name: "Allsoft Solutions – Programming with Python",
      domain: "Programming",
      organizer: "Allsoft Solutions (Silver Business Partner)",
      date: "December 28, 2024"
    },
    {
      name: "Web3 Yatra Lucknow",
      domain: "Web3 / Blockchain",
      organizer: "Career Corps",
      date: "March 3–7, 2025"
    },
    {
      name: "Cloud Application Developer (CECADIIN)",
      domain: "Cloud Development",
      organizer: "Integral University / IBMCE",
      date: "April 3, 2025"
    },
    {
      name: "GDG GE I Study Jams 2024",
      domain: "Google Cloud Study Jam",
      organizer: "Google Developer Groups (GE)",
      date: "2024"
    },
    {
      name: "Google Cloud Skills Boost Profile",
      domain: "Cloud Skills & Labs",
      organizer: "Google Cloud Skills Boost",
      date: "Ongoing",
      profileLink: "https://www.cloudskillsboost.google/public_profiles/8c6b6cf8-0d15-4ab2-9db6-0290c9318adc"
    }
  ];

  const openCertificate = (index: number) => {
    setSelectedCert(index);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating my technical expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openCertificate(index)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:rotate-6 transition-all duration-300">
                      <span className="text-white font-bold text-lg">
                        {cert.organizer.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{cert.organizer}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/30">
                    {cert.domain}
                  </span>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200 leading-tight">
                  {cert.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-sm">
                    <span className="text-cyan-400 font-semibold">Domain:</span> {cert.domain}
                  </p>
                  <p className="text-gray-400 text-sm">
                    <span className="text-cyan-400 font-semibold">Organizer:</span> {cert.organizer}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold text-sm">
                    {cert.date}
                  </span>
                  {cert.profileLink && (
                    <a 
                      href={cert.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold hover:bg-blue-500/30 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Profile
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size certificate */}
        {selectedCert !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeCertificate}>
            <div className="bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{certifications[selectedCert].name}</h3>
                <button 
                  onClick={closeCertificate}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-gray-300">Certificate Image</p>
              </div>
              
              <div className="space-y-3">
                <p><span className="text-cyan-400 font-semibold">Domain:</span> {certifications[selectedCert].domain}</p>
                <p><span className="text-cyan-400 font-semibold">Organizer:</span> {certifications[selectedCert].organizer}</p>
                <p><span className="text-cyan-400 font-semibold">Date:</span> {certifications[selectedCert].date}</p>
                {certifications[selectedCert].profileLink && (
                  <p>
                    <span className="text-cyan-400 font-semibold">Profile:</span> 
                    <a 
                      href={certifications[selectedCert].profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 ml-2"
                    >
                      View Profile
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
