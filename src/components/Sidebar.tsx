import React from 'react';
import { User, Award, Briefcase, Code, GraduationCap, Linkedin, Github, MessageCircle, Phone, Mail, Layout } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionClick }: SidebarProps) => {
  const categories = [
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Layout },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  const socialLinks = [
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/bhomikpilkhwal' },
    { id: 'github', label: 'GitHub', icon: Github, href: 'https://github.com/bhomik-glitch' },
    { id: 'email', label: 'Email', icon: Mail, href: 'mailto:pilkhwalbhomik@gmail.com' },
  ];

  return (
    <div className="w-56 bg-[#1F1E52]/20 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col h-full">
      <div className="mb-8">
        <h3 className="text-white text-sm font-medium mb-4 uppercase tracking-wider">Categories</h3>
        <nav className="space-y-2">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onSectionClick(id)}
              data-section={id}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeSection === id
                  ? 'bg-[#A353F2]/20 text-white shadow-lg border border-white/20'
                  : 'text-white hover:text-white hover:bg-[#A353F2]/10'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto">
        <h3 className="text-white text-sm font-medium mb-4 uppercase tracking-wider">Social Links</h3>
        <div className="space-y-2">
          {socialLinks.map(({ id, label, icon: Icon, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:text-white hover:bg-[#A353F2]/10 transition-all duration-300"
            >
              <Icon size={18} />
              <span className="font-medium text-sm">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;