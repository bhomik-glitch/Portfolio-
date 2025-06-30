import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Clothing Online Store – Shahad by Nainci',
      description: 'A modern, elegant, and responsive clothing store for Shahad Boutique. Built with React, TypeScript, Tailwind CSS, and Vite to deliver a seamless and stylish shopping experience.',
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/bhomik-glitch/Shadad-online-store',
      demo: 'https://www.shahadbynainci.com/',
      stars: 0
    },
    {
      title: 'NCL Systems Pvt Ltd',
      description: 'A corporate website showcasing the robust IT and telecom services offered by NCL Systems Pvt Ltd. Built using React, TypeScript, and Tailwind CSS for speed and scalability.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/bhomik-glitch/NCL-system',
      demo: 'https://www.nclsystems.com/',
      stars: 0
    },
    {
      title: 'NeuroHAD Web App',
      description: 'A multilingual web platform for neurology clinics, supporting patient access and clinic workflows. Built with React, Vite, and Tailwind CSS for fast, secure performance.',
      image: 'https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/bhomik-glitch/neuro-hab-',
      demo: 'https://www.trueraysneurohab.xyz/',
      stars: 0
    },
    {
      title: 'Invincio Services Platform',
      description: 'An intuitive platform integrating psychometric insights and military-inspired mentorship, tailored for students, professionals, and institutions. Developed with React and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/bhomik-glitch/invinco',
      demo: 'https://www.invincioservices.com/',
      stars: 0
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#1F1E52]/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-[#1F1E52]/10 transition-all duration-300 group"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <div className="flex items-center text-white text-sm">
                <Star size={16} className="mr-1" fill="currentColor" />
                {project.stars}
              </div>
            </div>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gradient-to-r from-[#A353F2]/20 to-[#D773FA]/20 text-white/90 text-xs rounded-full border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-3">
              <a
                href={project.github}
                className="flex items-center space-x-2 px-4 py-2 bg-[#1F1E52]/10 text-[#D773FA] text-sm rounded-lg hover:bg-[#2D296B]/20 transition-colors duration-300"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
              <a
                href={project.demo}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#6A94F5] to-[#A353F2] text-white text-sm rounded-lg hover:from-[#937BEB] hover:to-[#1F1E52] transition-colors duration-300"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;