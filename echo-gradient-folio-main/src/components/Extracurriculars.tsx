
import React from 'react';

export const Extracurriculars = () => {
  const activities = [
    {
      title: "Sports Coordinator",
      period: "3rd Semester – Present",
      type: "Leadership Role"
    },
    {
      title: "Core Team Member, Film Club",
      period: "1st Year 2023-2024",
      type: "Team Member"
    },
    {
      title: "Member, Editorial Committee – ECIU",
      period: "2024–Present",
      type: "Committee Member"
    },
    {
      title: "Team Lead, Technical Planning Team – Fiesta Technicos",
      period: "2024",
      type: "Team Lead"
    },
    {
      title: "Event Organizer",
      period: "2024",
      type: "Event Management",
      events: ["Hooman Ludo", "Nostalgia Quiz", "Harry Potter Technical Quiz"]
    },
    {
      title: "Competition Participant",
      period: "Ongoing",
      type: "Competitions",
      description: "Participated in multiple competitions and hackathons, showcasing initiative and teamwork beyond the classroom"
    }
  ];

  return (
    <section id="extracurriculars" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Beyond Academics
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leadership, event organization, and community involvement that shape my journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                  {activity.type}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                {activity.title}
              </h4>
              
              <p className="text-cyan-400 font-semibold text-sm mb-4">
                {activity.period}
              </p>

              {activity.events && (
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Events organized:</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {activity.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activity.description && (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
