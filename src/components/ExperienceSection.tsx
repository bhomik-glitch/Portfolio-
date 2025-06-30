import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Toss',
      location: 'On-Site',
      period: 'May 2025 – July 2025',
      description: 'Contributed to AI-enabled Voice BOT solutions and automation software development. Integrated IVR, voice bot, and live agent systems within CRM-backed workflows for improved customer interaction and engagement.',
      technologies: ['AI Voice Bot', 'IVR', 'Web Development', 'Automation']
    },
    {
      title: 'Core Marketing Team Member',
      company: 'Google Developer Group',
      location: 'On-Site',
      period: 'August 2024 – Present',
      description: 'Led community outreach and brand-building efforts through digital campaigns, event promotions, and developer community engagement.',
      technologies: ['Marketing', 'Community Building', 'Developer Relations', 'Campaign Strategy']
    },
    {
      title: 'Freelance Web Developer',
      company: 'Independent',
      location: 'Remote / On-Site',
      period: 'January 2025 – March 2025',
      description: [
        'Encrypted role-based chat system with user hierarchy.',
        'Dynamic online fashion store for Shadad with product listings, cart, and order flow.',
        'Service showcase website for NeuroHad Clinic (physiotherapy).',
        'Informational site for Invincio Services (educational institute).'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Encryption', 'E-commerce', 'Static Web', 'HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-[#1F1E52]/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-[#1F1E52]/10 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
              <p className="text-white/90 font-medium">{exp.company}</p>
            </div>
            <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end space-y-1">
              <div className="flex items-center text-white/80 text-sm">
                <Calendar size={16} className="mr-2" />
                {exp.period}
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <MapPin size={16} className="mr-2" />
                {exp.location}
              </div>
            </div>
          </div>
          {Array.isArray(exp.description) ? (
            <ul className="text-white/90 mb-4 leading-relaxed list-disc list-inside">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-white/90 mb-4 leading-relaxed">{exp.description}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-[#A353F2]/20 to-[#D773FA]/20 text-white/90 text-sm rounded-full border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;