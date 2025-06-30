import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform built with React and Node.js featuring real-time inventory management and payment processing.',
      image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      stars: 128
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
      github: '#',
      demo: '#',
      stars: 89
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts, data visualization, and customizable reporting features for business intelligence.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Angular', 'D3.js', 'TypeScript', 'RxJS'],
      github: '#',
      demo: '#',
      stars: 156
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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