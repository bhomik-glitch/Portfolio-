import React from 'react';
import { Coffee, Code, Users } from 'lucide-react';
import RupeeIcon from '../assets/icons/rupee-sign-svgrepo-com.svg';


const AboutSection = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '20+' },
    { icon: Users, label: 'Happy Clients', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '100+' },
    { icon: () => <img src={RupeeIcon} alt="Rupee" className="mx-auto mb-3 w-8 h-8 invert brightness-0" />, label: 'Revenue Generated', value: '100K' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-[#1F1E52]/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Services</h2>
        <div className="space-y-4 text-white/90 leading-relaxed">
          <p>
            Hello! I'm Bhomik Pilkhwal, a Web Developer and Designer with 1 year of experience creating modern, responsive, and user-friendly websites. What started as a curiosity about how websites work has grown into a passion for building clean, functional digital experiences.
          </p>
          <p>
            Alongside development, I freelance in website development, AI-powered avatar generation, automated content creation, and building fully automated AI agents, helping brands scale their digital presence with smart, efficient, and cutting-edge solutions.
          </p>
          <p>
            I've also appeared twice for the NDA examination, securing AIR 472 and AIR 1027, showcasing my dedication and discipline.
          </p>
          <p>
            Beyond tech, I enjoy cycling, trekking, rafting, reading, travelling, running, and working out, always seeking new challenges and opportunities to grow—both personally and professionally.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1F1E52]/10 to-[#1F1E52]/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:from-[#1F1E52]/15 hover:to-[#1F1E52]/10 transition-all duration-300"
          >
            <stat.icon className="mx-auto mb-3 text-white" size={32} />
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-white/80 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#1F1E52]/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-white mb-4">What I Do</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Frontend Development</h4>
            <p className="text-white/80 text-sm">
              Creating responsive, interactive user interfaces using modern frameworks and libraries.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">UI/UX Design</h4>
            <p className="text-white/80 text-sm">
              Designing intuitive and visually appealing user experiences with attention to detail.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Next-Gen AI Content Solutions</h4>
            <p className="text-white/80 text-sm">
              I help brands stand out with automated visuals and engaging AI-driven content workflows. From life like avatars to automated posts — get future-ready content tailored to your audience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Fully Automated AI Agents</h4>
            <p className="text-white/80 text-sm">
              Build AI agents that think, respond, and execute — fully automated to handle tasks, conversations, and workflows without human input.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;